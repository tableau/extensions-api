/****************************************************************************
**
** Copyright (C) 2016 The Qt Company Ltd.
** Copyright (C) 2014 Klarälvdalens Datakonsult AB, a KDAB Group company, info@kdab.com, author Milian Wolff <milian.wolff@kdab.com>
** Contact: https://www.qt.io/licensing/
**
** This file is part of the QtWebChannel module of the Qt Toolkit.
**
** $QT_BEGIN_LICENSE:BSD$
** Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and The Qt Company. For licensing terms
** and conditions see https://www.qt.io/terms-conditions. For further
** information use the contact form at https://www.qt.io/contact-us.
**
** BSD License Usage
** Alternatively, you may use this file under the terms of the BSD license
** as follows:
**
** "Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are
** met:
**   * Redistributions of source code must retain the above copyright
**     notice, this list of conditions and the following disclaimer.
**   * Redistributions in binary form must reproduce the above copyright
**     notice, this list of conditions and the following disclaimer in
**     the documentation and/or other materials provided with the
**     distribution.
**   * Neither the name of The Qt Company Ltd nor the names of its
**     contributors may be used to endorse or promote products derived
**     from this software without specific prior written permission.
**
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
** "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
** LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
** A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
** OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
** LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
** DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
** THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
**
** $QT_END_LICENSE$
**
****************************************************************************/

"use strict";

var QWebChannelMessageTypes = {
    signal: 1,
    propertyUpdate: 2,
    init: 3,
    idle: 4,
    debug: 5,
    invokeMethod: 6,
    connectToSignal: 7,
    disconnectFromSignal: 8,
    setProperty: 9,
    response: 10,
};

var QWebChannel = function(transport, initCallback)
{
    if (typeof transport !== "object" || typeof transport.send !== "function") {
        console.error("The QWebChannel expects a transport object with a send function and onmessage callback property." +
                      " Given is: transport: " + typeof(transport) + ", transport.send: " + typeof(transport.send));
        return;
    }

    var channel = this;
    this.transport = transport;

    this.send = function(data)
    {
        if (typeof(data) !== "string") {
            data = JSON.stringify(data);
        }
        channel.transport.send(data);
    }

    this.transport.onmessage = function(message)
    {
        var data = message.data;
        if (typeof data === "string") {
            data = JSON.parse(data);
        }
        switch (data.type) {
            case QWebChannelMessageTypes.signal:
                channel.handleSignal(data);
                break;
            case QWebChannelMessageTypes.response:
                channel.handleResponse(data);
                break;
            case QWebChannelMessageTypes.propertyUpdate:
                channel.handlePropertyUpdate(data);
                break;
            default:
                console.error("invalid message received:", message.data);
                break;
        }
    }

    this.execCallbacks = {};
    this.execId = 0;
    this.exec = function(data, callback)
    {
        if (!callback) {
            // if no callback is given, send directly
            channel.send(data);
            return;
        }
        if (channel.execId === Number.MAX_VALUE) {
            // wrap
            channel.execId = Number.MIN_VALUE;
        }
        if (data.hasOwnProperty("id")) {
            console.error("Cannot exec message with property id: " + JSON.stringify(data));
            return;
        }
        data.id = channel.execId++;
        channel.execCallbacks[data.id] = callback;
        channel.send(data);
    };

    this.objects = {};

    this.handleSignal = function(message)
    {
        var object = channel.objects[message.object];
        if (object) {
            object.signalEmitted(message.signal, message.args);
        } else {
            console.warn("Unhandled signal: " + message.object + "::" + message.signal);
        }
    }

    this.handleResponse = function(message)
    {
        if (!message.hasOwnProperty("id")) {
            console.error("Invalid response message received: ", JSON.stringify(message));
            return;
        }
        channel.execCallbacks[message.id](message.data);
        delete channel.execCallbacks[message.id];
    }

    this.handlePropertyUpdate = function(message)
    {
        for (var i in message.data) {
            var data = message.data[i];
            var object = channel.objects[data.object];
            if (object) {
                object.propertyUpdate(data.signals, data.properties);
            } else {
                console.warn("Unhandled property update: " + data.object + "::" + data.signal);
            }
        }
        channel.exec({type: QWebChannelMessageTypes.idle});
    }

    this.debug = function(message)
    {
        channel.send({type: QWebChannelMessageTypes.debug, data: message});
    };

    channel.exec({type: QWebChannelMessageTypes.init}, function(data) {
        for (var objectName in data) {
            var object = new QObject(objectName, data[objectName], channel);
        }
        // now unwrap properties, which might reference other registered objects
        for (var objectName in channel.objects) {
            channel.objects[objectName].unwrapProperties();
        }
        if (initCallback) {
            initCallback(channel);
        }
        channel.exec({type: QWebChannelMessageTypes.idle});
    });
};

function QObject(name, data, webChannel)
{
    this.__id__ = name;
    webChannel.objects[name] = this;

    // List of callbacks that get invoked upon signal emission
    this.__objectSignals__ = {};

    // Cache of all properties, updated when a notify signal is emitted
    this.__propertyCache__ = {};

    var object = this;

    // ----------------------------------------------------------------------

    this.unwrapQObject = function(response)
    {
        if (response instanceof Array) {
            // support list of objects
            var ret = new Array(response.length);
            for (var i = 0; i < response.length; ++i) {
                ret[i] = object.unwrapQObject(response[i]);
            }
            return ret;
        }
        if (!response
            || !response["__QObject*__"]
            || response.id === undefined) {
            return response;
        }

        var objectId = response.id;
        if (webChannel.objects[objectId])
            return webChannel.objects[objectId];

        if (!response.data) {
            console.error("Cannot unwrap unknown QObject " + objectId + " without data.");
            return;
        }

        var qObject = new QObject( objectId, response.data, webChannel );
        qObject.destroyed.connect(function() {
            if (webChannel.objects[objectId] === qObject) {
                delete webChannel.objects[objectId];
                // reset the now deleted QObject to an empty {} object
                // just assigning {} though would not have the desired effect, but the
                // below also ensures all external references will see the empty map
                // NOTE: this detour is necessary to workaround QTBUG-40021
                var propertyNames = [];
                for (var propertyName in qObject) {
                    propertyNames.push(propertyName);
                }
                for (var idx in propertyNames) {
                    delete qObject[propertyNames[idx]];
                }
            }
        });
        // here we are already initialized, and thus must directly unwrap the properties
        qObject.unwrapProperties();
        return qObject;
    }

    this.unwrapProperties = function()
    {
        for (var propertyIdx in object.__propertyCache__) {
            object.__propertyCache__[propertyIdx] = object.unwrapQObject(object.__propertyCache__[propertyIdx]);
        }
    }

    function addSignal(signalData, isPropertyNotifySignal)
    {
        var signalName = signalData[0];
        var signalIndex = signalData[1];
        object[signalName] = {
            connect: function(callback) {
                if (typeof(callback) !== "function") {
                    console.error("Bad callback given to connect to signal " + signalName);
                    return;
                }

                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
                object.__objectSignals__[signalIndex].push(callback);

                if (!isPropertyNotifySignal && signalName !== "destroyed") {
                    // only required for "pure" signals, handled separately for properties in propertyUpdate
                    // also note that we always get notified about the destroyed signal
                    webChannel.exec({
                        type: QWebChannelMessageTypes.connectToSignal,
                        object: object.__id__,
                        signal: signalIndex
                    });
                }
            },
            disconnect: function(callback) {
                if (typeof(callback) !== "function") {
                    console.error("Bad callback given to disconnect from signal " + signalName);
                    return;
                }
                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
                var idx = object.__objectSignals__[signalIndex].indexOf(callback);
                if (idx === -1) {
                    console.error("Cannot find connection of signal " + signalName + " to " + callback.name);
                    return;
                }
                object.__objectSignals__[signalIndex].splice(idx, 1);
                if (!isPropertyNotifySignal && object.__objectSignals__[signalIndex].length === 0) {
                    // only required for "pure" signals, handled separately for properties in propertyUpdate
                    webChannel.exec({
                        type: QWebChannelMessageTypes.disconnectFromSignal,
                        object: object.__id__,
                        signal: signalIndex
                    });
                }
            }
        };
    }

    /**
     * Invokes all callbacks for the given signalname. Also works for property notify callbacks.
     */
    function invokeSignalCallbacks(signalName, signalArgs)
    {
        var connections = object.__objectSignals__[signalName];
        if (connections) {
            connections.forEach(function(callback) {
                callback.apply(callback, signalArgs);
            });
        }
    }

    this.propertyUpdate = function(signals, propertyMap)
    {
        // update property cache
        for (var propertyIndex in propertyMap) {
            var propertyValue = propertyMap[propertyIndex];
            object.__propertyCache__[propertyIndex] = propertyValue;
        }

        for (var signalName in signals) {
            // Invoke all callbacks, as signalEmitted() does not. This ensures the
            // property cache is updated before the callbacks are invoked.
            invokeSignalCallbacks(signalName, signals[signalName]);
        }
    }

    this.signalEmitted = function(signalName, signalArgs)
    {
        invokeSignalCallbacks(signalName, signalArgs);
    }

    function addMethod(methodData)
    {
        var methodName = methodData[0];
        var methodIdx = methodData[1];
        object[methodName] = function() {
            var args = [];
            var callback;
            for (var i = 0; i < arguments.length; ++i) {
                if (typeof arguments[i] === "function")
                    callback = arguments[i];
                else
                    args.push(arguments[i]);
            }

            webChannel.exec({
                "type": QWebChannelMessageTypes.invokeMethod,
                "object": object.__id__,
                "method": methodIdx,
                "args": args
            }, function(response) {
                if (response !== undefined) {
                    var result = object.unwrapQObject(response);
                    if (callback) {
                        (callback)(result);
                    }
                }
            });
        };
    }

    function bindGetterSetter(propertyInfo)
    {
        var propertyIndex = propertyInfo[0];
        var propertyName = propertyInfo[1];
        var notifySignalData = propertyInfo[2];
        // initialize property cache with current value
        // NOTE: if this is an object, it is not directly unwrapped as it might
        // reference other QObject that we do not know yet
        object.__propertyCache__[propertyIndex] = propertyInfo[3];

        if (notifySignalData) {
            if (notifySignalData[0] === 1) {
                // signal name is optimized away, reconstruct the actual name
                notifySignalData[0] = propertyName + "Changed";
            }
            addSignal(notifySignalData, true);
        }

        Object.defineProperty(object, propertyName, {
            configurable: true,
            get: function () {
                var propertyValue = object.__propertyCache__[propertyIndex];
                if (propertyValue === undefined) {
                    // This shouldn't happen
                    console.warn("Undefined value in property cache for property \"" + propertyName + "\" in object " + object.__id__);
                }

                return propertyValue;
            },
            set: function(value) {
                if (value === undefined) {
                    console.warn("Property setter for " + propertyName + " called with undefined value!");
                    return;
                }
                object.__propertyCache__[propertyIndex] = value;
                webChannel.exec({
                    "type": QWebChannelMessageTypes.setProperty,
                    "object": object.__id__,
                    "property": propertyIndex,
                    "value": value
                });
            }
        });

    }

    // ----------------------------------------------------------------------

    data.methods.forEach(addMethod);

    data.properties.forEach(bindGetterSetter);

    data.signals.forEach(function(signal) { addSignal(signal, false); });

    for (var name in data.enums) {
        object[name] = data.enums[name];
    }
}

//required for use with nodejs
if (typeof module === 'object') {
    module.exports = {
        QWebChannel: QWebChannel
    };
}


/*! BEGIN AddInBootstrap */


(function() {
  // Steal this trick from the Api.script to get ss declared globally for us.
/*! BEGIN MscorlibSlim */



////////////////////////////////////////////////////////////////////////////////
// Globals and assembly registration
////////////////////////////////////////////////////////////////////////////////

var global = {};

(function(global) {
"use strict";

var ss = { __assemblies: {} };

ss.initAssembly = function assembly(obj, name, res) {
  res = res || {};
  obj.name = name;
  obj.toString = function() { return this.name; };
  obj.__types = {};
  obj.getResourceNames = function() { return Object.keys(res); };
  obj.getResourceDataBase64 = function(name) { return res[name] || null; };
  obj.getResourceData = function(name) { var r = res[name]; return r ? ss.dec64(r) : null; };
  ss.__assemblies[name] = obj;
};
ss.initAssembly(ss, 'mscorlib');



////////////////////////////////////////////////////////////////////////////////
// Utility methods (generated via Script.IsNull, etc.)
////////////////////////////////////////////////////////////////////////////////


ss.getAssemblies = function ss$getAssemblies() {
  return Object.keys(ss.__assemblies).map(function(n) { return ss.__assemblies[n]; });
};

ss.isNullOrUndefined = function ss$isNullOrUndefined(o) {
  return (o === null) || (o === undefined);
};

ss.isValue = function ss$isValue(o) {
  return (o !== null) && (o !== undefined);
};

ss.referenceEquals = function ss$referenceEquals(a, b) {
  return ss.isValue(a) ? a === b : !ss.isValue(b);
};

ss.mkdict = function ss$mkdict() {
  var a = (arguments.length != 1 ? arguments : arguments[0]);
  var r = {};
  for (var i = 0; i < a.length; i += 2) {
    r[a[i]] = a[i + 1];
  }
  return r;
};

ss.clone = function ss$clone(t, o) {
  return o ? t.$clone(o) : o;
}

ss.coalesce = function ss$coalesce(a, b) {
  return ss.isValue(a) ? a : b;
};

ss.isDate = function ss$isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
};

ss.isArray = function ss$isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

ss.isTypedArrayType = function ss$isTypedArrayType(type) {
  return ['Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint16Array', 'Uint32Array', 'Uint8ClampedArray'].indexOf(ss.getTypeFullName(type)) >= 0;
};

ss.isArrayOrTypedArray = function ss$isArray(obj) {
  return ss.isArray(obj) || ss.isTypedArrayType(ss.getInstanceType(obj));
};

ss.getHashCode = function ss$getHashCode(obj) {
  if (!ss.isValue(obj))
    throw new ss_NullReferenceException('Cannot get hash code of null');
  else if (typeof(obj.getHashCode) === 'function')
    return obj.getHashCode();
  else if (typeof(obj) === 'boolean') {
    return obj ? 1 : 0;
  }
  else if (typeof(obj) === 'number') {
    var s = obj.toExponential();
    s = s.substr(0, s.indexOf('e'));
    return parseInt(s.replace('.', ''), 10) & 0xffffffff;
  }
  else if (typeof(obj) === 'string') {
    var res = 0;
    for (var i = 0; i < obj.length; i++)
      res = (res * 31 + obj.charCodeAt(i)) & 0xffffffff;
    return res;
  }
  else if (ss.isDate(obj)) {
    return obj.valueOf() & 0xffffffff;
  }
  else {
    return ss.defaultHashCode(obj);
  }
};

ss.defaultHashCode = function ss$defaultHashCode(obj) {
  return obj.$__hashCode__ || (obj.$__hashCode__ = (Math.random() * 0x100000000) | 0);
};


ss.equals = function ss$equals(a, b) {
    if (!ss.isValue(a))
        throw new ss_NullReferenceException('Object is null');
    else if (a !== ss && typeof(a.equals) === 'function')
        return a.equals(b);
    if (ss.isDate(a) && ss.isDate(b))
        return a.valueOf() === b.valueOf();
    else if (typeof(a) === 'function' && typeof(b) === 'function')
        return ss.delegateEquals(a, b);
    else if (ss.isNullOrUndefined(a) && ss.isNullOrUndefined(b))
        return true;
    else
        return a === b;
};

ss.compare = function ss$compare(a, b) {
  if (!ss.isValue(a))
    throw new ss_NullReferenceException('Object is null');
  else if (typeof(a) === 'number' || typeof(a) === 'string' || typeof(a) === 'boolean')
    return a < b ? -1 : (a > b ? 1 : 0);
  else if (ss.isDate(a))
    return ss.compare(a.valueOf(), b.valueOf());
  else
    return a.compareTo(b);
};

ss.equalsT = function ss$equalsT(a, b) {
  if (!ss.isValue(a))
    throw new ss_NullReferenceException('Object is null');
  else if (typeof(a) === 'number' || typeof(a) === 'string' || typeof(a) === 'boolean')
    return a === b;
  else if (ss.isDate(a))
    return a.valueOf() === b.valueOf();
  else
    return a.equalsT(b);
};

ss.staticEquals = function ss$staticEquals(a, b) {
  if (!ss.isValue(a))
    return !ss.isValue(b);
  else
    return ss.isValue(b) ? ss.equals(a, b) : false;
};

ss.shallowCopy = function ss$shallowCopy(source, target) {
  var keys = Object.keys(source);
  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    target[k] = source[k];
  }
};

ss.isLower = function ss$isLower(c) {
  var s = String.fromCharCode(c);
  return s === s.toLowerCase() && s !== s.toUpperCase();
};

ss.isUpper = function ss$isUpper(c) {
  var s = String.fromCharCode(c);
  return s !== s.toLowerCase() && s === s.toUpperCase();
};

if (typeof(window) == 'object') {
  // Browser-specific stuff that could go into the Web assembly, but that assembly does not have an associated JS file.
  if (!window.Element) {
    // IE does not have an Element constructor. This implementation should make casting to elements work.
    window.Element = function() {};
    window.Element.isInstanceOfType = function(instance) { return instance && typeof instance.constructor === 'undefined' && typeof instance.tagName === 'string'; };
  }
  window.Element.__typeName = 'Element';
}

///////////////////////////////////////////////////////////////////////////////
// Object Extensions

ss.clearKeys = function ss$clearKeys(d) {
  for (var n in d) {
    if (d.hasOwnProperty(n))
      delete d[n];
  }
};

ss.keyExists = function ss$keyExists(d, key) {
  return d[key] !== undefined;
};

if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
      dontEnums = ['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

ss.getKeyCount = function ss$getKeyCount(d) {
  return Object.keys(d).length;
};

////////////////////////////////////////////////////////////////////////////////
// Type System Implementation
////////////////////////////////////////////////////////////////////////////////

// When FULL_TYPE_SYSTEM is not defined, then the code is not the full-blown
// type system. It's Just enough to allow us to call base class methods.

ss.__genericCache = {};

ss._makeGenericTypeName = function ss$_makeGenericTypeName(genericType, typeArguments) {
  var result = genericType.__typeName;
  for (var i = 0; i < typeArguments.length; i++)
    result += (i === 0 ? '[' : ',') + '[' + ss.getTypeQName(typeArguments[i]) + ']';
  result += ']';
  return result;
};

ss.makeGenericType = function ss$makeGenericType(genericType, typeArguments) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  return ss.__genericCache[name] || genericType.apply(null, typeArguments);
};

ss.registerGenericClassInstance = function ss$registerGenericClassInstance(instance, genericType, typeArguments, members, baseType, interfaceTypes) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  ss.__genericCache[name] = instance;
  instance.__typeName = name;
  instance.__genericTypeDefinition = genericType;
  instance.__typeArguments = typeArguments;
  ss.initClass(instance, genericType.__assembly, members, baseType(), interfaceTypes());
};

ss.registerGenericInterfaceInstance = function ss$registerGenericInterfaceInstance(instance, genericType, typeArguments, members, baseInterfaces) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  ss.__genericCache[name] = instance;
  instance.__typeName = name;
  instance.__genericTypeDefinition = genericType;
  instance.__typeArguments = typeArguments;
  ss.initInterface(instance, genericType.__assembly, members, baseInterfaces());
};

ss.isGenericTypeDefinition = function ss$isGenericTypeDefinition(type) {
  return type.__isGenericTypeDefinition || false;
};

ss.getGenericTypeDefinition = function ss$getGenericTypeDefinition(type) {
  return type.__genericTypeDefinition || null;
};

ss.getGenericParameterCount = function ss$getGenericParameterCount(type) {
  return type.__typeArgumentCount || 0;
};

ss.getGenericArguments = function ss$getGenericArguments(type) {
  return type.__typeArguments || null;
};


ss.setMetadata = function ss$_setMetadata(type, metadata) {
  if (metadata.members) {
    for (var i = 0; i < metadata.members.length; i++) {
      var m = metadata.members[i];
      m.typeDef = type;
      if (m.adder) m.adder.typeDef = type;
      if (m.remover) m.remover.typeDef = type;
      if (m.getter) m.getter.typeDef = type;
      if (m.setter) m.setter.typeDef = type;
    }
  }
  type.__metadata = metadata;
  if (metadata.variance) {
    type.isAssignableFrom = function(source) {
      var check = function(target, type) {
        if (type.__genericTypeDefinition === target.__genericTypeDefinition && type.__typeArguments.length == target.__typeArguments.length) {
          for (var i = 0; i < target.__typeArguments.length; i++) {
            var v = target.__metadata.variance[i], t = target.__typeArguments[i], s = type.__typeArguments[i];
            switch (v) {
              case 1: if (!ss.isAssignableFrom(t, s)) return false; break;
              case 2: if (!ss.isAssignableFrom(s, t)) return false; break;
              default: if (s !== t) return false;
            }
          }
          return true;
        }
        return false;
      };

      if (source.__interface && check(this, source))
        return true;
      var ifs = ss.getInterfaces(source);
      for (var i = 0; i < ifs.length; i++) {
        if (ifs[i] === this || check(this, ifs[i]))
          return true;
      }
      return false;
    };
  }
}
ss.setMetadata = function ss$_setMetadata(type, metadata) {
};

ss.initClass = function ss$initClass(ctor, asm, members, baseType, interfaces) {
  ctor.__class = true;
  ctor.__assembly = asm;
  if (!ctor.__typeArguments)
    asm.__types[ctor.__typeName] = ctor;
  if (baseType && baseType !== Object) {
    var f = function(){};
    f.prototype = baseType.prototype;
    ctor.prototype = new f();
    ctor.prototype.constructor = ctor;
  }
  ss.shallowCopy(members, ctor.prototype);
  if (interfaces)
    ctor.__interfaces = interfaces;
};

ss.initGenericClass = function ss$initGenericClass(ctor, asm, typeArgumentCount) {
  ctor.__class = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ctor.__typeArgumentCount = typeArgumentCount;
  ctor.__isGenericTypeDefinition = true;
};

ss.initInterface = function ss$initInterface(ctor, asm, members, baseInterfaces) {
  ctor.__interface = true;
  ctor.__assembly = asm;
  if (!ctor.__typeArguments)
    asm.__types[ctor.__typeName] = ctor;
  if (baseInterfaces)
    ctor.__interfaces = baseInterfaces;
  ss.shallowCopy(members, ctor.prototype);
  ctor.isAssignableFrom = function(type) { return ss.contains(ss.getInterfaces(type), this); };
};

ss.initGenericInterface = function ss$initGenericClass(ctor, asm, typeArgumentCount) {
  ctor.__interface = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ctor.__typeArgumentCount = typeArgumentCount;
  ctor.__isGenericTypeDefinition = true;
};

ss.initEnum = function ss$initEnum(ctor, asm, members, namedValues) {
  ctor.__enum = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ss.shallowCopy(members, ctor.prototype);
  ctor.getDefaultValue = ctor.createInstance = function() { return namedValues ? null : 0; };
  ctor.isInstanceOfType = function(instance) { return typeof(instance) == (namedValues ? 'string' : 'number'); };
};

ss.getBaseType = function ss$getBaseType(type) {
  if (type === Object || type.__interface) {
    return null;
  }
  else if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(type.prototype).constructor;
  }
  else {
    var p = type.prototype;
    if (Object.prototype.hasOwnProperty.call(p, 'constructor')) {
      try {
        var ownValue = p.constructor;
        delete p.constructor;
        return p.constructor;
      }
      finally {
        p.constructor = ownValue;
      }
    }
    return p.constructor;
  }
};

ss.getTypeFullName = function ss$getTypeFullName(type) {
  return type.__typeName || type.name || (type.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || 'Object';
};

ss.getTypeQName = function ss$getTypeFullName(type) {
  return ss.getTypeFullName(type) + (type.__assembly ? ', ' + type.__assembly.name : '');
};

ss.getTypeName = function ss$getTypeName(type) {
  var fullName = ss.getTypeFullName(type);
  var bIndex = fullName.indexOf('[');
  var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
  return nsIndex > 0 ? fullName.substr(nsIndex + 1) : fullName;
};

ss.getTypeNamespace = function ss$getTypeNamespace(type) {
  var fullName = ss.getTypeFullName(type);
  var bIndex = fullName.indexOf('[');
  var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
  return nsIndex > 0 ? fullName.substr(0, nsIndex) : '';
};

ss.getTypeAssembly = function ss$getTypeAssembly(type) {
  if (ss.contains([Date, Number, Boolean, String, Function, Array], type))
    return ss;
  else
    return type.__assembly || null;
};

ss._getAssemblyType = function ss$_getAssemblyType(asm, name) {
  var result = [];
  if (asm.__types) {
    return asm.__types[name] || null;
  }
  else {
    var a = name.split('.');
    for (var i = 0; i < a.length; i++) {
      asm = asm[a[i]];
      if (!ss.isValue(asm))
        return null;
    }
    if (typeof asm !== 'function')
      return null;
    return asm;
  }
};

ss.getAssemblyTypes = function ss$getAssemblyTypes(asm) {
  var result = [];
  if (asm.__types) {
    for (var t in asm.__types) {
      if (asm.__types.hasOwnProperty(t))
        result.push(asm.__types[t]);
    }
  }
  else {
    var traverse = function(s, n) {
      for (var c in s) {
        if (s.hasOwnProperty(c))
          traverse(s[c], c);
      }
      if (typeof(s) === 'function' && ss.isUpper(n.charCodeAt(0)))
        result.push(s);
    };
    traverse(asm, '');
  }
  return result;
};

ss.createAssemblyInstance = function ss$createAssemblyInstance(asm, typeName) {
  var t = ss.getType(typeName, asm);
  return t ? ss.createInstance(t) : null;
};

ss.getInterfaces = function ss$getInterfaces(type) {
  if (type.__interfaces)
    return type.__interfaces;
  else if (type === Date || type === Number)
    return [ ss_IEquatable, ss_IComparable, ss_IFormattable ];
  else if (type === Boolean || type === String)
    return [ ss_IEquatable, ss_IComparable ];
  else if (type === Array || ss.isTypedArrayType(type))
    return [ ss_IEnumerable, ss_ICollection, ss_IList ];
  else
    return [];
};

ss.isInstanceOfType = function ss$isInstanceOfType(instance, type) {
  if (ss.isNullOrUndefined(instance))
    return false;

  if (typeof(type.isInstanceOfType) === 'function')
    return type.isInstanceOfType(instance);

  return ss.isAssignableFrom(type, ss.getInstanceType(instance));
};

ss.isAssignableFrom = function ss$isAssignableFrom(target, type) {
  return target === type || (typeof(target.isAssignableFrom) === 'function' && target.isAssignableFrom(type)) || type.prototype instanceof target;
};

ss.isClass = function Type$isClass(type) {
  return (type.__class == true || type === Array || type === Function || type === RegExp || type === String || type === Error || type === Object);
};

ss.isEnum = function Type$isEnum(type) {
  return !!type.__enum;
};

ss.isFlags = function Type$isFlags(type) {
  return type.__metadata && type.__metadata.enumFlags || false;
};

ss.isInterface = function Type$isInterface(type) {
  return !!type.__interface;
};

ss.safeCast = function ss$safeCast(instance, type) {
  if (type === true)
    return instance;
  else if (type === false)
    return null;
  else
    return ss.isInstanceOfType(instance, type) ? instance : null;
};

ss.cast = function ss$cast(instance, type) {
  if (instance === null || typeof(instance) === 'undefined')
    return instance;
  else if (type === true || (type !== false && ss.isInstanceOfType(instance, type)))
    return instance;
  throw new ss_InvalidCastException('Cannot cast object to type ' + ss.getTypeFullName(type));
};

ss.getInstanceType = function ss$getInstanceType(instance) {
  if (!ss.isValue(instance))
    throw new ss_NullReferenceException('Cannot get type of null');

  // NOTE: We have to catch exceptions because the constructor
  //       cannot be looked up on native COM objects
  try {
    return instance.constructor;
  }
  catch (ex) {
    return Object;
  }
};

ss._getType = function (typeName, asm, re) {
  var outer = !re;
  re = re || /[[,\]]/g;
  var last = re.lastIndex, m = re.exec(typeName), tname, targs = [];
  if (m) {
    tname = typeName.substring(last, m.index);
    switch (m[0]) {
      case '[':
        if (typeName[m.index + 1] != '[')
          return null;
        for (;;) {
          re.exec(typeName);
          var t = ss._getType(typeName, global, re);
          if (!t)
            return null;
          targs.push(t);
          m = re.exec(typeName);
          if (m[0] === ']')
            break;
          else if (m[0] !== ',')
            return null;
        }
        m = re.exec(typeName);
        if (m && m[0] === ',') {
          re.exec(typeName);
          if (!(asm = ss.__assemblies[(re.lastIndex > 0 ? typeName.substring(m.index + 1, re.lastIndex - 1) : typeName.substring(m.index + 1)).trim()]))
            return null;
        }
        break;

      case ']':
        break;

      case ',':
        re.exec(typeName);
        if (!(asm = ss.__assemblies[(re.lastIndex > 0 ? typeName.substring(m.index + 1, re.lastIndex - 1) : typeName.substring(m.index + 1)).trim()]))
          return null;
        break;
    }
  }
  else {
    tname = typeName.substring(last);
  }

  if (outer && re.lastIndex)
    return null;

  var t = ss._getAssemblyType(asm, tname.trim());
  return targs.length ? ss.makeGenericType(t, targs) : t;
}

ss.getType = function ss$getType(typeName, asm) {
  return typeName ? ss._getType(typeName, asm || global) : null;
};

ss.getDefaultValue = function ss$getDefaultValue(type) {
  if (typeof(type.getDefaultValue) === 'function')
    return type.getDefaultValue();
  else if (type === Boolean)
    return false;
  else if (type === Date)
    return new Date(0);
  else if (type === Number)
    return 0;
  return null;
};

ss.createInstance = function ss$createInstance(type) {
  if (typeof(type.createInstance) === 'function')
    return type.createInstance();
  else if (type === Boolean)
    return false;
  else if (type === Date)
    return new Date(0);
  else if (type === Number)
    return 0;
  else if (type === String)
    return '';
  else
    return new type();
};


///////////////////////////////////////////////////////////////////////////////
// IFormattable

var ss_IFormattable = function IFormattable$() { };

ss_IFormattable.__typeName = 'ss.IFormattable';
ss.IFormattable = ss_IFormattable;
ss.initInterface(ss_IFormattable, ss, { format: null });


///////////////////////////////////////////////////////////////////////////////
// IComparable

var ss_IComparable = function IComparable$() { };

ss_IComparable.__typeName = 'ss.IComparable';
ss.IComparable = ss_IComparable;
ss.initInterface(ss_IComparable, ss, { compareTo: null });

///////////////////////////////////////////////////////////////////////////////
// IEquatable

var ss_IEquatable = function IEquatable$() { };

ss_IEquatable.__typeName = 'ss.IEquatable';
ss.IEquatable = ss_IEquatable;
ss.initInterface(ss_IEquatable, ss, { equalsT: null });

///////////////////////////////////////////////////////////////////////////////
// Number Extensions


///////////////////////////////////////////////////////////////////////////////
// String Extensions


ss.isNullOrEmptyString = function ss$isNullOrEmptyString(s) {
  return !s || !s.length;
};


if (!String.prototype.trim) {
  String.prototype.trim = function String$trim() {
    return ss.trimStartString(ss.trimEndString(this));
  };
}

ss.trimEndString = function ss$trimEndString(s, chars) {
  return s.replace(chars ? new RegExp('[' + String.fromCharCode.apply(null, chars) + ']+$') : /\s*$/, '');
};

ss.trimStartString = function ss$trimStartString(s, chars) {
  return s.replace(chars ? new RegExp('^[' + String.fromCharCode.apply(null, chars) + ']+') : /^\s*/, '');
};

ss.trimString = function ss$trimString(s, chars) {
  return ss.trimStartString(ss.trimEndString(s, chars), chars);
};


///////////////////////////////////////////////////////////////////////////////
// Math Extensions


///////////////////////////////////////////////////////////////////////////////
// IFormatProvider

///////////////////////////////////////////////////////////////////////////////
// NumberFormatInfo

///////////////////////////////////////////////////////////////////////////////
// DateTimeFormatInfo

///////////////////////////////////////////////////////////////////////////////
// Array Extensions


ss.arrayClone = function ss$arrayClone(arr) {
    if (arr.length === 1) {
        return [arr[0]];
    }
    else {
        return Array.apply(null, arr);
    }
};


if (!Array.prototype.map) {
  Array.prototype.map = function Array$map(callback, instance) {
    var length = this.length;
    var mapped = new Array(length);
    for (var i = 0; i < length; i++) {
      if (i in this) {
        mapped[i] = callback.call(instance, this[i], i, this);
      }
    }
    return mapped;
  };
}


if (!Array.prototype.some) {
  Array.prototype.some = function Array$some(callback, instance) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
      if (i in this && callback.call(instance, this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

      var T, k;

      if (this == null) {
          throw new TypeError(' this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== "function") {
          throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
          T = thisArg;
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {

          var kValue;

          // a. Let Pk be ToString(k).
          //   This is implicit for LHS operands of the in operator
          // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
          //   This step can be combined with c
          // c. If kPresent is true, then
          if (k in O) {

              // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
              kValue = O[k];

              // ii. Call the Call internal method of callback with T as the this value and
              // argument list containing kValue, k, and O.
              callback.call(T, kValue, k, O);
          }
          // d. Increase k by 1.
          k++;
      }
      // 8. return undefined
  };
}

// Production steps of ECMA-262, Edition 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun/*, thisArg*/) {

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }

        return res;
    };
}


///////////////////////////////////////////////////////////////////////////////
// Date Extensions


///////////////////////////////////////////////////////////////////////////////
// Function Extensions

ss._delegateContains = function ss$_delegateContains(targets, object, method) {
  for (var i = 0; i < targets.length; i += 2) {
    if (targets[i] === object && targets[i + 1] === method) {
      return true;
    }
  }
  return false;
};

ss._mkdel = function ss$_mkdel(targets) {
  var delegate = function() {
    if (targets.length == 2) {
      return targets[1].apply(targets[0], arguments);
    }
    else {
      var clone = ss.arrayClone(targets);
      for (var i = 0; i < clone.length; i += 2) {
        if (ss._delegateContains(targets, clone[i], clone[i + 1])) {
          clone[i + 1].apply(clone[i], arguments);
        }
      }
      return null;
    }
  };
  delegate._targets = targets;

  return delegate;
};

ss.mkdel = function ss$mkdel(object, method) {
  if (!object) {
    return method;
  }
  return ss._mkdel([object, method]);
};

ss.delegateCombine = function ss$delegateCombine(delegate1, delegate2) {
  if (!delegate1) {
    if (!delegate2._targets) {
      return ss.mkdel(null, delegate2);
    }
    return delegate2;
  }
  if (!delegate2) {
    if (!delegate1._targets) {
      return ss.mkdel(null, delegate1);
    }
    return delegate1;
  }

  var targets1 = delegate1._targets ? delegate1._targets : [null, delegate1];
  var targets2 = delegate2._targets ? delegate2._targets : [null, delegate2];

  return ss._mkdel(targets1.concat(targets2));
};

ss.delegateRemove = function ss$delegateRemove(delegate1, delegate2) {
  if (!delegate1 || (delegate1 === delegate2)) {
    return null;
  }
  if (!delegate2) {
    return delegate1;
  }

  var targets = delegate1._targets;
  var object = null;
  var method;
  if (delegate2._targets) {
    object = delegate2._targets[0];
    method = delegate2._targets[1];
  }
  else {
    method = delegate2;
  }

  for (var i = 0; i < targets.length; i += 2) {
    if ((targets[i] === object) && (targets[i + 1] === method)) {
      if (targets.length == 2) {
        return null;
      }
      var t = ss.arrayClone(targets);
      t.splice(i, 2);
      return ss._mkdel(t);
    }
  }

  return delegate1;
};

ss.delegateEquals = function ss$delegateEquals(a, b) {
    if (a === b)
        return true;
    if (!a._targets && !b._targets)
        return false;
    var ta = a._targets || [null, a], tb = b._targets || [null, b];
    if (ta.length != tb.length)
        return false;
    for (var i = 0; i < ta.length; i++) {
        if (ta[i] !== tb[i])
            return false;
    }
    return true;
};


///////////////////////////////////////////////////////////////////////////////
// RegExp Extensions


///////////////////////////////////////////////////////////////////////////////
// Debug Extensions


///////////////////////////////////////////////////////////////////////////////
// Enum

var ss_Enum = function Enum$() {
};
ss_Enum.__typeName = 'ss.Enum';
ss.Enum = ss_Enum;
ss.initClass(ss_Enum, ss, {});


ss_Enum.getValues = function Enum$getValues(enumType) {
  var parts = [];
  var values = enumType.prototype;
  for (var i in values) {
    if (values.hasOwnProperty(i))
      parts.push(values[i]);
  }
  return parts;
};

///////////////////////////////////////////////////////////////////////////////
// CultureInfo


///////////////////////////////////////////////////////////////////////////////
// IEnumerator

var ss_IEnumerator = function IEnumerator$() { };

ss_IEnumerator.__typeName = 'ss.IEnumerator';
ss.IEnumerator = ss_IEnumerator;
ss.initInterface(ss_IEnumerator, ss, { current: null, moveNext: null, reset: null }, [ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// IEnumerable

var ss_IEnumerable = function IEnumerable$() { };

ss_IEnumerable.__typeName = 'ss.IEnumerable';
ss.IEnumerable = ss_IEnumerable;
ss.initInterface(ss_IEnumerable, ss, { getEnumerator: null });

ss.getEnumerator = function ss$getEnumerator(obj) {
  return obj.getEnumerator ? obj.getEnumerator() : new ss_ArrayEnumerator(obj);
};

///////////////////////////////////////////////////////////////////////////////
// ICollection

var ss_ICollection = function ICollection$() { };

ss_ICollection.__typeName = 'ss.ICollection';
ss.ICollection = ss_ICollection;
ss.initInterface(ss_ICollection, ss, { get_count: null, add: null, clear: null, contains: null, remove: null });

ss.count = function ss$count(obj) {
  return obj.get_count ? obj.get_count() : obj.length;
};

ss.add = function ss$add(obj, item) {
  if (obj.add)
    obj.add(item);
  else if (ss.isArray(obj))
    obj.push(item);
  else
    throw new ss_NotSupportedException();
};

ss.clear = function ss$clear(obj) {
  if (obj.clear)
    obj.clear();
  else if (ss.isArray(obj))
    obj.length = 0;
  else
    throw new ss_NotSupportedException();
};

ss.remove = function ss$remove(obj, item) {
  if (obj.remove)
    return obj.remove(item);
  else if (ss.isArray(obj)) {
    var index = ss.indexOf(obj, item);
    if (index >= 0) {
      obj.splice(index, 1);
      return true;
    }
    return false;
  }
  else
    throw new ss_NotSupportedException();
};

ss.contains = function ss$contains(obj, item) {
  if (obj.contains)
    return obj.contains(item);
  else
    return ss.indexOf(obj, item) >= 0;
};

///////////////////////////////////////////////////////////////////////////////
// TimeSpan


///////////////////////////////////////////////////////////////////////////////
// IEqualityComparer

var ss_IEqualityComparer = function IEqualityComparer$() { };

ss_IEqualityComparer.__typeName = 'ss.IEqualityComparer';
ss.IEqualityComparer = ss_IEqualityComparer;
ss.initInterface(ss_IEqualityComparer, ss, { areEqual: null, getObjectHashCode: null });

///////////////////////////////////////////////////////////////////////////////
// IComparer

var ss_IComparer = function IComparer$() { };

ss_IComparer.__typeName = 'ss.IComparer';
ss.IComparer = ss_IComparer;
ss.initInterface(ss_IComparer, ss, { compare: null });

///////////////////////////////////////////////////////////////////////////////
// Nullable

ss.unbox = function ss$unbox(instance) {
  if (!ss.isValue(instance))
    throw new ss_InvalidOperationException('Nullable object must have a value.');
  return instance;
};

var ss_Nullable$1 = function Nullable$1$(T) {
  var $type = function() {
  };
  $type.isInstanceOfType = function(instance) {
    return ss.isInstanceOfType(instance, T);
  };
  ss.registerGenericClassInstance($type, ss_Nullable$1, [T], {}, function() { return null; }, function() { return []; });
  return $type;
};

ss_Nullable$1.__typeName = 'ss.Nullable$1';
ss.Nullable$1 = ss_Nullable$1;
ss.initGenericClass(ss_Nullable$1, ss, 1);

ss_Nullable$1.eq = function Nullable$eq(a, b) {
  return !ss.isValue(a) ? !ss.isValue(b) : (a === b);
};

ss_Nullable$1.ne = function Nullable$eq(a, b) {
  return !ss.isValue(a) ? ss.isValue(b) : (a !== b);
};

ss_Nullable$1.le = function Nullable$le(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a <= b;
};

ss_Nullable$1.ge = function Nullable$ge(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a >= b;
};

ss_Nullable$1.lt = function Nullable$lt(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a < b;
};

ss_Nullable$1.gt = function Nullable$gt(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a > b;
};

ss_Nullable$1.sub = function Nullable$sub(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a - b : null;
};

ss_Nullable$1.add = function Nullable$add(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a + b : null;
};

ss_Nullable$1.mod = function Nullable$mod(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a % b : null;
};

ss_Nullable$1.div = function Nullable$divf(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a / b : null;
};

ss_Nullable$1.mul = function Nullable$mul(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a * b : null;
};

ss_Nullable$1.band = function Nullable$band(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a & b : null;
};

ss_Nullable$1.bor = function Nullable$bor(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a | b : null;
};

ss_Nullable$1.xor = function Nullable$xor(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a ^ b : null;
};

ss_Nullable$1.shl = function Nullable$shl(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a << b : null;
};

ss_Nullable$1.srs = function Nullable$srs(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a >> b : null;
};

ss_Nullable$1.sru = function Nullable$sru(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a >>> b : null;
};

ss_Nullable$1.and = function Nullable$and(a, b) {
  if (a === true && b === true)
    return true;
  else if (a === false || b === false)
    return false;
  else
    return null;
};

ss_Nullable$1.or = function Nullable$or(a, b) {
  if (a === true || b === true)
    return true;
  else if (a === false && b === false)
    return false;
  else
    return null;
};

ss_Nullable$1.not = function Nullable$not(a) {
  return ss.isValue(a) ? !a : null;
};

ss_Nullable$1.neg = function Nullable$neg(a) {
  return ss.isValue(a) ? -a : null;
};

ss_Nullable$1.pos = function Nullable$pos(a) {
  return ss.isValue(a) ? +a : null;
};

ss_Nullable$1.cpl = function Nullable$cpl(a) {
  return ss.isValue(a) ? ~a : null;
};

ss_Nullable$1.lift = function Nullable$lift() {
  for (var i = 0; i < arguments.length; i++) {
    if (!ss.isValue(arguments[i]))
      return null;
  }
  return arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
};

///////////////////////////////////////////////////////////////////////////////
// IList

var ss_IList = function IList$() { };

ss_IList.__typeName = 'ss.IList';
ss.IList = ss_IList;
ss.initInterface(ss_IList, ss, { get_item: null, set_item: null, indexOf: null, insert: null, removeAt: null }, [ss_ICollection, ss_IEnumerable]);

ss.getItem = function ss$getItem(obj, index) {
  return obj.get_item ? obj.get_item(index) : obj[index];
}

ss.setItem = function ss$setItem(obj, index, value) {
  obj.set_item ? obj.set_item(index, value) : (obj[index] = value);
}

ss.indexOf = function ss$indexOf(obj, item) {
  var itemType = typeof(item);
  if ((!item || typeof(item.equals) !== 'function') && typeof(obj.indexOf) === 'function') {
    // use indexOf if item is null or if item does not implement an equals function
    return obj.indexOf(item);
  } else if (ss.isArrayOrTypedArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (ss.staticEquals(obj[i], item)) {
        return i;
      }
    }
    return -1;
  }
  else
    return obj.indexOf(item);
};

ss.insert = function ss$insert(obj, index, item) {
  if (obj.insert)
    obj.insert(index, item);
  else if (ss.isArray(obj))
    obj.splice(index, 0, item);
  else
    throw new ss_NotSupportedException();
};

ss.removeAt = function ss$removeAt(obj, index) {
  if (obj.removeAt)
    obj.removeAt(index);
  else if (ss.isArray(obj))
    obj.splice(index, 1);
  else
    throw new ss_NotSupportedException();
};

///////////////////////////////////////////////////////////////////////////////
// IDictionary

var ss_IDictionary = function IDictionary$() { };

ss_IDictionary.__typeName = 'ss.IDictionary';
ss.IDictionary = ss_IDictionary;
ss.initInterface(ss_IDictionary, ss, { get_item: null, set_item: null, get_keys: null, get_values: null, containsKey: null, add: null, remove: null, tryGetValue: null }, [ss_IEnumerable]);

///////////////////////////////////////////////////////////////////////////////
// Int32

var ss_Int32 = function Int32$() { };

ss_Int32.__typeName = 'ss.Int32';
ss.Int32 = ss_Int32;
ss.initClass(ss_Int32, ss, {}, Object, [ ss_IEquatable, ss_IComparable, ss_IFormattable ]);
ss_Int32.__class = false;

ss_Int32.isInstanceOfType = function Int32$isInstanceOfType(instance) {
  return typeof(instance) === 'number' && isFinite(instance) && Math.round(instance, 0) == instance;
};

ss_Int32.getDefaultValue = ss_Int32.createInstance = function Int32$getDefaultValue() {
  return 0;
};

ss_Int32.div = function Int32$div(a, b) {
  if (!ss.isValue(a) || !ss.isValue(b)) return null;
  if (b === 0) throw new ss_DivideByZeroException();
  return ss_Int32.trunc(a / b);
};

ss_Int32.trunc = function Int32$trunc(n) {
  return ss.isValue(n) ? (n > 0 ? Math.floor(n) : Math.ceil(n)) : null;
};

ss_Int32.tryParse = function Int32$tryParse(s, result, min, max) {
  result.$ = 0;
  if (!/^[+-]?[0-9]+$/.test(s))
    return 0;
  var n = parseInt(s, 10);
  if (n < min || n > max)
    return false;
  result.$ = n;
  return true;
};

///////////////////////////////////////////////////////////////////////////////
// MutableDateTime

var ss_JsDate = function JsDate$() { };

ss_JsDate.__typeName = 'ss.JsDate';
ss.JsDate = ss_JsDate;
ss.initClass(ss_JsDate, ss, {}, Object, [ ss_IEquatable, ss_IComparable ]);

ss_JsDate.createInstance = function JsDate$createInstance() {
    return new Date();
};

ss_JsDate.isInstanceOfType = function JsDate$isInstanceOfType(instance) {
   return instance instanceof Date;
};

///////////////////////////////////////////////////////////////////////////////
// ArrayEnumerator

var ss_ArrayEnumerator = function ArrayEnumerator$(array) {
  this._array = array;
  this._index = -1;
};
ss_ArrayEnumerator.__typeName = 'ss.ArrayEnumerator';
ss.ArrayEnumerator = ss_ArrayEnumerator;
ss.initClass(ss_ArrayEnumerator, ss, {
  moveNext: function ArrayEnumerator$moveNext() {
    this._index++;
    return (this._index < this._array.length);
  },
  reset: function ArrayEnumerator$reset() {
    this._index = -1;
  },
  current: function ArrayEnumerator$current() {
    if (this._index < 0 || this._index >= this._array.length)
      throw 'Invalid operation';
    return this._array[this._index];
  },
  dispose: function ArrayEnumerator$dispose() {
  }
}, null, [ss_IEnumerator, ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// ObjectEnumerator

var ss_ObjectEnumerator = function ObjectEnumerator$(o) {
  this._keys = Object.keys(o);
  this._index = -1;
  this._object = o;
};

ss_ObjectEnumerator.__typeName = 'ss.ObjectEnumerator';
ss.ObjectEnumerator = ss_ObjectEnumerator;
ss.initClass(ss_ObjectEnumerator, ss, {
  moveNext: function ObjectEnumerator$moveNext() {
    this._index++;
    return (this._index < this._keys.length);
  },
  reset: function ObjectEnumerator$reset() {
    this._index = -1;
  },
  current: function ObjectEnumerator$current() {
    if (this._index < 0 || this._index >= this._keys.length)
      throw new ss_InvalidOperationException('Invalid operation');
    var k = this._keys[this._index];
    return { key: k, value: this._object[k] };
  },
  dispose: function ObjectEnumerator$dispose() {
  }
}, null, [ss_IEnumerator, ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// EqualityComparer

var ss_EqualityComparer = function EqualityComparer$() {
};
ss_EqualityComparer.__typeName = 'ss.EqualityComparer';
ss.EqualityComparer = ss_EqualityComparer;
ss.initClass(ss_EqualityComparer, ss, {
  areEqual: function EqualityComparer$areEqual(x, y) {
    return ss.staticEquals(x, y);
  },
  getObjectHashCode: function EqualityComparer$getObjectHashCode(obj) {
    return ss.isValue(obj) ? ss.getHashCode(obj) : 0;
  }
}, null, [ss_IEqualityComparer]);
ss_EqualityComparer.def = new ss_EqualityComparer();


///////////////////////////////////////////////////////////////////////////////
// Comparer

var ss_Comparer = function Comparer$(f) {
  this.f = f;
};

ss_Comparer.__typeName = 'ss.Comparer';
ss.Comparer = ss_Comparer;
ss.initClass(ss_Comparer, ss, {
  compare: function Comparer$compare(x, y) {
    return this.f(x, y);
  }
}, null, [ss_IComparer]);
ss_Comparer.def = new ss_Comparer(function Comparer$defaultCompare(a, b) {
  if (!ss.isValue(a))
    return !ss.isValue(b)? 0 : -1;
  else if (!ss.isValue(b))
    return 1;
  else
    return ss.compare(a, b);
});


//#include "Dictionary.js"

///////////////////////////////////////////////////////////////////////////////
// IDisposable

var ss_IDisposable = function IDisposable$() { };
ss_IDisposable.__typeName = 'ss.IDisposable';
ss.IDisposable = ss_IDisposable;
ss.initInterface(ss_IDisposable, ss, { dispose: null });

///////////////////////////////////////////////////////////////////////////////
// StringBuilder

var ss_StringBuilder = function StringBuilder$(s) {
  this._parts = (ss.isValue(s) && s != '') ? [s] : [];
  this.length = ss.isValue(s) ? s.length : 0;
}

ss_StringBuilder.__typeName = 'ss.StringBuilder';
ss.StringBuilder = ss_StringBuilder;
ss.initClass(ss_StringBuilder, ss, {
  append: function StringBuilder$append(o) {
    if (ss.isValue(o)) {
      var s = o.toString();
      ss.add(this._parts, s);
      this.length += s.length;
    }
    return this;
  },

  appendChar: function StringBuilder$appendChar(c) {
    return this.append(String.fromCharCode(c));
  },

  appendLine: function StringBuilder$appendLine(s) {
    this.append(s);
    this.append('\r\n');
    return this;
  },

  appendLineChar: function StringBuilder$appendLineChar(c) {
    return this.appendLine(String.fromCharCode(c));
  },

  clear: function StringBuilder$clear() {
    this._parts = [];
    this.length = 0;
  },

  toString: function StringBuilder$toString() {
    return this._parts.join('');
  }
});

///////////////////////////////////////////////////////////////////////////////
// Random


///////////////////////////////////////////////////////////////////////////////
// EventArgs

var ss_EventArgs = function EventArgs$() {
}
ss_EventArgs.__typeName = 'ss.EventArgs';
ss.EventArgs = ss_EventArgs;
ss.initClass(ss_EventArgs, ss, {});

ss_EventArgs.Empty = new ss_EventArgs();

///////////////////////////////////////////////////////////////////////////////
// Exception

var ss_Exception = function Exception$(message, innerException) {
  this._message = message || 'An error occurred.';
  this._innerException = innerException || null;
  this._error = new Error();
}

ss_Exception.__typeName = 'ss.Exception';
ss.Exception = ss_Exception;
ss.initClass(ss_Exception, ss, {
  get_message: function Exception$get_message() {
    return this._message;
  },
  get_innerException: function Exception$get_innerException() {
    return this._innerException;
  },
  get_stack: function Exception$get_stack() {
    return this._error.stack;
  },
  toString: function Exception$toString() {
    var message = this._message;
    var exception = this;
    if (ss.isNullOrEmptyString(message)) {
      if (ss.isValue(ss.getInstanceType(exception)) && ss.isValue(ss.getTypeFullName(ss.getInstanceType(exception)))) {
        message = ss.getTypeFullName(ss.getInstanceType(exception));
      }
      else {
        message = '[object Exception]';
      }
    }
    return message;
  }
});

ss_Exception.wrap = function Exception$wrap(o) {
  if (ss.isInstanceOfType(o, ss_Exception)) {
    return o;
  }
  else if (o instanceof TypeError) {
    // TypeError can either be 'cannot read property blah of null/undefined' (proper NullReferenceException), or it can be eg. accessing a non-existent method of an object.
    // As long as all code is compiled, they should with a very high probability indicate the use of a null reference.
    return new ss_NullReferenceException(o.message, new ss_JsErrorException(o));
  }
  else if (o instanceof RangeError) {
    return new ss_ArgumentOutOfRangeException(null, o.message, new ss_JsErrorException(o));
  }
  else if (o instanceof Error) {
    return new ss_JsErrorException(o);
  }
  else {
    return new ss_Exception(o.toString());
  }
};

////////////////////////////////////////////////////////////////////////////////
// NotImplementedException

var ss_NotImplementedException = function NotImplementedException$(message, innerException) {
  ss_Exception.call(this, message || 'The method or operation is not implemented.', innerException);
};
ss_NotImplementedException.__typeName = 'ss.NotImplementedException';
ss.NotImplementedException = ss_NotImplementedException;
ss.initClass(ss_NotImplementedException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// NotSupportedException

var ss_NotSupportedException = function NotSupportedException$(message, innerException) {
  ss_Exception.call(this, message || 'Specified method is not supported.', innerException);
};
ss_NotSupportedException.__typeName = 'ss.NotSupportedException';
ss.NotSupportedException = ss_NotSupportedException;
ss.initClass(ss_NotSupportedException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// AggregateException

var ss_AggregateException = function AggregateException$(message, innerExceptions) {
  this.innerExceptions = ss.isValue(innerExceptions) ? ss.arrayFromEnumerable(innerExceptions) : [];
  ss_Exception.call(this, message || 'One or more errors occurred.', this.innerExceptions.length ? this.innerExceptions[0] : null);
};

ss_AggregateException.__typeName = 'ss.AggregateException';
ss.AggregateException = ss_AggregateException;
ss.initClass(ss_AggregateException, ss, {
  flatten: function  AggregateException$flatten() {
    var inner = [];
    for (var i = 0; i < this.innerExceptions.length; i++) {
      var e = this.innerExceptions[i];
      if (ss.isInstanceOfType(e, ss_AggregateException)) {
        inner.push.apply(inner, e.flatten().innerExceptions);
      }
      else {
        inner.push(e);
      }
    }
    return new ss_AggregateException(this._message, inner);
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// PromiseException

var ss_PromiseException = function PromiseException(args, message, innerException) {
  ss_Exception.call(this, message || (args.length && args[0] ? args[0].toString() : 'An error occurred'), innerException);
  this.arguments = ss.arrayClone(args);
};

ss_PromiseException.__typeName = 'ss.PromiseException';
ss.PromiseException = ss_PromiseException;
ss.initClass(ss_PromiseException, ss, {
  get_arguments: function PromiseException$get_arguments() {
    return this._arguments;
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// JsErrorException

var ss_JsErrorException = function JsErrorException$(error, message, innerException) {
  ss_Exception.call(this, message || error.message, innerException);
  this.error = error;
};
ss_JsErrorException.__typeName = 'ss.JsErrorException';
ss.JsErrorException = ss_JsErrorException;
ss.initClass(ss_JsErrorException, ss, {
  get_stack: function Exception$get_stack() {
    return this.error.stack;
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// ArgumentException

var ss_ArgumentException = function ArgumentException$(message, paramName, innerException) {
  ss_Exception.call(this, message || 'Value does not fall within the expected range.', innerException);
  this.paramName = paramName || null;
};

ss_ArgumentException.__typeName = 'ss.ArgumentException';
ss.ArgumentException = ss_ArgumentException;
ss.initClass(ss_ArgumentException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// ArgumentNullException

var ss_ArgumentNullException = function ArgumentNullException$(paramName, message, innerException) {
  if (!message) {
    message = 'Value cannot be null.';
    if (paramName)
      message += '\nParameter name: ' + paramName;
  }

  ss_ArgumentException.call(this, message, paramName, innerException);
};

ss_ArgumentNullException.__typeName = 'ss.ArgumentNullException';
ss.ArgumentNullException = ss_ArgumentNullException;
ss.initClass(ss_ArgumentNullException, ss, {}, ss_ArgumentException);

////////////////////////////////////////////////////////////////////////////////
// ArgumentNullException

var ss_ArgumentOutOfRangeException = function ArgumentOutOfRangeException$(paramName, message, innerException, actualValue) {
  if (!message) {
    message = 'Value is out of range.';
    if (paramName)
      message += '\nParameter name: ' + paramName;
  }

  ss_ArgumentException.call(this, message, paramName, innerException);
  this.actualValue = actualValue || null;
};

ss_ArgumentOutOfRangeException.__typeName = 'ss.ArgumentOutOfRangeException';
ss.ArgumentOutOfRangeException = ss_ArgumentOutOfRangeException;
ss.initClass(ss_ArgumentOutOfRangeException, ss, {}, ss_ArgumentException);

////////////////////////////////////////////////////////////////////////////////
// FormatException

var ss_FormatException = function FormatException$(message, innerException) {
  ss_Exception.call(this, message || 'Invalid format.', innerException);
};
ss_FormatException.__typeName = 'ss.FormatException';
ss.FormatException = ss_FormatException;
ss.initClass(ss_FormatException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// DivideByZeroException

var ss_DivideByZeroException = function DivideByZeroException$(message, innerException) {
  ss_Exception.call(this, message || 'Division by 0.', innerException);
};
ss_DivideByZeroException.__typeName = 'ss.DivideByZeroException';
ss.DivideByZeroException = ss_DivideByZeroException;
ss.initClass(ss_DivideByZeroException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidCastException

var ss_InvalidCastException = function InvalidCastException$(message, innerException) {
  ss_Exception.call(this, message || 'The cast is not valid.', innerException);
};
ss_InvalidCastException.__typeName = 'ss.InvalidCastException';
ss.InvalidCastException = ss_InvalidCastException;
ss.initClass(ss_InvalidCastException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidOperationException

var ss_InvalidOperationException = function InvalidOperationException$(message, innerException) {
  ss_Exception.call(this, message || 'Operation is not valid due to the current state of the object.', innerException);
};
ss_InvalidOperationException.__typeName = 'ss.InvalidOperationException';
ss.InvalidOperationException = ss_InvalidOperationException;
ss.initClass(ss_InvalidOperationException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// NullReferenceException

var ss_NullReferenceException = function NullReferenceException$(message, innerException) {
  ss_Exception.call(this, message || 'Object is null.', innerException);
};
ss_NullReferenceException.__typeName = 'ss.NullReferenceException';
ss.NullReferenceException = ss_NullReferenceException;
ss.initClass(ss_NullReferenceException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// KeyNotFoundException

var ss_KeyNotFoundException = function KeyNotFoundException$(message, innerException) {
  ss_Exception.call(this, message || 'Key not found.', innerException);
};
ss_KeyNotFoundException.__typeName = 'ss.KeyNotFoundException';
ss.KeyNotFoundException = ss_KeyNotFoundException;
ss.initClass(ss_KeyNotFoundException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidOperationException

var ss_AmbiguousMatchException = function AmbiguousMatchException$(message, innerException) {
  ss_Exception.call(this, message || 'Ambiguous match.', innerException);
};
ss_AmbiguousMatchException.__typeName = 'ss.AmbiguousMatchException';
ss.AmbiguousMatchException = ss_AmbiguousMatchException;
ss.initClass(ss_AmbiguousMatchException, ss, {}, ss_Exception);

///////////////////////////////////////////////////////////////////////////////
// IteratorBlockEnumerable

var ss_IteratorBlockEnumerable = function IteratorBlockEnumerable$(getEnumerator, $this) {
  this._getEnumerator = getEnumerator;
  this._this = $this;
};

ss_IteratorBlockEnumerable.__typeName = 'ss.IteratorBlockEnumerable';
ss.IteratorBlockEnumerable = ss_IteratorBlockEnumerable;
ss.initClass(ss_IteratorBlockEnumerable, ss, {
  getEnumerator: function IteratorBlockEnumerable$getEnumerator() {
    return this._getEnumerator.call(this._this);
  }
}, null, [ss_IEnumerable]);

///////////////////////////////////////////////////////////////////////////////
// IteratorBlockEnumerator

var ss_IteratorBlockEnumerator = function IteratorBlockEnumerator$(moveNext, getCurrent, dispose, $this) {
  this._moveNext = moveNext;
  this._getCurrent = getCurrent;
  this._dispose = dispose;
  this._this = $this;
};

ss_IteratorBlockEnumerator.__typeName = 'ss.IteratorBlockEnumerator';
ss.IteratorBlockEnumerator = ss_IteratorBlockEnumerator;
ss.initClass(ss_IteratorBlockEnumerator, ss, {
  moveNext: function IteratorBlockEnumerator$moveNext() {
    try {
      return this._moveNext.call(this._this);
    }
    catch (ex) {
      if (this._dispose)
        this._dispose.call(this._this);
      throw ex;
    }
  },
  current: function IteratorBlockEnumerator$current() {
    return this._getCurrent.call(this._this);
  },
  reset: function IteratorBlockEnumerator$reset() {
    throw new ss_NotSupportedException('Reset is not supported.');
  },
  dispose: function IteratorBlockEnumerator$dispose() {
    if (this._dispose)
      this._dispose.call(this._this);
  }
}, null, [ss_IEnumerator, ss_IDisposable]);


///////////////////////////////////////////////////////////////////////////////
// Lazy

var ss_Lazy = function Lazy$(valueFactory) {
  this._valueFactory = valueFactory;
  this.isValueCreated = false;
};
ss_Lazy.__typeName = 'ss.Lazy';
ss.Lazy = ss_Lazy;
ss.initClass(ss_Lazy, ss, {
  value: function Lazy$value() {
    if (!this.isValueCreated) {
      this._value = this._valueFactory();
      delete this._valueFactory;
      this.isValueCreated = true;
    }
    return this._value;
  }
});


///////////////////////////////////////////////////////////////////////////////
// Task


////////////////////////////////////////////////////////////////////////////////
// TaskStatus


///////////////////////////////////////////////////////////////////////////////
// TaskCompletionSource


///////////////////////////////////////////////////////////////////////////////
// CancelEventArgs


///////////////////////////////////////////////////////////////////////////////
// Guid


////////////////////////////////////////////////////////////////////////////////
// IE8 shims
////////////////////////////////////////////////////////////////////////////////

if (typeof(global.HTMLElement) === 'undefined') {
  global.HTMLElement = Element;
}

if (typeof(global.MessageEvent) === 'undefined') {
  global.MessageEvent = Event;
}

// polyfill for IE8 not having Date.now.
Date.now = Date.now || function() { return +new Date; };

////////////////////////////////////////////////////////////////////////////////
// Global Registration
////////////////////////////////////////////////////////////////////////////////

global.ss = ss;
})(global);
  var ss = global.ss;
  global.tableauSoftware = global.tableauSoftware || {};

/*! BEGIN CoreSlim */


(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'tabcoreslim');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.CookieHelper
	var $tab_CookieHelper = function() {
	};
	$tab_CookieHelper.__typeName = 'tab.CookieHelper';
	$tab_CookieHelper.getCookie = function CookieHelper$GetCookie() {
		return document.cookie;
	};
	$tab_CookieHelper.setCookie = function CookieHelper$SetCookie(value) {
		document.cookie = value;
	};
	global.tab.CookieHelper = $tab_CookieHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.EscapingUtil
	var $tab_EscapingUtil = function() {
	};
	$tab_EscapingUtil.__typeName = 'tab.EscapingUtil';
	$tab_EscapingUtil.escapeHtml = function EscapingUtil$EscapeHtml(html) {
		var escaped = ss.coalesce(html, '');
		escaped = escaped.replace(new RegExp('&', 'g'), '&amp;');
		escaped = escaped.replace(new RegExp('<', 'g'), '&lt;');
		escaped = escaped.replace(new RegExp('>', 'g'), '&gt;');
		escaped = escaped.replace(new RegExp('"', 'g'), '&quot;');
		escaped = escaped.replace(new RegExp("'", 'g'), '&#39;');
		escaped = escaped.replace(new RegExp('/', 'g'), '&#47;');
		return escaped;
	};
	global.tab.EscapingUtil = $tab_EscapingUtil;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.Core.ScriptEx
	var $tab_ScriptEx = function() {
	};
	$tab_ScriptEx.__typeName = 'tab.ScriptEx';
	global.tab.ScriptEx = $tab_ScriptEx;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.WindowHelper
	var $tab_WindowHelper = function(window) {
		this.$window = null;
		this.$window = window;
	};
	$tab_WindowHelper.__typeName = 'tab.WindowHelper';
	$tab_WindowHelper.get_windowSelf = function WindowHelper$get_WindowSelf() {
		return window.self;
	};
	$tab_WindowHelper.get_selection = function WindowHelper$get_Selection() {
		if (typeof(window['getSelection']) === 'function') {
			return window.getSelection();
		}
		else if (typeof(document['getSelection']) === 'function') {
			return document.getSelection();
		}
		return null;
	};
	$tab_WindowHelper.close = function WindowHelper$Close(window) {
		window.close();
	};
	$tab_WindowHelper.getOpener = function WindowHelper$GetOpener(window) {
		return window.opener;
	};
	$tab_WindowHelper.getLocation = function WindowHelper$GetLocation(window) {
		return window.location;
	};
	$tab_WindowHelper.getPathAndSearch = function WindowHelper$GetPathAndSearch(window) {
		return window.location.pathname + window.location.search;
	};
	$tab_WindowHelper.setLocationHref = function WindowHelper$SetLocationHref(window, href) {
		window.location.href = href;
	};
	$tab_WindowHelper.locationReplace = function WindowHelper$LocationReplace(window, url) {
		window.location.replace(url);
	};
	$tab_WindowHelper.open = function WindowHelper$Open(href, target, options) {
		return window.open(href, target, options);
	};
	$tab_WindowHelper.reload = function WindowHelper$Reload(w, forceGet) {
		w.location.reload(forceGet);
	};
	$tab_WindowHelper.requestAnimationFrame = function WindowHelper$RequestAnimationFrame(action) {
		return $tab_WindowHelper.$requestAnimationFrameFunc(action);
	};
	$tab_WindowHelper.cancelAnimationFrame = function WindowHelper$CancelAnimationFrame(animationId) {
		if (ss.isValue(animationId)) {
			$tab_WindowHelper.$cancelAnimationFrameFunc(animationId);
		}
	};
	$tab_WindowHelper.setTimeout = function WindowHelper$SetTimeout(callback, milliseconds) {
		return window.setTimeout(callback, milliseconds);
	};
	$tab_WindowHelper.setInterval = function WindowHelper$SetInterval(callback, milliseconds) {
		return window.setInterval(callback, milliseconds);
	};
	$tab_WindowHelper.addListener = function WindowHelper$AddListener(windowParam, eventName, messageListener) {
		if ('addEventListener' in windowParam) {
			windowParam.addEventListener(eventName, messageListener, false);
		}
		else {
			windowParam.attachEvent('on' + eventName, messageListener);
		}
	};
	$tab_WindowHelper.removeListener = function WindowHelper$RemoveListener(window, eventName, messageListener) {
		if ('removeEventListener' in window) {
			window.removeEventListener(eventName, messageListener, false);
		}
		else {
			window.detachEvent('on' + eventName, messageListener);
		}
	};
	$tab_WindowHelper.$setDefaultRequestAnimationFrameImpl = function WindowHelper$SetDefaultRequestAnimationFrameImpl() {
		var lastTime = 0;
		$tab_WindowHelper.$requestAnimationFrameFunc = function(callback) {
			var curTime = (new Date()).getTime();
			var timeToCall = Math.max(0, 16 - (curTime - lastTime));
			lastTime = curTime + timeToCall;
			var id = window.setTimeout(callback, timeToCall);
			return id;
		};
	};
	$tab_WindowHelper.clearSelection = function WindowHelper$ClearSelection() {
		var selection = $tab_WindowHelper.get_selection();
		if (ss.isValue(selection)) {
			if (typeof(selection['removeAllRanges']) === 'function') {
				selection.removeAllRanges();
			}
			else if (typeof(selection['empty']) === 'function') {
				selection['empty']();
			}
		}
	};
	global.tab.WindowHelper = $tab_WindowHelper;
	ss.initClass($tab_CookieHelper, $asm, {});
	ss.initClass($tab_EscapingUtil, $asm, {});
	ss.initClass($tab_ScriptEx, $asm, {});
	ss.initClass($tab_WindowHelper, $asm, {
		get_pageXOffset: function WindowHelper$get_PageXOffset() {
			return $tab_WindowHelper.$pageXOffsetFunc(this.$window);
		},
		get_pageYOffset: function WindowHelper$get_PageYOffset() {
			return $tab_WindowHelper.$pageYOffsetFunc(this.$window);
		},
		get_clientWidth: function WindowHelper$get_ClientWidth() {
			return $tab_WindowHelper.$clientWidthFunc(this.$window);
		},
		get_clientHeight: function WindowHelper$get_ClientHeight() {
			return $tab_WindowHelper.$clientHeightFunc(this.$window);
		},
		get_innerWidth: function WindowHelper$get_InnerWidth() {
			return $tab_WindowHelper.$innerWidthFunc(this.$window);
		},
		get_outerWidth: function WindowHelper$get_OuterWidth() {
			return $tab_WindowHelper.$outerWidthFunc(this.$window);
		},
		get_innerHeight: function WindowHelper$get_InnerHeight() {
			return $tab_WindowHelper.$innerHeightFunc(this.$window);
		},
		get_outerHeight: function WindowHelper$get_OuterHeight() {
			return $tab_WindowHelper.$outerHeightFunc(this.$window);
		},
		get_screenLeft: function WindowHelper$get_ScreenLeft() {
			return $tab_WindowHelper.$screenLeftFunc(this.$window);
		},
		get_screenTop: function WindowHelper$get_ScreenTop() {
			return $tab_WindowHelper.$screenTopFunc(this.$window);
		},
		isQuirksMode: function WindowHelper$IsQuirksMode() {
			return document.compatMode === 'BackCompat';
		}
	});
	(function() {
		$tab_WindowHelper.$innerWidthFunc = null;
		$tab_WindowHelper.$innerHeightFunc = null;
		$tab_WindowHelper.$clientWidthFunc = null;
		$tab_WindowHelper.$clientHeightFunc = null;
		$tab_WindowHelper.$pageXOffsetFunc = null;
		$tab_WindowHelper.$pageYOffsetFunc = null;
		$tab_WindowHelper.$screenLeftFunc = null;
		$tab_WindowHelper.$screenTopFunc = null;
		$tab_WindowHelper.$outerWidthFunc = null;
		$tab_WindowHelper.$outerHeightFunc = null;
		$tab_WindowHelper.$requestAnimationFrameFunc = null;
		$tab_WindowHelper.$cancelAnimationFrameFunc = null;
		if ('innerWidth' in window) {
			$tab_WindowHelper.$innerWidthFunc = function(w) {
				return w.innerWidth;
			};
		}
		else {
			$tab_WindowHelper.$innerWidthFunc = function(w1) {
				return w1.document.documentElement.offsetWidth;
			};
		}
		if ('outerWidth' in window) {
			$tab_WindowHelper.$outerWidthFunc = function(w2) {
				return w2.outerWidth;
			};
		}
		else {
			$tab_WindowHelper.$outerWidthFunc = $tab_WindowHelper.$innerWidthFunc;
		}
		if ('innerHeight' in window) {
			$tab_WindowHelper.$innerHeightFunc = function(w3) {
				return w3.innerHeight;
			};
		}
		else {
			$tab_WindowHelper.$innerHeightFunc = function(w4) {
				return w4.document.documentElement.offsetHeight;
			};
		}
		if ('outerHeight' in window) {
			$tab_WindowHelper.$outerHeightFunc = function(w5) {
				return w5.outerHeight;
			};
		}
		else {
			$tab_WindowHelper.$outerHeightFunc = $tab_WindowHelper.$innerHeightFunc;
		}
		if ('clientWidth' in window) {
			$tab_WindowHelper.$clientWidthFunc = function(w6) {
				return w6['clientWidth'];
			};
		}
		else {
			$tab_WindowHelper.$clientWidthFunc = function(w7) {
				return w7.document.documentElement.clientWidth;
			};
		}
		if ('clientHeight' in window) {
			$tab_WindowHelper.$clientHeightFunc = function(w8) {
				return w8['clientHeight'];
			};
		}
		else {
			$tab_WindowHelper.$clientHeightFunc = function(w9) {
				return w9.document.documentElement.clientHeight;
			};
		}
		if (ss.isValue(window.self.pageXOffset)) {
			$tab_WindowHelper.$pageXOffsetFunc = function(w10) {
				return w10.pageXOffset;
			};
		}
		else {
			$tab_WindowHelper.$pageXOffsetFunc = function(w11) {
				return w11.document.documentElement.scrollLeft;
			};
		}
		if (ss.isValue(window.self.pageYOffset)) {
			$tab_WindowHelper.$pageYOffsetFunc = function(w12) {
				return w12.pageYOffset;
			};
		}
		else {
			$tab_WindowHelper.$pageYOffsetFunc = function(w13) {
				return w13.document.documentElement.scrollTop;
			};
		}
		if ('screenLeft' in window) {
			$tab_WindowHelper.$screenLeftFunc = function(w14) {
				return ss.unbox(ss.cast(w14.screenLeft, ss.Int32));
			};
		}
		else {
			$tab_WindowHelper.$screenLeftFunc = function(w15) {
				return w15.screenX;
			};
		}
		if ('screenTop' in window) {
			$tab_WindowHelper.$screenTopFunc = function(w16) {
				return ss.unbox(ss.cast(w16.screenTop, ss.Int32));
			};
		}
		else {
			$tab_WindowHelper.$screenTopFunc = function(w17) {
				return w17.screenY;
			};
		}
		{
			var DefaultRequestName = 'requestAnimationFrame';
			var DefaultCancelName = 'cancelAnimationFrame';
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			var requestFuncName = null;
			var cancelFuncName = null;
			if (DefaultRequestName in window) {
				requestFuncName = DefaultRequestName;
			}
			if (DefaultCancelName in window) {
				cancelFuncName = DefaultCancelName;
			}
			for (var ii = 0; ii < vendors.length && (ss.isNullOrUndefined(requestFuncName) || ss.isNullOrUndefined(cancelFuncName)); ++ii) {
				var vendor = vendors[ii];
				var funcName = vendor + 'RequestAnimationFrame';
				if (ss.isNullOrUndefined(requestFuncName) && funcName in window) {
					requestFuncName = funcName;
				}
				if (ss.isNullOrUndefined(cancelFuncName)) {
					funcName = vendor + 'CancelAnimationFrame';
					if (funcName in window) {
						cancelFuncName = funcName;
					}
					funcName = vendor + 'CancelRequestAnimationFrame';
					if (funcName in window) {
						cancelFuncName = funcName;
					}
				}
			}
			if (ss.isValue(requestFuncName)) {
				$tab_WindowHelper.$requestAnimationFrameFunc = function(callback) {
					return window[requestFuncName](callback);
				};
			}
			else {
				$tab_WindowHelper.$setDefaultRequestAnimationFrameImpl();
			}
			if (ss.isValue(cancelFuncName)) {
				$tab_WindowHelper.$cancelAnimationFrameFunc = function(animationId) {
					window[cancelFuncName](animationId);
				};
			}
			else {
				$tab_WindowHelper.$cancelAnimationFrameFunc = function(id) {
					window.clearTimeout(id);
				};
			}
		}
	})();
})();

// END CoreSlim
/*! BEGIN ApiShared */

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'vqlapishared');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DeferredUtil
	var $tab_$DeferredUtil = function() {
	};
	$tab_$DeferredUtil.__typeName = 'tab.$DeferredUtil';
	$tab_$DeferredUtil.$coerceToTrustedPromise = function DeferredUtil$CoerceToTrustedPromise(promiseOrValue) {
		var promise;
		if (promiseOrValue instanceof tableauSoftware.Promise) {
			promise = ss.cast(promiseOrValue, $tab__PromiseImpl);
		}
		else {
			if (ss.isValue(promiseOrValue) && typeof(promiseOrValue['valueOf']) === 'function') {
				promiseOrValue = promiseOrValue['valueOf']();
			}
			if ($tab_$DeferredUtil.$isPromise(promiseOrValue)) {
				var deferred = new $tab__DeferredImpl();
				ss.cast(promiseOrValue, $tab__PromiseImpl).then(ss.mkdel(deferred, deferred.resolve), ss.mkdel(deferred, deferred.reject));
				promise = deferred.get_promise();
			}
			else {
				promise = $tab_$DeferredUtil.$resolved(promiseOrValue);
			}
		}
		return promise;
	};
	$tab_$DeferredUtil.$reject = function DeferredUtil$Reject(promiseOrValue) {
		return $tab_$DeferredUtil.$coerceToTrustedPromise(promiseOrValue).then(function(value) {
			return $tab_$DeferredUtil.$rejected(ss.cast(value, ss.Exception));
		}, null);
	};
	$tab_$DeferredUtil.$resolved = function DeferredUtil$Resolved(value) {
		var p = new $tab__PromiseImpl(function(callback, errback) {
			try {
				return $tab_$DeferredUtil.$coerceToTrustedPromise((ss.isValue(callback) ? callback(value) : value));
			}
			catch ($t1) {
				var e = ss.Exception.wrap($t1);
				return $tab_$DeferredUtil.$rejected(e);
			}
		});
		return p;
	};
	$tab_$DeferredUtil.$rejected = function DeferredUtil$Rejected(reason) {
		var p = new $tab__PromiseImpl(function(callback, errback) {
			try {
				return (ss.isValue(errback) ? $tab_$DeferredUtil.$coerceToTrustedPromise(errback(reason)) : $tab_$DeferredUtil.$rejected(reason));
			}
			catch ($t1) {
				var e = ss.Exception.wrap($t1);
				return $tab_$DeferredUtil.$rejected(e);
			}
		});
		return p;
	};
	$tab_$DeferredUtil.$isPromise = function DeferredUtil$IsPromise(promiseOrValue) {
		return ss.isValue(promiseOrValue) && typeof(promiseOrValue['then']) === 'function';
	};
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNothingCrossDomainHandler
	var $tab_$DoNothingCrossDomainHandler = function() {
		this.$hostId = null;
		this.$1$StateReadyForQueryField = null;
	};
	$tab_$DoNothingCrossDomainHandler.__typeName = 'tab.$DoNothingCrossDomainHandler';
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiCommand
	var $tab__ApiCommand = function(name, commandId, hostId, parameters) {
		this.$1$NameField = null;
		this.$1$HostIdField = null;
		this.$1$CommandIdField = null;
		this.$1$ParametersField = null;
		this.set_name(name);
		this.set_commandId(commandId);
		this.set_hostId(hostId);
		this.set_parameters(parameters);
	};
	$tab__ApiCommand.__typeName = 'tab._ApiCommand';
	$tab__ApiCommand.generateNextCommandId = function ApiCommand$GenerateNextCommandId() {
		var commandId = 'cmd' + $tab__ApiCommand.$nextCommandId;
		$tab__ApiCommand.$nextCommandId++;
		return commandId;
	};
	$tab__ApiCommand.parse = function ApiCommand$Parse(serialized) {
		var name;
		var index = serialized.indexOf(String.fromCharCode(44));
		if (index < 0) {
			name = ss.cast(serialized, String);
			return new $tab__ApiCommand(name, null, null, null);
		}
		name = ss.cast(serialized.substr(0, index), String);
		var sourceId;
		var secondPart = serialized.substr(index + 1);
		index = secondPart.indexOf(String.fromCharCode(44));
		if (index < 0) {
			sourceId = secondPart;
			return new $tab__ApiCommand(name, sourceId, null, null);
		}
		sourceId = secondPart.substr(0, index);
		var hostId;
		var thirdPart = secondPart.substr(index + 1);
		index = thirdPart.indexOf(String.fromCharCode(44));
		if (index < 0) {
			hostId = thirdPart;
			return new $tab__ApiCommand(name, sourceId, hostId, null);
		}
		hostId = thirdPart.substr(0, index);
		var parameters = thirdPart.substr(index + 1);
		$tab__ApiCommand.lastResponseMessage = serialized;
		if (name === 'api.GetClientInfoCommand') {
			$tab__ApiCommand.lastClientInfoResponseMessage = serialized;
		}
		return new $tab__ApiCommand(name, sourceId, hostId, parameters);
	};
	global.tab._ApiCommand = $tab__ApiCommand;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiObjectRegistry
	var $tab__ApiObjectRegistry = function() {
	};
	$tab__ApiObjectRegistry.__typeName = 'tab._ApiObjectRegistry';
	$tab__ApiObjectRegistry.registerApiMessageRouter = function ApiObjectRegistry$RegisterApiMessageRouter(objectCreationFunc) {
		return $tab__ApiObjectRegistry.$registerType(Object).call(null, objectCreationFunc);
	};
	$tab__ApiObjectRegistry.getApiMessageRouter = function ApiObjectRegistry$GetApiMessageRouter() {
		return $tab__ApiObjectRegistry.$getSingleton(Object).call(null);
	};
	$tab__ApiObjectRegistry.disposeApiMessageRouter = function ApiObjectRegistry$DisposeApiMessageRouter() {
		$tab__ApiObjectRegistry.$clearSingletonInstance(Object).call(null);
	};
	$tab__ApiObjectRegistry.$registerType = function(T) {
		return function ApiObjectRegistry$RegisterType(objectCreationFunc) {
			var creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var previousType = creationRegistry[interfaceTypeName];
			creationRegistry[interfaceTypeName] = objectCreationFunc;
			return previousType;
		};
	};
	$tab__ApiObjectRegistry.$createType = function(T) {
		return function ApiObjectRegistry$CreateType() {
			var interfaceTypeName = ss.getTypeFullName(T);
			var creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry;
			var creationFunc = creationRegistry[interfaceTypeName];
			if (ss.isNullOrUndefined(creationFunc)) {
				throw $tab__TableauException.createInternalError("No creation function has been registered for interface type '" + interfaceTypeName + "'.");
			}
			var instance = creationFunc();
			return instance;
		};
	};
	$tab__ApiObjectRegistry.$getSingleton = function(T) {
		return function ApiObjectRegistry$GetSingleton() {
			var singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var instance = ss.cast(singletonInstanceRegistry[interfaceTypeName], T);
			if (ss.isNullOrUndefined(instance)) {
				instance = $tab__ApiObjectRegistry.$createType(T).call(null);
				singletonInstanceRegistry[interfaceTypeName] = instance;
			}
			return instance;
		};
	};
	$tab__ApiObjectRegistry.$clearSingletonInstance = function(T) {
		return function ApiObjectRegistry$ClearSingletonInstance() {
			var singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var instance = ss.cast(singletonInstanceRegistry[interfaceTypeName], T);
			delete singletonInstanceRegistry[interfaceTypeName];
			return instance;
		};
	};
	global.tab._ApiObjectRegistry = $tab__ApiObjectRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiServerNotification
	var $tab__ApiServerNotification = function(workbookName, worksheetName, data) {
		this.$workbookName = null;
		this.$worksheetName = null;
		this.$data = null;
		this.$workbookName = workbookName;
		this.$worksheetName = worksheetName;
		this.$data = data;
	};
	$tab__ApiServerNotification.__typeName = 'tab._ApiServerNotification';
	$tab__ApiServerNotification.deserialize = function ApiServerNotification$Deserialize(json) {
		var param = JSON.parse(json);
		var workbookName = ss.cast(param['api.workbookName'], String);
		var worksheetName = ss.cast(param['api.worksheetName'], String);
		var data = param['api.commandData'];
		return new $tab__ApiServerNotification(workbookName, worksheetName, data);
	};
	global.tab._ApiServerNotification = $tab__ApiServerNotification;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiServerResultParser
	var $tab__ApiServerResultParser = function(serverResult) {
		this.$commandResult = null;
		this.$commandData = null;
		var param = JSON.parse(serverResult);
		this.$commandResult = ss.cast(param['api.commandResult'], String);
		this.$commandData = param['api.commandData'];
	};
	$tab__ApiServerResultParser.__typeName = 'tab._ApiServerResultParser';
	global.tab._ApiServerResultParser = $tab__ApiServerResultParser;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNotUseDeferred
	var $tab__DeferredImpl = function() {
		this.$promise = null;
		this.$thenFunc = null;
		this.$listeners = [];
		this.$resolveFunc = null;
		this.$promise = new $tab__PromiseImpl(ss.mkdel(this, this.then));
		this.$thenFunc = ss.mkdel(this, this.$preResolutionThen);
		this.$resolveFunc = ss.mkdel(this, this.$transitionToFulfilled);
	};
	$tab__DeferredImpl.__typeName = 'tab._DeferredImpl';
	global.tab._DeferredImpl = $tab__DeferredImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.Param
	var $tab__Param = function() {
	};
	$tab__Param.__typeName = 'tab._Param';
	$tab__Param.verifyString = function Param$VerifyString(argumentValue, argumentName) {
		if (ss.isNullOrUndefined(argumentValue) || argumentValue.length === 0) {
			throw $tab__TableauException.createInternalStringArgumentException(argumentName);
		}
	};
	$tab__Param.verifyValue = function Param$VerifyValue(argumentValue, argumentName) {
		if (ss.isNullOrUndefined(argumentValue)) {
			throw $tab__TableauException.createInternalNullArgumentException(argumentName);
		}
	};
	global.tab._Param = $tab__Param;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNotUsePromise
	var $tab__PromiseImpl = function(thenFunc) {
		this.then = null;
		this.then = thenFunc;
	};
	$tab__PromiseImpl.__typeName = 'tab._PromiseImpl';
	global.tab._PromiseImpl = $tab__PromiseImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.TabRect
	var $tab__Rect = function(left, top, width, height) {
		this.left = 0;
		this.top = 0;
		this.width = 0;
		this.height = 0;
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
	};
	$tab__Rect.__typeName = 'tab._Rect';
	global.tab._Rect = $tab__Rect;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedDashboardImpl
	var $tab__SharedDashboardImpl = function(sheetInfoImpl, messagingOptions) {
		this.worksheets = null;
		this.dashboardObjects = null;
		this.messagingOptions = null;
		$tab__SharedSheetImpl.call(this, sheetInfoImpl);
		this.messagingOptions = messagingOptions;
	};
	$tab__SharedDashboardImpl.__typeName = 'tab._SharedDashboardImpl';
	global.tab._SharedDashboardImpl = $tab__SharedDashboardImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedSheetImpl
	var $tab__SharedSheetImpl = function(sheetInfoImpl) {
		this.$name = null;
		this.$sheetType = null;
		this.$size = null;
		this.$name = sheetInfoImpl.name;
		this.$sheetType = sheetInfoImpl.sheetType;
		this.$size = sheetInfoImpl.size;
	};
	$tab__SharedSheetImpl.__typeName = 'tab._SharedSheetImpl';
	global.tab._SharedSheetImpl = $tab__SharedSheetImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedWorksheetImpl
	var $tab__SharedWorksheetImpl = function(sheetInfoImpl, messagingOptions, parentDashboardImpl) {
		this.$parentDashboardImpl = null;
		this.messagingOptions = null;
		$tab__SharedSheetImpl.call(this, sheetInfoImpl);
		this.$parentDashboardImpl = parentDashboardImpl;
		this.messagingOptions = messagingOptions;
	};
	$tab__SharedWorksheetImpl.__typeName = 'tab._SharedWorksheetImpl';
	global.tab._SharedWorksheetImpl = $tab__SharedWorksheetImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiSharedSheetInfoImpl
	var $tab__SheetInfoImpl = function() {
	};
	$tab__SheetInfoImpl.__typeName = 'tab._SheetInfoImpl';
	$tab__SheetInfoImpl.$ctor = function(name, sheetType, size, zoneId) {
		var $this = new Object();
		$this.name = null;
		$this.sheetType = null;
		$this.zoneId = 0;
		$this.size = null;
		$this.name = name;
		$this.sheetType = sheetType;
		$this.size = size;
		$this.zoneId = zoneId;
		return $this;
	};
	$tab__SheetInfoImpl.isInstanceOfType = function() {
		return true;
	};
	global.tab._SheetInfoImpl = $tab__SheetInfoImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.TableauException
	var $tab__TableauException = function() {
	};
	$tab__TableauException.__typeName = 'tab._TableauException';
	$tab__TableauException.create = function TableauException$Create(id, message) {
		var x = new ss.Exception(message);
		x['tableauSoftwareErrorCode'] = id;
		return x;
	};
	$tab__TableauException.createInternalError = function TableauException$CreateInternalError(details) {
		if (ss.isValue(details)) {
			return $tab__TableauException.create('internalError', 'Internal error. Please contact Tableau support with the following information: ' + details);
		}
		else {
			return $tab__TableauException.create('internalError', 'Internal error. Please contact Tableau support');
		}
	};
	$tab__TableauException.createInternalNullArgumentException = function TableauException$CreateInternalNullArgumentException(argumentName) {
		return $tab__TableauException.createInternalError("Null/undefined argument '" + argumentName + "'.");
	};
	$tab__TableauException.createInternalStringArgumentException = function TableauException$CreateInternalStringArgumentException(argumentName) {
		return $tab__TableauException.createInternalError("Invalid string argument '" + argumentName + "'.");
	};
	$tab__TableauException.createServerError = function TableauException$CreateServerError(message) {
		return $tab__TableauException.create('serverError', message);
	};
	$tab__TableauException.createNotActiveSheet = function TableauException$CreateNotActiveSheet() {
		return $tab__TableauException.create('notActiveSheet', 'Operation not allowed on non-active sheet');
	};
	$tab__TableauException.createInvalidCustomViewName = function TableauException$CreateInvalidCustomViewName(customViewName) {
		return $tab__TableauException.create('invalidCustomViewName', 'Invalid custom view name: ' + customViewName);
	};
	$tab__TableauException.createInvalidParameter = function TableauException$CreateInvalidParameter(paramName) {
		return $tab__TableauException.create('invalidParameter', 'Invalid parameter: ' + paramName);
	};
	$tab__TableauException.createInvalidFilterFieldNameOrValue = function TableauException$CreateInvalidFilterFieldNameOrValue(fieldName) {
		return $tab__TableauException.create('invalidFilterFieldNameOrValue', 'Invalid filter field name or value: ' + fieldName);
	};
	$tab__TableauException.createInvalidDateParameter = function TableauException$CreateInvalidDateParameter(paramName) {
		return $tab__TableauException.create('invalidDateParameter', 'Invalid date parameter: ' + paramName);
	};
	$tab__TableauException.createNullOrEmptyParameter = function TableauException$CreateNullOrEmptyParameter(paramName) {
		return $tab__TableauException.create('nullOrEmptyParameter', 'Parameter cannot be null or empty: ' + paramName);
	};
	$tab__TableauException.createMissingMaxSize = function TableauException$CreateMissingMaxSize() {
		return $tab__TableauException.create('missingMaxSize', 'Missing maxSize for SheetSizeBehavior.ATMOST');
	};
	$tab__TableauException.createMissingMinSize = function TableauException$CreateMissingMinSize() {
		return $tab__TableauException.create('missingMinSize', 'Missing minSize for SheetSizeBehavior.ATLEAST');
	};
	$tab__TableauException.createMissingMinMaxSize = function TableauException$CreateMissingMinMaxSize() {
		return $tab__TableauException.create('missingMinMaxSize', 'Missing minSize or maxSize for SheetSizeBehavior.RANGE');
	};
	$tab__TableauException.createInvalidRangeSize = function TableauException$CreateInvalidRangeSize() {
		return $tab__TableauException.create('invalidSize', 'Missing minSize or maxSize for SheetSizeBehavior.RANGE');
	};
	$tab__TableauException.createInvalidSizeValue = function TableauException$CreateInvalidSizeValue() {
		return $tab__TableauException.create('invalidSize', 'Size value cannot be less than zero');
	};
	$tab__TableauException.createInvalidSheetSizeParam = function TableauException$CreateInvalidSheetSizeParam() {
		return $tab__TableauException.create('invalidSize', 'Invalid sheet size parameter');
	};
	$tab__TableauException.createSizeConflictForExactly = function TableauException$CreateSizeConflictForExactly() {
		return $tab__TableauException.create('invalidSize', 'Conflicting size values for SheetSizeBehavior.EXACTLY');
	};
	$tab__TableauException.createInvalidSizeBehaviorOnWorksheet = function TableauException$CreateInvalidSizeBehaviorOnWorksheet() {
		return $tab__TableauException.create('invalidSizeBehaviorOnWorksheet', 'Only SheetSizeBehavior.AUTOMATIC is allowed on Worksheets');
	};
	$tab__TableauException.createNoUrlForHiddenWorksheet = function TableauException$CreateNoUrlForHiddenWorksheet() {
		return $tab__TableauException.create('noUrlForHiddenWorksheet', 'Hidden worksheets do not have a URL.');
	};
	$tab__TableauException.createInvalidAggregationFieldName = function TableauException$CreateInvalidAggregationFieldName(fieldName) {
		return $tab__TableauException.create('invalidAggregationFieldName', "Invalid aggregation type for field '" + fieldName + "'");
	};
	$tab__TableauException.createInvalidToolbarButtonName = function TableauException$CreateInvalidToolbarButtonName(buttonName) {
		return $tab__TableauException.create('invalidToolbarButtonName', "Invalid toolbar button name: '" + buttonName + "'");
	};
	$tab__TableauException.createIndexOutOfRange = function TableauException$CreateIndexOutOfRange(index) {
		return $tab__TableauException.create('indexOutOfRange', "Index '" + index + "' is out of range.");
	};
	$tab__TableauException.createUnsupportedEventName = function TableauException$CreateUnsupportedEventName(eventName) {
		return $tab__TableauException.create('unsupportedEventName', "Unsupported event '" + eventName + "'.");
	};
	$tab__TableauException.createBrowserNotCapable = function TableauException$CreateBrowserNotCapable() {
		return $tab__TableauException.create('browserNotCapable', 'This browser is incapable of supporting the Tableau JavaScript API.');
	};
	global.tab._TableauException = $tab__TableauException;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.Utility
	var $tab__Utility = function() {
	};
	$tab__Utility.__typeName = 'tab._Utility';
	$tab__Utility.isNullOrEmpty = function Utility$IsNullOrEmpty(value) {
		return ss.isNullOrUndefined(value) || (value['length'] || 0) <= 0;
	};
	$tab__Utility.isString = function Utility$IsString(value) {
		return typeof(value) === 'string';
	};
	$tab__Utility.isNumber = function Utility$IsNumber(value) {
		return typeof(value) === 'number';
	};
	$tab__Utility.isDate = function Utility$IsDate(value) {
		if (typeof(value) === 'object' && ss.isInstanceOfType(value, ss.JsDate)) {
			return true;
		}
		else if (!!(Object.prototype.toString.call(value) !== '[object Date]')) {
			return false;
		}
		return !isNaN(ss.cast(value, ss.JsDate).getTime());
	};
	$tab__Utility.isDateValid = function Utility$IsDateValid(dt) {
		return !isNaN(dt.getTime());
	};
	$tab__Utility.indexOf = function Utility$IndexOf(array, searchElement, fromIndex) {
		if (ss.isValue(Array.prototype['indexOf'])) {
			return ss.unbox(ss.cast(array['indexOf'](searchElement, fromIndex), ss.Int32));
		}
		fromIndex = fromIndex || 0;
		var length = array.length;
		if (length > 0) {
			for (var index = fromIndex; index < length; index++) {
				if (ss.referenceEquals(array[index], searchElement)) {
					return index;
				}
			}
		}
		return -1;
	};
	$tab__Utility.contains = function Utility$Contains(array, searchElement, fromIndex) {
		var index = $tab__Utility.indexOf(array, searchElement, fromIndex);
		return index >= 0;
	};
	$tab__Utility.getTopmostWindow = function Utility$GetTopmostWindow() {
		var win = window.self;
		while (ss.isValue(win.parent) && !ss.referenceEquals(win.parent, win)) {
			win = win.parent;
		}
		return win;
	};
	$tab__Utility.toInt = function Utility$ToInt(value) {
		if ($tab__Utility.isNumber(value)) {
			return ss.Int32.trunc(value);
		}
		var number = parseInt(value.toString(), 10);
		if (isNaN(number)) {
			return 0;
		}
		return number;
	};
	$tab__Utility.hasClass = function Utility$HasClass(element, className) {
		var regexClass = new RegExp('[\\n\\t\\r]', 'g');
		return ss.isValue(element) && (' ' + element.className + ' ').replace(regexClass, ' ').indexOf(' ' + className + ' ') > -1;
	};
	$tab__Utility.findParentWithClassName = function Utility$FindParentWithClassName(element, className, stopAtElement) {
		var parent = (ss.isValue(element) ? ss.cast(element.parentNode, HTMLElement) : null);
		stopAtElement = stopAtElement || document.body;
		while (ss.isValue(parent)) {
			if ($tab__Utility.hasClass(parent, className)) {
				return parent;
			}
			if (ss.referenceEquals(parent, stopAtElement)) {
				parent = null;
			}
			else {
				parent = ss.cast(parent.parentNode, HTMLElement);
			}
		}
		return parent;
	};
	$tab__Utility.hasJsonParse = function Utility$HasJsonParse() {
		return !!(ss.isValue(JSON) && ss.isValue(JSON.parse));
	};
	$tab__Utility.hasWindowPostMessage = function Utility$HasWindowPostMessage() {
		return !!ss.isValue(window.postMessage);
	};
	$tab__Utility.isPostMessageSynchronous = function Utility$IsPostMessageSynchronous() {
		if ($tab__Utility.isIE()) {
			var msieRegEx = new RegExp('(msie) ([\\w.]+)');
			var matches = msieRegEx.exec(window.navigator.userAgent.toLowerCase());
			var versionStr = matches[2] || '0';
			var version = parseInt(versionStr, 10);
			return version <= 8;
		}
		return false;
	};
	$tab__Utility.hasDocumentAttachEvent = function Utility$HasDocumentAttachEvent() {
		return !!ss.isValue(document.attachEvent);
	};
	$tab__Utility.hasWindowAddEventListener = function Utility$HasWindowAddEventListener() {
		return !!ss.isValue(window.addEventListener);
	};
	$tab__Utility.isElementOfTag = function Utility$IsElementOfTag(element, tagName) {
		return ss.isValue(element) && element.nodeType === 1 && ss.referenceEquals(element.tagName.toLowerCase(), tagName.toLowerCase());
	};
	$tab__Utility.elementToString = function Utility$ElementToString(element) {
		var str = new ss.StringBuilder();
		str.append(element.tagName.toLowerCase());
		if (!$tab__Utility.isNullOrEmpty(element.id)) {
			str.append('#').append(element.id);
		}
		if (!$tab__Utility.isNullOrEmpty(element.className)) {
			var classes = element.className.split(' ');
			str.append('.').append(classes.join('.'));
		}
		return str.toString();
	};
	$tab__Utility.tableauGCS = function Utility$TableauGCS(e) {
		if (typeof(window['getComputedStyle']) === 'function') {
			return window.getComputedStyle(e);
		}
		else {
			return e['currentStyle'];
		}
	};
	$tab__Utility.isIE = function Utility$IsIE() {
		return !!(window.navigator.userAgent.indexOf('MSIE') > -1 && ss.isNullOrUndefined(window.opera));
	};
	$tab__Utility.isSafari = function Utility$IsSafari() {
		var ua = window.navigator.userAgent;
		var isChrome = ua.indexOf('Chrome') >= 0;
		return ua.indexOf('Safari') >= 0 && !isChrome;
	};
	$tab__Utility.mobileDetect = function Utility$MobileDetect() {
		var ua = window.navigator.userAgent;
		if (ua.indexOf('iPad') !== -1) {
			return true;
		}
		if (ua.indexOf('Android') !== -1) {
			return true;
		}
		if (ua.indexOf('AppleWebKit') !== -1 && ua.indexOf('Mobile') !== -1) {
			return true;
		}
		return false;
	};
	$tab__Utility.visibleContentRectInDocumentCoordinates = function Utility$VisibleContentRectInDocumentCoordinates(element) {
		var visibleRect = $tab__Utility.contentRectInDocumentCoordinates(element);
		for (var currentElement = element.parentElement; ss.isValue(currentElement) && ss.isValue(currentElement.parentElement); currentElement = currentElement.parentElement) {
			var overflow = $tab__Utility.$getComputedStyle(currentElement).overflow;
			if (overflow === 'auto' || overflow === 'scroll' || overflow === 'hidden') {
				visibleRect = visibleRect.intersect($tab__Utility.contentRectInDocumentCoordinates(currentElement));
			}
		}
		var viewportRect = $tab__Utility.contentRectInDocumentCoordinates(document.documentElement);
		var win = new tab.WindowHelper(window.self);
		if (win.isQuirksMode()) {
			viewportRect.height = document.body.clientHeight - viewportRect.left;
			viewportRect.width = document.body.clientWidth - viewportRect.top;
		}
		viewportRect.left += win.get_pageXOffset();
		viewportRect.top += win.get_pageYOffset();
		return visibleRect.intersect(viewportRect);
	};
	$tab__Utility.contentRectInDocumentCoordinates = function Utility$ContentRectInDocumentCoordinates(element) {
		var boundingClientRect = $tab__Utility.getBoundingClientRect(element);
		var style = $tab__Utility.$getComputedStyle(element);
		var paddingLeft = $tab__Utility.toInt(style.paddingLeft);
		var paddingTop = $tab__Utility.toInt(style.paddingTop);
		var borderLeft = $tab__Utility.toInt(style.borderLeftWidth);
		var borderTop = $tab__Utility.toInt(style.borderTopWidth);
		var contentSize = $tab__Utility.computeContentSize(element);
		var win = new tab.WindowHelper(window.self);
		var left = boundingClientRect.left + paddingLeft + borderLeft + win.get_pageXOffset();
		var top = boundingClientRect.top + paddingTop + borderTop + win.get_pageYOffset();
		return new $tab__Rect(left, top, contentSize.width, contentSize.height);
	};
	$tab__Utility.getBoundingClientRect = function Utility$GetBoundingClientRect(element) {
		var rect = element.getBoundingClientRect();
		var top = ss.Int32.trunc(rect.top);
		var left = ss.Int32.trunc(rect.left);
		var right = ss.Int32.trunc(rect.right);
		var bottom = ss.Int32.trunc(rect.bottom);
		return new $tab__Rect(left, top, right - left, bottom - top);
	};
	$tab__Utility.convertRawValue = function Utility$ConvertRawValue(rawValue, dataType) {
		if (ss.isNullOrUndefined(rawValue)) {
			return null;
		}
		switch (dataType) {
			case 'bool': {
				return rawValue;
			}
			case 'date':
			case 'number': {
				if (ss.isNullOrUndefined(rawValue)) {
					return Number.NaN;
				}
				return rawValue;
			}
			default:
			case 'string': {
				return rawValue;
			}
		}
	};
	$tab__Utility.getDataValue = function Utility$GetDataValue(dv) {
		if (ss.isNullOrUndefined(dv)) {
			return $tab_DataValue.$ctor(null, null, null);
		}
		return $tab_DataValue.$ctor($tab__Utility.convertRawValue(dv.value, dv.type), dv.formattedValue, dv.aliasedValue);
	};
	$tab__Utility.serializeDateForServer = function Utility$SerializeDateForServer(date) {
		var serializedDate = '';
		if (ss.isValue(date) && $tab__Utility.isDate(date)) {
			var year = date.getUTCFullYear();
			var month = date.getUTCMonth() + 1;
			var day = date.getUTCDate();
			var hh = date.getUTCHours();
			var mm = date.getUTCMinutes();
			var sec = date.getUTCSeconds();
			serializedDate = year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + sec;
		}
		return serializedDate;
	};
	$tab__Utility.computeContentSize = function Utility$ComputeContentSize(element) {
		var style = $tab__Utility.$getComputedStyle(element);
		var paddingLeft = parseFloat(style.paddingLeft);
		var paddingTop = parseFloat(style.paddingTop);
		var paddingRight = parseFloat(style.paddingRight);
		var paddingBottom = parseFloat(style.paddingBottom);
		var width = element.clientWidth - Math.round(paddingLeft + paddingRight);
		var height = element.clientHeight - Math.round(paddingTop + paddingBottom);
		return $tab_Size.$ctor(width, height);
	};
	$tab__Utility.$getComputedStyle = function Utility$GetComputedStyle(element) {
		if (typeof(window['getComputedStyle']) === 'function') {
			if (ss.isValue(element.ownerDocument.defaultView.opener)) {
				return element.ownerDocument.defaultView.getComputedStyle(element);
			}
			return window.getComputedStyle(element);
		}
		else if (ss.isValue(element['currentStyle'])) {
			return element['currentStyle'];
		}
		return element.style;
	};
	$tab__Utility.roundVizSizeInPixels = function Utility$RoundVizSizeInPixels(size) {
		if (ss.isNullOrUndefined(size) || !(size.indexOf('px') !== -1)) {
			return size;
		}
		var sizeValue = parseFloat(size.split('px')[0]);
		return Math.round(sizeValue) + 'px';
	};
	$tab__Utility.noResultPromiseHelper = function Utility$NoResultPromiseHelper(commandName, cmdParams, messagingOptions) {
		var deferred = new tab._Deferred();
		var returnHandler = new (ss.makeGenericType($tab_CommandReturnHandler$1, [Object]))(commandName, 1, function(result) {
			deferred.resolve();
		}, function(remoteError, message) {
			deferred.reject($tab__TableauException.createServerError(message));
		});
		messagingOptions.sendCommand(Object).call(messagingOptions, cmdParams, returnHandler);
		return deferred.get_promise();
	};
	$tab__Utility.clone = function(T) {
		return function Utility$Clone(src) {
			return JSON.parse(JSON.stringify(src));
		};
	};
	global.tab._Utility = $tab__Utility;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDashboardObjectType
	var $tab_ApiDashboardObjectType = function() {
	};
	$tab_ApiDashboardObjectType.__typeName = 'tab.ApiDashboardObjectType';
	global.tab.ApiDashboardObjectType = $tab_ApiDashboardObjectType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDateRangeType
	var $tab_ApiDateRangeType = function() {
	};
	$tab_ApiDateRangeType.__typeName = 'tab.ApiDateRangeType';
	global.tab.ApiDateRangeType = $tab_ApiDateRangeType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDeviceType
	var $tab_ApiDeviceType = function() {
	};
	$tab_ApiDeviceType.__typeName = 'tab.ApiDeviceType';
	global.tab.ApiDeviceType = $tab_ApiDeviceType;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiEnumConverter
	var $tab_ApiEnumConverter = function() {
	};
	$tab_ApiEnumConverter.__typeName = 'tab.ApiEnumConverter';
	$tab_ApiEnumConverter.convertDashboardObjectType = function ApiEnumConverter$ConvertDashboardObjectType(crossDomainType) {
		switch (crossDomainType) {
			case 'blank': {
				return 'blank';
			}
			case 'image': {
				return 'image';
			}
			case 'legend': {
				return 'legend';
			}
			case 'pageFilter': {
				return 'pageFilter';
			}
			case 'parameterControl': {
				return 'parameterControl';
			}
			case 'quickFilter': {
				return 'quickFilter';
			}
			case 'text': {
				return 'text';
			}
			case 'title': {
				return 'title';
			}
			case 'webPage': {
				return 'webPage';
			}
			case 'worksheet': {
				return 'worksheet';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainDashboardObjectType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertDateRange = function ApiEnumConverter$ConvertDateRange(crossDomainType) {
		switch (crossDomainType) {
			case 'curr': {
				return 'curr';
			}
			case 'last': {
				return 'last';
			}
			case 'lastn': {
				return 'lastn';
			}
			case 'next': {
				return 'next';
			}
			case 'nextn': {
				return 'nextn';
			}
			case 'todate': {
				return 'todate';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainDateRangeType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFieldAggregation = function ApiEnumConverter$ConvertFieldAggregation(crossDomainType) {
		switch (crossDomainType) {
			case 'ATTR': {
				return 'ATTR';
			}
			case 'AVG': {
				return 'AVG';
			}
			case 'COUNT': {
				return 'COUNT';
			}
			case 'COUNTD': {
				return 'COUNTD';
			}
			case 'DAY': {
				return 'DAY';
			}
			case 'END': {
				return 'END';
			}
			case 'HOUR': {
				return 'HOUR';
			}
			case 'INOUT': {
				return 'INOUT';
			}
			case 'KURTOSIS': {
				return 'KURTOSIS';
			}
			case 'MAX': {
				return 'MAX';
			}
			case 'MDY': {
				return 'MDY';
			}
			case 'MEDIAN': {
				return 'MEDIAN';
			}
			case 'MIN': {
				return 'MIN';
			}
			case 'MINUTE': {
				return 'MINUTE';
			}
			case 'MONTH': {
				return 'MONTH';
			}
			case 'MONTHYEAR': {
				return 'MONTHYEAR';
			}
			case 'NONE': {
				return 'NONE';
			}
			case 'PERCENTILE': {
				return 'PERCENTILE';
			}
			case 'QUART1': {
				return 'QUART1';
			}
			case 'QUART3': {
				return 'QUART3';
			}
			case 'QTR': {
				return 'QTR';
			}
			case 'SECOND': {
				return 'SECOND';
			}
			case 'SKEWNESS': {
				return 'SKEWNESS';
			}
			case 'STDEV': {
				return 'STDEV';
			}
			case 'STDEVP': {
				return 'STDEVP';
			}
			case 'SUM': {
				return 'SUM';
			}
			case 'SUM_XSQR': {
				return 'SUM_XSQR';
			}
			case 'TRUNC_DAY': {
				return 'TRUNC_DAY';
			}
			case 'TRUNC_HOUR': {
				return 'TRUNC_HOUR';
			}
			case 'TRUNC_MINUTE': {
				return 'TRUNC_MINUTE';
			}
			case 'TRUNC_MONTH': {
				return 'TRUNC_MONTH';
			}
			case 'TRUNC_QTR': {
				return 'TRUNC_QTR';
			}
			case 'TRUNC_SECOND': {
				return 'TRUNC_SECOND';
			}
			case 'TRUNC_WEEK': {
				return 'TRUNC_WEEK';
			}
			case 'TRUNC_YEAR': {
				return 'TRUNC_YEAR';
			}
			case 'USER': {
				return 'USER';
			}
			case 'VAR': {
				return 'VAR';
			}
			case 'VARP': {
				return 'VARP';
			}
			case 'WEEK': {
				return 'WEEK';
			}
			case 'WEEKDAY': {
				return 'WEEKDAY';
			}
			case 'YEAR': {
				return 'YEAR';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFieldAggregationType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFieldRole = function ApiEnumConverter$ConvertFieldRole(crossDomainType) {
		switch (crossDomainType) {
			case 'dimension': {
				return 'dimension';
			}
			case 'measure': {
				return 'measure';
			}
			case 'unknown': {
				return 'unknown';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFieldRoleType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFilterType = function ApiEnumConverter$ConvertFilterType(crossDomainType) {
		switch (crossDomainType) {
			case 'categorical': {
				return 'categorical';
			}
			case 'hierarchical': {
				return 'hierarchical';
			}
			case 'quantitative': {
				return 'quantitative';
			}
			case 'relativedate': {
				return 'relativedate';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFilterType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertParameterAllowableValuesType = function ApiEnumConverter$ConvertParameterAllowableValuesType(crossDomainType) {
		switch (crossDomainType) {
			case 'all': {
				return 'all';
			}
			case 'list': {
				return 'list';
			}
			case 'range': {
				return 'range';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterAllowableValuesType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertParameterDataType = function ApiEnumConverter$ConvertParameterDataType(crossDomainType) {
		switch (crossDomainType) {
			case 'boolean': {
				return 'boolean';
			}
			case 'date': {
				return 'date';
			}
			case 'datetime': {
				return 'datetime';
			}
			case 'float': {
				return 'float';
			}
			case 'integer': {
				return 'integer';
			}
			case 'string': {
				return 'string';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterDataType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertPeriodType = function ApiEnumConverter$ConvertPeriodType(crossDomainType) {
		switch (crossDomainType) {
			case 'year': {
				return 'year';
			}
			case 'quarter': {
				return 'quarter';
			}
			case 'month': {
				return 'month';
			}
			case 'week': {
				return 'week';
			}
			case 'day': {
				return 'day';
			}
			case 'hour': {
				return 'hour';
			}
			case 'minute': {
				return 'minute';
			}
			case 'second': {
				return 'second';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainPeriodType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertSheetType = function ApiEnumConverter$ConvertSheetType(crossDomainType) {
		switch (crossDomainType) {
			case 'worksheet': {
				return 'worksheet';
			}
			case 'dashboard': {
				return 'dashboard';
			}
			case 'story': {
				return 'story';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainSheetType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertDataType = function ApiEnumConverter$ConvertDataType(crossDomainType) {
		switch (crossDomainType) {
			case 'boolean': {
				return 'boolean';
			}
			case 'date': {
				return 'date';
			}
			case 'datetime': {
				return 'datetime';
			}
			case 'float': {
				return 'float';
			}
			case 'integer': {
				return 'integer';
			}
			case 'string': {
				return 'string';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterDataType: ' + crossDomainType);
			}
		}
	};
	global.tab.ApiEnumConverter = $tab_ApiEnumConverter;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiErrorCode
	var $tab_ApiErrorCode = function() {
	};
	$tab_ApiErrorCode.__typeName = 'tab.ApiErrorCode';
	global.tab.ApiErrorCode = $tab_ApiErrorCode;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFieldAggregationType
	var $tab_ApiFieldAggregationType = function() {
	};
	$tab_ApiFieldAggregationType.__typeName = 'tab.ApiFieldAggregationType';
	global.tab.ApiFieldAggregationType = $tab_ApiFieldAggregationType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFieldRoleType
	var $tab_ApiFieldRoleType = function() {
	};
	$tab_ApiFieldRoleType.__typeName = 'tab.ApiFieldRoleType';
	global.tab.ApiFieldRoleType = $tab_ApiFieldRoleType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFilterType
	var $tab_ApiFilterType = function() {
	};
	$tab_ApiFilterType.__typeName = 'tab.ApiFilterType';
	global.tab.ApiFilterType = $tab_ApiFilterType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFilterUpdateType
	var $tab_ApiFilterUpdateType = function() {
	};
	$tab_ApiFilterUpdateType.__typeName = 'tab.ApiFilterUpdateType';
	global.tab.ApiFilterUpdateType = $tab_ApiFilterUpdateType;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiMessageHandler
	var $tab_ApiMessageHandler = function() {
	};
	$tab_ApiMessageHandler.__typeName = 'tab.ApiMessageHandler';
	global.tab.ApiMessageHandler = $tab_ApiMessageHandler;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiMessagingOptions
	var $tab_ApiMessagingOptions = function(router, handler) {
		this.$router = null;
		this.$handler = null;
		$tab__Param.verifyValue(router, 'router');
		this.$router = router;
		this.$handler = handler;
	};
	$tab_ApiMessagingOptions.__typeName = 'tab.ApiMessagingOptions';
	global.tab.ApiMessagingOptions = $tab_ApiMessagingOptions;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiNullOption
	var $tab_ApiNullOption = function() {
	};
	$tab_ApiNullOption.__typeName = 'tab.ApiNullOption';
	global.tab.ApiNullOption = $tab_ApiNullOption;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiParameterAllowableValuesType
	var $tab_ApiParameterAllowableValuesType = function() {
	};
	$tab_ApiParameterAllowableValuesType.__typeName = 'tab.ApiParameterAllowableValuesType';
	global.tab.ApiParameterAllowableValuesType = $tab_ApiParameterAllowableValuesType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiParameterDataType
	var $tab_ApiParameterDataType = function() {
	};
	$tab_ApiParameterDataType.__typeName = 'tab.ApiParameterDataType';
	global.tab.ApiParameterDataType = $tab_ApiParameterDataType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiPeriodType
	var $tab_ApiPeriodType = function() {
	};
	$tab_ApiPeriodType.__typeName = 'tab.ApiPeriodType';
	global.tab.ApiPeriodType = $tab_ApiPeriodType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSelectionUpdateType
	var $tab_ApiSelectionUpdateType = function() {
	};
	$tab_ApiSelectionUpdateType.__typeName = 'tab.ApiSelectionUpdateType';
	global.tab.ApiSelectionUpdateType = $tab_ApiSelectionUpdateType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSheetSizeBehavior
	var $tab_ApiSheetSizeBehavior = function() {
	};
	$tab_ApiSheetSizeBehavior.__typeName = 'tab.ApiSheetSizeBehavior';
	global.tab.ApiSheetSizeBehavior = $tab_ApiSheetSizeBehavior;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSheetType
	var $tab_ApiSheetType = function() {
	};
	$tab_ApiSheetType.__typeName = 'tab.ApiSheetType';
	global.tab.ApiSheetType = $tab_ApiSheetType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiTableauEventName
	var $tab_ApiTableauEventName = function() {
	};
	$tab_ApiTableauEventName.__typeName = 'tab.ApiTableauEventName';
	global.tab.ApiTableauEventName = $tab_ApiTableauEventName;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiToolbarButtonName
	var $tab_ApiToolbarButtonName = function() {
	};
	$tab_ApiToolbarButtonName.__typeName = 'tab.ApiToolbarButtonName';
	global.tab.ApiToolbarButtonName = $tab_ApiToolbarButtonName;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiToolbarPosition
	var $tab_ApiToolbarPosition = function() {
	};
	$tab_ApiToolbarPosition.__typeName = 'tab.ApiToolbarPosition';
	global.tab.ApiToolbarPosition = $tab_ApiToolbarPosition;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.CommandReturnHandler
	var $tab_CommandReturnHandler$1 = function(T) {
		var $type = function(commandName, successCallbackTiming, successCallback, errorCallback) {
			this.$commandName = null;
			this.$successCallbackTiming = 0;
			this.$successCallback = null;
			this.$errorCallback = null;
			this.$commandName = commandName;
			this.$successCallback = successCallback;
			this.$successCallbackTiming = successCallbackTiming;
			this.$errorCallback = errorCallback;
		};
		ss.registerGenericClassInstance($type, $tab_CommandReturnHandler$1, [T], {
			get_commandName: function CommandReturnHandler$get_CommandName() {
				return this.$commandName;
			},
			get_successCallback: function CommandReturnHandler$get_SuccessCallback() {
				return this.$successCallback;
			},
			get_successCallbackTiming: function CommandReturnHandler$get_SuccessCallbackTiming() {
				return this.$successCallbackTiming;
			},
			get_errorCallback: function CommandReturnHandler$get_ErrorCallback() {
				return this.$errorCallback;
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_CommandReturnHandler$1.__typeName = 'tab.CommandReturnHandler$1';
	ss.initGenericClass($tab_CommandReturnHandler$1, $asm, 1);
	global.tab.CommandReturnHandler$1 = $tab_CommandReturnHandler$1;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.CrossDomainMessager
	var $tab_CrossDomainMessager = function(legacyHandler) {
		this.$nextHandlerId = 0;
		this.$handlers = {};
		this.$commandCallbacks = {};
		this.$commandReturnAfterStateReadyQueues = {};
		this.$legacyHandler = null;
		this.$legacyHandler = legacyHandler;
		if ($tab__Utility.hasWindowAddEventListener()) {
			window.addEventListener('message', ss.mkdel(this, this.$handleCrossDomainMessage), false);
		}
		else if ($tab__Utility.hasDocumentAttachEvent()) {
			var handler = ss.mkdel(this, this.$handleCrossDomainMessage);
			document.attachEvent('onmessage', handler);
			window.attachEvent('onmessage', handler);
		}
		else {
			window.onmessage = ss.mkdel(this, this.$handleCrossDomainMessage);
		}
		this.$nextHandlerId = 0;
	};
	$tab_CrossDomainMessager.__typeName = 'tab.CrossDomainMessager';
	global.tab.CrossDomainMessager = $tab_CrossDomainMessager;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.DataType
	var $tab_DataType = function() {
	};
	$tab_DataType.__typeName = 'tab.DataType';
	global.tab.DataType = $tab_DataType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.DataValue
	var $tab_DataValue = function() {
	};
	$tab_DataValue.__typeName = 'tab.DataValue';
	$tab_DataValue.$ctor = function(value, formattedValue, aliasedValue) {
		var $this = new Object();
		$this.value = null;
		$this.formattedValue = null;
		$this.value = value;
		if ($tab__Utility.isNullOrEmpty(aliasedValue)) {
			$this.formattedValue = formattedValue;
		}
		else {
			$this.formattedValue = aliasedValue;
		}
		return $this;
	};
	$tab_DataValue.isInstanceOfType = function() {
		return true;
	};
	global.tab.DataValue = $tab_DataValue;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.HostedApiMessageHandler
	var $tab_HostedApiMessageHandler = function() {
		this.$2$StateReadyForQueryField = null;
		$tab_ApiMessageHandler.call(this);
	};
	$tab_HostedApiMessageHandler.__typeName = 'tab.HostedApiMessageHandler';
	global.tab.HostedApiMessageHandler = $tab_HostedApiMessageHandler;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.HostedApiMessageRouter
	var $tab_HostedApiMessageRouter = function() {
		this.$crossDomainMessager = null;
		this.$crossDomainMessager = new $tab_CrossDomainMessager(null);
	};
	$tab_HostedApiMessageRouter.__typeName = 'tab.HostedApiMessageRouter';
	global.tab.HostedApiMessageRouter = $tab_HostedApiMessageRouter;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.Point
	var $tab_Point = function() {
	};
	$tab_Point.__typeName = 'tab.Point';
	$tab_Point.$ctor = function(x, y) {
		var $this = new Object();
		$this.x = 0;
		$this.y = 0;
		$this.x = x;
		$this.y = y;
		return $this;
	};
	$tab_Point.isInstanceOfType = function() {
		return true;
	};
	global.tab.Point = $tab_Point;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.PublicEnums
	var $tab_PublicEnums = function() {
	};
	$tab_PublicEnums.__typeName = 'tab.PublicEnums';
	$tab_PublicEnums.tryNormalizeEnum = function(T) {
		return function PublicEnums$TryNormalizeEnum(rawValue, value) {
			if (ss.isValue(rawValue)) {
				var lookup = rawValue.toString().toUpperCase();
				var $t1 = ss.Enum.getValues(T);
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var name = $t1[$t2];
					var compareValue = name.toUpperCase();
					if (ss.referenceEquals(lookup, compareValue)) {
						value.$ = name;
						return true;
					}
				}
			}
			value.$ = ss.getDefaultValue(T);
			return false;
		};
	};
	$tab_PublicEnums.normalizeEnum = function(T) {
		return function PublicEnums$NormalizeEnum(rawValue, paramName) {
			var value = {};
			if (!$tab_PublicEnums.tryNormalizeEnum(T).call(null, rawValue, value)) {
				throw $tab__TableauException.createInvalidParameter(paramName);
			}
			return value.$;
		};
	};
	$tab_PublicEnums.isValidEnum = function(T) {
		return function PublicEnums$IsValidEnum(rawValue) {
			var value = {};
			var valid = $tab_PublicEnums.tryNormalizeEnum(T).call(null, rawValue, value);
			return valid;
		};
	};
	global.tab.PublicEnums = $tab_PublicEnums;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.SheetSize
	var $tab_SheetSize = function() {
	};
	$tab_SheetSize.__typeName = 'tab.SheetSize';
	$tab_SheetSize.$ctor = function(behavior, minSize, maxSize) {
		var $this = new Object();
		$this.behavior = null;
		$this.minSize = null;
		$this.maxSize = null;
		$this.behavior = ss.coalesce(behavior, 'automatic');
		if (ss.isValue(minSize)) {
			$this.minSize = minSize;
		}
		else {
			delete $this['minSize'];
		}
		if (ss.isValue(maxSize)) {
			$this.maxSize = maxSize;
		}
		else {
			delete $this['maxSize'];
		}
		return $this;
	};
	$tab_SheetSize.isInstanceOfType = function() {
		return true;
	};
	global.tab.SheetSize = $tab_SheetSize;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.SheetSizeFactory
	var $tab_SheetSizeFactory = function() {
	};
	$tab_SheetSizeFactory.__typeName = 'tab.SheetSizeFactory';
	$tab_SheetSizeFactory.createAutomatic = function SheetSizeFactory$CreateAutomatic() {
		var size = $tab_SheetSize.$ctor('automatic', null, null);
		return size;
	};
	$tab_SheetSizeFactory.fromSizeConstraints = function SheetSizeFactory$FromSizeConstraints(vizSizePresModel) {
		var minHeight = vizSizePresModel.minHeight;
		var minWidth = vizSizePresModel.minWidth;
		var maxHeight = vizSizePresModel.maxHeight;
		var maxWidth = vizSizePresModel.maxWidth;
		var behavior = 'automatic';
		var minSize = null;
		var maxSize = null;
		if (minHeight === 0 && minWidth === 0) {
			if (maxHeight === 0 && maxWidth === 0) {
			}
			else {
				behavior = 'atmost';
				maxSize = $tab_Size.$ctor(maxWidth, maxHeight);
			}
		}
		else if (maxHeight === 0 && maxWidth === 0) {
			behavior = 'atleast';
			minSize = $tab_Size.$ctor(minWidth, minHeight);
		}
		else if (maxHeight === minHeight && maxWidth === minWidth && minWidth > 0) {
			behavior = 'exactly';
			minSize = $tab_Size.$ctor(minWidth, minHeight);
			maxSize = $tab_Size.$ctor(minWidth, minHeight);
		}
		else {
			behavior = 'range';
			if (minWidth === 0 && maxWidth === 0) {
				maxWidth = 2147483647;
			}
			minSize = $tab_Size.$ctor(minWidth, minHeight);
			maxSize = $tab_Size.$ctor(maxWidth, maxHeight);
		}
		return $tab_SheetSize.$ctor(behavior, minSize, maxSize);
	};
	global.tab.SheetSizeFactory = $tab_SheetSizeFactory;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.Size
	var $tab_Size = function() {
	};
	$tab_Size.__typeName = 'tab.Size';
	$tab_Size.$ctor = function(width, height) {
		var $this = new Object();
		$this.width = 0;
		$this.height = 0;
		$this.width = width;
		$this.height = height;
		return $this;
	};
	$tab_Size.isInstanceOfType = function() {
		return true;
	};
	global.tab.Size = $tab_Size;
	ss.initClass($tab_$DeferredUtil, $asm, {});
	ss.initClass($tab_$DoNothingCrossDomainHandler, $asm, {
		add_stateReadyForQuery: function DoNothingCrossDomainHandler$add_StateReadyForQuery(value) {
			this.$1$StateReadyForQueryField = ss.delegateCombine(this.$1$StateReadyForQueryField, value);
		},
		remove_stateReadyForQuery: function DoNothingCrossDomainHandler$remove_StateReadyForQuery(value) {
			this.$1$StateReadyForQueryField = ss.delegateRemove(this.$1$StateReadyForQueryField, value);
		},
		get_iframe: function DoNothingCrossDomainHandler$get_Iframe() {
			return null;
		},
		get_hostId: function DoNothingCrossDomainHandler$get_HostId() {
			return this.$hostId;
		},
		set_hostId: function DoNothingCrossDomainHandler$set_HostId(value) {
			this.$hostId = value;
		},
		get_$serverRoot: function DoNothingCrossDomainHandler$get_ServerRoot() {
			return '*';
		},
		handleEventNotification: function DoNothingCrossDomainHandler$HandleEventNotification(eventName, parameters) {
		},
		$silenceTheCompilerWarning: function DoNothingCrossDomainHandler$SilenceTheCompilerWarning() {
			this.$1$StateReadyForQueryField(null);
		}
	});
	ss.initClass($tab__ApiCommand, $asm, {
		get_name: function ApiCommand$get_Name() {
			return this.$1$NameField;
		},
		set_name: function ApiCommand$set_Name(value) {
			this.$1$NameField = value;
		},
		get_hostId: function ApiCommand$get_HostId() {
			return this.$1$HostIdField;
		},
		set_hostId: function ApiCommand$set_HostId(value) {
			this.$1$HostIdField = value;
		},
		get_commandId: function ApiCommand$get_CommandId() {
			return this.$1$CommandIdField;
		},
		set_commandId: function ApiCommand$set_CommandId(value) {
			this.$1$CommandIdField = value;
		},
		get_parameters: function ApiCommand$get_Parameters() {
			return this.$1$ParametersField;
		},
		set_parameters: function ApiCommand$set_Parameters(value) {
			this.$1$ParametersField = value;
		},
		get_isApiCommandName: function ApiCommand$get_IsApiCommandName() {
			return this.get_rawName().indexOf('api.', 0) === 0;
		},
		get_rawName: function ApiCommand$get_RawName() {
			return this.get_name().toString();
		},
		serialize: function ApiCommand$Serialize() {
			var message = [];
			message.push(this.get_name());
			message.push(this.get_commandId());
			message.push(this.get_hostId());
			if (ss.isValue(this.get_parameters())) {
				message.push(this.get_parameters());
			}
			var serializedMessage = message.join(',');
			$tab__ApiCommand.lastRequestMessage = serializedMessage;
			return serializedMessage;
		}
	});
	ss.initClass($tab__ApiObjectRegistry, $asm, {});
	ss.initClass($tab__ApiServerNotification, $asm, {
		get_workbookName: function ApiServerNotification$get_WorkbookName() {
			return this.$workbookName;
		},
		get_worksheetName: function ApiServerNotification$get_WorksheetName() {
			return this.$worksheetName;
		},
		get_data: function ApiServerNotification$get_Data() {
			return this.$data;
		},
		serialize: function ApiServerNotification$Serialize() {
			var serialized = {};
			serialized['api.workbookName'] = this.$workbookName;
			serialized['api.worksheetName'] = this.$worksheetName;
			serialized['api.commandData'] = this.$data;
			return JSON.stringify(serialized);
		}
	});
	ss.initClass($tab__ApiServerResultParser, $asm, {
		get_result: function ApiServerResultParser$get_Result() {
			return this.$commandResult;
		},
		get_data: function ApiServerResultParser$get_Data() {
			return this.$commandData;
		}
	});
	ss.initClass($tab__DeferredImpl, $asm, {
		get_promise: function DoNotUseDeferred$get_Promise() {
			return this.$promise;
		},
		all: function DoNotUseDeferred$All(promisesOrValues) {
			var allDone = new $tab__DeferredImpl();
			var length = promisesOrValues.length;
			var toResolve = length;
			var results = [];
			if (length === 0) {
				allDone.resolve(results);
				return allDone.get_promise();
			}
			var resolveOne = function(promiseOrValue, index) {
				var promise = $tab_$DeferredUtil.$coerceToTrustedPromise(promiseOrValue);
				promise.then(function(returnValue) {
					results[index] = returnValue;
					toResolve--;
					if (toResolve === 0) {
						allDone.resolve(results);
					}
					return null;
				}, function(e) {
					allDone.reject(e);
					return null;
				});
			};
			for (var i = 0; i < length; i++) {
				resolveOne(promisesOrValues[i], i);
			}
			return allDone.get_promise();
		},
		then: function DoNotUseDeferred$Then(callback, errback) {
			return this.$thenFunc(callback, errback);
		},
		resolve: function DoNotUseDeferred$Resolve(promiseOrValue) {
			return this.$resolveFunc(promiseOrValue);
		},
		reject: function DoNotUseDeferred$Reject(e) {
			return this.$resolveFunc($tab_$DeferredUtil.$rejected(e));
		},
		$preResolutionThen: function DoNotUseDeferred$PreResolutionThen(callback, errback) {
			var deferred = new $tab__DeferredImpl();
			this.$listeners.push(function(promise) {
				promise.then(callback, errback).then(ss.mkdel(deferred, deferred.resolve), ss.mkdel(deferred, deferred.reject));
			});
			return deferred.get_promise();
		},
		$transitionToFulfilled: function DoNotUseDeferred$TransitionToFulfilled(completed) {
			var completedPromise = $tab_$DeferredUtil.$coerceToTrustedPromise(completed);
			this.$thenFunc = completedPromise.then;
			this.$resolveFunc = $tab_$DeferredUtil.$coerceToTrustedPromise;
			for (var i = 0; i < this.$listeners.length; i++) {
				var listener = this.$listeners[i];
				listener(completedPromise);
			}
			this.$listeners = null;
			return completedPromise;
		}
	});
	ss.initClass($tab__Param, $asm, {});
	ss.initClass($tab__PromiseImpl, $asm, {
		always: function DoNotUsePromise$Always(callback) {
			return ss.cast(this.then(callback, ss.cast(callback, Function)), $tab__PromiseImpl);
		},
		otherwise: function DoNotUsePromise$Otherwise(errback) {
			return ss.cast(this.then(null, errback), $tab__PromiseImpl);
		}
	});
	ss.initClass($tab__Rect, $asm, {
		intersect: function TabRect$Intersect(other) {
			var left = Math.max(this.left, other.left);
			var top = Math.max(this.top, other.top);
			var right = Math.min(this.left + this.width, other.left + other.width);
			var bottom = Math.min(this.top + this.height, other.top + other.height);
			if (right <= left || bottom <= top) {
				return new $tab__Rect(0, 0, 0, 0);
			}
			return new $tab__Rect(left, top, right - left, bottom - top);
		}
	});
	ss.initClass($tab__SharedSheetImpl, $asm, {
		get_sheet: null,
		get_name: function SharedSheetImpl$get_Name() {
			return this.$name;
		},
		get_size: function SharedSheetImpl$get_Size() {
			return this.$size;
		},
		get_sheetType: function SharedSheetImpl$get_SheetType() {
			return this.$sheetType;
		}
	});
	ss.initClass($tab__SharedDashboardImpl, $asm, {
		get_sheet: function SharedDashboardImpl$get_Sheet() {
			return this.get_dashboard();
		},
		get_dashboard: null,
		getObjects: function SharedDashboardImpl$GetObjects() {
			throw new ss.NotImplementedException();
		},
		getWorksheets: function SharedDashboardImpl$GetWorksheets() {
			throw new ss.NotImplementedException();
		}
	}, $tab__SharedSheetImpl);
	ss.initClass($tab__SharedWorksheetImpl, $asm, {
		get_sheet: function SharedWorksheetImpl$get_Sheet() {
			return this.get_worksheet();
		},
		get_worksheet: null,
		get_parentDashboardImpl: function SharedWorksheetImpl$get_ParentDashboardImpl() {
			return this.$parentDashboardImpl;
		},
		get_parentDashboard: function SharedWorksheetImpl$get_ParentDashboard() {
			if (ss.isValue(this.$parentDashboardImpl)) {
				return this.$parentDashboardImpl.get_dashboard();
			}
			return null;
		},
		getSummaryDataAsync: function SharedWorksheetImpl$GetSummaryDataAsync(options) {
			throw new ss.NotImplementedException(options.toString());
		},
		getUnderlyingDataAsync: function SharedWorksheetImpl$GetUnderlyingDataAsync(options) {
			throw new ss.NotImplementedException(options.toString());
		}
	}, $tab__SharedSheetImpl);
	ss.initClass($tab__SheetInfoImpl, $asm, {}, Object);
	ss.initClass($tab__TableauException, $asm, {});
	ss.initClass($tab__Utility, $asm, {});
	ss.initEnum($tab_ApiDashboardObjectType, $asm, { blank: 'blank', worksheet: 'worksheet', quickFilter: 'quickFilter', parameterControl: 'parameterControl', pageFilter: 'pageFilter', legend: 'legend', title: 'title', text: 'text', image: 'image', webPage: 'webPage', addIn: 'addIn' }, true);
	ss.initEnum($tab_ApiDateRangeType, $asm, { last: 'last', lastn: 'lastn', next: 'next', nextn: 'nextn', curr: 'curr', todate: 'todate' }, true);
	ss.initEnum($tab_ApiDeviceType, $asm, { default: 'default', desktop: 'desktop', tablet: 'tablet', phone: 'phone' }, true);
	ss.initClass($tab_ApiEnumConverter, $asm, {});
	ss.initEnum($tab_ApiErrorCode, $asm, { internalError: 'internalError', serverError: 'serverError', invalidAggregationFieldName: 'invalidAggregationFieldName', invalidToolbarButtonName: 'invalidToolbarButtonName', invalidParameter: 'invalidParameter', invalidUrl: 'invalidUrl', staleDataReference: 'staleDataReference', vizAlreadyInManager: 'vizAlreadyInManager', noUrlOrParentElementNotFound: 'noUrlOrParentElementNotFound', invalidFilterFieldName: 'invalidFilterFieldName', invalidFilterFieldValue: 'invalidFilterFieldValue', invalidFilterFieldNameOrValue: 'invalidFilterFieldNameOrValue', filterCannotBePerformed: 'filterCannotBePerformed', notActiveSheet: 'notActiveSheet', invalidCustomViewName: 'invalidCustomViewName', missingRangeNForRelativeDateFilters: 'missingRangeNForRelativeDateFilters', missingMaxSize: 'missingMaxSize', missingMinSize: 'missingMinSize', missingMinMaxSize: 'missingMinMaxSize', invalidSize: 'invalidSize', invalidSizeBehaviorOnWorksheet: 'invalidSizeBehaviorOnWorksheet', sheetNotInWorkbook: 'sheetNotInWorkbook', indexOutOfRange: 'indexOutOfRange', downloadWorkbookNotAllowed: 'downloadWorkbookNotAllowed', nullOrEmptyParameter: 'nullOrEmptyParameter', browserNotCapable: 'browserNotCapable', unsupportedEventName: 'unsupportedEventName', invalidDateParameter: 'invalidDateParameter', invalidSelectionFieldName: 'invalidSelectionFieldName', invalidSelectionValue: 'invalidSelectionValue', invalidSelectionDate: 'invalidSelectionDate', noUrlForHiddenWorksheet: 'noUrlForHiddenWorksheet', maxVizResizeAttempts: 'maxVizResizeAttempts' }, true);
	ss.initEnum($tab_ApiFieldAggregationType, $asm, { SUM: 'SUM', AVG: 'AVG', MIN: 'MIN', MAX: 'MAX', STDEV: 'STDEV', STDEVP: 'STDEVP', VAR: 'VAR', VARP: 'VARP', COUNT: 'COUNT', COUNTD: 'COUNTD', MEDIAN: 'MEDIAN', ATTR: 'ATTR', NONE: 'NONE', PERCENTILE: 'PERCENTILE', YEAR: 'YEAR', QTR: 'QTR', MONTH: 'MONTH', DAY: 'DAY', HOUR: 'HOUR', MINUTE: 'MINUTE', SECOND: 'SECOND', WEEK: 'WEEK', WEEKDAY: 'WEEKDAY', MONTHYEAR: 'MONTHYEAR', MDY: 'MDY', END: 'END', TRUNC_YEAR: 'TRUNC_YEAR', TRUNC_QTR: 'TRUNC_QTR', TRUNC_MONTH: 'TRUNC_MONTH', TRUNC_WEEK: 'TRUNC_WEEK', TRUNC_DAY: 'TRUNC_DAY', TRUNC_HOUR: 'TRUNC_HOUR', TRUNC_MINUTE: 'TRUNC_MINUTE', TRUNC_SECOND: 'TRUNC_SECOND', QUART1: 'QUART1', QUART3: 'QUART3', SKEWNESS: 'SKEWNESS', KURTOSIS: 'KURTOSIS', INOUT: 'INOUT', SUM_XSQR: 'SUM_XSQR', USER: 'USER' }, true);
	ss.initEnum($tab_ApiFieldRoleType, $asm, { dimension: 'dimension', measure: 'measure', unknown: 'unknown' }, true);
	ss.initEnum($tab_ApiFilterType, $asm, { categorical: 'categorical', quantitative: 'quantitative', hierarchical: 'hierarchical', relativedate: 'relativedate' }, true);
	ss.initEnum($tab_ApiFilterUpdateType, $asm, { all: 'all', replace: 'replace', add: 'add', remove: 'remove' }, true);
	ss.initClass($tab_ApiMessageHandler, $asm, {
		handleEventNotification: function ApiMessageHandler$HandleEventNotification(eventName, eventParameters) {
			throw new ss.NotImplementedException();
		}
	});
	ss.initClass($tab_ApiMessagingOptions, $asm, {
		get_handler: function ApiMessagingOptions$get_Handler() {
			return this.$handler;
		},
		sendCommand: function(T) {
			return function ApiMessagingOptions$SendCommand(commandParameters, returnHandler) {
				this.$router.sendCommand(T).call(this.$router, this.$handler, commandParameters, returnHandler);
			};
		},
		dispose: function ApiMessagingOptions$Dispose() {
			this.$router.unregisterHandler(this.$handler);
		}
	});
	ss.initEnum($tab_ApiNullOption, $asm, { nullValues: 'nullValues', nonNullValues: 'nonNullValues', allValues: 'allValues' }, true);
	ss.initEnum($tab_ApiParameterAllowableValuesType, $asm, { all: 'all', list: 'list', range: 'range' }, true);
	ss.initEnum($tab_ApiParameterDataType, $asm, { float: 'float', integer: 'integer', string: 'string', boolean: 'boolean', date: 'date', datetime: 'datetime' }, true);
	ss.initEnum($tab_ApiPeriodType, $asm, { year: 'year', quarter: 'quarter', month: 'month', week: 'week', day: 'day', hour: 'hour', minute: 'minute', second: 'second' }, true);
	ss.initEnum($tab_ApiSelectionUpdateType, $asm, { replace: 'replace', add: 'add', remove: 'remove' }, true);
	ss.initEnum($tab_ApiSheetSizeBehavior, $asm, { automatic: 'automatic', exactly: 'exactly', range: 'range', atleast: 'atleast', atmost: 'atmost' }, true);
	ss.initEnum($tab_ApiSheetType, $asm, { worksheet: 'worksheet', dashboard: 'dashboard', story: 'story' }, true);
	ss.initEnum($tab_ApiTableauEventName, $asm, { customviewload: 'customviewload', customviewremove: 'customviewremove', customviewsave: 'customviewsave', customviewsetdefault: 'customviewsetdefault', filterchange: 'filterchange', firstinteractive: 'firstinteractive', firstvizsizeknown: 'firstvizsizeknown', marksselection: 'marksselection', markshighlight: 'markshighlight', parametervaluechange: 'parametervaluechange', storypointswitch: 'storypointswitch', tabswitch: 'tabswitch', toolbarstatechange: 'toolbarstatechange', vizresize: 'vizresize' }, true);
	ss.initEnum($tab_ApiToolbarButtonName, $asm, { redo: 'redo', undo: 'undo' }, true);
	ss.initEnum($tab_ApiToolbarPosition, $asm, { top: 'top', bottom: 'bottom' }, true);
	ss.initClass($tab_CrossDomainMessager, $asm, {
		registerHandler: function CrossDomainMessager$RegisterHandler(handler) {
			var uniqueId = 'host' + this.$nextHandlerId;
			if (ss.isValue(handler.get_hostId()) || ss.isValue(this.$handlers[handler.get_hostId()])) {
				throw $tab__TableauException.createInternalError("Host '" + handler.get_hostId() + "' is already registered.");
			}
			this.$nextHandlerId++;
			handler.set_hostId(uniqueId);
			this.$handlers[uniqueId] = handler;
			handler.add_stateReadyForQuery(ss.mkdel(this, this.$handleStateReadyForQuery));
		},
		unregisterHandler: function CrossDomainMessager$UnregisterHandler(handler) {
			if (ss.isValue(handler.get_hostId()) || ss.isValue(this.$handlers[handler.get_hostId()])) {
				delete this.$handlers[handler.get_hostId()];
				handler.remove_stateReadyForQuery(ss.mkdel(this, this.$handleStateReadyForQuery));
			}
		},
		sendCommand: function(T) {
			return function CrossDomainMessager$SendCommand(source, commandParameters, returnHandler) {
				var iframe = source.get_iframe();
				var handlerId = source.get_hostId();
				if (!$tab__Utility.hasWindowPostMessage() || ss.isNullOrUndefined(iframe) || ss.isNullOrUndefined(iframe.contentWindow)) {
					return;
				}
				var commandId = $tab__ApiCommand.generateNextCommandId();
				var callbackMap = this.$commandCallbacks[handlerId];
				if (ss.isNullOrUndefined(callbackMap)) {
					callbackMap = {};
					this.$commandCallbacks[handlerId] = callbackMap;
				}
				callbackMap[commandId] = returnHandler;
				var commandName = returnHandler.get_commandName();
				var serializedParams = null;
				if (ss.isValue(commandParameters)) {
					serializedParams = JSON.stringify(commandParameters);
				}
				var command = new $tab__ApiCommand(commandName, commandId, handlerId, serializedParams);
				var message = command.serialize();
				if ($tab__Utility.isPostMessageSynchronous()) {
					window.setTimeout(function() {
						iframe.contentWindow.postMessage(message, '*');
					}, 0);
				}
				else {
					iframe.contentWindow.postMessage(message, '*');
				}
			};
		},
		$handleStateReadyForQuery: function CrossDomainMessager$HandleStateReadyForQuery(source) {
			var queue = this.$commandReturnAfterStateReadyQueues[source.get_hostId()];
			if ($tab__Utility.isNullOrEmpty(queue)) {
				return;
			}
			while (queue.length > 0) {
				var successCallback = queue.pop();
				if (ss.isValue(successCallback)) {
					successCallback();
				}
			}
		},
		$handleCrossDomainMessage: function CrossDomainMessager$HandleCrossDomainMessage(e) {
			var messageEvent = ss.cast(e, MessageEvent);
			if (ss.isNullOrUndefined(messageEvent.data)) {
				return;
			}
			var command = $tab__ApiCommand.parse(messageEvent.data.toString());
			var rawName = command.get_rawName();
			var hostId = command.get_hostId();
			var handler = this.$handlers[hostId];
			if (ss.isNullOrUndefined(handler) || !ss.referenceEquals(handler.get_hostId(), command.get_hostId())) {
				handler = this.$findHostIdByDomComparison(messageEvent);
			}
			if (command.get_isApiCommandName()) {
				if (ss.referenceEquals(command.get_commandId(), $tab__ApiCommand.crossDomainEventNotificationId)) {
					handler.handleEventNotification(command.get_name(), command.get_parameters());
					if (command.get_name() === 'api.FirstVizSizeKnownEvent') {
						messageEvent.source.postMessage('tableau.bootstrap', '*');
					}
				}
				else {
					this.$handleCrossDomainResponse(command);
				}
			}
			else if (!ss.isNullOrUndefined(this.$legacyHandler)) {
				this.$legacyHandler(rawName, handler);
			}
		},
		$handleCrossDomainResponse: function CrossDomainMessager$HandleCrossDomainResponse(command) {
			var commandCallbackMap = this.$commandCallbacks[command.get_hostId()];
			var returnHandler = (ss.isValue(commandCallbackMap) ? commandCallbackMap[command.get_commandId()] : null);
			if (ss.isNullOrUndefined(returnHandler)) {
				return;
			}
			delete commandCallbackMap[command.get_commandId()];
			if (command.get_name() !== returnHandler.get_commandName()) {
				return;
			}
			var crossDomainResult = new $tab__ApiServerResultParser(command.get_parameters());
			var commandResult = crossDomainResult.get_data();
			if (crossDomainResult.get_result() === 'api.success') {
				switch (returnHandler.get_successCallbackTiming()) {
					case 0: {
						if (ss.isValue(returnHandler.get_successCallback())) {
							returnHandler.get_successCallback()(commandResult);
						}
						break;
					}
					case 1: {
						var postponedCallback = function() {
							if (ss.isValue(returnHandler.get_successCallback())) {
								returnHandler.get_successCallback()(commandResult);
							}
						};
						var queue = this.$commandReturnAfterStateReadyQueues[command.get_hostId()];
						if (ss.isNullOrUndefined(queue)) {
							queue = [];
							this.$commandReturnAfterStateReadyQueues[command.get_hostId()] = queue;
						}
						queue.push(postponedCallback);
						break;
					}
					default: {
						throw $tab__TableauException.createInternalError('Unknown timing value: ' + returnHandler.get_successCallbackTiming());
					}
				}
			}
			else if (ss.isValue(returnHandler.get_errorCallback())) {
				var remoteError = crossDomainResult.get_result() === 'api.remotefailed';
				var errorMessage = (ss.isValue(commandResult) ? commandResult.toString() : '');
				returnHandler.get_errorCallback()(remoteError, errorMessage);
			}
		},
		$findHostIdByDomComparison: function CrossDomainMessager$FindHostIdByDomComparison(messageEvent) {
			var $t1 = new ss.ObjectEnumerator(this.$handlers);
			try {
				while ($t1.moveNext()) {
					var pair = $t1.current();
					if (this.$handlers.hasOwnProperty(pair.key) && ss.referenceEquals(pair.value.get_iframe().contentWindow, messageEvent.source)) {
						return pair.value;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return new $tab_$DoNothingCrossDomainHandler();
		}
	});
	ss.initEnum($tab_DataType, $asm, { float: 'float', integer: 'integer', string: 'string', boolean: 'boolean', date: 'date', datetime: 'datetime' }, true);
	ss.initClass($tab_DataValue, $asm, {}, Object);
	ss.initClass($tab_HostedApiMessageHandler, $asm, {
		add_stateReadyForQuery: function HostedApiMessageHandler$add_StateReadyForQuery(value) {
			this.$2$StateReadyForQueryField = ss.delegateCombine(this.$2$StateReadyForQueryField, value);
		},
		remove_stateReadyForQuery: function HostedApiMessageHandler$remove_StateReadyForQuery(value) {
			this.$2$StateReadyForQueryField = ss.delegateRemove(this.$2$StateReadyForQueryField, value);
		},
		get_hostId: function HostedApiMessageHandler$get_HostId() {
			return null;
		},
		set_hostId: function HostedApiMessageHandler$set_HostId(value) {
		},
		get_iframe: function HostedApiMessageHandler$get_Iframe() {
			return null;
		}
	}, $tab_ApiMessageHandler);
	ss.initClass($tab_HostedApiMessageRouter, $asm, {
		registerHandler: function HostedApiMessageRouter$RegisterHandler(handler) {
			this.$crossDomainMessager.registerHandler(handler);
		},
		unregisterHandler: function HostedApiMessageRouter$UnregisterHandler(handler) {
			this.$crossDomainMessager.unregisterHandler(handler);
		},
		sendCommand: function(T) {
			return function HostedApiMessageRouter$SendCommand(source, commandParameters, returnHandler) {
				this.$crossDomainMessager.sendCommand(T).call(this.$crossDomainMessager, source, commandParameters, returnHandler);
			};
		}
	});
	ss.initClass($tab_Point, $asm, {}, Object);
	ss.initClass($tab_PublicEnums, $asm, {});
	ss.initClass($tab_SheetSize, $asm, {}, Object);
	ss.initClass($tab_SheetSizeFactory, $asm, {});
	ss.initClass($tab_Size, $asm, {}, Object);
	(function() {
		$tab__ApiCommand.crossDomainEventNotificationId = 'xdomainSourceId';
		$tab__ApiCommand.lastRequestMessage = null;
		$tab__ApiCommand.lastResponseMessage = null;
		$tab__ApiCommand.lastClientInfoResponseMessage = null;
		$tab__ApiCommand.$nextCommandId = 0;
	})();
	(function() {
		var globalState = window['_ApiObjectRegistryGlobalState'];
		var $t1 = globalState;
		if (ss.isNullOrUndefined($t1)) {
			$t1 = new Object();
		}
		window['_ApiObjectRegistryGlobalState'] = $t1;
		window._ApiObjectRegistryGlobalState.creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry || {};
		window._ApiObjectRegistryGlobalState.singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry || {};
	})();
	(function() {
		var ns = global.tableauSoftware;
		ns.DeviceType = { DEFAULT: 'default', DESKTOP: 'desktop', TABLET: 'tablet', PHONE: 'phone' };
		ns.DashboardObjectType = { BLANK: 'blank', WORKSHEET: 'worksheet', QUICK_FILTER: 'quickFilter', PARAMETER_CONTROL: 'parameterControl', PAGE_FILTER: 'pageFilter', LEGEND: 'legend', TITLE: 'title', TEXT: 'text', IMAGE: 'image', WEB_PAGE: 'webPage', ADDIN: 'addIn' };
		ns.DataType = { FLOAT: 'float', INTEGER: 'integer', STRING: 'string', BOOLEAN: 'boolean', DATE: 'date', DATETIME: 'datetime' };
		ns.DateRangeType = { LAST: 'last', LASTN: 'lastn', NEXT: 'next', NEXTN: 'nextn', CURR: 'curr', TODATE: 'todate' };
		ns.ErrorCode = { INTERNAL_ERROR: 'internalError', SERVER_ERROR: 'serverError', INVALID_AGGREGATION_FIELD_NAME: 'invalidAggregationFieldName', INVALID_TOOLBAR_BUTTON_NAME: 'invalidToolbarButtonName', INVALID_PARAMETER: 'invalidParameter', INVALID_URL: 'invalidUrl', STALE_DATA_REFERENCE: 'staleDataReference', VIZ_ALREADY_IN_MANAGER: 'vizAlreadyInManager', NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: 'noUrlOrParentElementNotFound', INVALID_FILTER_FIELDNAME: 'invalidFilterFieldName', INVALID_FILTER_FIELDVALUE: 'invalidFilterFieldValue', INVALID_FILTER_FIELDNAME_OR_VALUE: 'invalidFilterFieldNameOrValue', FILTER_CANNOT_BE_PERFORMED: 'filterCannotBePerformed', NOT_ACTIVE_SHEET: 'notActiveSheet', INVALID_CUSTOM_VIEW_NAME: 'invalidCustomViewName', MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: 'missingRangeNForRelativeDateFilters', MISSING_MAX_SIZE: 'missingMaxSize', MISSING_MIN_SIZE: 'missingMinSize', MISSING_MINMAX_SIZE: 'missingMinMaxSize', INVALID_SIZE: 'invalidSize', INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: 'invalidSizeBehaviorOnWorksheet', SHEET_NOT_IN_WORKBOOK: 'sheetNotInWorkbook', INDEX_OUT_OF_RANGE: 'indexOutOfRange', DOWNLOAD_WORKBOOK_NOT_ALLOWED: 'downloadWorkbookNotAllowed', NULL_OR_EMPTY_PARAMETER: 'nullOrEmptyParameter', BROWSER_NOT_CAPABLE: 'browserNotCapable', UNSUPPORTED_EVENT_NAME: 'unsupportedEventName', INVALID_DATE_PARAMETER: 'invalidDateParameter', INVALID_SELECTION_FIELDNAME: 'invalidSelectionFieldName', INVALID_SELECTION_VALUE: 'invalidSelectionValue', INVALID_SELECTION_DATE: 'invalidSelectionDate', NO_URL_FOR_HIDDEN_WORKSHEET: 'noUrlForHiddenWorksheet', MAX_VIZ_RESIZE_ATTEMPTS: 'maxVizResizeAttempts' };
		ns.FieldAggregationType = { SUM: 'SUM', AVG: 'AVG', MIN: 'MIN', MAX: 'MAX', STDEV: 'STDEV', STDEVP: 'STDEVP', VAR: 'VAR', VARP: 'VARP', COUNT: 'COUNT', COUNTD: 'COUNTD', MEDIAN: 'MEDIAN', ATTR: 'ATTR', NONE: 'NONE', PERCENTILE: 'PERCENTILE', YEAR: 'YEAR', QTR: 'QTR', MONTH: 'MONTH', DAY: 'DAY', HOUR: 'HOUR', MINUTE: 'MINUTE', SECOND: 'SECOND', WEEK: 'WEEK', WEEKDAY: 'WEEKDAY', MONTHYEAR: 'MONTHYEAR', MDY: 'MDY', END: 'END', TRUNC_YEAR: 'TRUNC_YEAR', TRUNC_QTR: 'TRUNC_QTR', TRUNC_MONTH: 'TRUNC_MONTH', TRUNC_WEEK: 'TRUNC_WEEK', TRUNC_DAY: 'TRUNC_DAY', TRUNC_HOUR: 'TRUNC_HOUR', TRUNC_MINUTE: 'TRUNC_MINUTE', TRUNC_SECOND: 'TRUNC_SECOND', QUART1: 'QUART1', QUART3: 'QUART3', SKEWNESS: 'SKEWNESS', KURTOSIS: 'KURTOSIS', INOUT: 'INOUT', SUM_XSQR: 'SUM_XSQR', USER: 'USER' };
		ns.FieldRoleType = { DIMENSION: 'dimension', MEASURE: 'measure', UNKNOWN: 'unknown' };
		ns.FilterUpdateType = { ALL: 'all', REPLACE: 'replace', ADD: 'add', REMOVE: 'remove' };
		ns.FilterType = { CATEGORICAL: 'categorical', QUANTITATIVE: 'quantitative', HIERARCHICAL: 'hierarchical', RELATIVEDATE: 'relativedate' };
		ns.NullOption = { NULL_VALUES: 'nullValues', NON_NULL_VALUES: 'nonNullValues', ALL_VALUES: 'allValues' };
		ns.ParameterAllowableValuesType = { ALL: 'all', LIST: 'list', RANGE: 'range' };
		ns.ParameterDataType = { FLOAT: 'float', INTEGER: 'integer', STRING: 'string', BOOLEAN: 'boolean', DATE: 'date', DATETIME: 'datetime' };
		ns.PeriodType = { YEAR: 'year', QUARTER: 'quarter', MONTH: 'month', WEEK: 'week', DAY: 'day', HOUR: 'hour', MINUTE: 'minute', SECOND: 'second' };
		ns.SelectionUpdateType = { REPLACE: 'replace', ADD: 'add', REMOVE: 'remove' };
		ns.SheetSizeBehavior = { AUTOMATIC: 'automatic', EXACTLY: 'exactly', RANGE: 'range', ATLEAST: 'atleast', ATMOST: 'atmost' };
		ns.SheetType = { WORKSHEET: 'worksheet', DASHBOARD: 'dashboard', STORY: 'story' };
		ns.TableauEventName = { CUSTOM_VIEW_LOAD: 'customviewload', CUSTOM_VIEW_REMOVE: 'customviewremove', CUSTOM_VIEW_SAVE: 'customviewsave', CUSTOM_VIEW_SET_DEFAULT: 'customviewsetdefault', FILTER_CHANGE: 'filterchange', FIRST_INTERACTIVE: 'firstinteractive', FIRST_VIZ_SIZE_KNOWN: 'firstvizsizeknown', MARKS_SELECTION: 'marksselection', MARKS_HIGHLIGHT: 'markshighlight', PARAMETER_VALUE_CHANGE: 'parametervaluechange', STORY_POINT_SWITCH: 'storypointswitch', TAB_SWITCH: 'tabswitch', TOOLBAR_STATE_CHANGE: 'toolbarstatechange', VIZ_RESIZE: 'vizresize' };
		ns.ToolbarPosition = { TOP: 'top', BOTTOM: 'bottom' };
		ns.ToolbarButtonName = { REDO: 'redo', UNDO: 'undo' };
	})();
})();
// END ApiShared
/*! BEGIN ApiDomain */

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'vqlapidomain');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandInputMapping
	var $tab_$CommandInputMapping = function(toDoc, param, isOptional) {
		this.$1$MappingField = null;
		this.$1$DocParamField = null;
		this.$1$IsOptionalField = false;
		this.set_$mapping(toDoc);
		this.set_$docParam(param);
		this.set_$isOptional(isOptional);
	};
	$tab_$CommandInputMapping.__typeName = 'tab.$CommandInputMapping';
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiCrossDomainPresModelsFactory
	var $tab_ApiCrossDomainPresModelsFactory = function() {
	};
	$tab_ApiCrossDomainPresModelsFactory.__typeName = 'tab.ApiCrossDomainPresModelsFactory';
	$tab_ApiCrossDomainPresModelsFactory.newClientInfo = function ApiCrossDomainPresModelsFactory$NewClientInfo(isAutoUpdate, isDownloadAllowed, workbookName, currentSheetName, instanceId, publishedSheets, dashboardZones, story) {
		var pm = new Object();
		pm.isAutoUpdate = isAutoUpdate;
		pm.isDownloadAllowed = isDownloadAllowed;
		pm.workbookName = workbookName;
		pm.instanceId = instanceId;
		pm.currentSheetName = currentSheetName;
		pm.publishedSheets = publishedSheets;
		pm.dashboardZones = dashboardZones;
		pm.story = story;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAutoUpdateState = function ApiCrossDomainPresModelsFactory$NewAutoUpdateState(isAutoUpdate) {
		var pm = new Object();
		pm.isAutoUpdate = isAutoUpdate;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCommandError = function ApiCrossDomainPresModelsFactory$NewCommandError(errorCode, additionalInformation) {
		var pm = new Object();
		pm.errorCode = errorCode;
		pm.additionalInformation = additionalInformation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newSheetInfo = function ApiCrossDomainPresModelsFactory$NewSheetInfo(name, sheetType, minWidth, minHeight, maxWidth, maxHeight, repositoryUrl) {
		var sizeConstraints = new Object();
		sizeConstraints.maxHeight = maxHeight;
		sizeConstraints.maxWidth = maxWidth;
		sizeConstraints.minHeight = minHeight;
		sizeConstraints.minWidth = minWidth;
		var pm = new Object();
		pm.name = name;
		pm.sizeConstraints = sizeConstraints;
		pm.repositoryUrl = repositoryUrl;
		pm.sheetType = sheetType;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newContainedSheetInfo = function ApiCrossDomainPresModelsFactory$NewContainedSheetInfo(name, sheetType, zoneId, dashboardZones) {
		var pm = new Object();
		pm.name = name;
		pm.sheetType = sheetType;
		pm.zoneId = zoneId;
		pm.dashboardZones = dashboardZones;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDashboardZone = function ApiCrossDomainPresModelsFactory$NewDashboardZone(name, zoneId, zoneType, height, width, x, y) {
		var pm = new Object();
		pm.name = name;
		pm.zoneId = zoneId;
		pm.zoneType = zoneType;
		pm.height = height;
		pm.width = width;
		pm.x = x;
		pm.y = y;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newStory = function ApiCrossDomainPresModelsFactory$NewStory(activeStoryPointIndex, storyPoints) {
		var pm = new Object();
		pm.activeStoryPointIndex = activeStoryPointIndex;
		pm.storyPoints = storyPoints;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newStoryPoint = function ApiCrossDomainPresModelsFactory$NewStoryPoint(caption, index, storyPointId, isUpdated, containedSheetInfo) {
		var pm = new Object();
		pm.caption = caption;
		pm.index = index;
		pm.storyPointId = storyPointId;
		pm.isUpdated = isUpdated;
		pm.containedSheetInfo = containedSheetInfo;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.$newFilter = function ApiCrossDomainPresModelsFactory$NewFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation) {
		var pm = new Object();
		pm.fieldName = fieldName;
		pm.filterType = filterType;
		pm.caption = caption;
		pm.dataSourceName = dataSourceName;
		pm.fieldRole = fieldRole;
		pm.fieldAggregation = fieldAggregation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCategoricalFilter = function ApiCrossDomainPresModelsFactory$NewCategoricalFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, isExclude, appliedValues) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.isExclude = isExclude;
		pm.appliedValues = appliedValues;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newQuantitativeFilter = function ApiCrossDomainPresModelsFactory$NewQuantitativeFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, domainMinValue, domainMaxValue, minValue, maxValue, includeNullValues) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.domainMinValue = domainMinValue;
		pm.domainMaxValue = domainMaxValue;
		pm.minValue = minValue;
		pm.maxValue = maxValue;
		pm.includeNullValues = includeNullValues;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newHierarchicalFilter = function ApiCrossDomainPresModelsFactory$NewHierarchicalFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, levels) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.levels = levels;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newRelativeDateFilter = function ApiCrossDomainPresModelsFactory$NewRelativeDateFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, periodType, rangeType, rangeN) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.periodType = periodType;
		pm.rangeType = rangeType;
		pm.rangeN = rangeN;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDataSourcesForWorksheet = function ApiCrossDomainPresModelsFactory$NewDataSourcesForWorksheet(worksheetName, dataSources) {
		var pm = new Object();
		pm.worksheetName = worksheetName;
		pm.dataSources = dataSources;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDataSource = function ApiCrossDomainPresModelsFactory$NewDataSource(name, fields, isPrimary) {
		var pm = new Object();
		pm.name = name;
		pm.fields = fields;
		pm.isPrimary = isPrimary;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newField = function ApiCrossDomainPresModelsFactory$NewField(name, role, aggregation) {
		var pm = new Object();
		pm.name = name;
		pm.role = role;
		pm.aggregation = aggregation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCustomViewsInfo = function ApiCrossDomainPresModelsFactory$NewCustomViewsInfo(customViewLoaded, defaultCustomViewId, currentView, customViews) {
		var pm = new Object();
		pm.customViewLoaded = customViewLoaded;
		pm.defaultCustomViewId = defaultCustomViewId;
		pm.currentView = currentView;
		pm.customViews = customViews;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCustomView = function ApiCrossDomainPresModelsFactory$NewCustomView(id, name, urlId, url, startViewId, isPublic, owner) {
		var pm = new Object();
		pm.id = id;
		pm.name = name;
		pm.urlId = urlId;
		pm.url = url;
		pm.startViewId = startViewId;
		pm.isPublic = isPublic;
		pm.owner = owner;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUser = function ApiCrossDomainPresModelsFactory$NewUser(id, friendlyName, username) {
		var pm = new Object();
		pm.id = id;
		pm.friendlyName = friendlyName;
		pm.username = username;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUnderlyingDataTablePM = function ApiCrossDomainPresModelsFactory$NewUnderlyingDataTablePM(dataTable, headers, isSummary) {
		var pm = new Object();
		pm.dataTable = dataTable;
		pm.headers = headers;
		pm.isSummary = isSummary;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUnderlyingDataColumnsPM = function ApiCrossDomainPresModelsFactory$NewUnderlyingDataColumnsPM(dataType, fieldName, isReferenced, index) {
		var pm = new Object();
		pm.dataType = dataType;
		pm.fieldName = fieldName;
		pm.isReferenced = isReferenced;
		pm.index = index;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newToolbarStatePM = function ApiCrossDomainPresModelsFactory$NewToolbarStatePM(canUndo, canRedo, canRevert, isPaused, canRefreshData, canShowCustomViews, canShowPerformance, canShowDataAlert, canShowSubscribe, canShowShare, canShowDownload) {
		var pm = new Object();
		pm.canUndo = canUndo;
		pm.canRedo = canRedo;
		pm.canRevert = canRevert;
		pm.isPaused = isPaused;
		pm.canRefreshData = canRefreshData;
		pm.canShowCustomViews = canShowCustomViews;
		pm.canShowPerformance = canShowPerformance;
		pm.canShowDataAlert = canShowDataAlert;
		pm.canShowSubscribe = canShowSubscribe;
		pm.canShowShare = canShowShare;
		pm.canShowDownload = canShowDownload;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInInstancePM = function ApiCrossDomainPresModelsFactory$NewAddInInstancePM(instancePm) {
		var pm = new Object();
		pm.locator = $tab_ApiCrossDomainPresModelsFactory.newAddInLocatorPM(instancePm.addInLocatorPresModel);
		pm.url = instancePm.addInRegistrationPresModel.url;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInLocatorPM = function ApiCrossDomainPresModelsFactory$NewAddInLocatorPM(locator) {
		var pm = new Object();
		pm.dashboardPath = new Object();
		pm.dashboardPath.flipboardZoneID = locator.sheetPath.flipboardZoneId;
		pm.dashboardPath.storyPointID = locator.sheetPath.storyPointId;
		pm.dashboardPath.storyboard = locator.sheetPath.storyboard;
		pm.dashboardPath.sheetName = locator.sheetPath.sheetName;
		pm.dashboardPath.isDashboard = locator.sheetPath.isDashboard;
		pm.instanceId = locator.addInInstanceId;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInBootstrapInfoPM(bootstrapPm) {
		var pm = new Object();
		pm.addinDashboardInfo = $tab_ApiCrossDomainPresModelsFactory.newAddInDashboardInfoPM(bootstrapPm.addInDashboardInfoPresModel);
		pm.addInSettingsInfo = $tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM(bootstrapPm.addInSettingsInfo);
		pm.addInEnvironment = $tab_ApiCrossDomainPresModelsFactory.newAddInEnvironmentInfoPM(bootstrapPm.addInEnvironmentPresModel);
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInDashboardInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInDashboardInfoPM(dashboardInfoPm) {
		var pm = new Object();
		pm.name = dashboardInfoPm.dashboardPresModel.sheetPath.sheetName;
		pm.addInZoneId = dashboardInfoPm.zoneId;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInSettingsInfoPM(settingsInfoPm) {
		var pm = new Object();
		pm.settingsValues = settingsInfoPm.addInSettings || {};
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInEnvironmentInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInEnvironmentInfoPM(environmentPresModel) {
		var pm = new Object();
		pm.addInContext = environmentPresModel.addInContext;
		pm.addInMode = environmentPresModel.addInMode;
		pm.addInLanguage = environmentPresModel.addInLanguage;
		pm.addInLocale = environmentPresModel.addInLocale;
		pm.tableauVersion = environmentPresModel.tableauVersion;
		pm.operatingSystem = environmentPresModel.operatingSystem;
		pm.apiVersion = environmentPresModel.apiVersion;
		return pm;
	};
	global.tab.ApiCrossDomainPresModelsFactory = $tab_ApiCrossDomainPresModelsFactory;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiParamMappingRegistry
	var $tab_ApiParamMappingRegistry = function() {
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_ApiToDocParameter]).call(this);
	};
	$tab_ApiParamMappingRegistry.__typeName = 'tab.ApiParamMappingRegistry';
	global.tab.ApiParamMappingRegistry = $tab_ApiParamMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiPresModelsConverter
	var $tab_ApiPresModelsConverter = function() {
	};
	$tab_ApiPresModelsConverter.__typeName = 'tab.ApiPresModelsConverter';
	$tab_ApiPresModelsConverter.getApiAddInInstancePresModel = function ApiPresModelsConverter$GetApiAddInInstancePresModel(addInInstance) {
		return $tab_ApiCrossDomainPresModelsFactory.newAddInInstancePM(addInInstance);
	};
	$tab_ApiPresModelsConverter.getApiAddInBootstrapInfoPresModel = function ApiPresModelsConverter$GetApiAddInBootstrapInfoPresModel(addInBootstrapInfo) {
		return $tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM(addInBootstrapInfo);
	};
	$tab_ApiPresModelsConverter.getAddInLocatorPresModel = function ApiPresModelsConverter$GetAddInLocatorPresModel(apiAddInLocator) {
		return $tab_NativePresModelsFactory.newAddInLocatorPresModel(apiAddInLocator);
	};
	global.tab.ApiPresModelsConverter = $tab_ApiPresModelsConverter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiToDocParameter
	var $tab_ApiToDocParameter = function(apiParam, toDoc) {
		ss.makeGenericType($tab_ParameterMapping$1, [Object]).call(this, apiParam, toDoc);
	};
	$tab_ApiToDocParameter.__typeName = 'tab.ApiToDocParameter';
	$tab_ApiToDocParameter.create = function(TApiParameterType, TDocParameterType) {
		return function ApiToDocParameter$Create(apiParam, toDoc) {
			return new $tab_ApiToDocParameter(apiParam, ss.makeGenericType($tab_ParameterMapping$1, [Object]).buildConversionFunc(TApiParameterType, TDocParameterType).call(null, toDoc));
		};
	};
	global.tab.ApiToDocParameter = $tab_ApiToDocParameter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandMapping
	var $tab_CommandMapping = function() {
		this.$1$DocCommandIdField = null;
		this.$1$ApiCommandIdField = null;
		this.$1$InputParametersField = null;
		this.$1$OutputParameterField = null;
	};
	$tab_CommandMapping.__typeName = 'tab.CommandMapping';
	global.tab.CommandMapping = $tab_CommandMapping;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandMappingRegistry
	var $tab_CommandMappingRegistry = function() {
		this.$apiToDocMappings = null;
		this.$docToApiMappings = null;
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_CommandMapping]).call(this);
	};
	$tab_CommandMappingRegistry.__typeName = 'tab.CommandMappingRegistry';
	global.tab.CommandMappingRegistry = $tab_CommandMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.DocParamMappingRegistry
	var $tab_DocParamMappingRegistry = function() {
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_DocToApiParameter]).call(this);
	};
	$tab_DocParamMappingRegistry.__typeName = 'tab.DocParamMappingRegistry';
	global.tab.DocParamMappingRegistry = $tab_DocParamMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.DocToApiParameter
	var $tab_DocToApiParameter = function(docParam, toApi) {
		ss.makeGenericType($tab_ParameterMapping$1, [Object]).call(this, docParam, toApi);
	};
	$tab_DocToApiParameter.__typeName = 'tab.DocToApiParameter';
	$tab_DocToApiParameter.create = function(TDocParameterType, TApiParameterType) {
		return function DocToApiParameter$Create(docParam, toApi) {
			return new $tab_DocToApiParameter(docParam, ss.makeGenericType($tab_ParameterMapping$1, [Object]).buildConversionFunc(TDocParameterType, TApiParameterType).call(null, toApi));
		};
	};
	global.tab.DocToApiParameter = $tab_DocToApiParameter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.MappingRegistryBase
	var $tab_MappingRegistryBase$2 = function(TEnumType, TMappingType) {
		var $type = function() {
			this.$mappings = null;
		};
		ss.registerGenericClassInstance($type, $tab_MappingRegistryBase$2, [TEnumType, TMappingType], {
			initialize: function MappingRegistryBase$Initialize() {
				this.$mappings = {};
				this.initialize$1(this.$mappings);
			},
			has: function MappingRegistryBase$Has(key) {
				return ss.keyExists(this.$mappings, key);
			},
			get: function MappingRegistryBase$Get(key) {
				if (this.has(key)) {
					return this.$mappings[key];
				}
				else {
					throw new ss.KeyNotFoundException('Key not found: ' + key.toString());
				}
			},
			initialize$1: null
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_MappingRegistryBase$2.__typeName = 'tab.MappingRegistryBase$2';
	ss.initGenericClass($tab_MappingRegistryBase$2, $asm, 2);
	global.tab.MappingRegistryBase$2 = $tab_MappingRegistryBase$2;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.NativePresModelsFactory
	var $tab_NativePresModelsFactory = function() {
	};
	$tab_NativePresModelsFactory.__typeName = 'tab.NativePresModelsFactory';
	$tab_NativePresModelsFactory.newAddInLocatorPresModel = function NativePresModelsFactory$NewAddInLocatorPresModel(apiAddInLocator) {
		var addInLocator = new Object();
		addInLocator.addInInstanceId = apiAddInLocator.instanceId;
		addInLocator.sheetPath = new Object();
		addInLocator.sheetPath.flipboardZoneId = apiAddInLocator.dashboardPath.flipboardZoneID;
		addInLocator.sheetPath.isDashboard = apiAddInLocator.dashboardPath.isDashboard;
		addInLocator.sheetPath.sheetName = apiAddInLocator.dashboardPath.sheetName;
		addInLocator.sheetPath.storyboard = apiAddInLocator.dashboardPath.storyboard;
		addInLocator.sheetPath.storyPointId = apiAddInLocator.dashboardPath.storyPointID;
		return addInLocator;
	};
	global.tab.NativePresModelsFactory = $tab_NativePresModelsFactory;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ParameterMapping
	var $tab_ParameterMapping$1 = function(TParamId) {
		var $type = function(paramId, conversionFn) {
			this.conversionFn = null;
			this.paramId = ss.getDefaultValue(TParamId);
			this.paramId = paramId;
			this.conversionFn = conversionFn || function(a) {
				return a;
			};
		};
		$type.buildConversionFunc = function(TSourceType, TTargetType) {
			return function ParameterMapping$BuildConversionFunc(conversionFn) {
				if (!ss.staticEquals(conversionFn, null)) {
					return function(a) {
						return conversionFn(ss.cast(a, TSourceType));
					};
				}
				else {
					return null;
				}
			};
		};
		ss.registerGenericClassInstance($type, $tab_ParameterMapping$1, [TParamId], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_ParameterMapping$1.__typeName = 'tab.ParameterMapping$1';
	ss.initGenericClass($tab_ParameterMapping$1, $asm, 1);
	global.tab.ParameterMapping$1 = $tab_ParameterMapping$1;
	ss.initClass($tab_$CommandInputMapping, $asm, {
		get_$mapping: function CommandInputMapping$get_Mapping() {
			return this.$1$MappingField;
		},
		set_$mapping: function CommandInputMapping$set_Mapping(value) {
			this.$1$MappingField = value;
		},
		get_$docParam: function CommandInputMapping$get_DocParam() {
			return this.$1$DocParamField;
		},
		set_$docParam: function CommandInputMapping$set_DocParam(value) {
			this.$1$DocParamField = value;
		},
		get_$isOptional: function CommandInputMapping$get_IsOptional() {
			return this.$1$IsOptionalField;
		},
		set_$isOptional: function CommandInputMapping$set_IsOptional(value) {
			this.$1$IsOptionalField = value;
		}
	});
	ss.initClass($tab_ApiCrossDomainPresModelsFactory, $asm, {});
	ss.initClass($tab_ApiParamMappingRegistry, $asm, {
		initialize$1: function ApiParamMappingRegistry$Initialize(mappingsToInitialize) {
			mappingsToInitialize['api.AddInLocator'] = $tab_ApiToDocParameter.create(Object, Object).call(null, 'api.AddInLocator', $tab_NativePresModelsFactory.newAddInLocatorPresModel);
			mappingsToInitialize['api.AddInSettings'] = $tab_ApiToDocParameter.create(Object, Object).call(null, 'api.AddInSettings', null);
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_ApiToDocParameter]));
	ss.initClass($tab_ApiPresModelsConverter, $asm, {});
	ss.initClass($tab_ApiToDocParameter, $asm, {
		get_apiParamId: function ApiToDocParameter$get_ApiParamId() {
			return this.paramId;
		},
		toDocParam: function ApiToDocParameter$ToDocParam(apiPresModel) {
			return this.conversionFn(apiPresModel);
		}
	}, ss.makeGenericType($tab_ParameterMapping$1, [Object]));
	ss.initClass($tab_CommandMapping, $asm, {
		get_docCommandId: function CommandMapping$get_DocCommandId() {
			return this.$1$DocCommandIdField;
		},
		set_docCommandId: function CommandMapping$set_DocCommandId(value) {
			this.$1$DocCommandIdField = value;
		},
		get_apiCommandId: function CommandMapping$get_ApiCommandId() {
			return this.$1$ApiCommandIdField;
		},
		set_apiCommandId: function CommandMapping$set_ApiCommandId(value) {
			this.$1$ApiCommandIdField = value;
		},
		get_$inputParameters: function CommandMapping$get_InputParameters() {
			return this.$1$InputParametersField;
		},
		set_$inputParameters: function CommandMapping$set_InputParameters(value) {
			this.$1$InputParametersField = value;
		},
		get_$outputParameter: function CommandMapping$get_OutputParameter() {
			return this.$1$OutputParameterField;
		},
		set_$outputParameter: function CommandMapping$set_OutputParameter(value) {
			this.$1$OutputParameterField = value;
		},
		createInternalCommandParams: function CommandMapping$CreateInternalCommandParams(apiParams) {
			var internalCommandParameters = {};
			var $t1 = this.get_$inputParameters();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var inputParam = $t1[$t2];
				if (!ss.keyExists(apiParams, inputParam.get_$mapping().get_apiParamId())) {
					if (inputParam.get_$isOptional()) {
						throw new ss.ArgumentException('Missing parameter: ' + inputParam.get_$mapping().get_apiParamId() + ' in command: ' + this.get_docCommandId());
					}
					else {
						continue;
					}
				}
				var apiParam = apiParams[inputParam.get_$mapping().get_apiParamId()];
				internalCommandParameters[inputParam.get_$docParam()] = inputParam.get_$mapping().toDocParam(apiParam);
			}
			return internalCommandParameters;
		},
		processResult: function(T) {
			return function CommandMapping$ProcessResult(commandResponse) {
				if (!ss.keyExists(commandResponse, this.get_$outputParameter().get_docParamId())) {
					return ss.getDefaultValue(T);
				}
				var resultPm = commandResponse[this.get_$outputParameter().get_docParamId()];
				var apiResult = this.get_$outputParameter().toApiParam(resultPm);
				return apiResult;
			};
		}
	});
	ss.initClass($tab_CommandMappingRegistry, $asm, {
		initialize$1: function CommandMappingRegistry$Initialize(mappingsToInitialize) {
			this.$apiToDocMappings = new $tab_ApiParamMappingRegistry();
			this.$apiToDocMappings.initialize();
			this.$docToApiMappings = new $tab_DocParamMappingRegistry();
			this.$docToApiMappings.initialize();
			var $t1 = new $tab_CommandMapping();
			$t1.set_docCommandId('initialize-add-in-instance');
			$t1.set_apiCommandId('api.InitializeDashboard');
			var $t2 = [];
			$t2.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInLocator'), 'addInLocatorPresModel', false));
			$t1.set_$inputParameters($t2);
			$t1.set_$outputParameter(this.$docToApiMappings.get('addInBootstrapInfo'));
			mappingsToInitialize['api.InitializeDashboard'] = $t1;
			var $t3 = new $tab_CommandMapping();
			$t3.set_docCommandId('save-add-in-settings');
			$t3.set_apiCommandId('api.SaveAddInSettings');
			var $t4 = [];
			$t4.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInLocator'), 'addInLocatorPresModel', false));
			$t4.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInSettings'), 'addInSettings', false));
			$t3.set_$inputParameters($t4);
			$t3.set_$outputParameter(this.$docToApiMappings.get('addInSettingsInfo'));
			mappingsToInitialize['api.SaveAddInSettings'] = $t3;
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_CommandMapping]));
	ss.initClass($tab_DocParamMappingRegistry, $asm, {
		initialize$1: function DocParamMappingRegistry$Initialize(mappingsToInitialize) {
			mappingsToInitialize['addInBootstrapInfo'] = $tab_DocToApiParameter.create(Object, Object).call(null, 'addInBootstrapInfo', $tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM);
			mappingsToInitialize['addInSettingsInfo'] = $tab_DocToApiParameter.create(Object, Object).call(null, 'addInSettingsInfo', $tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM);
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_DocToApiParameter]));
	ss.initClass($tab_DocToApiParameter, $asm, {
		get_docParamId: function DocToApiParameter$get_DocParamId() {
			return this.paramId;
		},
		toApiParam: function DocToApiParameter$ToApiParam(docPresModel) {
			return this.conversionFn(docPresModel);
		}
	}, ss.makeGenericType($tab_ParameterMapping$1, [Object]));
	ss.initClass($tab_NativePresModelsFactory, $asm, {});
})();
// END ApiDomain

  var tab = global.tab;
  tab._Deferred = tab._DeferredImpl;

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'vqladdinbootstrap');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInBootstrap.DesktopAddInBootstrap
	var $tab__DesktopAddInBootstrap = function() {
	};
	$tab__DesktopAddInBootstrap.__typeName = 'tab._DesktopAddInBootstrap';
	$tab__DesktopAddInBootstrap.initialize = function DesktopAddInBootstrap$Initialize() {
		tab._ApiObjectRegistry.registerApiMessageRouter(function() {
			return new $tab_DesktopAddInMessageRouter();
		});
	};
	global.tab._DesktopAddInBootstrap = $tab__DesktopAddInBootstrap;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInBootstrap.DesktopAddInMessageRouter
	var $tab_DesktopAddInMessageRouter = function() {
		this.$bridgePromise = null;
		this.$instancePresModel = null;
		this.$commandConversionRegistry = null;
		this.$commandConversionRegistry = new tab.CommandMappingRegistry();
		this.$commandConversionRegistry.initialize();
	};
	$tab_DesktopAddInMessageRouter.__typeName = 'tab.DesktopAddInMessageRouter';
	global.tab.DesktopAddInMessageRouter = $tab_DesktopAddInMessageRouter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInBootstrap.IQtWebChannelTransport
	var $tab_IQtWebChannelTransport = function() {
	};
	$tab_IQtWebChannelTransport.__typeName = 'tab.IQtWebChannelTransport';
	global.tab.IQtWebChannelTransport = $tab_IQtWebChannelTransport;
	ss.initClass($tab__DesktopAddInBootstrap, $asm, {});
	ss.initClass($tab_DesktopAddInMessageRouter, $asm, {
		get_$bridgePromise: function DesktopAddInMessageRouter$get_BridgePromise() {
			if (ss.isNullOrUndefined(this.$bridgePromise)) {
				var deferred = new tab._Deferred();
				new QWebChannel(qt.webChannelTransport, ss.mkdel(this, function(channel) {
					if (ss.isValue(channel.objects) && ss.keyExists(channel.objects, 'addInPresLayer')) {
						var bridge = channel.objects['addInPresLayer'];
						this.$instancePresModel = bridge.addInInstanceInfo;
						deferred.resolve(bridge);
					}
					else {
						deferred.reject(tab._TableauException.createInternalError('Web channel not initialized correctly, please ensure you are running inside QTWebEngine.'));
					}
				}));
				this.$bridgePromise = deferred.get_promise();
			}
			return this.$bridgePromise;
		},
		registerHandler: function DesktopAddInMessageRouter$RegisterHandler(handler) {
			throw new ss.NotImplementedException();
		},
		unregisterHandler: function DesktopAddInMessageRouter$UnregisterHandler(handler) {
			throw new ss.NotImplementedException();
		},
		sendCommand: function(T) {
			return function DesktopAddInMessageRouter$SendCommand(source, commandParameters, returnHandler) {
				this.get_$bridgePromise().then(ss.mkdel(this, function(bridge) {
					if (!this.$commandConversionRegistry.has(returnHandler.get_commandName())) {
						throw tab._TableauException.createInternalError('Unknown command name: ' + returnHandler.get_commandName());
					}
					var cmdMapping = this.$commandConversionRegistry.get(returnHandler.get_commandName());
					var handler = function(commandResponse) {
						if (commandResponse.Success) {
							returnHandler.get_successCallback()(cmdMapping.processResult(T).call(cmdMapping, commandResponse.Result));
						}
						else {
							returnHandler.get_errorCallback()(false, 'Failed to retrieve information from Tableau Desktop.');
						}
					};
					commandParameters = commandParameters || {};
					commandParameters['api.AddInLocator'] = tab.ApiCrossDomainPresModelsFactory.newAddInLocatorPM(this.$instancePresModel.addInLocatorPresModel);
					var internalCommandParameters = cmdMapping.createInternalCommandParams(commandParameters);
					bridge.ExecuteCommand('tabdoc', cmdMapping.get_docCommandId(), internalCommandParameters, handler);
					return null;
				}), function(e) {
					returnHandler.get_errorCallback()(false, e.toString());
					return null;
				});
			};
		}
	});
	ss.initInterface($tab_IQtWebChannelTransport, $asm, {});
})();

  tab._DesktopAddInBootstrap.initialize();
})();

// END AddInBootstrap


/*! BEGIN AddInApi */

(function() {


  // Steal this trick from the Api.script to get ss declared globally for us.
/*! BEGIN MscorlibSlim */



////////////////////////////////////////////////////////////////////////////////
// Globals and assembly registration
////////////////////////////////////////////////////////////////////////////////

var global = {};

(function(global) {
"use strict";

var ss = { __assemblies: {} };

ss.initAssembly = function assembly(obj, name, res) {
  res = res || {};
  obj.name = name;
  obj.toString = function() { return this.name; };
  obj.__types = {};
  obj.getResourceNames = function() { return Object.keys(res); };
  obj.getResourceDataBase64 = function(name) { return res[name] || null; };
  obj.getResourceData = function(name) { var r = res[name]; return r ? ss.dec64(r) : null; };
  ss.__assemblies[name] = obj;
};
ss.initAssembly(ss, 'mscorlib');



////////////////////////////////////////////////////////////////////////////////
// Utility methods (generated via Script.IsNull, etc.)
////////////////////////////////////////////////////////////////////////////////


ss.getAssemblies = function ss$getAssemblies() {
  return Object.keys(ss.__assemblies).map(function(n) { return ss.__assemblies[n]; });
};

ss.isNullOrUndefined = function ss$isNullOrUndefined(o) {
  return (o === null) || (o === undefined);
};

ss.isValue = function ss$isValue(o) {
  return (o !== null) && (o !== undefined);
};

ss.referenceEquals = function ss$referenceEquals(a, b) {
  return ss.isValue(a) ? a === b : !ss.isValue(b);
};

ss.mkdict = function ss$mkdict() {
  var a = (arguments.length != 1 ? arguments : arguments[0]);
  var r = {};
  for (var i = 0; i < a.length; i += 2) {
    r[a[i]] = a[i + 1];
  }
  return r;
};

ss.clone = function ss$clone(t, o) {
  return o ? t.$clone(o) : o;
}

ss.coalesce = function ss$coalesce(a, b) {
  return ss.isValue(a) ? a : b;
};

ss.isDate = function ss$isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
};

ss.isArray = function ss$isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

ss.isTypedArrayType = function ss$isTypedArrayType(type) {
  return ['Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint16Array', 'Uint32Array', 'Uint8ClampedArray'].indexOf(ss.getTypeFullName(type)) >= 0;
};

ss.isArrayOrTypedArray = function ss$isArray(obj) {
  return ss.isArray(obj) || ss.isTypedArrayType(ss.getInstanceType(obj));
};

ss.getHashCode = function ss$getHashCode(obj) {
  if (!ss.isValue(obj))
    throw new ss_NullReferenceException('Cannot get hash code of null');
  else if (typeof(obj.getHashCode) === 'function')
    return obj.getHashCode();
  else if (typeof(obj) === 'boolean') {
    return obj ? 1 : 0;
  }
  else if (typeof(obj) === 'number') {
    var s = obj.toExponential();
    s = s.substr(0, s.indexOf('e'));
    return parseInt(s.replace('.', ''), 10) & 0xffffffff;
  }
  else if (typeof(obj) === 'string') {
    var res = 0;
    for (var i = 0; i < obj.length; i++)
      res = (res * 31 + obj.charCodeAt(i)) & 0xffffffff;
    return res;
  }
  else if (ss.isDate(obj)) {
    return obj.valueOf() & 0xffffffff;
  }
  else {
    return ss.defaultHashCode(obj);
  }
};

ss.defaultHashCode = function ss$defaultHashCode(obj) {
  return obj.$__hashCode__ || (obj.$__hashCode__ = (Math.random() * 0x100000000) | 0);
};


ss.equals = function ss$equals(a, b) {
    if (!ss.isValue(a))
        throw new ss_NullReferenceException('Object is null');
    else if (a !== ss && typeof(a.equals) === 'function')
        return a.equals(b);
    if (ss.isDate(a) && ss.isDate(b))
        return a.valueOf() === b.valueOf();
    else if (typeof(a) === 'function' && typeof(b) === 'function')
        return ss.delegateEquals(a, b);
    else if (ss.isNullOrUndefined(a) && ss.isNullOrUndefined(b))
        return true;
    else
        return a === b;
};

ss.compare = function ss$compare(a, b) {
  if (!ss.isValue(a))
    throw new ss_NullReferenceException('Object is null');
  else if (typeof(a) === 'number' || typeof(a) === 'string' || typeof(a) === 'boolean')
    return a < b ? -1 : (a > b ? 1 : 0);
  else if (ss.isDate(a))
    return ss.compare(a.valueOf(), b.valueOf());
  else
    return a.compareTo(b);
};

ss.equalsT = function ss$equalsT(a, b) {
  if (!ss.isValue(a))
    throw new ss_NullReferenceException('Object is null');
  else if (typeof(a) === 'number' || typeof(a) === 'string' || typeof(a) === 'boolean')
    return a === b;
  else if (ss.isDate(a))
    return a.valueOf() === b.valueOf();
  else
    return a.equalsT(b);
};

ss.staticEquals = function ss$staticEquals(a, b) {
  if (!ss.isValue(a))
    return !ss.isValue(b);
  else
    return ss.isValue(b) ? ss.equals(a, b) : false;
};

ss.shallowCopy = function ss$shallowCopy(source, target) {
  var keys = Object.keys(source);
  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    target[k] = source[k];
  }
};

ss.isLower = function ss$isLower(c) {
  var s = String.fromCharCode(c);
  return s === s.toLowerCase() && s !== s.toUpperCase();
};

ss.isUpper = function ss$isUpper(c) {
  var s = String.fromCharCode(c);
  return s !== s.toLowerCase() && s === s.toUpperCase();
};

if (typeof(window) == 'object') {
  // Browser-specific stuff that could go into the Web assembly, but that assembly does not have an associated JS file.
  if (!window.Element) {
    // IE does not have an Element constructor. This implementation should make casting to elements work.
    window.Element = function() {};
    window.Element.isInstanceOfType = function(instance) { return instance && typeof instance.constructor === 'undefined' && typeof instance.tagName === 'string'; };
  }
  window.Element.__typeName = 'Element';
}

///////////////////////////////////////////////////////////////////////////////
// Object Extensions

ss.clearKeys = function ss$clearKeys(d) {
  for (var n in d) {
    if (d.hasOwnProperty(n))
      delete d[n];
  }
};

ss.keyExists = function ss$keyExists(d, key) {
  return d[key] !== undefined;
};

if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
      dontEnums = ['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

ss.getKeyCount = function ss$getKeyCount(d) {
  return Object.keys(d).length;
};

////////////////////////////////////////////////////////////////////////////////
// Type System Implementation
////////////////////////////////////////////////////////////////////////////////

// When FULL_TYPE_SYSTEM is not defined, then the code is not the full-blown
// type system. It's Just enough to allow us to call base class methods.

ss.__genericCache = {};

ss._makeGenericTypeName = function ss$_makeGenericTypeName(genericType, typeArguments) {
  var result = genericType.__typeName;
  for (var i = 0; i < typeArguments.length; i++)
    result += (i === 0 ? '[' : ',') + '[' + ss.getTypeQName(typeArguments[i]) + ']';
  result += ']';
  return result;
};

ss.makeGenericType = function ss$makeGenericType(genericType, typeArguments) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  return ss.__genericCache[name] || genericType.apply(null, typeArguments);
};

ss.registerGenericClassInstance = function ss$registerGenericClassInstance(instance, genericType, typeArguments, members, baseType, interfaceTypes) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  ss.__genericCache[name] = instance;
  instance.__typeName = name;
  instance.__genericTypeDefinition = genericType;
  instance.__typeArguments = typeArguments;
  ss.initClass(instance, genericType.__assembly, members, baseType(), interfaceTypes());
};

ss.registerGenericInterfaceInstance = function ss$registerGenericInterfaceInstance(instance, genericType, typeArguments, members, baseInterfaces) {
  var name = ss._makeGenericTypeName(genericType, typeArguments);
  ss.__genericCache[name] = instance;
  instance.__typeName = name;
  instance.__genericTypeDefinition = genericType;
  instance.__typeArguments = typeArguments;
  ss.initInterface(instance, genericType.__assembly, members, baseInterfaces());
};

ss.isGenericTypeDefinition = function ss$isGenericTypeDefinition(type) {
  return type.__isGenericTypeDefinition || false;
};

ss.getGenericTypeDefinition = function ss$getGenericTypeDefinition(type) {
  return type.__genericTypeDefinition || null;
};

ss.getGenericParameterCount = function ss$getGenericParameterCount(type) {
  return type.__typeArgumentCount || 0;
};

ss.getGenericArguments = function ss$getGenericArguments(type) {
  return type.__typeArguments || null;
};


ss.setMetadata = function ss$_setMetadata(type, metadata) {
  if (metadata.members) {
    for (var i = 0; i < metadata.members.length; i++) {
      var m = metadata.members[i];
      m.typeDef = type;
      if (m.adder) m.adder.typeDef = type;
      if (m.remover) m.remover.typeDef = type;
      if (m.getter) m.getter.typeDef = type;
      if (m.setter) m.setter.typeDef = type;
    }
  }
  type.__metadata = metadata;
  if (metadata.variance) {
    type.isAssignableFrom = function(source) {
      var check = function(target, type) {
        if (type.__genericTypeDefinition === target.__genericTypeDefinition && type.__typeArguments.length == target.__typeArguments.length) {
          for (var i = 0; i < target.__typeArguments.length; i++) {
            var v = target.__metadata.variance[i], t = target.__typeArguments[i], s = type.__typeArguments[i];
            switch (v) {
              case 1: if (!ss.isAssignableFrom(t, s)) return false; break;
              case 2: if (!ss.isAssignableFrom(s, t)) return false; break;
              default: if (s !== t) return false;
            }
          }
          return true;
        }
        return false;
      };

      if (source.__interface && check(this, source))
        return true;
      var ifs = ss.getInterfaces(source);
      for (var i = 0; i < ifs.length; i++) {
        if (ifs[i] === this || check(this, ifs[i]))
          return true;
      }
      return false;
    };
  }
}
ss.setMetadata = function ss$_setMetadata(type, metadata) {
};

ss.initClass = function ss$initClass(ctor, asm, members, baseType, interfaces) {
  ctor.__class = true;
  ctor.__assembly = asm;
  if (!ctor.__typeArguments)
    asm.__types[ctor.__typeName] = ctor;
  if (baseType && baseType !== Object) {
    var f = function(){};
    f.prototype = baseType.prototype;
    ctor.prototype = new f();
    ctor.prototype.constructor = ctor;
  }
  ss.shallowCopy(members, ctor.prototype);
  if (interfaces)
    ctor.__interfaces = interfaces;
};

ss.initGenericClass = function ss$initGenericClass(ctor, asm, typeArgumentCount) {
  ctor.__class = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ctor.__typeArgumentCount = typeArgumentCount;
  ctor.__isGenericTypeDefinition = true;
};

ss.initInterface = function ss$initInterface(ctor, asm, members, baseInterfaces) {
  ctor.__interface = true;
  ctor.__assembly = asm;
  if (!ctor.__typeArguments)
    asm.__types[ctor.__typeName] = ctor;
  if (baseInterfaces)
    ctor.__interfaces = baseInterfaces;
  ss.shallowCopy(members, ctor.prototype);
  ctor.isAssignableFrom = function(type) { return ss.contains(ss.getInterfaces(type), this); };
};

ss.initGenericInterface = function ss$initGenericClass(ctor, asm, typeArgumentCount) {
  ctor.__interface = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ctor.__typeArgumentCount = typeArgumentCount;
  ctor.__isGenericTypeDefinition = true;
};

ss.initEnum = function ss$initEnum(ctor, asm, members, namedValues) {
  ctor.__enum = true;
  ctor.__assembly = asm;
  asm.__types[ctor.__typeName] = ctor;
  ss.shallowCopy(members, ctor.prototype);
  ctor.getDefaultValue = ctor.createInstance = function() { return namedValues ? null : 0; };
  ctor.isInstanceOfType = function(instance) { return typeof(instance) == (namedValues ? 'string' : 'number'); };
};

ss.getBaseType = function ss$getBaseType(type) {
  if (type === Object || type.__interface) {
    return null;
  }
  else if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(type.prototype).constructor;
  }
  else {
    var p = type.prototype;
    if (Object.prototype.hasOwnProperty.call(p, 'constructor')) {
      try {
        var ownValue = p.constructor;
        delete p.constructor;
        return p.constructor;
      }
      finally {
        p.constructor = ownValue;
      }
    }
    return p.constructor;
  }
};

ss.getTypeFullName = function ss$getTypeFullName(type) {
  return type.__typeName || type.name || (type.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || 'Object';
};

ss.getTypeQName = function ss$getTypeFullName(type) {
  return ss.getTypeFullName(type) + (type.__assembly ? ', ' + type.__assembly.name : '');
};

ss.getTypeName = function ss$getTypeName(type) {
  var fullName = ss.getTypeFullName(type);
  var bIndex = fullName.indexOf('[');
  var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
  return nsIndex > 0 ? fullName.substr(nsIndex + 1) : fullName;
};

ss.getTypeNamespace = function ss$getTypeNamespace(type) {
  var fullName = ss.getTypeFullName(type);
  var bIndex = fullName.indexOf('[');
  var nsIndex = fullName.lastIndexOf('.', bIndex >= 0 ? bIndex : fullName.length);
  return nsIndex > 0 ? fullName.substr(0, nsIndex) : '';
};

ss.getTypeAssembly = function ss$getTypeAssembly(type) {
  if (ss.contains([Date, Number, Boolean, String, Function, Array], type))
    return ss;
  else
    return type.__assembly || null;
};

ss._getAssemblyType = function ss$_getAssemblyType(asm, name) {
  var result = [];
  if (asm.__types) {
    return asm.__types[name] || null;
  }
  else {
    var a = name.split('.');
    for (var i = 0; i < a.length; i++) {
      asm = asm[a[i]];
      if (!ss.isValue(asm))
        return null;
    }
    if (typeof asm !== 'function')
      return null;
    return asm;
  }
};

ss.getAssemblyTypes = function ss$getAssemblyTypes(asm) {
  var result = [];
  if (asm.__types) {
    for (var t in asm.__types) {
      if (asm.__types.hasOwnProperty(t))
        result.push(asm.__types[t]);
    }
  }
  else {
    var traverse = function(s, n) {
      for (var c in s) {
        if (s.hasOwnProperty(c))
          traverse(s[c], c);
      }
      if (typeof(s) === 'function' && ss.isUpper(n.charCodeAt(0)))
        result.push(s);
    };
    traverse(asm, '');
  }
  return result;
};

ss.createAssemblyInstance = function ss$createAssemblyInstance(asm, typeName) {
  var t = ss.getType(typeName, asm);
  return t ? ss.createInstance(t) : null;
};

ss.getInterfaces = function ss$getInterfaces(type) {
  if (type.__interfaces)
    return type.__interfaces;
  else if (type === Date || type === Number)
    return [ ss_IEquatable, ss_IComparable, ss_IFormattable ];
  else if (type === Boolean || type === String)
    return [ ss_IEquatable, ss_IComparable ];
  else if (type === Array || ss.isTypedArrayType(type))
    return [ ss_IEnumerable, ss_ICollection, ss_IList ];
  else
    return [];
};

ss.isInstanceOfType = function ss$isInstanceOfType(instance, type) {
  if (ss.isNullOrUndefined(instance))
    return false;

  if (typeof(type.isInstanceOfType) === 'function')
    return type.isInstanceOfType(instance);

  return ss.isAssignableFrom(type, ss.getInstanceType(instance));
};

ss.isAssignableFrom = function ss$isAssignableFrom(target, type) {
  return target === type || (typeof(target.isAssignableFrom) === 'function' && target.isAssignableFrom(type)) || type.prototype instanceof target;
};

ss.isClass = function Type$isClass(type) {
  return (type.__class == true || type === Array || type === Function || type === RegExp || type === String || type === Error || type === Object);
};

ss.isEnum = function Type$isEnum(type) {
  return !!type.__enum;
};

ss.isFlags = function Type$isFlags(type) {
  return type.__metadata && type.__metadata.enumFlags || false;
};

ss.isInterface = function Type$isInterface(type) {
  return !!type.__interface;
};

ss.safeCast = function ss$safeCast(instance, type) {
  if (type === true)
    return instance;
  else if (type === false)
    return null;
  else
    return ss.isInstanceOfType(instance, type) ? instance : null;
};

ss.cast = function ss$cast(instance, type) {
  if (instance === null || typeof(instance) === 'undefined')
    return instance;
  else if (type === true || (type !== false && ss.isInstanceOfType(instance, type)))
    return instance;
  throw new ss_InvalidCastException('Cannot cast object to type ' + ss.getTypeFullName(type));
};

ss.getInstanceType = function ss$getInstanceType(instance) {
  if (!ss.isValue(instance))
    throw new ss_NullReferenceException('Cannot get type of null');

  // NOTE: We have to catch exceptions because the constructor
  //       cannot be looked up on native COM objects
  try {
    return instance.constructor;
  }
  catch (ex) {
    return Object;
  }
};

ss._getType = function (typeName, asm, re) {
  var outer = !re;
  re = re || /[[,\]]/g;
  var last = re.lastIndex, m = re.exec(typeName), tname, targs = [];
  if (m) {
    tname = typeName.substring(last, m.index);
    switch (m[0]) {
      case '[':
        if (typeName[m.index + 1] != '[')
          return null;
        for (;;) {
          re.exec(typeName);
          var t = ss._getType(typeName, global, re);
          if (!t)
            return null;
          targs.push(t);
          m = re.exec(typeName);
          if (m[0] === ']')
            break;
          else if (m[0] !== ',')
            return null;
        }
        m = re.exec(typeName);
        if (m && m[0] === ',') {
          re.exec(typeName);
          if (!(asm = ss.__assemblies[(re.lastIndex > 0 ? typeName.substring(m.index + 1, re.lastIndex - 1) : typeName.substring(m.index + 1)).trim()]))
            return null;
        }
        break;

      case ']':
        break;

      case ',':
        re.exec(typeName);
        if (!(asm = ss.__assemblies[(re.lastIndex > 0 ? typeName.substring(m.index + 1, re.lastIndex - 1) : typeName.substring(m.index + 1)).trim()]))
          return null;
        break;
    }
  }
  else {
    tname = typeName.substring(last);
  }

  if (outer && re.lastIndex)
    return null;

  var t = ss._getAssemblyType(asm, tname.trim());
  return targs.length ? ss.makeGenericType(t, targs) : t;
}

ss.getType = function ss$getType(typeName, asm) {
  return typeName ? ss._getType(typeName, asm || global) : null;
};

ss.getDefaultValue = function ss$getDefaultValue(type) {
  if (typeof(type.getDefaultValue) === 'function')
    return type.getDefaultValue();
  else if (type === Boolean)
    return false;
  else if (type === Date)
    return new Date(0);
  else if (type === Number)
    return 0;
  return null;
};

ss.createInstance = function ss$createInstance(type) {
  if (typeof(type.createInstance) === 'function')
    return type.createInstance();
  else if (type === Boolean)
    return false;
  else if (type === Date)
    return new Date(0);
  else if (type === Number)
    return 0;
  else if (type === String)
    return '';
  else
    return new type();
};


///////////////////////////////////////////////////////////////////////////////
// IFormattable

var ss_IFormattable = function IFormattable$() { };

ss_IFormattable.__typeName = 'ss.IFormattable';
ss.IFormattable = ss_IFormattable;
ss.initInterface(ss_IFormattable, ss, { format: null });


///////////////////////////////////////////////////////////////////////////////
// IComparable

var ss_IComparable = function IComparable$() { };

ss_IComparable.__typeName = 'ss.IComparable';
ss.IComparable = ss_IComparable;
ss.initInterface(ss_IComparable, ss, { compareTo: null });

///////////////////////////////////////////////////////////////////////////////
// IEquatable

var ss_IEquatable = function IEquatable$() { };

ss_IEquatable.__typeName = 'ss.IEquatable';
ss.IEquatable = ss_IEquatable;
ss.initInterface(ss_IEquatable, ss, { equalsT: null });

///////////////////////////////////////////////////////////////////////////////
// Number Extensions


///////////////////////////////////////////////////////////////////////////////
// String Extensions


ss.isNullOrEmptyString = function ss$isNullOrEmptyString(s) {
  return !s || !s.length;
};


if (!String.prototype.trim) {
  String.prototype.trim = function String$trim() {
    return ss.trimStartString(ss.trimEndString(this));
  };
}

ss.trimEndString = function ss$trimEndString(s, chars) {
  return s.replace(chars ? new RegExp('[' + String.fromCharCode.apply(null, chars) + ']+$') : /\s*$/, '');
};

ss.trimStartString = function ss$trimStartString(s, chars) {
  return s.replace(chars ? new RegExp('^[' + String.fromCharCode.apply(null, chars) + ']+') : /^\s*/, '');
};

ss.trimString = function ss$trimString(s, chars) {
  return ss.trimStartString(ss.trimEndString(s, chars), chars);
};


///////////////////////////////////////////////////////////////////////////////
// Math Extensions


///////////////////////////////////////////////////////////////////////////////
// IFormatProvider

///////////////////////////////////////////////////////////////////////////////
// NumberFormatInfo

///////////////////////////////////////////////////////////////////////////////
// DateTimeFormatInfo

///////////////////////////////////////////////////////////////////////////////
// Array Extensions


ss.arrayClone = function ss$arrayClone(arr) {
    if (arr.length === 1) {
        return [arr[0]];
    }
    else {
        return Array.apply(null, arr);
    }
};


if (!Array.prototype.map) {
  Array.prototype.map = function Array$map(callback, instance) {
    var length = this.length;
    var mapped = new Array(length);
    for (var i = 0; i < length; i++) {
      if (i in this) {
        mapped[i] = callback.call(instance, this[i], i, this);
      }
    }
    return mapped;
  };
}


if (!Array.prototype.some) {
  Array.prototype.some = function Array$some(callback, instance) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
      if (i in this && callback.call(instance, this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

      var T, k;

      if (this == null) {
          throw new TypeError(' this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== "function") {
          throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
          T = thisArg;
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {

          var kValue;

          // a. Let Pk be ToString(k).
          //   This is implicit for LHS operands of the in operator
          // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
          //   This step can be combined with c
          // c. If kPresent is true, then
          if (k in O) {

              // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
              kValue = O[k];

              // ii. Call the Call internal method of callback with T as the this value and
              // argument list containing kValue, k, and O.
              callback.call(T, kValue, k, O);
          }
          // d. Increase k by 1.
          k++;
      }
      // 8. return undefined
  };
}

// Production steps of ECMA-262, Edition 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun/*, thisArg*/) {

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];

                // NOTE: Technically this should Object.defineProperty at
                //       the next index, as push can be affected by
                //       properties on Object.prototype and Array.prototype.
                //       But that method's new, and collisions should be
                //       rare, so use the more-compatible alternative.
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }

        return res;
    };
}


///////////////////////////////////////////////////////////////////////////////
// Date Extensions


///////////////////////////////////////////////////////////////////////////////
// Function Extensions

ss._delegateContains = function ss$_delegateContains(targets, object, method) {
  for (var i = 0; i < targets.length; i += 2) {
    if (targets[i] === object && targets[i + 1] === method) {
      return true;
    }
  }
  return false;
};

ss._mkdel = function ss$_mkdel(targets) {
  var delegate = function() {
    if (targets.length == 2) {
      return targets[1].apply(targets[0], arguments);
    }
    else {
      var clone = ss.arrayClone(targets);
      for (var i = 0; i < clone.length; i += 2) {
        if (ss._delegateContains(targets, clone[i], clone[i + 1])) {
          clone[i + 1].apply(clone[i], arguments);
        }
      }
      return null;
    }
  };
  delegate._targets = targets;

  return delegate;
};

ss.mkdel = function ss$mkdel(object, method) {
  if (!object) {
    return method;
  }
  return ss._mkdel([object, method]);
};

ss.delegateCombine = function ss$delegateCombine(delegate1, delegate2) {
  if (!delegate1) {
    if (!delegate2._targets) {
      return ss.mkdel(null, delegate2);
    }
    return delegate2;
  }
  if (!delegate2) {
    if (!delegate1._targets) {
      return ss.mkdel(null, delegate1);
    }
    return delegate1;
  }

  var targets1 = delegate1._targets ? delegate1._targets : [null, delegate1];
  var targets2 = delegate2._targets ? delegate2._targets : [null, delegate2];

  return ss._mkdel(targets1.concat(targets2));
};

ss.delegateRemove = function ss$delegateRemove(delegate1, delegate2) {
  if (!delegate1 || (delegate1 === delegate2)) {
    return null;
  }
  if (!delegate2) {
    return delegate1;
  }

  var targets = delegate1._targets;
  var object = null;
  var method;
  if (delegate2._targets) {
    object = delegate2._targets[0];
    method = delegate2._targets[1];
  }
  else {
    method = delegate2;
  }

  for (var i = 0; i < targets.length; i += 2) {
    if ((targets[i] === object) && (targets[i + 1] === method)) {
      if (targets.length == 2) {
        return null;
      }
      var t = ss.arrayClone(targets);
      t.splice(i, 2);
      return ss._mkdel(t);
    }
  }

  return delegate1;
};

ss.delegateEquals = function ss$delegateEquals(a, b) {
    if (a === b)
        return true;
    if (!a._targets && !b._targets)
        return false;
    var ta = a._targets || [null, a], tb = b._targets || [null, b];
    if (ta.length != tb.length)
        return false;
    for (var i = 0; i < ta.length; i++) {
        if (ta[i] !== tb[i])
            return false;
    }
    return true;
};


///////////////////////////////////////////////////////////////////////////////
// RegExp Extensions


///////////////////////////////////////////////////////////////////////////////
// Debug Extensions


///////////////////////////////////////////////////////////////////////////////
// Enum

var ss_Enum = function Enum$() {
};
ss_Enum.__typeName = 'ss.Enum';
ss.Enum = ss_Enum;
ss.initClass(ss_Enum, ss, {});


ss_Enum.getValues = function Enum$getValues(enumType) {
  var parts = [];
  var values = enumType.prototype;
  for (var i in values) {
    if (values.hasOwnProperty(i))
      parts.push(values[i]);
  }
  return parts;
};

///////////////////////////////////////////////////////////////////////////////
// CultureInfo


///////////////////////////////////////////////////////////////////////////////
// IEnumerator

var ss_IEnumerator = function IEnumerator$() { };

ss_IEnumerator.__typeName = 'ss.IEnumerator';
ss.IEnumerator = ss_IEnumerator;
ss.initInterface(ss_IEnumerator, ss, { current: null, moveNext: null, reset: null }, [ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// IEnumerable

var ss_IEnumerable = function IEnumerable$() { };

ss_IEnumerable.__typeName = 'ss.IEnumerable';
ss.IEnumerable = ss_IEnumerable;
ss.initInterface(ss_IEnumerable, ss, { getEnumerator: null });

ss.getEnumerator = function ss$getEnumerator(obj) {
  return obj.getEnumerator ? obj.getEnumerator() : new ss_ArrayEnumerator(obj);
};

///////////////////////////////////////////////////////////////////////////////
// ICollection

var ss_ICollection = function ICollection$() { };

ss_ICollection.__typeName = 'ss.ICollection';
ss.ICollection = ss_ICollection;
ss.initInterface(ss_ICollection, ss, { get_count: null, add: null, clear: null, contains: null, remove: null });

ss.count = function ss$count(obj) {
  return obj.get_count ? obj.get_count() : obj.length;
};

ss.add = function ss$add(obj, item) {
  if (obj.add)
    obj.add(item);
  else if (ss.isArray(obj))
    obj.push(item);
  else
    throw new ss_NotSupportedException();
};

ss.clear = function ss$clear(obj) {
  if (obj.clear)
    obj.clear();
  else if (ss.isArray(obj))
    obj.length = 0;
  else
    throw new ss_NotSupportedException();
};

ss.remove = function ss$remove(obj, item) {
  if (obj.remove)
    return obj.remove(item);
  else if (ss.isArray(obj)) {
    var index = ss.indexOf(obj, item);
    if (index >= 0) {
      obj.splice(index, 1);
      return true;
    }
    return false;
  }
  else
    throw new ss_NotSupportedException();
};

ss.contains = function ss$contains(obj, item) {
  if (obj.contains)
    return obj.contains(item);
  else
    return ss.indexOf(obj, item) >= 0;
};

///////////////////////////////////////////////////////////////////////////////
// TimeSpan


///////////////////////////////////////////////////////////////////////////////
// IEqualityComparer

var ss_IEqualityComparer = function IEqualityComparer$() { };

ss_IEqualityComparer.__typeName = 'ss.IEqualityComparer';
ss.IEqualityComparer = ss_IEqualityComparer;
ss.initInterface(ss_IEqualityComparer, ss, { areEqual: null, getObjectHashCode: null });

///////////////////////////////////////////////////////////////////////////////
// IComparer

var ss_IComparer = function IComparer$() { };

ss_IComparer.__typeName = 'ss.IComparer';
ss.IComparer = ss_IComparer;
ss.initInterface(ss_IComparer, ss, { compare: null });

///////////////////////////////////////////////////////////////////////////////
// Nullable

ss.unbox = function ss$unbox(instance) {
  if (!ss.isValue(instance))
    throw new ss_InvalidOperationException('Nullable object must have a value.');
  return instance;
};

var ss_Nullable$1 = function Nullable$1$(T) {
  var $type = function() {
  };
  $type.isInstanceOfType = function(instance) {
    return ss.isInstanceOfType(instance, T);
  };
  ss.registerGenericClassInstance($type, ss_Nullable$1, [T], {}, function() { return null; }, function() { return []; });
  return $type;
};

ss_Nullable$1.__typeName = 'ss.Nullable$1';
ss.Nullable$1 = ss_Nullable$1;
ss.initGenericClass(ss_Nullable$1, ss, 1);

ss_Nullable$1.eq = function Nullable$eq(a, b) {
  return !ss.isValue(a) ? !ss.isValue(b) : (a === b);
};

ss_Nullable$1.ne = function Nullable$eq(a, b) {
  return !ss.isValue(a) ? ss.isValue(b) : (a !== b);
};

ss_Nullable$1.le = function Nullable$le(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a <= b;
};

ss_Nullable$1.ge = function Nullable$ge(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a >= b;
};

ss_Nullable$1.lt = function Nullable$lt(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a < b;
};

ss_Nullable$1.gt = function Nullable$gt(a, b) {
  return ss.isValue(a) && ss.isValue(b) && a > b;
};

ss_Nullable$1.sub = function Nullable$sub(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a - b : null;
};

ss_Nullable$1.add = function Nullable$add(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a + b : null;
};

ss_Nullable$1.mod = function Nullable$mod(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a % b : null;
};

ss_Nullable$1.div = function Nullable$divf(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a / b : null;
};

ss_Nullable$1.mul = function Nullable$mul(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a * b : null;
};

ss_Nullable$1.band = function Nullable$band(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a & b : null;
};

ss_Nullable$1.bor = function Nullable$bor(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a | b : null;
};

ss_Nullable$1.xor = function Nullable$xor(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a ^ b : null;
};

ss_Nullable$1.shl = function Nullable$shl(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a << b : null;
};

ss_Nullable$1.srs = function Nullable$srs(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a >> b : null;
};

ss_Nullable$1.sru = function Nullable$sru(a, b) {
  return ss.isValue(a) && ss.isValue(b) ? a >>> b : null;
};

ss_Nullable$1.and = function Nullable$and(a, b) {
  if (a === true && b === true)
    return true;
  else if (a === false || b === false)
    return false;
  else
    return null;
};

ss_Nullable$1.or = function Nullable$or(a, b) {
  if (a === true || b === true)
    return true;
  else if (a === false && b === false)
    return false;
  else
    return null;
};

ss_Nullable$1.not = function Nullable$not(a) {
  return ss.isValue(a) ? !a : null;
};

ss_Nullable$1.neg = function Nullable$neg(a) {
  return ss.isValue(a) ? -a : null;
};

ss_Nullable$1.pos = function Nullable$pos(a) {
  return ss.isValue(a) ? +a : null;
};

ss_Nullable$1.cpl = function Nullable$cpl(a) {
  return ss.isValue(a) ? ~a : null;
};

ss_Nullable$1.lift = function Nullable$lift() {
  for (var i = 0; i < arguments.length; i++) {
    if (!ss.isValue(arguments[i]))
      return null;
  }
  return arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
};

///////////////////////////////////////////////////////////////////////////////
// IList

var ss_IList = function IList$() { };

ss_IList.__typeName = 'ss.IList';
ss.IList = ss_IList;
ss.initInterface(ss_IList, ss, { get_item: null, set_item: null, indexOf: null, insert: null, removeAt: null }, [ss_ICollection, ss_IEnumerable]);

ss.getItem = function ss$getItem(obj, index) {
  return obj.get_item ? obj.get_item(index) : obj[index];
}

ss.setItem = function ss$setItem(obj, index, value) {
  obj.set_item ? obj.set_item(index, value) : (obj[index] = value);
}

ss.indexOf = function ss$indexOf(obj, item) {
  var itemType = typeof(item);
  if ((!item || typeof(item.equals) !== 'function') && typeof(obj.indexOf) === 'function') {
    // use indexOf if item is null or if item does not implement an equals function
    return obj.indexOf(item);
  } else if (ss.isArrayOrTypedArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (ss.staticEquals(obj[i], item)) {
        return i;
      }
    }
    return -1;
  }
  else
    return obj.indexOf(item);
};

ss.insert = function ss$insert(obj, index, item) {
  if (obj.insert)
    obj.insert(index, item);
  else if (ss.isArray(obj))
    obj.splice(index, 0, item);
  else
    throw new ss_NotSupportedException();
};

ss.removeAt = function ss$removeAt(obj, index) {
  if (obj.removeAt)
    obj.removeAt(index);
  else if (ss.isArray(obj))
    obj.splice(index, 1);
  else
    throw new ss_NotSupportedException();
};

///////////////////////////////////////////////////////////////////////////////
// IDictionary

var ss_IDictionary = function IDictionary$() { };

ss_IDictionary.__typeName = 'ss.IDictionary';
ss.IDictionary = ss_IDictionary;
ss.initInterface(ss_IDictionary, ss, { get_item: null, set_item: null, get_keys: null, get_values: null, containsKey: null, add: null, remove: null, tryGetValue: null }, [ss_IEnumerable]);

///////////////////////////////////////////////////////////////////////////////
// Int32

var ss_Int32 = function Int32$() { };

ss_Int32.__typeName = 'ss.Int32';
ss.Int32 = ss_Int32;
ss.initClass(ss_Int32, ss, {}, Object, [ ss_IEquatable, ss_IComparable, ss_IFormattable ]);
ss_Int32.__class = false;

ss_Int32.isInstanceOfType = function Int32$isInstanceOfType(instance) {
  return typeof(instance) === 'number' && isFinite(instance) && Math.round(instance, 0) == instance;
};

ss_Int32.getDefaultValue = ss_Int32.createInstance = function Int32$getDefaultValue() {
  return 0;
};

ss_Int32.div = function Int32$div(a, b) {
  if (!ss.isValue(a) || !ss.isValue(b)) return null;
  if (b === 0) throw new ss_DivideByZeroException();
  return ss_Int32.trunc(a / b);
};

ss_Int32.trunc = function Int32$trunc(n) {
  return ss.isValue(n) ? (n > 0 ? Math.floor(n) : Math.ceil(n)) : null;
};

ss_Int32.tryParse = function Int32$tryParse(s, result, min, max) {
  result.$ = 0;
  if (!/^[+-]?[0-9]+$/.test(s))
    return 0;
  var n = parseInt(s, 10);
  if (n < min || n > max)
    return false;
  result.$ = n;
  return true;
};

///////////////////////////////////////////////////////////////////////////////
// MutableDateTime

var ss_JsDate = function JsDate$() { };

ss_JsDate.__typeName = 'ss.JsDate';
ss.JsDate = ss_JsDate;
ss.initClass(ss_JsDate, ss, {}, Object, [ ss_IEquatable, ss_IComparable ]);

ss_JsDate.createInstance = function JsDate$createInstance() {
    return new Date();
};

ss_JsDate.isInstanceOfType = function JsDate$isInstanceOfType(instance) {
   return instance instanceof Date;
};

///////////////////////////////////////////////////////////////////////////////
// ArrayEnumerator

var ss_ArrayEnumerator = function ArrayEnumerator$(array) {
  this._array = array;
  this._index = -1;
};
ss_ArrayEnumerator.__typeName = 'ss.ArrayEnumerator';
ss.ArrayEnumerator = ss_ArrayEnumerator;
ss.initClass(ss_ArrayEnumerator, ss, {
  moveNext: function ArrayEnumerator$moveNext() {
    this._index++;
    return (this._index < this._array.length);
  },
  reset: function ArrayEnumerator$reset() {
    this._index = -1;
  },
  current: function ArrayEnumerator$current() {
    if (this._index < 0 || this._index >= this._array.length)
      throw 'Invalid operation';
    return this._array[this._index];
  },
  dispose: function ArrayEnumerator$dispose() {
  }
}, null, [ss_IEnumerator, ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// ObjectEnumerator

var ss_ObjectEnumerator = function ObjectEnumerator$(o) {
  this._keys = Object.keys(o);
  this._index = -1;
  this._object = o;
};

ss_ObjectEnumerator.__typeName = 'ss.ObjectEnumerator';
ss.ObjectEnumerator = ss_ObjectEnumerator;
ss.initClass(ss_ObjectEnumerator, ss, {
  moveNext: function ObjectEnumerator$moveNext() {
    this._index++;
    return (this._index < this._keys.length);
  },
  reset: function ObjectEnumerator$reset() {
    this._index = -1;
  },
  current: function ObjectEnumerator$current() {
    if (this._index < 0 || this._index >= this._keys.length)
      throw new ss_InvalidOperationException('Invalid operation');
    var k = this._keys[this._index];
    return { key: k, value: this._object[k] };
  },
  dispose: function ObjectEnumerator$dispose() {
  }
}, null, [ss_IEnumerator, ss_IDisposable]);

///////////////////////////////////////////////////////////////////////////////
// EqualityComparer

var ss_EqualityComparer = function EqualityComparer$() {
};
ss_EqualityComparer.__typeName = 'ss.EqualityComparer';
ss.EqualityComparer = ss_EqualityComparer;
ss.initClass(ss_EqualityComparer, ss, {
  areEqual: function EqualityComparer$areEqual(x, y) {
    return ss.staticEquals(x, y);
  },
  getObjectHashCode: function EqualityComparer$getObjectHashCode(obj) {
    return ss.isValue(obj) ? ss.getHashCode(obj) : 0;
  }
}, null, [ss_IEqualityComparer]);
ss_EqualityComparer.def = new ss_EqualityComparer();


///////////////////////////////////////////////////////////////////////////////
// Comparer

var ss_Comparer = function Comparer$(f) {
  this.f = f;
};

ss_Comparer.__typeName = 'ss.Comparer';
ss.Comparer = ss_Comparer;
ss.initClass(ss_Comparer, ss, {
  compare: function Comparer$compare(x, y) {
    return this.f(x, y);
  }
}, null, [ss_IComparer]);
ss_Comparer.def = new ss_Comparer(function Comparer$defaultCompare(a, b) {
  if (!ss.isValue(a))
    return !ss.isValue(b)? 0 : -1;
  else if (!ss.isValue(b))
    return 1;
  else
    return ss.compare(a, b);
});


//#include "Dictionary.js"

///////////////////////////////////////////////////////////////////////////////
// IDisposable

var ss_IDisposable = function IDisposable$() { };
ss_IDisposable.__typeName = 'ss.IDisposable';
ss.IDisposable = ss_IDisposable;
ss.initInterface(ss_IDisposable, ss, { dispose: null });

///////////////////////////////////////////////////////////////////////////////
// StringBuilder

var ss_StringBuilder = function StringBuilder$(s) {
  this._parts = (ss.isValue(s) && s != '') ? [s] : [];
  this.length = ss.isValue(s) ? s.length : 0;
}

ss_StringBuilder.__typeName = 'ss.StringBuilder';
ss.StringBuilder = ss_StringBuilder;
ss.initClass(ss_StringBuilder, ss, {
  append: function StringBuilder$append(o) {
    if (ss.isValue(o)) {
      var s = o.toString();
      ss.add(this._parts, s);
      this.length += s.length;
    }
    return this;
  },

  appendChar: function StringBuilder$appendChar(c) {
    return this.append(String.fromCharCode(c));
  },

  appendLine: function StringBuilder$appendLine(s) {
    this.append(s);
    this.append('\r\n');
    return this;
  },

  appendLineChar: function StringBuilder$appendLineChar(c) {
    return this.appendLine(String.fromCharCode(c));
  },

  clear: function StringBuilder$clear() {
    this._parts = [];
    this.length = 0;
  },

  toString: function StringBuilder$toString() {
    return this._parts.join('');
  }
});

///////////////////////////////////////////////////////////////////////////////
// Random


///////////////////////////////////////////////////////////////////////////////
// EventArgs

var ss_EventArgs = function EventArgs$() {
}
ss_EventArgs.__typeName = 'ss.EventArgs';
ss.EventArgs = ss_EventArgs;
ss.initClass(ss_EventArgs, ss, {});

ss_EventArgs.Empty = new ss_EventArgs();

///////////////////////////////////////////////////////////////////////////////
// Exception

var ss_Exception = function Exception$(message, innerException) {
  this._message = message || 'An error occurred.';
  this._innerException = innerException || null;
  this._error = new Error();
}

ss_Exception.__typeName = 'ss.Exception';
ss.Exception = ss_Exception;
ss.initClass(ss_Exception, ss, {
  get_message: function Exception$get_message() {
    return this._message;
  },
  get_innerException: function Exception$get_innerException() {
    return this._innerException;
  },
  get_stack: function Exception$get_stack() {
    return this._error.stack;
  },
  toString: function Exception$toString() {
    var message = this._message;
    var exception = this;
    if (ss.isNullOrEmptyString(message)) {
      if (ss.isValue(ss.getInstanceType(exception)) && ss.isValue(ss.getTypeFullName(ss.getInstanceType(exception)))) {
        message = ss.getTypeFullName(ss.getInstanceType(exception));
      }
      else {
        message = '[object Exception]';
      }
    }
    return message;
  }
});

ss_Exception.wrap = function Exception$wrap(o) {
  if (ss.isInstanceOfType(o, ss_Exception)) {
    return o;
  }
  else if (o instanceof TypeError) {
    // TypeError can either be 'cannot read property blah of null/undefined' (proper NullReferenceException), or it can be eg. accessing a non-existent method of an object.
    // As long as all code is compiled, they should with a very high probability indicate the use of a null reference.
    return new ss_NullReferenceException(o.message, new ss_JsErrorException(o));
  }
  else if (o instanceof RangeError) {
    return new ss_ArgumentOutOfRangeException(null, o.message, new ss_JsErrorException(o));
  }
  else if (o instanceof Error) {
    return new ss_JsErrorException(o);
  }
  else {
    return new ss_Exception(o.toString());
  }
};

////////////////////////////////////////////////////////////////////////////////
// NotImplementedException

var ss_NotImplementedException = function NotImplementedException$(message, innerException) {
  ss_Exception.call(this, message || 'The method or operation is not implemented.', innerException);
};
ss_NotImplementedException.__typeName = 'ss.NotImplementedException';
ss.NotImplementedException = ss_NotImplementedException;
ss.initClass(ss_NotImplementedException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// NotSupportedException

var ss_NotSupportedException = function NotSupportedException$(message, innerException) {
  ss_Exception.call(this, message || 'Specified method is not supported.', innerException);
};
ss_NotSupportedException.__typeName = 'ss.NotSupportedException';
ss.NotSupportedException = ss_NotSupportedException;
ss.initClass(ss_NotSupportedException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// AggregateException

var ss_AggregateException = function AggregateException$(message, innerExceptions) {
  this.innerExceptions = ss.isValue(innerExceptions) ? ss.arrayFromEnumerable(innerExceptions) : [];
  ss_Exception.call(this, message || 'One or more errors occurred.', this.innerExceptions.length ? this.innerExceptions[0] : null);
};

ss_AggregateException.__typeName = 'ss.AggregateException';
ss.AggregateException = ss_AggregateException;
ss.initClass(ss_AggregateException, ss, {
  flatten: function  AggregateException$flatten() {
    var inner = [];
    for (var i = 0; i < this.innerExceptions.length; i++) {
      var e = this.innerExceptions[i];
      if (ss.isInstanceOfType(e, ss_AggregateException)) {
        inner.push.apply(inner, e.flatten().innerExceptions);
      }
      else {
        inner.push(e);
      }
    }
    return new ss_AggregateException(this._message, inner);
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// PromiseException

var ss_PromiseException = function PromiseException(args, message, innerException) {
  ss_Exception.call(this, message || (args.length && args[0] ? args[0].toString() : 'An error occurred'), innerException);
  this.arguments = ss.arrayClone(args);
};

ss_PromiseException.__typeName = 'ss.PromiseException';
ss.PromiseException = ss_PromiseException;
ss.initClass(ss_PromiseException, ss, {
  get_arguments: function PromiseException$get_arguments() {
    return this._arguments;
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// JsErrorException

var ss_JsErrorException = function JsErrorException$(error, message, innerException) {
  ss_Exception.call(this, message || error.message, innerException);
  this.error = error;
};
ss_JsErrorException.__typeName = 'ss.JsErrorException';
ss.JsErrorException = ss_JsErrorException;
ss.initClass(ss_JsErrorException, ss, {
  get_stack: function Exception$get_stack() {
    return this.error.stack;
  }
}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// ArgumentException

var ss_ArgumentException = function ArgumentException$(message, paramName, innerException) {
  ss_Exception.call(this, message || 'Value does not fall within the expected range.', innerException);
  this.paramName = paramName || null;
};

ss_ArgumentException.__typeName = 'ss.ArgumentException';
ss.ArgumentException = ss_ArgumentException;
ss.initClass(ss_ArgumentException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// ArgumentNullException

var ss_ArgumentNullException = function ArgumentNullException$(paramName, message, innerException) {
  if (!message) {
    message = 'Value cannot be null.';
    if (paramName)
      message += '\nParameter name: ' + paramName;
  }

  ss_ArgumentException.call(this, message, paramName, innerException);
};

ss_ArgumentNullException.__typeName = 'ss.ArgumentNullException';
ss.ArgumentNullException = ss_ArgumentNullException;
ss.initClass(ss_ArgumentNullException, ss, {}, ss_ArgumentException);

////////////////////////////////////////////////////////////////////////////////
// ArgumentNullException

var ss_ArgumentOutOfRangeException = function ArgumentOutOfRangeException$(paramName, message, innerException, actualValue) {
  if (!message) {
    message = 'Value is out of range.';
    if (paramName)
      message += '\nParameter name: ' + paramName;
  }

  ss_ArgumentException.call(this, message, paramName, innerException);
  this.actualValue = actualValue || null;
};

ss_ArgumentOutOfRangeException.__typeName = 'ss.ArgumentOutOfRangeException';
ss.ArgumentOutOfRangeException = ss_ArgumentOutOfRangeException;
ss.initClass(ss_ArgumentOutOfRangeException, ss, {}, ss_ArgumentException);

////////////////////////////////////////////////////////////////////////////////
// FormatException

var ss_FormatException = function FormatException$(message, innerException) {
  ss_Exception.call(this, message || 'Invalid format.', innerException);
};
ss_FormatException.__typeName = 'ss.FormatException';
ss.FormatException = ss_FormatException;
ss.initClass(ss_FormatException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// DivideByZeroException

var ss_DivideByZeroException = function DivideByZeroException$(message, innerException) {
  ss_Exception.call(this, message || 'Division by 0.', innerException);
};
ss_DivideByZeroException.__typeName = 'ss.DivideByZeroException';
ss.DivideByZeroException = ss_DivideByZeroException;
ss.initClass(ss_DivideByZeroException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidCastException

var ss_InvalidCastException = function InvalidCastException$(message, innerException) {
  ss_Exception.call(this, message || 'The cast is not valid.', innerException);
};
ss_InvalidCastException.__typeName = 'ss.InvalidCastException';
ss.InvalidCastException = ss_InvalidCastException;
ss.initClass(ss_InvalidCastException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidOperationException

var ss_InvalidOperationException = function InvalidOperationException$(message, innerException) {
  ss_Exception.call(this, message || 'Operation is not valid due to the current state of the object.', innerException);
};
ss_InvalidOperationException.__typeName = 'ss.InvalidOperationException';
ss.InvalidOperationException = ss_InvalidOperationException;
ss.initClass(ss_InvalidOperationException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// NullReferenceException

var ss_NullReferenceException = function NullReferenceException$(message, innerException) {
  ss_Exception.call(this, message || 'Object is null.', innerException);
};
ss_NullReferenceException.__typeName = 'ss.NullReferenceException';
ss.NullReferenceException = ss_NullReferenceException;
ss.initClass(ss_NullReferenceException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// KeyNotFoundException

var ss_KeyNotFoundException = function KeyNotFoundException$(message, innerException) {
  ss_Exception.call(this, message || 'Key not found.', innerException);
};
ss_KeyNotFoundException.__typeName = 'ss.KeyNotFoundException';
ss.KeyNotFoundException = ss_KeyNotFoundException;
ss.initClass(ss_KeyNotFoundException, ss, {}, ss_Exception);

////////////////////////////////////////////////////////////////////////////////
// InvalidOperationException

var ss_AmbiguousMatchException = function AmbiguousMatchException$(message, innerException) {
  ss_Exception.call(this, message || 'Ambiguous match.', innerException);
};
ss_AmbiguousMatchException.__typeName = 'ss.AmbiguousMatchException';
ss.AmbiguousMatchException = ss_AmbiguousMatchException;
ss.initClass(ss_AmbiguousMatchException, ss, {}, ss_Exception);

///////////////////////////////////////////////////////////////////////////////
// IteratorBlockEnumerable

var ss_IteratorBlockEnumerable = function IteratorBlockEnumerable$(getEnumerator, $this) {
  this._getEnumerator = getEnumerator;
  this._this = $this;
};

ss_IteratorBlockEnumerable.__typeName = 'ss.IteratorBlockEnumerable';
ss.IteratorBlockEnumerable = ss_IteratorBlockEnumerable;
ss.initClass(ss_IteratorBlockEnumerable, ss, {
  getEnumerator: function IteratorBlockEnumerable$getEnumerator() {
    return this._getEnumerator.call(this._this);
  }
}, null, [ss_IEnumerable]);

///////////////////////////////////////////////////////////////////////////////
// IteratorBlockEnumerator

var ss_IteratorBlockEnumerator = function IteratorBlockEnumerator$(moveNext, getCurrent, dispose, $this) {
  this._moveNext = moveNext;
  this._getCurrent = getCurrent;
  this._dispose = dispose;
  this._this = $this;
};

ss_IteratorBlockEnumerator.__typeName = 'ss.IteratorBlockEnumerator';
ss.IteratorBlockEnumerator = ss_IteratorBlockEnumerator;
ss.initClass(ss_IteratorBlockEnumerator, ss, {
  moveNext: function IteratorBlockEnumerator$moveNext() {
    try {
      return this._moveNext.call(this._this);
    }
    catch (ex) {
      if (this._dispose)
        this._dispose.call(this._this);
      throw ex;
    }
  },
  current: function IteratorBlockEnumerator$current() {
    return this._getCurrent.call(this._this);
  },
  reset: function IteratorBlockEnumerator$reset() {
    throw new ss_NotSupportedException('Reset is not supported.');
  },
  dispose: function IteratorBlockEnumerator$dispose() {
    if (this._dispose)
      this._dispose.call(this._this);
  }
}, null, [ss_IEnumerator, ss_IDisposable]);


///////////////////////////////////////////////////////////////////////////////
// Lazy

var ss_Lazy = function Lazy$(valueFactory) {
  this._valueFactory = valueFactory;
  this.isValueCreated = false;
};
ss_Lazy.__typeName = 'ss.Lazy';
ss.Lazy = ss_Lazy;
ss.initClass(ss_Lazy, ss, {
  value: function Lazy$value() {
    if (!this.isValueCreated) {
      this._value = this._valueFactory();
      delete this._valueFactory;
      this.isValueCreated = true;
    }
    return this._value;
  }
});


///////////////////////////////////////////////////////////////////////////////
// Task


////////////////////////////////////////////////////////////////////////////////
// TaskStatus


///////////////////////////////////////////////////////////////////////////////
// TaskCompletionSource


///////////////////////////////////////////////////////////////////////////////
// CancelEventArgs


///////////////////////////////////////////////////////////////////////////////
// Guid


////////////////////////////////////////////////////////////////////////////////
// IE8 shims
////////////////////////////////////////////////////////////////////////////////

if (typeof(global.HTMLElement) === 'undefined') {
  global.HTMLElement = Element;
}

if (typeof(global.MessageEvent) === 'undefined') {
  global.MessageEvent = Event;
}

// polyfill for IE8 not having Date.now.
Date.now = Date.now || function() { return +new Date; };

////////////////////////////////////////////////////////////////////////////////
// Global Registration
////////////////////////////////////////////////////////////////////////////////

global.ss = ss;
})(global);
  var ss = global.ss;
  global.tableauSoftware = global.tableauSoftware || {};

/*! BEGIN CoreSlim */


(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'tabcoreslim');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.CookieHelper
	var $tab_CookieHelper = function() {
	};
	$tab_CookieHelper.__typeName = 'tab.CookieHelper';
	$tab_CookieHelper.getCookie = function CookieHelper$GetCookie() {
		return document.cookie;
	};
	$tab_CookieHelper.setCookie = function CookieHelper$SetCookie(value) {
		document.cookie = value;
	};
	global.tab.CookieHelper = $tab_CookieHelper;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.EscapingUtil
	var $tab_EscapingUtil = function() {
	};
	$tab_EscapingUtil.__typeName = 'tab.EscapingUtil';
	$tab_EscapingUtil.escapeHtml = function EscapingUtil$EscapeHtml(html) {
		var escaped = ss.coalesce(html, '');
		escaped = escaped.replace(new RegExp('&', 'g'), '&amp;');
		escaped = escaped.replace(new RegExp('<', 'g'), '&lt;');
		escaped = escaped.replace(new RegExp('>', 'g'), '&gt;');
		escaped = escaped.replace(new RegExp('"', 'g'), '&quot;');
		escaped = escaped.replace(new RegExp("'", 'g'), '&#39;');
		escaped = escaped.replace(new RegExp('/', 'g'), '&#47;');
		return escaped;
	};
	global.tab.EscapingUtil = $tab_EscapingUtil;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.Core.ScriptEx
	var $tab_ScriptEx = function() {
	};
	$tab_ScriptEx.__typeName = 'tab.ScriptEx';
	global.tab.ScriptEx = $tab_ScriptEx;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.CoreSlim.WindowHelper
	var $tab_WindowHelper = function(window) {
		this.$window = null;
		this.$window = window;
	};
	$tab_WindowHelper.__typeName = 'tab.WindowHelper';
	$tab_WindowHelper.get_windowSelf = function WindowHelper$get_WindowSelf() {
		return window.self;
	};
	$tab_WindowHelper.get_selection = function WindowHelper$get_Selection() {
		if (typeof(window['getSelection']) === 'function') {
			return window.getSelection();
		}
		else if (typeof(document['getSelection']) === 'function') {
			return document.getSelection();
		}
		return null;
	};
	$tab_WindowHelper.close = function WindowHelper$Close(window) {
		window.close();
	};
	$tab_WindowHelper.getOpener = function WindowHelper$GetOpener(window) {
		return window.opener;
	};
	$tab_WindowHelper.getLocation = function WindowHelper$GetLocation(window) {
		return window.location;
	};
	$tab_WindowHelper.getPathAndSearch = function WindowHelper$GetPathAndSearch(window) {
		return window.location.pathname + window.location.search;
	};
	$tab_WindowHelper.setLocationHref = function WindowHelper$SetLocationHref(window, href) {
		window.location.href = href;
	};
	$tab_WindowHelper.locationReplace = function WindowHelper$LocationReplace(window, url) {
		window.location.replace(url);
	};
	$tab_WindowHelper.open = function WindowHelper$Open(href, target, options) {
		return window.open(href, target, options);
	};
	$tab_WindowHelper.reload = function WindowHelper$Reload(w, forceGet) {
		w.location.reload(forceGet);
	};
	$tab_WindowHelper.requestAnimationFrame = function WindowHelper$RequestAnimationFrame(action) {
		return $tab_WindowHelper.$requestAnimationFrameFunc(action);
	};
	$tab_WindowHelper.cancelAnimationFrame = function WindowHelper$CancelAnimationFrame(animationId) {
		if (ss.isValue(animationId)) {
			$tab_WindowHelper.$cancelAnimationFrameFunc(animationId);
		}
	};
	$tab_WindowHelper.setTimeout = function WindowHelper$SetTimeout(callback, milliseconds) {
		return window.setTimeout(callback, milliseconds);
	};
	$tab_WindowHelper.setInterval = function WindowHelper$SetInterval(callback, milliseconds) {
		return window.setInterval(callback, milliseconds);
	};
	$tab_WindowHelper.addListener = function WindowHelper$AddListener(windowParam, eventName, messageListener) {
		if ('addEventListener' in windowParam) {
			windowParam.addEventListener(eventName, messageListener, false);
		}
		else {
			windowParam.attachEvent('on' + eventName, messageListener);
		}
	};
	$tab_WindowHelper.removeListener = function WindowHelper$RemoveListener(window, eventName, messageListener) {
		if ('removeEventListener' in window) {
			window.removeEventListener(eventName, messageListener, false);
		}
		else {
			window.detachEvent('on' + eventName, messageListener);
		}
	};
	$tab_WindowHelper.$setDefaultRequestAnimationFrameImpl = function WindowHelper$SetDefaultRequestAnimationFrameImpl() {
		var lastTime = 0;
		$tab_WindowHelper.$requestAnimationFrameFunc = function(callback) {
			var curTime = (new Date()).getTime();
			var timeToCall = Math.max(0, 16 - (curTime - lastTime));
			lastTime = curTime + timeToCall;
			var id = window.setTimeout(callback, timeToCall);
			return id;
		};
	};
	$tab_WindowHelper.clearSelection = function WindowHelper$ClearSelection() {
		var selection = $tab_WindowHelper.get_selection();
		if (ss.isValue(selection)) {
			if (typeof(selection['removeAllRanges']) === 'function') {
				selection.removeAllRanges();
			}
			else if (typeof(selection['empty']) === 'function') {
				selection['empty']();
			}
		}
	};
	global.tab.WindowHelper = $tab_WindowHelper;
	ss.initClass($tab_CookieHelper, $asm, {});
	ss.initClass($tab_EscapingUtil, $asm, {});
	ss.initClass($tab_ScriptEx, $asm, {});
	ss.initClass($tab_WindowHelper, $asm, {
		get_pageXOffset: function WindowHelper$get_PageXOffset() {
			return $tab_WindowHelper.$pageXOffsetFunc(this.$window);
		},
		get_pageYOffset: function WindowHelper$get_PageYOffset() {
			return $tab_WindowHelper.$pageYOffsetFunc(this.$window);
		},
		get_clientWidth: function WindowHelper$get_ClientWidth() {
			return $tab_WindowHelper.$clientWidthFunc(this.$window);
		},
		get_clientHeight: function WindowHelper$get_ClientHeight() {
			return $tab_WindowHelper.$clientHeightFunc(this.$window);
		},
		get_innerWidth: function WindowHelper$get_InnerWidth() {
			return $tab_WindowHelper.$innerWidthFunc(this.$window);
		},
		get_outerWidth: function WindowHelper$get_OuterWidth() {
			return $tab_WindowHelper.$outerWidthFunc(this.$window);
		},
		get_innerHeight: function WindowHelper$get_InnerHeight() {
			return $tab_WindowHelper.$innerHeightFunc(this.$window);
		},
		get_outerHeight: function WindowHelper$get_OuterHeight() {
			return $tab_WindowHelper.$outerHeightFunc(this.$window);
		},
		get_screenLeft: function WindowHelper$get_ScreenLeft() {
			return $tab_WindowHelper.$screenLeftFunc(this.$window);
		},
		get_screenTop: function WindowHelper$get_ScreenTop() {
			return $tab_WindowHelper.$screenTopFunc(this.$window);
		},
		isQuirksMode: function WindowHelper$IsQuirksMode() {
			return document.compatMode === 'BackCompat';
		}
	});
	(function() {
		$tab_WindowHelper.$innerWidthFunc = null;
		$tab_WindowHelper.$innerHeightFunc = null;
		$tab_WindowHelper.$clientWidthFunc = null;
		$tab_WindowHelper.$clientHeightFunc = null;
		$tab_WindowHelper.$pageXOffsetFunc = null;
		$tab_WindowHelper.$pageYOffsetFunc = null;
		$tab_WindowHelper.$screenLeftFunc = null;
		$tab_WindowHelper.$screenTopFunc = null;
		$tab_WindowHelper.$outerWidthFunc = null;
		$tab_WindowHelper.$outerHeightFunc = null;
		$tab_WindowHelper.$requestAnimationFrameFunc = null;
		$tab_WindowHelper.$cancelAnimationFrameFunc = null;
		if ('innerWidth' in window) {
			$tab_WindowHelper.$innerWidthFunc = function(w) {
				return w.innerWidth;
			};
		}
		else {
			$tab_WindowHelper.$innerWidthFunc = function(w1) {
				return w1.document.documentElement.offsetWidth;
			};
		}
		if ('outerWidth' in window) {
			$tab_WindowHelper.$outerWidthFunc = function(w2) {
				return w2.outerWidth;
			};
		}
		else {
			$tab_WindowHelper.$outerWidthFunc = $tab_WindowHelper.$innerWidthFunc;
		}
		if ('innerHeight' in window) {
			$tab_WindowHelper.$innerHeightFunc = function(w3) {
				return w3.innerHeight;
			};
		}
		else {
			$tab_WindowHelper.$innerHeightFunc = function(w4) {
				return w4.document.documentElement.offsetHeight;
			};
		}
		if ('outerHeight' in window) {
			$tab_WindowHelper.$outerHeightFunc = function(w5) {
				return w5.outerHeight;
			};
		}
		else {
			$tab_WindowHelper.$outerHeightFunc = $tab_WindowHelper.$innerHeightFunc;
		}
		if ('clientWidth' in window) {
			$tab_WindowHelper.$clientWidthFunc = function(w6) {
				return w6['clientWidth'];
			};
		}
		else {
			$tab_WindowHelper.$clientWidthFunc = function(w7) {
				return w7.document.documentElement.clientWidth;
			};
		}
		if ('clientHeight' in window) {
			$tab_WindowHelper.$clientHeightFunc = function(w8) {
				return w8['clientHeight'];
			};
		}
		else {
			$tab_WindowHelper.$clientHeightFunc = function(w9) {
				return w9.document.documentElement.clientHeight;
			};
		}
		if (ss.isValue(window.self.pageXOffset)) {
			$tab_WindowHelper.$pageXOffsetFunc = function(w10) {
				return w10.pageXOffset;
			};
		}
		else {
			$tab_WindowHelper.$pageXOffsetFunc = function(w11) {
				return w11.document.documentElement.scrollLeft;
			};
		}
		if (ss.isValue(window.self.pageYOffset)) {
			$tab_WindowHelper.$pageYOffsetFunc = function(w12) {
				return w12.pageYOffset;
			};
		}
		else {
			$tab_WindowHelper.$pageYOffsetFunc = function(w13) {
				return w13.document.documentElement.scrollTop;
			};
		}
		if ('screenLeft' in window) {
			$tab_WindowHelper.$screenLeftFunc = function(w14) {
				return ss.unbox(ss.cast(w14.screenLeft, ss.Int32));
			};
		}
		else {
			$tab_WindowHelper.$screenLeftFunc = function(w15) {
				return w15.screenX;
			};
		}
		if ('screenTop' in window) {
			$tab_WindowHelper.$screenTopFunc = function(w16) {
				return ss.unbox(ss.cast(w16.screenTop, ss.Int32));
			};
		}
		else {
			$tab_WindowHelper.$screenTopFunc = function(w17) {
				return w17.screenY;
			};
		}
		{
			var DefaultRequestName = 'requestAnimationFrame';
			var DefaultCancelName = 'cancelAnimationFrame';
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			var requestFuncName = null;
			var cancelFuncName = null;
			if (DefaultRequestName in window) {
				requestFuncName = DefaultRequestName;
			}
			if (DefaultCancelName in window) {
				cancelFuncName = DefaultCancelName;
			}
			for (var ii = 0; ii < vendors.length && (ss.isNullOrUndefined(requestFuncName) || ss.isNullOrUndefined(cancelFuncName)); ++ii) {
				var vendor = vendors[ii];
				var funcName = vendor + 'RequestAnimationFrame';
				if (ss.isNullOrUndefined(requestFuncName) && funcName in window) {
					requestFuncName = funcName;
				}
				if (ss.isNullOrUndefined(cancelFuncName)) {
					funcName = vendor + 'CancelAnimationFrame';
					if (funcName in window) {
						cancelFuncName = funcName;
					}
					funcName = vendor + 'CancelRequestAnimationFrame';
					if (funcName in window) {
						cancelFuncName = funcName;
					}
				}
			}
			if (ss.isValue(requestFuncName)) {
				$tab_WindowHelper.$requestAnimationFrameFunc = function(callback) {
					return window[requestFuncName](callback);
				};
			}
			else {
				$tab_WindowHelper.$setDefaultRequestAnimationFrameImpl();
			}
			if (ss.isValue(cancelFuncName)) {
				$tab_WindowHelper.$cancelAnimationFrameFunc = function(animationId) {
					window[cancelFuncName](animationId);
				};
			}
			else {
				$tab_WindowHelper.$cancelAnimationFrameFunc = function(id) {
					window.clearTimeout(id);
				};
			}
		}
	})();
})();

// END CoreSlim
/*! BEGIN ApiShared */

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'vqlapishared');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DeferredUtil
	var $tab_$DeferredUtil = function() {
	};
	$tab_$DeferredUtil.__typeName = 'tab.$DeferredUtil';
	$tab_$DeferredUtil.$coerceToTrustedPromise = function DeferredUtil$CoerceToTrustedPromise(promiseOrValue) {
		var promise;
		if (promiseOrValue instanceof tableauSoftware.Promise) {
			promise = ss.cast(promiseOrValue, $tab__PromiseImpl);
		}
		else {
			if (ss.isValue(promiseOrValue) && typeof(promiseOrValue['valueOf']) === 'function') {
				promiseOrValue = promiseOrValue['valueOf']();
			}
			if ($tab_$DeferredUtil.$isPromise(promiseOrValue)) {
				var deferred = new $tab__DeferredImpl();
				ss.cast(promiseOrValue, $tab__PromiseImpl).then(ss.mkdel(deferred, deferred.resolve), ss.mkdel(deferred, deferred.reject));
				promise = deferred.get_promise();
			}
			else {
				promise = $tab_$DeferredUtil.$resolved(promiseOrValue);
			}
		}
		return promise;
	};
	$tab_$DeferredUtil.$reject = function DeferredUtil$Reject(promiseOrValue) {
		return $tab_$DeferredUtil.$coerceToTrustedPromise(promiseOrValue).then(function(value) {
			return $tab_$DeferredUtil.$rejected(ss.cast(value, ss.Exception));
		}, null);
	};
	$tab_$DeferredUtil.$resolved = function DeferredUtil$Resolved(value) {
		var p = new $tab__PromiseImpl(function(callback, errback) {
			try {
				return $tab_$DeferredUtil.$coerceToTrustedPromise((ss.isValue(callback) ? callback(value) : value));
			}
			catch ($t1) {
				var e = ss.Exception.wrap($t1);
				return $tab_$DeferredUtil.$rejected(e);
			}
		});
		return p;
	};
	$tab_$DeferredUtil.$rejected = function DeferredUtil$Rejected(reason) {
		var p = new $tab__PromiseImpl(function(callback, errback) {
			try {
				return (ss.isValue(errback) ? $tab_$DeferredUtil.$coerceToTrustedPromise(errback(reason)) : $tab_$DeferredUtil.$rejected(reason));
			}
			catch ($t1) {
				var e = ss.Exception.wrap($t1);
				return $tab_$DeferredUtil.$rejected(e);
			}
		});
		return p;
	};
	$tab_$DeferredUtil.$isPromise = function DeferredUtil$IsPromise(promiseOrValue) {
		return ss.isValue(promiseOrValue) && typeof(promiseOrValue['then']) === 'function';
	};
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNothingCrossDomainHandler
	var $tab_$DoNothingCrossDomainHandler = function() {
		this.$hostId = null;
		this.$1$StateReadyForQueryField = null;
	};
	$tab_$DoNothingCrossDomainHandler.__typeName = 'tab.$DoNothingCrossDomainHandler';
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiCommand
	var $tab__ApiCommand = function(name, commandId, hostId, parameters) {
		this.$1$NameField = null;
		this.$1$HostIdField = null;
		this.$1$CommandIdField = null;
		this.$1$ParametersField = null;
		this.set_name(name);
		this.set_commandId(commandId);
		this.set_hostId(hostId);
		this.set_parameters(parameters);
	};
	$tab__ApiCommand.__typeName = 'tab._ApiCommand';
	$tab__ApiCommand.generateNextCommandId = function ApiCommand$GenerateNextCommandId() {
		var commandId = 'cmd' + $tab__ApiCommand.$nextCommandId;
		$tab__ApiCommand.$nextCommandId++;
		return commandId;
	};
	$tab__ApiCommand.parse = function ApiCommand$Parse(serialized) {
		var name;
		var index = serialized.indexOf(String.fromCharCode(44));
		if (index < 0) {
			name = ss.cast(serialized, String);
			return new $tab__ApiCommand(name, null, null, null);
		}
		name = ss.cast(serialized.substr(0, index), String);
		var sourceId;
		var secondPart = serialized.substr(index + 1);
		index = secondPart.indexOf(String.fromCharCode(44));
		if (index < 0) {
			sourceId = secondPart;
			return new $tab__ApiCommand(name, sourceId, null, null);
		}
		sourceId = secondPart.substr(0, index);
		var hostId;
		var thirdPart = secondPart.substr(index + 1);
		index = thirdPart.indexOf(String.fromCharCode(44));
		if (index < 0) {
			hostId = thirdPart;
			return new $tab__ApiCommand(name, sourceId, hostId, null);
		}
		hostId = thirdPart.substr(0, index);
		var parameters = thirdPart.substr(index + 1);
		$tab__ApiCommand.lastResponseMessage = serialized;
		if (name === 'api.GetClientInfoCommand') {
			$tab__ApiCommand.lastClientInfoResponseMessage = serialized;
		}
		return new $tab__ApiCommand(name, sourceId, hostId, parameters);
	};
	global.tab._ApiCommand = $tab__ApiCommand;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiObjectRegistry
	var $tab__ApiObjectRegistry = function() {
	};
	$tab__ApiObjectRegistry.__typeName = 'tab._ApiObjectRegistry';
	$tab__ApiObjectRegistry.registerApiMessageRouter = function ApiObjectRegistry$RegisterApiMessageRouter(objectCreationFunc) {
		return $tab__ApiObjectRegistry.$registerType(Object).call(null, objectCreationFunc);
	};
	$tab__ApiObjectRegistry.getApiMessageRouter = function ApiObjectRegistry$GetApiMessageRouter() {
		return $tab__ApiObjectRegistry.$getSingleton(Object).call(null);
	};
	$tab__ApiObjectRegistry.disposeApiMessageRouter = function ApiObjectRegistry$DisposeApiMessageRouter() {
		$tab__ApiObjectRegistry.$clearSingletonInstance(Object).call(null);
	};
	$tab__ApiObjectRegistry.$registerType = function(T) {
		return function ApiObjectRegistry$RegisterType(objectCreationFunc) {
			var creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var previousType = creationRegistry[interfaceTypeName];
			creationRegistry[interfaceTypeName] = objectCreationFunc;
			return previousType;
		};
	};
	$tab__ApiObjectRegistry.$createType = function(T) {
		return function ApiObjectRegistry$CreateType() {
			var interfaceTypeName = ss.getTypeFullName(T);
			var creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry;
			var creationFunc = creationRegistry[interfaceTypeName];
			if (ss.isNullOrUndefined(creationFunc)) {
				throw $tab__TableauException.createInternalError("No creation function has been registered for interface type '" + interfaceTypeName + "'.");
			}
			var instance = creationFunc();
			return instance;
		};
	};
	$tab__ApiObjectRegistry.$getSingleton = function(T) {
		return function ApiObjectRegistry$GetSingleton() {
			var singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var instance = ss.cast(singletonInstanceRegistry[interfaceTypeName], T);
			if (ss.isNullOrUndefined(instance)) {
				instance = $tab__ApiObjectRegistry.$createType(T).call(null);
				singletonInstanceRegistry[interfaceTypeName] = instance;
			}
			return instance;
		};
	};
	$tab__ApiObjectRegistry.$clearSingletonInstance = function(T) {
		return function ApiObjectRegistry$ClearSingletonInstance() {
			var singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry;
			var interfaceTypeName = ss.getTypeFullName(T);
			var instance = ss.cast(singletonInstanceRegistry[interfaceTypeName], T);
			delete singletonInstanceRegistry[interfaceTypeName];
			return instance;
		};
	};
	global.tab._ApiObjectRegistry = $tab__ApiObjectRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiServerNotification
	var $tab__ApiServerNotification = function(workbookName, worksheetName, data) {
		this.$workbookName = null;
		this.$worksheetName = null;
		this.$data = null;
		this.$workbookName = workbookName;
		this.$worksheetName = worksheetName;
		this.$data = data;
	};
	$tab__ApiServerNotification.__typeName = 'tab._ApiServerNotification';
	$tab__ApiServerNotification.deserialize = function ApiServerNotification$Deserialize(json) {
		var param = JSON.parse(json);
		var workbookName = ss.cast(param['api.workbookName'], String);
		var worksheetName = ss.cast(param['api.worksheetName'], String);
		var data = param['api.commandData'];
		return new $tab__ApiServerNotification(workbookName, worksheetName, data);
	};
	global.tab._ApiServerNotification = $tab__ApiServerNotification;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiServerResultParser
	var $tab__ApiServerResultParser = function(serverResult) {
		this.$commandResult = null;
		this.$commandData = null;
		var param = JSON.parse(serverResult);
		this.$commandResult = ss.cast(param['api.commandResult'], String);
		this.$commandData = param['api.commandData'];
	};
	$tab__ApiServerResultParser.__typeName = 'tab._ApiServerResultParser';
	global.tab._ApiServerResultParser = $tab__ApiServerResultParser;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNotUseDeferred
	var $tab__DeferredImpl = function() {
		this.$promise = null;
		this.$thenFunc = null;
		this.$listeners = [];
		this.$resolveFunc = null;
		this.$promise = new $tab__PromiseImpl(ss.mkdel(this, this.then));
		this.$thenFunc = ss.mkdel(this, this.$preResolutionThen);
		this.$resolveFunc = ss.mkdel(this, this.$transitionToFulfilled);
	};
	$tab__DeferredImpl.__typeName = 'tab._DeferredImpl';
	global.tab._DeferredImpl = $tab__DeferredImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.Param
	var $tab__Param = function() {
	};
	$tab__Param.__typeName = 'tab._Param';
	$tab__Param.verifyString = function Param$VerifyString(argumentValue, argumentName) {
		if (ss.isNullOrUndefined(argumentValue) || argumentValue.length === 0) {
			throw $tab__TableauException.createInternalStringArgumentException(argumentName);
		}
	};
	$tab__Param.verifyValue = function Param$VerifyValue(argumentValue, argumentName) {
		if (ss.isNullOrUndefined(argumentValue)) {
			throw $tab__TableauException.createInternalNullArgumentException(argumentName);
		}
	};
	global.tab._Param = $tab__Param;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.DoNotUsePromise
	var $tab__PromiseImpl = function(thenFunc) {
		this.then = null;
		this.then = thenFunc;
	};
	$tab__PromiseImpl.__typeName = 'tab._PromiseImpl';
	global.tab._PromiseImpl = $tab__PromiseImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.TabRect
	var $tab__Rect = function(left, top, width, height) {
		this.left = 0;
		this.top = 0;
		this.width = 0;
		this.height = 0;
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
	};
	$tab__Rect.__typeName = 'tab._Rect';
	global.tab._Rect = $tab__Rect;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedDashboardImpl
	var $tab__SharedDashboardImpl = function(sheetInfoImpl, messagingOptions) {
		this.worksheets = null;
		this.dashboardObjects = null;
		this.messagingOptions = null;
		$tab__SharedSheetImpl.call(this, sheetInfoImpl);
		this.messagingOptions = messagingOptions;
	};
	$tab__SharedDashboardImpl.__typeName = 'tab._SharedDashboardImpl';
	global.tab._SharedDashboardImpl = $tab__SharedDashboardImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedSheetImpl
	var $tab__SharedSheetImpl = function(sheetInfoImpl) {
		this.$name = null;
		this.$sheetType = null;
		this.$size = null;
		this.$name = sheetInfoImpl.name;
		this.$sheetType = sheetInfoImpl.sheetType;
		this.$size = sheetInfoImpl.size;
	};
	$tab__SharedSheetImpl.__typeName = 'tab._SharedSheetImpl';
	global.tab._SharedSheetImpl = $tab__SharedSheetImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.SharedWorksheetImpl
	var $tab__SharedWorksheetImpl = function(sheetInfoImpl, messagingOptions, parentDashboardImpl) {
		this.$parentDashboardImpl = null;
		this.messagingOptions = null;
		$tab__SharedSheetImpl.call(this, sheetInfoImpl);
		this.$parentDashboardImpl = parentDashboardImpl;
		this.messagingOptions = messagingOptions;
	};
	$tab__SharedWorksheetImpl.__typeName = 'tab._SharedWorksheetImpl';
	global.tab._SharedWorksheetImpl = $tab__SharedWorksheetImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiSharedSheetInfoImpl
	var $tab__SheetInfoImpl = function() {
	};
	$tab__SheetInfoImpl.__typeName = 'tab._SheetInfoImpl';
	$tab__SheetInfoImpl.$ctor = function(name, sheetType, size, zoneId) {
		var $this = new Object();
		$this.name = null;
		$this.sheetType = null;
		$this.zoneId = 0;
		$this.size = null;
		$this.name = name;
		$this.sheetType = sheetType;
		$this.size = size;
		$this.zoneId = zoneId;
		return $this;
	};
	$tab__SheetInfoImpl.isInstanceOfType = function() {
		return true;
	};
	global.tab._SheetInfoImpl = $tab__SheetInfoImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.TableauException
	var $tab__TableauException = function() {
	};
	$tab__TableauException.__typeName = 'tab._TableauException';
	$tab__TableauException.create = function TableauException$Create(id, message) {
		var x = new ss.Exception(message);
		x['tableauSoftwareErrorCode'] = id;
		return x;
	};
	$tab__TableauException.createInternalError = function TableauException$CreateInternalError(details) {
		if (ss.isValue(details)) {
			return $tab__TableauException.create('internalError', 'Internal error. Please contact Tableau support with the following information: ' + details);
		}
		else {
			return $tab__TableauException.create('internalError', 'Internal error. Please contact Tableau support');
		}
	};
	$tab__TableauException.createInternalNullArgumentException = function TableauException$CreateInternalNullArgumentException(argumentName) {
		return $tab__TableauException.createInternalError("Null/undefined argument '" + argumentName + "'.");
	};
	$tab__TableauException.createInternalStringArgumentException = function TableauException$CreateInternalStringArgumentException(argumentName) {
		return $tab__TableauException.createInternalError("Invalid string argument '" + argumentName + "'.");
	};
	$tab__TableauException.createServerError = function TableauException$CreateServerError(message) {
		return $tab__TableauException.create('serverError', message);
	};
	$tab__TableauException.createNotActiveSheet = function TableauException$CreateNotActiveSheet() {
		return $tab__TableauException.create('notActiveSheet', 'Operation not allowed on non-active sheet');
	};
	$tab__TableauException.createInvalidCustomViewName = function TableauException$CreateInvalidCustomViewName(customViewName) {
		return $tab__TableauException.create('invalidCustomViewName', 'Invalid custom view name: ' + customViewName);
	};
	$tab__TableauException.createInvalidParameter = function TableauException$CreateInvalidParameter(paramName) {
		return $tab__TableauException.create('invalidParameter', 'Invalid parameter: ' + paramName);
	};
	$tab__TableauException.createInvalidFilterFieldNameOrValue = function TableauException$CreateInvalidFilterFieldNameOrValue(fieldName) {
		return $tab__TableauException.create('invalidFilterFieldNameOrValue', 'Invalid filter field name or value: ' + fieldName);
	};
	$tab__TableauException.createInvalidDateParameter = function TableauException$CreateInvalidDateParameter(paramName) {
		return $tab__TableauException.create('invalidDateParameter', 'Invalid date parameter: ' + paramName);
	};
	$tab__TableauException.createNullOrEmptyParameter = function TableauException$CreateNullOrEmptyParameter(paramName) {
		return $tab__TableauException.create('nullOrEmptyParameter', 'Parameter cannot be null or empty: ' + paramName);
	};
	$tab__TableauException.createMissingMaxSize = function TableauException$CreateMissingMaxSize() {
		return $tab__TableauException.create('missingMaxSize', 'Missing maxSize for SheetSizeBehavior.ATMOST');
	};
	$tab__TableauException.createMissingMinSize = function TableauException$CreateMissingMinSize() {
		return $tab__TableauException.create('missingMinSize', 'Missing minSize for SheetSizeBehavior.ATLEAST');
	};
	$tab__TableauException.createMissingMinMaxSize = function TableauException$CreateMissingMinMaxSize() {
		return $tab__TableauException.create('missingMinMaxSize', 'Missing minSize or maxSize for SheetSizeBehavior.RANGE');
	};
	$tab__TableauException.createInvalidRangeSize = function TableauException$CreateInvalidRangeSize() {
		return $tab__TableauException.create('invalidSize', 'Missing minSize or maxSize for SheetSizeBehavior.RANGE');
	};
	$tab__TableauException.createInvalidSizeValue = function TableauException$CreateInvalidSizeValue() {
		return $tab__TableauException.create('invalidSize', 'Size value cannot be less than zero');
	};
	$tab__TableauException.createInvalidSheetSizeParam = function TableauException$CreateInvalidSheetSizeParam() {
		return $tab__TableauException.create('invalidSize', 'Invalid sheet size parameter');
	};
	$tab__TableauException.createSizeConflictForExactly = function TableauException$CreateSizeConflictForExactly() {
		return $tab__TableauException.create('invalidSize', 'Conflicting size values for SheetSizeBehavior.EXACTLY');
	};
	$tab__TableauException.createInvalidSizeBehaviorOnWorksheet = function TableauException$CreateInvalidSizeBehaviorOnWorksheet() {
		return $tab__TableauException.create('invalidSizeBehaviorOnWorksheet', 'Only SheetSizeBehavior.AUTOMATIC is allowed on Worksheets');
	};
	$tab__TableauException.createNoUrlForHiddenWorksheet = function TableauException$CreateNoUrlForHiddenWorksheet() {
		return $tab__TableauException.create('noUrlForHiddenWorksheet', 'Hidden worksheets do not have a URL.');
	};
	$tab__TableauException.createInvalidAggregationFieldName = function TableauException$CreateInvalidAggregationFieldName(fieldName) {
		return $tab__TableauException.create('invalidAggregationFieldName', "Invalid aggregation type for field '" + fieldName + "'");
	};
	$tab__TableauException.createInvalidToolbarButtonName = function TableauException$CreateInvalidToolbarButtonName(buttonName) {
		return $tab__TableauException.create('invalidToolbarButtonName', "Invalid toolbar button name: '" + buttonName + "'");
	};
	$tab__TableauException.createIndexOutOfRange = function TableauException$CreateIndexOutOfRange(index) {
		return $tab__TableauException.create('indexOutOfRange', "Index '" + index + "' is out of range.");
	};
	$tab__TableauException.createUnsupportedEventName = function TableauException$CreateUnsupportedEventName(eventName) {
		return $tab__TableauException.create('unsupportedEventName', "Unsupported event '" + eventName + "'.");
	};
	$tab__TableauException.createBrowserNotCapable = function TableauException$CreateBrowserNotCapable() {
		return $tab__TableauException.create('browserNotCapable', 'This browser is incapable of supporting the Tableau JavaScript API.');
	};
	global.tab._TableauException = $tab__TableauException;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.Utility
	var $tab__Utility = function() {
	};
	$tab__Utility.__typeName = 'tab._Utility';
	$tab__Utility.isNullOrEmpty = function Utility$IsNullOrEmpty(value) {
		return ss.isNullOrUndefined(value) || (value['length'] || 0) <= 0;
	};
	$tab__Utility.isString = function Utility$IsString(value) {
		return typeof(value) === 'string';
	};
	$tab__Utility.isNumber = function Utility$IsNumber(value) {
		return typeof(value) === 'number';
	};
	$tab__Utility.isDate = function Utility$IsDate(value) {
		if (typeof(value) === 'object' && ss.isInstanceOfType(value, ss.JsDate)) {
			return true;
		}
		else if (!!(Object.prototype.toString.call(value) !== '[object Date]')) {
			return false;
		}
		return !isNaN(ss.cast(value, ss.JsDate).getTime());
	};
	$tab__Utility.isDateValid = function Utility$IsDateValid(dt) {
		return !isNaN(dt.getTime());
	};
	$tab__Utility.indexOf = function Utility$IndexOf(array, searchElement, fromIndex) {
		if (ss.isValue(Array.prototype['indexOf'])) {
			return ss.unbox(ss.cast(array['indexOf'](searchElement, fromIndex), ss.Int32));
		}
		fromIndex = fromIndex || 0;
		var length = array.length;
		if (length > 0) {
			for (var index = fromIndex; index < length; index++) {
				if (ss.referenceEquals(array[index], searchElement)) {
					return index;
				}
			}
		}
		return -1;
	};
	$tab__Utility.contains = function Utility$Contains(array, searchElement, fromIndex) {
		var index = $tab__Utility.indexOf(array, searchElement, fromIndex);
		return index >= 0;
	};
	$tab__Utility.getTopmostWindow = function Utility$GetTopmostWindow() {
		var win = window.self;
		while (ss.isValue(win.parent) && !ss.referenceEquals(win.parent, win)) {
			win = win.parent;
		}
		return win;
	};
	$tab__Utility.toInt = function Utility$ToInt(value) {
		if ($tab__Utility.isNumber(value)) {
			return ss.Int32.trunc(value);
		}
		var number = parseInt(value.toString(), 10);
		if (isNaN(number)) {
			return 0;
		}
		return number;
	};
	$tab__Utility.hasClass = function Utility$HasClass(element, className) {
		var regexClass = new RegExp('[\\n\\t\\r]', 'g');
		return ss.isValue(element) && (' ' + element.className + ' ').replace(regexClass, ' ').indexOf(' ' + className + ' ') > -1;
	};
	$tab__Utility.findParentWithClassName = function Utility$FindParentWithClassName(element, className, stopAtElement) {
		var parent = (ss.isValue(element) ? ss.cast(element.parentNode, HTMLElement) : null);
		stopAtElement = stopAtElement || document.body;
		while (ss.isValue(parent)) {
			if ($tab__Utility.hasClass(parent, className)) {
				return parent;
			}
			if (ss.referenceEquals(parent, stopAtElement)) {
				parent = null;
			}
			else {
				parent = ss.cast(parent.parentNode, HTMLElement);
			}
		}
		return parent;
	};
	$tab__Utility.hasJsonParse = function Utility$HasJsonParse() {
		return !!(ss.isValue(JSON) && ss.isValue(JSON.parse));
	};
	$tab__Utility.hasWindowPostMessage = function Utility$HasWindowPostMessage() {
		return !!ss.isValue(window.postMessage);
	};
	$tab__Utility.isPostMessageSynchronous = function Utility$IsPostMessageSynchronous() {
		if ($tab__Utility.isIE()) {
			var msieRegEx = new RegExp('(msie) ([\\w.]+)');
			var matches = msieRegEx.exec(window.navigator.userAgent.toLowerCase());
			var versionStr = matches[2] || '0';
			var version = parseInt(versionStr, 10);
			return version <= 8;
		}
		return false;
	};
	$tab__Utility.hasDocumentAttachEvent = function Utility$HasDocumentAttachEvent() {
		return !!ss.isValue(document.attachEvent);
	};
	$tab__Utility.hasWindowAddEventListener = function Utility$HasWindowAddEventListener() {
		return !!ss.isValue(window.addEventListener);
	};
	$tab__Utility.isElementOfTag = function Utility$IsElementOfTag(element, tagName) {
		return ss.isValue(element) && element.nodeType === 1 && ss.referenceEquals(element.tagName.toLowerCase(), tagName.toLowerCase());
	};
	$tab__Utility.elementToString = function Utility$ElementToString(element) {
		var str = new ss.StringBuilder();
		str.append(element.tagName.toLowerCase());
		if (!$tab__Utility.isNullOrEmpty(element.id)) {
			str.append('#').append(element.id);
		}
		if (!$tab__Utility.isNullOrEmpty(element.className)) {
			var classes = element.className.split(' ');
			str.append('.').append(classes.join('.'));
		}
		return str.toString();
	};
	$tab__Utility.tableauGCS = function Utility$TableauGCS(e) {
		if (typeof(window['getComputedStyle']) === 'function') {
			return window.getComputedStyle(e);
		}
		else {
			return e['currentStyle'];
		}
	};
	$tab__Utility.isIE = function Utility$IsIE() {
		return !!(window.navigator.userAgent.indexOf('MSIE') > -1 && ss.isNullOrUndefined(window.opera));
	};
	$tab__Utility.isSafari = function Utility$IsSafari() {
		var ua = window.navigator.userAgent;
		var isChrome = ua.indexOf('Chrome') >= 0;
		return ua.indexOf('Safari') >= 0 && !isChrome;
	};
	$tab__Utility.mobileDetect = function Utility$MobileDetect() {
		var ua = window.navigator.userAgent;
		if (ua.indexOf('iPad') !== -1) {
			return true;
		}
		if (ua.indexOf('Android') !== -1) {
			return true;
		}
		if (ua.indexOf('AppleWebKit') !== -1 && ua.indexOf('Mobile') !== -1) {
			return true;
		}
		return false;
	};
	$tab__Utility.visibleContentRectInDocumentCoordinates = function Utility$VisibleContentRectInDocumentCoordinates(element) {
		var visibleRect = $tab__Utility.contentRectInDocumentCoordinates(element);
		for (var currentElement = element.parentElement; ss.isValue(currentElement) && ss.isValue(currentElement.parentElement); currentElement = currentElement.parentElement) {
			var overflow = $tab__Utility.$getComputedStyle(currentElement).overflow;
			if (overflow === 'auto' || overflow === 'scroll' || overflow === 'hidden') {
				visibleRect = visibleRect.intersect($tab__Utility.contentRectInDocumentCoordinates(currentElement));
			}
		}
		var viewportRect = $tab__Utility.contentRectInDocumentCoordinates(document.documentElement);
		var win = new tab.WindowHelper(window.self);
		if (win.isQuirksMode()) {
			viewportRect.height = document.body.clientHeight - viewportRect.left;
			viewportRect.width = document.body.clientWidth - viewportRect.top;
		}
		viewportRect.left += win.get_pageXOffset();
		viewportRect.top += win.get_pageYOffset();
		return visibleRect.intersect(viewportRect);
	};
	$tab__Utility.contentRectInDocumentCoordinates = function Utility$ContentRectInDocumentCoordinates(element) {
		var boundingClientRect = $tab__Utility.getBoundingClientRect(element);
		var style = $tab__Utility.$getComputedStyle(element);
		var paddingLeft = $tab__Utility.toInt(style.paddingLeft);
		var paddingTop = $tab__Utility.toInt(style.paddingTop);
		var borderLeft = $tab__Utility.toInt(style.borderLeftWidth);
		var borderTop = $tab__Utility.toInt(style.borderTopWidth);
		var contentSize = $tab__Utility.computeContentSize(element);
		var win = new tab.WindowHelper(window.self);
		var left = boundingClientRect.left + paddingLeft + borderLeft + win.get_pageXOffset();
		var top = boundingClientRect.top + paddingTop + borderTop + win.get_pageYOffset();
		return new $tab__Rect(left, top, contentSize.width, contentSize.height);
	};
	$tab__Utility.getBoundingClientRect = function Utility$GetBoundingClientRect(element) {
		var rect = element.getBoundingClientRect();
		var top = ss.Int32.trunc(rect.top);
		var left = ss.Int32.trunc(rect.left);
		var right = ss.Int32.trunc(rect.right);
		var bottom = ss.Int32.trunc(rect.bottom);
		return new $tab__Rect(left, top, right - left, bottom - top);
	};
	$tab__Utility.convertRawValue = function Utility$ConvertRawValue(rawValue, dataType) {
		if (ss.isNullOrUndefined(rawValue)) {
			return null;
		}
		switch (dataType) {
			case 'bool': {
				return rawValue;
			}
			case 'date':
			case 'number': {
				if (ss.isNullOrUndefined(rawValue)) {
					return Number.NaN;
				}
				return rawValue;
			}
			default:
			case 'string': {
				return rawValue;
			}
		}
	};
	$tab__Utility.getDataValue = function Utility$GetDataValue(dv) {
		if (ss.isNullOrUndefined(dv)) {
			return $tab_DataValue.$ctor(null, null, null);
		}
		return $tab_DataValue.$ctor($tab__Utility.convertRawValue(dv.value, dv.type), dv.formattedValue, dv.aliasedValue);
	};
	$tab__Utility.serializeDateForServer = function Utility$SerializeDateForServer(date) {
		var serializedDate = '';
		if (ss.isValue(date) && $tab__Utility.isDate(date)) {
			var year = date.getUTCFullYear();
			var month = date.getUTCMonth() + 1;
			var day = date.getUTCDate();
			var hh = date.getUTCHours();
			var mm = date.getUTCMinutes();
			var sec = date.getUTCSeconds();
			serializedDate = year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + sec;
		}
		return serializedDate;
	};
	$tab__Utility.computeContentSize = function Utility$ComputeContentSize(element) {
		var style = $tab__Utility.$getComputedStyle(element);
		var paddingLeft = parseFloat(style.paddingLeft);
		var paddingTop = parseFloat(style.paddingTop);
		var paddingRight = parseFloat(style.paddingRight);
		var paddingBottom = parseFloat(style.paddingBottom);
		var width = element.clientWidth - Math.round(paddingLeft + paddingRight);
		var height = element.clientHeight - Math.round(paddingTop + paddingBottom);
		return $tab_Size.$ctor(width, height);
	};
	$tab__Utility.$getComputedStyle = function Utility$GetComputedStyle(element) {
		if (typeof(window['getComputedStyle']) === 'function') {
			if (ss.isValue(element.ownerDocument.defaultView.opener)) {
				return element.ownerDocument.defaultView.getComputedStyle(element);
			}
			return window.getComputedStyle(element);
		}
		else if (ss.isValue(element['currentStyle'])) {
			return element['currentStyle'];
		}
		return element.style;
	};
	$tab__Utility.roundVizSizeInPixels = function Utility$RoundVizSizeInPixels(size) {
		if (ss.isNullOrUndefined(size) || !(size.indexOf('px') !== -1)) {
			return size;
		}
		var sizeValue = parseFloat(size.split('px')[0]);
		return Math.round(sizeValue) + 'px';
	};
	$tab__Utility.noResultPromiseHelper = function Utility$NoResultPromiseHelper(commandName, cmdParams, messagingOptions) {
		var deferred = new tab._Deferred();
		var returnHandler = new (ss.makeGenericType($tab_CommandReturnHandler$1, [Object]))(commandName, 1, function(result) {
			deferred.resolve();
		}, function(remoteError, message) {
			deferred.reject($tab__TableauException.createServerError(message));
		});
		messagingOptions.sendCommand(Object).call(messagingOptions, cmdParams, returnHandler);
		return deferred.get_promise();
	};
	$tab__Utility.clone = function(T) {
		return function Utility$Clone(src) {
			return JSON.parse(JSON.stringify(src));
		};
	};
	global.tab._Utility = $tab__Utility;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDashboardObjectType
	var $tab_ApiDashboardObjectType = function() {
	};
	$tab_ApiDashboardObjectType.__typeName = 'tab.ApiDashboardObjectType';
	global.tab.ApiDashboardObjectType = $tab_ApiDashboardObjectType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDateRangeType
	var $tab_ApiDateRangeType = function() {
	};
	$tab_ApiDateRangeType.__typeName = 'tab.ApiDateRangeType';
	global.tab.ApiDateRangeType = $tab_ApiDateRangeType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiDeviceType
	var $tab_ApiDeviceType = function() {
	};
	$tab_ApiDeviceType.__typeName = 'tab.ApiDeviceType';
	global.tab.ApiDeviceType = $tab_ApiDeviceType;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiEnumConverter
	var $tab_ApiEnumConverter = function() {
	};
	$tab_ApiEnumConverter.__typeName = 'tab.ApiEnumConverter';
	$tab_ApiEnumConverter.convertDashboardObjectType = function ApiEnumConverter$ConvertDashboardObjectType(crossDomainType) {
		switch (crossDomainType) {
			case 'blank': {
				return 'blank';
			}
			case 'image': {
				return 'image';
			}
			case 'legend': {
				return 'legend';
			}
			case 'pageFilter': {
				return 'pageFilter';
			}
			case 'parameterControl': {
				return 'parameterControl';
			}
			case 'quickFilter': {
				return 'quickFilter';
			}
			case 'text': {
				return 'text';
			}
			case 'title': {
				return 'title';
			}
			case 'webPage': {
				return 'webPage';
			}
			case 'worksheet': {
				return 'worksheet';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainDashboardObjectType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertDateRange = function ApiEnumConverter$ConvertDateRange(crossDomainType) {
		switch (crossDomainType) {
			case 'curr': {
				return 'curr';
			}
			case 'last': {
				return 'last';
			}
			case 'lastn': {
				return 'lastn';
			}
			case 'next': {
				return 'next';
			}
			case 'nextn': {
				return 'nextn';
			}
			case 'todate': {
				return 'todate';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainDateRangeType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFieldAggregation = function ApiEnumConverter$ConvertFieldAggregation(crossDomainType) {
		switch (crossDomainType) {
			case 'ATTR': {
				return 'ATTR';
			}
			case 'AVG': {
				return 'AVG';
			}
			case 'COUNT': {
				return 'COUNT';
			}
			case 'COUNTD': {
				return 'COUNTD';
			}
			case 'DAY': {
				return 'DAY';
			}
			case 'END': {
				return 'END';
			}
			case 'HOUR': {
				return 'HOUR';
			}
			case 'INOUT': {
				return 'INOUT';
			}
			case 'KURTOSIS': {
				return 'KURTOSIS';
			}
			case 'MAX': {
				return 'MAX';
			}
			case 'MDY': {
				return 'MDY';
			}
			case 'MEDIAN': {
				return 'MEDIAN';
			}
			case 'MIN': {
				return 'MIN';
			}
			case 'MINUTE': {
				return 'MINUTE';
			}
			case 'MONTH': {
				return 'MONTH';
			}
			case 'MONTHYEAR': {
				return 'MONTHYEAR';
			}
			case 'NONE': {
				return 'NONE';
			}
			case 'PERCENTILE': {
				return 'PERCENTILE';
			}
			case 'QUART1': {
				return 'QUART1';
			}
			case 'QUART3': {
				return 'QUART3';
			}
			case 'QTR': {
				return 'QTR';
			}
			case 'SECOND': {
				return 'SECOND';
			}
			case 'SKEWNESS': {
				return 'SKEWNESS';
			}
			case 'STDEV': {
				return 'STDEV';
			}
			case 'STDEVP': {
				return 'STDEVP';
			}
			case 'SUM': {
				return 'SUM';
			}
			case 'SUM_XSQR': {
				return 'SUM_XSQR';
			}
			case 'TRUNC_DAY': {
				return 'TRUNC_DAY';
			}
			case 'TRUNC_HOUR': {
				return 'TRUNC_HOUR';
			}
			case 'TRUNC_MINUTE': {
				return 'TRUNC_MINUTE';
			}
			case 'TRUNC_MONTH': {
				return 'TRUNC_MONTH';
			}
			case 'TRUNC_QTR': {
				return 'TRUNC_QTR';
			}
			case 'TRUNC_SECOND': {
				return 'TRUNC_SECOND';
			}
			case 'TRUNC_WEEK': {
				return 'TRUNC_WEEK';
			}
			case 'TRUNC_YEAR': {
				return 'TRUNC_YEAR';
			}
			case 'USER': {
				return 'USER';
			}
			case 'VAR': {
				return 'VAR';
			}
			case 'VARP': {
				return 'VARP';
			}
			case 'WEEK': {
				return 'WEEK';
			}
			case 'WEEKDAY': {
				return 'WEEKDAY';
			}
			case 'YEAR': {
				return 'YEAR';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFieldAggregationType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFieldRole = function ApiEnumConverter$ConvertFieldRole(crossDomainType) {
		switch (crossDomainType) {
			case 'dimension': {
				return 'dimension';
			}
			case 'measure': {
				return 'measure';
			}
			case 'unknown': {
				return 'unknown';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFieldRoleType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertFilterType = function ApiEnumConverter$ConvertFilterType(crossDomainType) {
		switch (crossDomainType) {
			case 'categorical': {
				return 'categorical';
			}
			case 'hierarchical': {
				return 'hierarchical';
			}
			case 'quantitative': {
				return 'quantitative';
			}
			case 'relativedate': {
				return 'relativedate';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainFilterType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertParameterAllowableValuesType = function ApiEnumConverter$ConvertParameterAllowableValuesType(crossDomainType) {
		switch (crossDomainType) {
			case 'all': {
				return 'all';
			}
			case 'list': {
				return 'list';
			}
			case 'range': {
				return 'range';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterAllowableValuesType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertParameterDataType = function ApiEnumConverter$ConvertParameterDataType(crossDomainType) {
		switch (crossDomainType) {
			case 'boolean': {
				return 'boolean';
			}
			case 'date': {
				return 'date';
			}
			case 'datetime': {
				return 'datetime';
			}
			case 'float': {
				return 'float';
			}
			case 'integer': {
				return 'integer';
			}
			case 'string': {
				return 'string';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterDataType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertPeriodType = function ApiEnumConverter$ConvertPeriodType(crossDomainType) {
		switch (crossDomainType) {
			case 'year': {
				return 'year';
			}
			case 'quarter': {
				return 'quarter';
			}
			case 'month': {
				return 'month';
			}
			case 'week': {
				return 'week';
			}
			case 'day': {
				return 'day';
			}
			case 'hour': {
				return 'hour';
			}
			case 'minute': {
				return 'minute';
			}
			case 'second': {
				return 'second';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainPeriodType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertSheetType = function ApiEnumConverter$ConvertSheetType(crossDomainType) {
		switch (crossDomainType) {
			case 'worksheet': {
				return 'worksheet';
			}
			case 'dashboard': {
				return 'dashboard';
			}
			case 'story': {
				return 'story';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainSheetType: ' + crossDomainType);
			}
		}
	};
	$tab_ApiEnumConverter.convertDataType = function ApiEnumConverter$ConvertDataType(crossDomainType) {
		switch (crossDomainType) {
			case 'boolean': {
				return 'boolean';
			}
			case 'date': {
				return 'date';
			}
			case 'datetime': {
				return 'datetime';
			}
			case 'float': {
				return 'float';
			}
			case 'integer': {
				return 'integer';
			}
			case 'string': {
				return 'string';
			}
			default: {
				throw $tab__TableauException.createInternalError('Unknown ApiCrossDomainParameterDataType: ' + crossDomainType);
			}
		}
	};
	global.tab.ApiEnumConverter = $tab_ApiEnumConverter;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiErrorCode
	var $tab_ApiErrorCode = function() {
	};
	$tab_ApiErrorCode.__typeName = 'tab.ApiErrorCode';
	global.tab.ApiErrorCode = $tab_ApiErrorCode;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFieldAggregationType
	var $tab_ApiFieldAggregationType = function() {
	};
	$tab_ApiFieldAggregationType.__typeName = 'tab.ApiFieldAggregationType';
	global.tab.ApiFieldAggregationType = $tab_ApiFieldAggregationType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFieldRoleType
	var $tab_ApiFieldRoleType = function() {
	};
	$tab_ApiFieldRoleType.__typeName = 'tab.ApiFieldRoleType';
	global.tab.ApiFieldRoleType = $tab_ApiFieldRoleType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFilterType
	var $tab_ApiFilterType = function() {
	};
	$tab_ApiFilterType.__typeName = 'tab.ApiFilterType';
	global.tab.ApiFilterType = $tab_ApiFilterType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiFilterUpdateType
	var $tab_ApiFilterUpdateType = function() {
	};
	$tab_ApiFilterUpdateType.__typeName = 'tab.ApiFilterUpdateType';
	global.tab.ApiFilterUpdateType = $tab_ApiFilterUpdateType;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiMessageHandler
	var $tab_ApiMessageHandler = function() {
	};
	$tab_ApiMessageHandler.__typeName = 'tab.ApiMessageHandler';
	global.tab.ApiMessageHandler = $tab_ApiMessageHandler;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.ApiMessagingOptions
	var $tab_ApiMessagingOptions = function(router, handler) {
		this.$router = null;
		this.$handler = null;
		$tab__Param.verifyValue(router, 'router');
		this.$router = router;
		this.$handler = handler;
	};
	$tab_ApiMessagingOptions.__typeName = 'tab.ApiMessagingOptions';
	global.tab.ApiMessagingOptions = $tab_ApiMessagingOptions;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiNullOption
	var $tab_ApiNullOption = function() {
	};
	$tab_ApiNullOption.__typeName = 'tab.ApiNullOption';
	global.tab.ApiNullOption = $tab_ApiNullOption;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiParameterAllowableValuesType
	var $tab_ApiParameterAllowableValuesType = function() {
	};
	$tab_ApiParameterAllowableValuesType.__typeName = 'tab.ApiParameterAllowableValuesType';
	global.tab.ApiParameterAllowableValuesType = $tab_ApiParameterAllowableValuesType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiParameterDataType
	var $tab_ApiParameterDataType = function() {
	};
	$tab_ApiParameterDataType.__typeName = 'tab.ApiParameterDataType';
	global.tab.ApiParameterDataType = $tab_ApiParameterDataType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiPeriodType
	var $tab_ApiPeriodType = function() {
	};
	$tab_ApiPeriodType.__typeName = 'tab.ApiPeriodType';
	global.tab.ApiPeriodType = $tab_ApiPeriodType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSelectionUpdateType
	var $tab_ApiSelectionUpdateType = function() {
	};
	$tab_ApiSelectionUpdateType.__typeName = 'tab.ApiSelectionUpdateType';
	global.tab.ApiSelectionUpdateType = $tab_ApiSelectionUpdateType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSheetSizeBehavior
	var $tab_ApiSheetSizeBehavior = function() {
	};
	$tab_ApiSheetSizeBehavior.__typeName = 'tab.ApiSheetSizeBehavior';
	global.tab.ApiSheetSizeBehavior = $tab_ApiSheetSizeBehavior;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiSheetType
	var $tab_ApiSheetType = function() {
	};
	$tab_ApiSheetType.__typeName = 'tab.ApiSheetType';
	global.tab.ApiSheetType = $tab_ApiSheetType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiTableauEventName
	var $tab_ApiTableauEventName = function() {
	};
	$tab_ApiTableauEventName.__typeName = 'tab.ApiTableauEventName';
	global.tab.ApiTableauEventName = $tab_ApiTableauEventName;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiToolbarButtonName
	var $tab_ApiToolbarButtonName = function() {
	};
	$tab_ApiToolbarButtonName.__typeName = 'tab.ApiToolbarButtonName';
	global.tab.ApiToolbarButtonName = $tab_ApiToolbarButtonName;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.ApiToolbarPosition
	var $tab_ApiToolbarPosition = function() {
	};
	$tab_ApiToolbarPosition.__typeName = 'tab.ApiToolbarPosition';
	global.tab.ApiToolbarPosition = $tab_ApiToolbarPosition;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.CommandReturnHandler
	var $tab_CommandReturnHandler$1 = function(T) {
		var $type = function(commandName, successCallbackTiming, successCallback, errorCallback) {
			this.$commandName = null;
			this.$successCallbackTiming = 0;
			this.$successCallback = null;
			this.$errorCallback = null;
			this.$commandName = commandName;
			this.$successCallback = successCallback;
			this.$successCallbackTiming = successCallbackTiming;
			this.$errorCallback = errorCallback;
		};
		ss.registerGenericClassInstance($type, $tab_CommandReturnHandler$1, [T], {
			get_commandName: function CommandReturnHandler$get_CommandName() {
				return this.$commandName;
			},
			get_successCallback: function CommandReturnHandler$get_SuccessCallback() {
				return this.$successCallback;
			},
			get_successCallbackTiming: function CommandReturnHandler$get_SuccessCallbackTiming() {
				return this.$successCallbackTiming;
			},
			get_errorCallback: function CommandReturnHandler$get_ErrorCallback() {
				return this.$errorCallback;
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_CommandReturnHandler$1.__typeName = 'tab.CommandReturnHandler$1';
	ss.initGenericClass($tab_CommandReturnHandler$1, $asm, 1);
	global.tab.CommandReturnHandler$1 = $tab_CommandReturnHandler$1;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.CrossDomainMessager
	var $tab_CrossDomainMessager = function(legacyHandler) {
		this.$nextHandlerId = 0;
		this.$handlers = {};
		this.$commandCallbacks = {};
		this.$commandReturnAfterStateReadyQueues = {};
		this.$legacyHandler = null;
		this.$legacyHandler = legacyHandler;
		if ($tab__Utility.hasWindowAddEventListener()) {
			window.addEventListener('message', ss.mkdel(this, this.$handleCrossDomainMessage), false);
		}
		else if ($tab__Utility.hasDocumentAttachEvent()) {
			var handler = ss.mkdel(this, this.$handleCrossDomainMessage);
			document.attachEvent('onmessage', handler);
			window.attachEvent('onmessage', handler);
		}
		else {
			window.onmessage = ss.mkdel(this, this.$handleCrossDomainMessage);
		}
		this.$nextHandlerId = 0;
	};
	$tab_CrossDomainMessager.__typeName = 'tab.CrossDomainMessager';
	global.tab.CrossDomainMessager = $tab_CrossDomainMessager;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.DataType
	var $tab_DataType = function() {
	};
	$tab_DataType.__typeName = 'tab.DataType';
	global.tab.DataType = $tab_DataType;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.DataValue
	var $tab_DataValue = function() {
	};
	$tab_DataValue.__typeName = 'tab.DataValue';
	$tab_DataValue.$ctor = function(value, formattedValue, aliasedValue) {
		var $this = new Object();
		$this.value = null;
		$this.formattedValue = null;
		$this.value = value;
		if ($tab__Utility.isNullOrEmpty(aliasedValue)) {
			$this.formattedValue = formattedValue;
		}
		else {
			$this.formattedValue = aliasedValue;
		}
		return $this;
	};
	$tab_DataValue.isInstanceOfType = function() {
		return true;
	};
	global.tab.DataValue = $tab_DataValue;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.HostedApiMessageHandler
	var $tab_HostedApiMessageHandler = function() {
		this.$2$StateReadyForQueryField = null;
		$tab_ApiMessageHandler.call(this);
	};
	$tab_HostedApiMessageHandler.__typeName = 'tab.HostedApiMessageHandler';
	global.tab.HostedApiMessageHandler = $tab_HostedApiMessageHandler;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiShared.HostedApiMessageRouter
	var $tab_HostedApiMessageRouter = function() {
		this.$crossDomainMessager = null;
		this.$crossDomainMessager = new $tab_CrossDomainMessager(null);
	};
	$tab_HostedApiMessageRouter.__typeName = 'tab.HostedApiMessageRouter';
	global.tab.HostedApiMessageRouter = $tab_HostedApiMessageRouter;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.Point
	var $tab_Point = function() {
	};
	$tab_Point.__typeName = 'tab.Point';
	$tab_Point.$ctor = function(x, y) {
		var $this = new Object();
		$this.x = 0;
		$this.y = 0;
		$this.x = x;
		$this.y = y;
		return $this;
	};
	$tab_Point.isInstanceOfType = function() {
		return true;
	};
	global.tab.Point = $tab_Point;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.PublicEnums
	var $tab_PublicEnums = function() {
	};
	$tab_PublicEnums.__typeName = 'tab.PublicEnums';
	$tab_PublicEnums.tryNormalizeEnum = function(T) {
		return function PublicEnums$TryNormalizeEnum(rawValue, value) {
			if (ss.isValue(rawValue)) {
				var lookup = rawValue.toString().toUpperCase();
				var $t1 = ss.Enum.getValues(T);
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var name = $t1[$t2];
					var compareValue = name.toUpperCase();
					if (ss.referenceEquals(lookup, compareValue)) {
						value.$ = name;
						return true;
					}
				}
			}
			value.$ = ss.getDefaultValue(T);
			return false;
		};
	};
	$tab_PublicEnums.normalizeEnum = function(T) {
		return function PublicEnums$NormalizeEnum(rawValue, paramName) {
			var value = {};
			if (!$tab_PublicEnums.tryNormalizeEnum(T).call(null, rawValue, value)) {
				throw $tab__TableauException.createInvalidParameter(paramName);
			}
			return value.$;
		};
	};
	$tab_PublicEnums.isValidEnum = function(T) {
		return function PublicEnums$IsValidEnum(rawValue) {
			var value = {};
			var valid = $tab_PublicEnums.tryNormalizeEnum(T).call(null, rawValue, value);
			return valid;
		};
	};
	global.tab.PublicEnums = $tab_PublicEnums;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.SheetSize
	var $tab_SheetSize = function() {
	};
	$tab_SheetSize.__typeName = 'tab.SheetSize';
	$tab_SheetSize.$ctor = function(behavior, minSize, maxSize) {
		var $this = new Object();
		$this.behavior = null;
		$this.minSize = null;
		$this.maxSize = null;
		$this.behavior = ss.coalesce(behavior, 'automatic');
		if (ss.isValue(minSize)) {
			$this.minSize = minSize;
		}
		else {
			delete $this['minSize'];
		}
		if (ss.isValue(maxSize)) {
			$this.maxSize = maxSize;
		}
		else {
			delete $this['maxSize'];
		}
		return $this;
	};
	$tab_SheetSize.isInstanceOfType = function() {
		return true;
	};
	global.tab.SheetSize = $tab_SheetSize;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.SheetSizeFactory
	var $tab_SheetSizeFactory = function() {
	};
	$tab_SheetSizeFactory.__typeName = 'tab.SheetSizeFactory';
	$tab_SheetSizeFactory.createAutomatic = function SheetSizeFactory$CreateAutomatic() {
		var size = $tab_SheetSize.$ctor('automatic', null, null);
		return size;
	};
	$tab_SheetSizeFactory.fromSizeConstraints = function SheetSizeFactory$FromSizeConstraints(vizSizePresModel) {
		var minHeight = vizSizePresModel.minHeight;
		var minWidth = vizSizePresModel.minWidth;
		var maxHeight = vizSizePresModel.maxHeight;
		var maxWidth = vizSizePresModel.maxWidth;
		var behavior = 'automatic';
		var minSize = null;
		var maxSize = null;
		if (minHeight === 0 && minWidth === 0) {
			if (maxHeight === 0 && maxWidth === 0) {
			}
			else {
				behavior = 'atmost';
				maxSize = $tab_Size.$ctor(maxWidth, maxHeight);
			}
		}
		else if (maxHeight === 0 && maxWidth === 0) {
			behavior = 'atleast';
			minSize = $tab_Size.$ctor(minWidth, minHeight);
		}
		else if (maxHeight === minHeight && maxWidth === minWidth && minWidth > 0) {
			behavior = 'exactly';
			minSize = $tab_Size.$ctor(minWidth, minHeight);
			maxSize = $tab_Size.$ctor(minWidth, minHeight);
		}
		else {
			behavior = 'range';
			if (minWidth === 0 && maxWidth === 0) {
				maxWidth = 2147483647;
			}
			minSize = $tab_Size.$ctor(minWidth, minHeight);
			maxSize = $tab_Size.$ctor(maxWidth, maxHeight);
		}
		return $tab_SheetSize.$ctor(behavior, minSize, maxSize);
	};
	global.tab.SheetSizeFactory = $tab_SheetSizeFactory;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.Size
	var $tab_Size = function() {
	};
	$tab_Size.__typeName = 'tab.Size';
	$tab_Size.$ctor = function(width, height) {
		var $this = new Object();
		$this.width = 0;
		$this.height = 0;
		$this.width = width;
		$this.height = height;
		return $this;
	};
	$tab_Size.isInstanceOfType = function() {
		return true;
	};
	global.tab.Size = $tab_Size;
	ss.initClass($tab_$DeferredUtil, $asm, {});
	ss.initClass($tab_$DoNothingCrossDomainHandler, $asm, {
		add_stateReadyForQuery: function DoNothingCrossDomainHandler$add_StateReadyForQuery(value) {
			this.$1$StateReadyForQueryField = ss.delegateCombine(this.$1$StateReadyForQueryField, value);
		},
		remove_stateReadyForQuery: function DoNothingCrossDomainHandler$remove_StateReadyForQuery(value) {
			this.$1$StateReadyForQueryField = ss.delegateRemove(this.$1$StateReadyForQueryField, value);
		},
		get_iframe: function DoNothingCrossDomainHandler$get_Iframe() {
			return null;
		},
		get_hostId: function DoNothingCrossDomainHandler$get_HostId() {
			return this.$hostId;
		},
		set_hostId: function DoNothingCrossDomainHandler$set_HostId(value) {
			this.$hostId = value;
		},
		get_$serverRoot: function DoNothingCrossDomainHandler$get_ServerRoot() {
			return '*';
		},
		handleEventNotification: function DoNothingCrossDomainHandler$HandleEventNotification(eventName, parameters) {
		},
		$silenceTheCompilerWarning: function DoNothingCrossDomainHandler$SilenceTheCompilerWarning() {
			this.$1$StateReadyForQueryField(null);
		}
	});
	ss.initClass($tab__ApiCommand, $asm, {
		get_name: function ApiCommand$get_Name() {
			return this.$1$NameField;
		},
		set_name: function ApiCommand$set_Name(value) {
			this.$1$NameField = value;
		},
		get_hostId: function ApiCommand$get_HostId() {
			return this.$1$HostIdField;
		},
		set_hostId: function ApiCommand$set_HostId(value) {
			this.$1$HostIdField = value;
		},
		get_commandId: function ApiCommand$get_CommandId() {
			return this.$1$CommandIdField;
		},
		set_commandId: function ApiCommand$set_CommandId(value) {
			this.$1$CommandIdField = value;
		},
		get_parameters: function ApiCommand$get_Parameters() {
			return this.$1$ParametersField;
		},
		set_parameters: function ApiCommand$set_Parameters(value) {
			this.$1$ParametersField = value;
		},
		get_isApiCommandName: function ApiCommand$get_IsApiCommandName() {
			return this.get_rawName().indexOf('api.', 0) === 0;
		},
		get_rawName: function ApiCommand$get_RawName() {
			return this.get_name().toString();
		},
		serialize: function ApiCommand$Serialize() {
			var message = [];
			message.push(this.get_name());
			message.push(this.get_commandId());
			message.push(this.get_hostId());
			if (ss.isValue(this.get_parameters())) {
				message.push(this.get_parameters());
			}
			var serializedMessage = message.join(',');
			$tab__ApiCommand.lastRequestMessage = serializedMessage;
			return serializedMessage;
		}
	});
	ss.initClass($tab__ApiObjectRegistry, $asm, {});
	ss.initClass($tab__ApiServerNotification, $asm, {
		get_workbookName: function ApiServerNotification$get_WorkbookName() {
			return this.$workbookName;
		},
		get_worksheetName: function ApiServerNotification$get_WorksheetName() {
			return this.$worksheetName;
		},
		get_data: function ApiServerNotification$get_Data() {
			return this.$data;
		},
		serialize: function ApiServerNotification$Serialize() {
			var serialized = {};
			serialized['api.workbookName'] = this.$workbookName;
			serialized['api.worksheetName'] = this.$worksheetName;
			serialized['api.commandData'] = this.$data;
			return JSON.stringify(serialized);
		}
	});
	ss.initClass($tab__ApiServerResultParser, $asm, {
		get_result: function ApiServerResultParser$get_Result() {
			return this.$commandResult;
		},
		get_data: function ApiServerResultParser$get_Data() {
			return this.$commandData;
		}
	});
	ss.initClass($tab__DeferredImpl, $asm, {
		get_promise: function DoNotUseDeferred$get_Promise() {
			return this.$promise;
		},
		all: function DoNotUseDeferred$All(promisesOrValues) {
			var allDone = new $tab__DeferredImpl();
			var length = promisesOrValues.length;
			var toResolve = length;
			var results = [];
			if (length === 0) {
				allDone.resolve(results);
				return allDone.get_promise();
			}
			var resolveOne = function(promiseOrValue, index) {
				var promise = $tab_$DeferredUtil.$coerceToTrustedPromise(promiseOrValue);
				promise.then(function(returnValue) {
					results[index] = returnValue;
					toResolve--;
					if (toResolve === 0) {
						allDone.resolve(results);
					}
					return null;
				}, function(e) {
					allDone.reject(e);
					return null;
				});
			};
			for (var i = 0; i < length; i++) {
				resolveOne(promisesOrValues[i], i);
			}
			return allDone.get_promise();
		},
		then: function DoNotUseDeferred$Then(callback, errback) {
			return this.$thenFunc(callback, errback);
		},
		resolve: function DoNotUseDeferred$Resolve(promiseOrValue) {
			return this.$resolveFunc(promiseOrValue);
		},
		reject: function DoNotUseDeferred$Reject(e) {
			return this.$resolveFunc($tab_$DeferredUtil.$rejected(e));
		},
		$preResolutionThen: function DoNotUseDeferred$PreResolutionThen(callback, errback) {
			var deferred = new $tab__DeferredImpl();
			this.$listeners.push(function(promise) {
				promise.then(callback, errback).then(ss.mkdel(deferred, deferred.resolve), ss.mkdel(deferred, deferred.reject));
			});
			return deferred.get_promise();
		},
		$transitionToFulfilled: function DoNotUseDeferred$TransitionToFulfilled(completed) {
			var completedPromise = $tab_$DeferredUtil.$coerceToTrustedPromise(completed);
			this.$thenFunc = completedPromise.then;
			this.$resolveFunc = $tab_$DeferredUtil.$coerceToTrustedPromise;
			for (var i = 0; i < this.$listeners.length; i++) {
				var listener = this.$listeners[i];
				listener(completedPromise);
			}
			this.$listeners = null;
			return completedPromise;
		}
	});
	ss.initClass($tab__Param, $asm, {});
	ss.initClass($tab__PromiseImpl, $asm, {
		always: function DoNotUsePromise$Always(callback) {
			return ss.cast(this.then(callback, ss.cast(callback, Function)), $tab__PromiseImpl);
		},
		otherwise: function DoNotUsePromise$Otherwise(errback) {
			return ss.cast(this.then(null, errback), $tab__PromiseImpl);
		}
	});
	ss.initClass($tab__Rect, $asm, {
		intersect: function TabRect$Intersect(other) {
			var left = Math.max(this.left, other.left);
			var top = Math.max(this.top, other.top);
			var right = Math.min(this.left + this.width, other.left + other.width);
			var bottom = Math.min(this.top + this.height, other.top + other.height);
			if (right <= left || bottom <= top) {
				return new $tab__Rect(0, 0, 0, 0);
			}
			return new $tab__Rect(left, top, right - left, bottom - top);
		}
	});
	ss.initClass($tab__SharedSheetImpl, $asm, {
		get_sheet: null,
		get_name: function SharedSheetImpl$get_Name() {
			return this.$name;
		},
		get_size: function SharedSheetImpl$get_Size() {
			return this.$size;
		},
		get_sheetType: function SharedSheetImpl$get_SheetType() {
			return this.$sheetType;
		}
	});
	ss.initClass($tab__SharedDashboardImpl, $asm, {
		get_sheet: function SharedDashboardImpl$get_Sheet() {
			return this.get_dashboard();
		},
		get_dashboard: null,
		getObjects: function SharedDashboardImpl$GetObjects() {
			throw new ss.NotImplementedException();
		},
		getWorksheets: function SharedDashboardImpl$GetWorksheets() {
			throw new ss.NotImplementedException();
		}
	}, $tab__SharedSheetImpl);
	ss.initClass($tab__SharedWorksheetImpl, $asm, {
		get_sheet: function SharedWorksheetImpl$get_Sheet() {
			return this.get_worksheet();
		},
		get_worksheet: null,
		get_parentDashboardImpl: function SharedWorksheetImpl$get_ParentDashboardImpl() {
			return this.$parentDashboardImpl;
		},
		get_parentDashboard: function SharedWorksheetImpl$get_ParentDashboard() {
			if (ss.isValue(this.$parentDashboardImpl)) {
				return this.$parentDashboardImpl.get_dashboard();
			}
			return null;
		},
		getSummaryDataAsync: function SharedWorksheetImpl$GetSummaryDataAsync(options) {
			throw new ss.NotImplementedException(options.toString());
		},
		getUnderlyingDataAsync: function SharedWorksheetImpl$GetUnderlyingDataAsync(options) {
			throw new ss.NotImplementedException(options.toString());
		}
	}, $tab__SharedSheetImpl);
	ss.initClass($tab__SheetInfoImpl, $asm, {}, Object);
	ss.initClass($tab__TableauException, $asm, {});
	ss.initClass($tab__Utility, $asm, {});
	ss.initEnum($tab_ApiDashboardObjectType, $asm, { blank: 'blank', worksheet: 'worksheet', quickFilter: 'quickFilter', parameterControl: 'parameterControl', pageFilter: 'pageFilter', legend: 'legend', title: 'title', text: 'text', image: 'image', webPage: 'webPage', addIn: 'addIn' }, true);
	ss.initEnum($tab_ApiDateRangeType, $asm, { last: 'last', lastn: 'lastn', next: 'next', nextn: 'nextn', curr: 'curr', todate: 'todate' }, true);
	ss.initEnum($tab_ApiDeviceType, $asm, { default: 'default', desktop: 'desktop', tablet: 'tablet', phone: 'phone' }, true);
	ss.initClass($tab_ApiEnumConverter, $asm, {});
	ss.initEnum($tab_ApiErrorCode, $asm, { internalError: 'internalError', serverError: 'serverError', invalidAggregationFieldName: 'invalidAggregationFieldName', invalidToolbarButtonName: 'invalidToolbarButtonName', invalidParameter: 'invalidParameter', invalidUrl: 'invalidUrl', staleDataReference: 'staleDataReference', vizAlreadyInManager: 'vizAlreadyInManager', noUrlOrParentElementNotFound: 'noUrlOrParentElementNotFound', invalidFilterFieldName: 'invalidFilterFieldName', invalidFilterFieldValue: 'invalidFilterFieldValue', invalidFilterFieldNameOrValue: 'invalidFilterFieldNameOrValue', filterCannotBePerformed: 'filterCannotBePerformed', notActiveSheet: 'notActiveSheet', invalidCustomViewName: 'invalidCustomViewName', missingRangeNForRelativeDateFilters: 'missingRangeNForRelativeDateFilters', missingMaxSize: 'missingMaxSize', missingMinSize: 'missingMinSize', missingMinMaxSize: 'missingMinMaxSize', invalidSize: 'invalidSize', invalidSizeBehaviorOnWorksheet: 'invalidSizeBehaviorOnWorksheet', sheetNotInWorkbook: 'sheetNotInWorkbook', indexOutOfRange: 'indexOutOfRange', downloadWorkbookNotAllowed: 'downloadWorkbookNotAllowed', nullOrEmptyParameter: 'nullOrEmptyParameter', browserNotCapable: 'browserNotCapable', unsupportedEventName: 'unsupportedEventName', invalidDateParameter: 'invalidDateParameter', invalidSelectionFieldName: 'invalidSelectionFieldName', invalidSelectionValue: 'invalidSelectionValue', invalidSelectionDate: 'invalidSelectionDate', noUrlForHiddenWorksheet: 'noUrlForHiddenWorksheet', maxVizResizeAttempts: 'maxVizResizeAttempts' }, true);
	ss.initEnum($tab_ApiFieldAggregationType, $asm, { SUM: 'SUM', AVG: 'AVG', MIN: 'MIN', MAX: 'MAX', STDEV: 'STDEV', STDEVP: 'STDEVP', VAR: 'VAR', VARP: 'VARP', COUNT: 'COUNT', COUNTD: 'COUNTD', MEDIAN: 'MEDIAN', ATTR: 'ATTR', NONE: 'NONE', PERCENTILE: 'PERCENTILE', YEAR: 'YEAR', QTR: 'QTR', MONTH: 'MONTH', DAY: 'DAY', HOUR: 'HOUR', MINUTE: 'MINUTE', SECOND: 'SECOND', WEEK: 'WEEK', WEEKDAY: 'WEEKDAY', MONTHYEAR: 'MONTHYEAR', MDY: 'MDY', END: 'END', TRUNC_YEAR: 'TRUNC_YEAR', TRUNC_QTR: 'TRUNC_QTR', TRUNC_MONTH: 'TRUNC_MONTH', TRUNC_WEEK: 'TRUNC_WEEK', TRUNC_DAY: 'TRUNC_DAY', TRUNC_HOUR: 'TRUNC_HOUR', TRUNC_MINUTE: 'TRUNC_MINUTE', TRUNC_SECOND: 'TRUNC_SECOND', QUART1: 'QUART1', QUART3: 'QUART3', SKEWNESS: 'SKEWNESS', KURTOSIS: 'KURTOSIS', INOUT: 'INOUT', SUM_XSQR: 'SUM_XSQR', USER: 'USER' }, true);
	ss.initEnum($tab_ApiFieldRoleType, $asm, { dimension: 'dimension', measure: 'measure', unknown: 'unknown' }, true);
	ss.initEnum($tab_ApiFilterType, $asm, { categorical: 'categorical', quantitative: 'quantitative', hierarchical: 'hierarchical', relativedate: 'relativedate' }, true);
	ss.initEnum($tab_ApiFilterUpdateType, $asm, { all: 'all', replace: 'replace', add: 'add', remove: 'remove' }, true);
	ss.initClass($tab_ApiMessageHandler, $asm, {
		handleEventNotification: function ApiMessageHandler$HandleEventNotification(eventName, eventParameters) {
			throw new ss.NotImplementedException();
		}
	});
	ss.initClass($tab_ApiMessagingOptions, $asm, {
		get_handler: function ApiMessagingOptions$get_Handler() {
			return this.$handler;
		},
		sendCommand: function(T) {
			return function ApiMessagingOptions$SendCommand(commandParameters, returnHandler) {
				this.$router.sendCommand(T).call(this.$router, this.$handler, commandParameters, returnHandler);
			};
		},
		dispose: function ApiMessagingOptions$Dispose() {
			this.$router.unregisterHandler(this.$handler);
		}
	});
	ss.initEnum($tab_ApiNullOption, $asm, { nullValues: 'nullValues', nonNullValues: 'nonNullValues', allValues: 'allValues' }, true);
	ss.initEnum($tab_ApiParameterAllowableValuesType, $asm, { all: 'all', list: 'list', range: 'range' }, true);
	ss.initEnum($tab_ApiParameterDataType, $asm, { float: 'float', integer: 'integer', string: 'string', boolean: 'boolean', date: 'date', datetime: 'datetime' }, true);
	ss.initEnum($tab_ApiPeriodType, $asm, { year: 'year', quarter: 'quarter', month: 'month', week: 'week', day: 'day', hour: 'hour', minute: 'minute', second: 'second' }, true);
	ss.initEnum($tab_ApiSelectionUpdateType, $asm, { replace: 'replace', add: 'add', remove: 'remove' }, true);
	ss.initEnum($tab_ApiSheetSizeBehavior, $asm, { automatic: 'automatic', exactly: 'exactly', range: 'range', atleast: 'atleast', atmost: 'atmost' }, true);
	ss.initEnum($tab_ApiSheetType, $asm, { worksheet: 'worksheet', dashboard: 'dashboard', story: 'story' }, true);
	ss.initEnum($tab_ApiTableauEventName, $asm, { customviewload: 'customviewload', customviewremove: 'customviewremove', customviewsave: 'customviewsave', customviewsetdefault: 'customviewsetdefault', filterchange: 'filterchange', firstinteractive: 'firstinteractive', firstvizsizeknown: 'firstvizsizeknown', marksselection: 'marksselection', markshighlight: 'markshighlight', parametervaluechange: 'parametervaluechange', storypointswitch: 'storypointswitch', tabswitch: 'tabswitch', toolbarstatechange: 'toolbarstatechange', vizresize: 'vizresize' }, true);
	ss.initEnum($tab_ApiToolbarButtonName, $asm, { redo: 'redo', undo: 'undo' }, true);
	ss.initEnum($tab_ApiToolbarPosition, $asm, { top: 'top', bottom: 'bottom' }, true);
	ss.initClass($tab_CrossDomainMessager, $asm, {
		registerHandler: function CrossDomainMessager$RegisterHandler(handler) {
			var uniqueId = 'host' + this.$nextHandlerId;
			if (ss.isValue(handler.get_hostId()) || ss.isValue(this.$handlers[handler.get_hostId()])) {
				throw $tab__TableauException.createInternalError("Host '" + handler.get_hostId() + "' is already registered.");
			}
			this.$nextHandlerId++;
			handler.set_hostId(uniqueId);
			this.$handlers[uniqueId] = handler;
			handler.add_stateReadyForQuery(ss.mkdel(this, this.$handleStateReadyForQuery));
		},
		unregisterHandler: function CrossDomainMessager$UnregisterHandler(handler) {
			if (ss.isValue(handler.get_hostId()) || ss.isValue(this.$handlers[handler.get_hostId()])) {
				delete this.$handlers[handler.get_hostId()];
				handler.remove_stateReadyForQuery(ss.mkdel(this, this.$handleStateReadyForQuery));
			}
		},
		sendCommand: function(T) {
			return function CrossDomainMessager$SendCommand(source, commandParameters, returnHandler) {
				var iframe = source.get_iframe();
				var handlerId = source.get_hostId();
				if (!$tab__Utility.hasWindowPostMessage() || ss.isNullOrUndefined(iframe) || ss.isNullOrUndefined(iframe.contentWindow)) {
					return;
				}
				var commandId = $tab__ApiCommand.generateNextCommandId();
				var callbackMap = this.$commandCallbacks[handlerId];
				if (ss.isNullOrUndefined(callbackMap)) {
					callbackMap = {};
					this.$commandCallbacks[handlerId] = callbackMap;
				}
				callbackMap[commandId] = returnHandler;
				var commandName = returnHandler.get_commandName();
				var serializedParams = null;
				if (ss.isValue(commandParameters)) {
					serializedParams = JSON.stringify(commandParameters);
				}
				var command = new $tab__ApiCommand(commandName, commandId, handlerId, serializedParams);
				var message = command.serialize();
				if ($tab__Utility.isPostMessageSynchronous()) {
					window.setTimeout(function() {
						iframe.contentWindow.postMessage(message, '*');
					}, 0);
				}
				else {
					iframe.contentWindow.postMessage(message, '*');
				}
			};
		},
		$handleStateReadyForQuery: function CrossDomainMessager$HandleStateReadyForQuery(source) {
			var queue = this.$commandReturnAfterStateReadyQueues[source.get_hostId()];
			if ($tab__Utility.isNullOrEmpty(queue)) {
				return;
			}
			while (queue.length > 0) {
				var successCallback = queue.pop();
				if (ss.isValue(successCallback)) {
					successCallback();
				}
			}
		},
		$handleCrossDomainMessage: function CrossDomainMessager$HandleCrossDomainMessage(e) {
			var messageEvent = ss.cast(e, MessageEvent);
			if (ss.isNullOrUndefined(messageEvent.data)) {
				return;
			}
			var command = $tab__ApiCommand.parse(messageEvent.data.toString());
			var rawName = command.get_rawName();
			var hostId = command.get_hostId();
			var handler = this.$handlers[hostId];
			if (ss.isNullOrUndefined(handler) || !ss.referenceEquals(handler.get_hostId(), command.get_hostId())) {
				handler = this.$findHostIdByDomComparison(messageEvent);
			}
			if (command.get_isApiCommandName()) {
				if (ss.referenceEquals(command.get_commandId(), $tab__ApiCommand.crossDomainEventNotificationId)) {
					handler.handleEventNotification(command.get_name(), command.get_parameters());
					if (command.get_name() === 'api.FirstVizSizeKnownEvent') {
						messageEvent.source.postMessage('tableau.bootstrap', '*');
					}
				}
				else {
					this.$handleCrossDomainResponse(command);
				}
			}
			else if (!ss.isNullOrUndefined(this.$legacyHandler)) {
				this.$legacyHandler(rawName, handler);
			}
		},
		$handleCrossDomainResponse: function CrossDomainMessager$HandleCrossDomainResponse(command) {
			var commandCallbackMap = this.$commandCallbacks[command.get_hostId()];
			var returnHandler = (ss.isValue(commandCallbackMap) ? commandCallbackMap[command.get_commandId()] : null);
			if (ss.isNullOrUndefined(returnHandler)) {
				return;
			}
			delete commandCallbackMap[command.get_commandId()];
			if (command.get_name() !== returnHandler.get_commandName()) {
				return;
			}
			var crossDomainResult = new $tab__ApiServerResultParser(command.get_parameters());
			var commandResult = crossDomainResult.get_data();
			if (crossDomainResult.get_result() === 'api.success') {
				switch (returnHandler.get_successCallbackTiming()) {
					case 0: {
						if (ss.isValue(returnHandler.get_successCallback())) {
							returnHandler.get_successCallback()(commandResult);
						}
						break;
					}
					case 1: {
						var postponedCallback = function() {
							if (ss.isValue(returnHandler.get_successCallback())) {
								returnHandler.get_successCallback()(commandResult);
							}
						};
						var queue = this.$commandReturnAfterStateReadyQueues[command.get_hostId()];
						if (ss.isNullOrUndefined(queue)) {
							queue = [];
							this.$commandReturnAfterStateReadyQueues[command.get_hostId()] = queue;
						}
						queue.push(postponedCallback);
						break;
					}
					default: {
						throw $tab__TableauException.createInternalError('Unknown timing value: ' + returnHandler.get_successCallbackTiming());
					}
				}
			}
			else if (ss.isValue(returnHandler.get_errorCallback())) {
				var remoteError = crossDomainResult.get_result() === 'api.remotefailed';
				var errorMessage = (ss.isValue(commandResult) ? commandResult.toString() : '');
				returnHandler.get_errorCallback()(remoteError, errorMessage);
			}
		},
		$findHostIdByDomComparison: function CrossDomainMessager$FindHostIdByDomComparison(messageEvent) {
			var $t1 = new ss.ObjectEnumerator(this.$handlers);
			try {
				while ($t1.moveNext()) {
					var pair = $t1.current();
					if (this.$handlers.hasOwnProperty(pair.key) && ss.referenceEquals(pair.value.get_iframe().contentWindow, messageEvent.source)) {
						return pair.value;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return new $tab_$DoNothingCrossDomainHandler();
		}
	});
	ss.initEnum($tab_DataType, $asm, { float: 'float', integer: 'integer', string: 'string', boolean: 'boolean', date: 'date', datetime: 'datetime' }, true);
	ss.initClass($tab_DataValue, $asm, {}, Object);
	ss.initClass($tab_HostedApiMessageHandler, $asm, {
		add_stateReadyForQuery: function HostedApiMessageHandler$add_StateReadyForQuery(value) {
			this.$2$StateReadyForQueryField = ss.delegateCombine(this.$2$StateReadyForQueryField, value);
		},
		remove_stateReadyForQuery: function HostedApiMessageHandler$remove_StateReadyForQuery(value) {
			this.$2$StateReadyForQueryField = ss.delegateRemove(this.$2$StateReadyForQueryField, value);
		},
		get_hostId: function HostedApiMessageHandler$get_HostId() {
			return null;
		},
		set_hostId: function HostedApiMessageHandler$set_HostId(value) {
		},
		get_iframe: function HostedApiMessageHandler$get_Iframe() {
			return null;
		}
	}, $tab_ApiMessageHandler);
	ss.initClass($tab_HostedApiMessageRouter, $asm, {
		registerHandler: function HostedApiMessageRouter$RegisterHandler(handler) {
			this.$crossDomainMessager.registerHandler(handler);
		},
		unregisterHandler: function HostedApiMessageRouter$UnregisterHandler(handler) {
			this.$crossDomainMessager.unregisterHandler(handler);
		},
		sendCommand: function(T) {
			return function HostedApiMessageRouter$SendCommand(source, commandParameters, returnHandler) {
				this.$crossDomainMessager.sendCommand(T).call(this.$crossDomainMessager, source, commandParameters, returnHandler);
			};
		}
	});
	ss.initClass($tab_Point, $asm, {}, Object);
	ss.initClass($tab_PublicEnums, $asm, {});
	ss.initClass($tab_SheetSize, $asm, {}, Object);
	ss.initClass($tab_SheetSizeFactory, $asm, {});
	ss.initClass($tab_Size, $asm, {}, Object);
	(function() {
		$tab__ApiCommand.crossDomainEventNotificationId = 'xdomainSourceId';
		$tab__ApiCommand.lastRequestMessage = null;
		$tab__ApiCommand.lastResponseMessage = null;
		$tab__ApiCommand.lastClientInfoResponseMessage = null;
		$tab__ApiCommand.$nextCommandId = 0;
	})();
	(function() {
		var globalState = window['_ApiObjectRegistryGlobalState'];
		var $t1 = globalState;
		if (ss.isNullOrUndefined($t1)) {
			$t1 = new Object();
		}
		window['_ApiObjectRegistryGlobalState'] = $t1;
		window._ApiObjectRegistryGlobalState.creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry || {};
		window._ApiObjectRegistryGlobalState.singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry || {};
	})();
	(function() {
		var ns = global.tableauSoftware;
		ns.DeviceType = { DEFAULT: 'default', DESKTOP: 'desktop', TABLET: 'tablet', PHONE: 'phone' };
		ns.DashboardObjectType = { BLANK: 'blank', WORKSHEET: 'worksheet', QUICK_FILTER: 'quickFilter', PARAMETER_CONTROL: 'parameterControl', PAGE_FILTER: 'pageFilter', LEGEND: 'legend', TITLE: 'title', TEXT: 'text', IMAGE: 'image', WEB_PAGE: 'webPage', ADDIN: 'addIn' };
		ns.DataType = { FLOAT: 'float', INTEGER: 'integer', STRING: 'string', BOOLEAN: 'boolean', DATE: 'date', DATETIME: 'datetime' };
		ns.DateRangeType = { LAST: 'last', LASTN: 'lastn', NEXT: 'next', NEXTN: 'nextn', CURR: 'curr', TODATE: 'todate' };
		ns.ErrorCode = { INTERNAL_ERROR: 'internalError', SERVER_ERROR: 'serverError', INVALID_AGGREGATION_FIELD_NAME: 'invalidAggregationFieldName', INVALID_TOOLBAR_BUTTON_NAME: 'invalidToolbarButtonName', INVALID_PARAMETER: 'invalidParameter', INVALID_URL: 'invalidUrl', STALE_DATA_REFERENCE: 'staleDataReference', VIZ_ALREADY_IN_MANAGER: 'vizAlreadyInManager', NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: 'noUrlOrParentElementNotFound', INVALID_FILTER_FIELDNAME: 'invalidFilterFieldName', INVALID_FILTER_FIELDVALUE: 'invalidFilterFieldValue', INVALID_FILTER_FIELDNAME_OR_VALUE: 'invalidFilterFieldNameOrValue', FILTER_CANNOT_BE_PERFORMED: 'filterCannotBePerformed', NOT_ACTIVE_SHEET: 'notActiveSheet', INVALID_CUSTOM_VIEW_NAME: 'invalidCustomViewName', MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: 'missingRangeNForRelativeDateFilters', MISSING_MAX_SIZE: 'missingMaxSize', MISSING_MIN_SIZE: 'missingMinSize', MISSING_MINMAX_SIZE: 'missingMinMaxSize', INVALID_SIZE: 'invalidSize', INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: 'invalidSizeBehaviorOnWorksheet', SHEET_NOT_IN_WORKBOOK: 'sheetNotInWorkbook', INDEX_OUT_OF_RANGE: 'indexOutOfRange', DOWNLOAD_WORKBOOK_NOT_ALLOWED: 'downloadWorkbookNotAllowed', NULL_OR_EMPTY_PARAMETER: 'nullOrEmptyParameter', BROWSER_NOT_CAPABLE: 'browserNotCapable', UNSUPPORTED_EVENT_NAME: 'unsupportedEventName', INVALID_DATE_PARAMETER: 'invalidDateParameter', INVALID_SELECTION_FIELDNAME: 'invalidSelectionFieldName', INVALID_SELECTION_VALUE: 'invalidSelectionValue', INVALID_SELECTION_DATE: 'invalidSelectionDate', NO_URL_FOR_HIDDEN_WORKSHEET: 'noUrlForHiddenWorksheet', MAX_VIZ_RESIZE_ATTEMPTS: 'maxVizResizeAttempts' };
		ns.FieldAggregationType = { SUM: 'SUM', AVG: 'AVG', MIN: 'MIN', MAX: 'MAX', STDEV: 'STDEV', STDEVP: 'STDEVP', VAR: 'VAR', VARP: 'VARP', COUNT: 'COUNT', COUNTD: 'COUNTD', MEDIAN: 'MEDIAN', ATTR: 'ATTR', NONE: 'NONE', PERCENTILE: 'PERCENTILE', YEAR: 'YEAR', QTR: 'QTR', MONTH: 'MONTH', DAY: 'DAY', HOUR: 'HOUR', MINUTE: 'MINUTE', SECOND: 'SECOND', WEEK: 'WEEK', WEEKDAY: 'WEEKDAY', MONTHYEAR: 'MONTHYEAR', MDY: 'MDY', END: 'END', TRUNC_YEAR: 'TRUNC_YEAR', TRUNC_QTR: 'TRUNC_QTR', TRUNC_MONTH: 'TRUNC_MONTH', TRUNC_WEEK: 'TRUNC_WEEK', TRUNC_DAY: 'TRUNC_DAY', TRUNC_HOUR: 'TRUNC_HOUR', TRUNC_MINUTE: 'TRUNC_MINUTE', TRUNC_SECOND: 'TRUNC_SECOND', QUART1: 'QUART1', QUART3: 'QUART3', SKEWNESS: 'SKEWNESS', KURTOSIS: 'KURTOSIS', INOUT: 'INOUT', SUM_XSQR: 'SUM_XSQR', USER: 'USER' };
		ns.FieldRoleType = { DIMENSION: 'dimension', MEASURE: 'measure', UNKNOWN: 'unknown' };
		ns.FilterUpdateType = { ALL: 'all', REPLACE: 'replace', ADD: 'add', REMOVE: 'remove' };
		ns.FilterType = { CATEGORICAL: 'categorical', QUANTITATIVE: 'quantitative', HIERARCHICAL: 'hierarchical', RELATIVEDATE: 'relativedate' };
		ns.NullOption = { NULL_VALUES: 'nullValues', NON_NULL_VALUES: 'nonNullValues', ALL_VALUES: 'allValues' };
		ns.ParameterAllowableValuesType = { ALL: 'all', LIST: 'list', RANGE: 'range' };
		ns.ParameterDataType = { FLOAT: 'float', INTEGER: 'integer', STRING: 'string', BOOLEAN: 'boolean', DATE: 'date', DATETIME: 'datetime' };
		ns.PeriodType = { YEAR: 'year', QUARTER: 'quarter', MONTH: 'month', WEEK: 'week', DAY: 'day', HOUR: 'hour', MINUTE: 'minute', SECOND: 'second' };
		ns.SelectionUpdateType = { REPLACE: 'replace', ADD: 'add', REMOVE: 'remove' };
		ns.SheetSizeBehavior = { AUTOMATIC: 'automatic', EXACTLY: 'exactly', RANGE: 'range', ATLEAST: 'atleast', ATMOST: 'atmost' };
		ns.SheetType = { WORKSHEET: 'worksheet', DASHBOARD: 'dashboard', STORY: 'story' };
		ns.TableauEventName = { CUSTOM_VIEW_LOAD: 'customviewload', CUSTOM_VIEW_REMOVE: 'customviewremove', CUSTOM_VIEW_SAVE: 'customviewsave', CUSTOM_VIEW_SET_DEFAULT: 'customviewsetdefault', FILTER_CHANGE: 'filterchange', FIRST_INTERACTIVE: 'firstinteractive', FIRST_VIZ_SIZE_KNOWN: 'firstvizsizeknown', MARKS_SELECTION: 'marksselection', MARKS_HIGHLIGHT: 'markshighlight', PARAMETER_VALUE_CHANGE: 'parametervaluechange', STORY_POINT_SWITCH: 'storypointswitch', TAB_SWITCH: 'tabswitch', TOOLBAR_STATE_CHANGE: 'toolbarstatechange', VIZ_RESIZE: 'vizresize' };
		ns.ToolbarPosition = { TOP: 'top', BOTTOM: 'bottom' };
		ns.ToolbarButtonName = { REDO: 'redo', UNDO: 'undo' };
	})();
})();
// END ApiShared
/*! BEGIN ApiDomain */

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	ss.initAssembly($asm, 'vqlapidomain');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandInputMapping
	var $tab_$CommandInputMapping = function(toDoc, param, isOptional) {
		this.$1$MappingField = null;
		this.$1$DocParamField = null;
		this.$1$IsOptionalField = false;
		this.set_$mapping(toDoc);
		this.set_$docParam(param);
		this.set_$isOptional(isOptional);
	};
	$tab_$CommandInputMapping.__typeName = 'tab.$CommandInputMapping';
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiCrossDomainPresModelsFactory
	var $tab_ApiCrossDomainPresModelsFactory = function() {
	};
	$tab_ApiCrossDomainPresModelsFactory.__typeName = 'tab.ApiCrossDomainPresModelsFactory';
	$tab_ApiCrossDomainPresModelsFactory.newClientInfo = function ApiCrossDomainPresModelsFactory$NewClientInfo(isAutoUpdate, isDownloadAllowed, workbookName, currentSheetName, instanceId, publishedSheets, dashboardZones, story) {
		var pm = new Object();
		pm.isAutoUpdate = isAutoUpdate;
		pm.isDownloadAllowed = isDownloadAllowed;
		pm.workbookName = workbookName;
		pm.instanceId = instanceId;
		pm.currentSheetName = currentSheetName;
		pm.publishedSheets = publishedSheets;
		pm.dashboardZones = dashboardZones;
		pm.story = story;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAutoUpdateState = function ApiCrossDomainPresModelsFactory$NewAutoUpdateState(isAutoUpdate) {
		var pm = new Object();
		pm.isAutoUpdate = isAutoUpdate;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCommandError = function ApiCrossDomainPresModelsFactory$NewCommandError(errorCode, additionalInformation) {
		var pm = new Object();
		pm.errorCode = errorCode;
		pm.additionalInformation = additionalInformation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newSheetInfo = function ApiCrossDomainPresModelsFactory$NewSheetInfo(name, sheetType, minWidth, minHeight, maxWidth, maxHeight, repositoryUrl) {
		var sizeConstraints = new Object();
		sizeConstraints.maxHeight = maxHeight;
		sizeConstraints.maxWidth = maxWidth;
		sizeConstraints.minHeight = minHeight;
		sizeConstraints.minWidth = minWidth;
		var pm = new Object();
		pm.name = name;
		pm.sizeConstraints = sizeConstraints;
		pm.repositoryUrl = repositoryUrl;
		pm.sheetType = sheetType;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newContainedSheetInfo = function ApiCrossDomainPresModelsFactory$NewContainedSheetInfo(name, sheetType, zoneId, dashboardZones) {
		var pm = new Object();
		pm.name = name;
		pm.sheetType = sheetType;
		pm.zoneId = zoneId;
		pm.dashboardZones = dashboardZones;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDashboardZone = function ApiCrossDomainPresModelsFactory$NewDashboardZone(name, zoneId, zoneType, height, width, x, y) {
		var pm = new Object();
		pm.name = name;
		pm.zoneId = zoneId;
		pm.zoneType = zoneType;
		pm.height = height;
		pm.width = width;
		pm.x = x;
		pm.y = y;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newStory = function ApiCrossDomainPresModelsFactory$NewStory(activeStoryPointIndex, storyPoints) {
		var pm = new Object();
		pm.activeStoryPointIndex = activeStoryPointIndex;
		pm.storyPoints = storyPoints;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newStoryPoint = function ApiCrossDomainPresModelsFactory$NewStoryPoint(caption, index, storyPointId, isUpdated, containedSheetInfo) {
		var pm = new Object();
		pm.caption = caption;
		pm.index = index;
		pm.storyPointId = storyPointId;
		pm.isUpdated = isUpdated;
		pm.containedSheetInfo = containedSheetInfo;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.$newFilter = function ApiCrossDomainPresModelsFactory$NewFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation) {
		var pm = new Object();
		pm.fieldName = fieldName;
		pm.filterType = filterType;
		pm.caption = caption;
		pm.dataSourceName = dataSourceName;
		pm.fieldRole = fieldRole;
		pm.fieldAggregation = fieldAggregation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCategoricalFilter = function ApiCrossDomainPresModelsFactory$NewCategoricalFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, isExclude, appliedValues) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.isExclude = isExclude;
		pm.appliedValues = appliedValues;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newQuantitativeFilter = function ApiCrossDomainPresModelsFactory$NewQuantitativeFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, domainMinValue, domainMaxValue, minValue, maxValue, includeNullValues) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.domainMinValue = domainMinValue;
		pm.domainMaxValue = domainMaxValue;
		pm.minValue = minValue;
		pm.maxValue = maxValue;
		pm.includeNullValues = includeNullValues;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newHierarchicalFilter = function ApiCrossDomainPresModelsFactory$NewHierarchicalFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, levels) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.levels = levels;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newRelativeDateFilter = function ApiCrossDomainPresModelsFactory$NewRelativeDateFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation, periodType, rangeType, rangeN) {
		var pm = $tab_ApiCrossDomainPresModelsFactory.$newFilter(fieldName, filterType, caption, dataSourceName, fieldRole, fieldAggregation);
		pm.periodType = periodType;
		pm.rangeType = rangeType;
		pm.rangeN = rangeN;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDataSourcesForWorksheet = function ApiCrossDomainPresModelsFactory$NewDataSourcesForWorksheet(worksheetName, dataSources) {
		var pm = new Object();
		pm.worksheetName = worksheetName;
		pm.dataSources = dataSources;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newDataSource = function ApiCrossDomainPresModelsFactory$NewDataSource(name, fields, isPrimary) {
		var pm = new Object();
		pm.name = name;
		pm.fields = fields;
		pm.isPrimary = isPrimary;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newField = function ApiCrossDomainPresModelsFactory$NewField(name, role, aggregation) {
		var pm = new Object();
		pm.name = name;
		pm.role = role;
		pm.aggregation = aggregation;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCustomViewsInfo = function ApiCrossDomainPresModelsFactory$NewCustomViewsInfo(customViewLoaded, defaultCustomViewId, currentView, customViews) {
		var pm = new Object();
		pm.customViewLoaded = customViewLoaded;
		pm.defaultCustomViewId = defaultCustomViewId;
		pm.currentView = currentView;
		pm.customViews = customViews;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newCustomView = function ApiCrossDomainPresModelsFactory$NewCustomView(id, name, urlId, url, startViewId, isPublic, owner) {
		var pm = new Object();
		pm.id = id;
		pm.name = name;
		pm.urlId = urlId;
		pm.url = url;
		pm.startViewId = startViewId;
		pm.isPublic = isPublic;
		pm.owner = owner;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUser = function ApiCrossDomainPresModelsFactory$NewUser(id, friendlyName, username) {
		var pm = new Object();
		pm.id = id;
		pm.friendlyName = friendlyName;
		pm.username = username;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUnderlyingDataTablePM = function ApiCrossDomainPresModelsFactory$NewUnderlyingDataTablePM(dataTable, headers, isSummary) {
		var pm = new Object();
		pm.dataTable = dataTable;
		pm.headers = headers;
		pm.isSummary = isSummary;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newUnderlyingDataColumnsPM = function ApiCrossDomainPresModelsFactory$NewUnderlyingDataColumnsPM(dataType, fieldName, isReferenced, index) {
		var pm = new Object();
		pm.dataType = dataType;
		pm.fieldName = fieldName;
		pm.isReferenced = isReferenced;
		pm.index = index;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newToolbarStatePM = function ApiCrossDomainPresModelsFactory$NewToolbarStatePM(canUndo, canRedo, canRevert, isPaused, canRefreshData, canShowCustomViews, canShowPerformance, canShowDataAlert, canShowSubscribe, canShowShare, canShowDownload) {
		var pm = new Object();
		pm.canUndo = canUndo;
		pm.canRedo = canRedo;
		pm.canRevert = canRevert;
		pm.isPaused = isPaused;
		pm.canRefreshData = canRefreshData;
		pm.canShowCustomViews = canShowCustomViews;
		pm.canShowPerformance = canShowPerformance;
		pm.canShowDataAlert = canShowDataAlert;
		pm.canShowSubscribe = canShowSubscribe;
		pm.canShowShare = canShowShare;
		pm.canShowDownload = canShowDownload;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInInstancePM = function ApiCrossDomainPresModelsFactory$NewAddInInstancePM(instancePm) {
		var pm = new Object();
		pm.locator = $tab_ApiCrossDomainPresModelsFactory.newAddInLocatorPM(instancePm.addInLocatorPresModel);
		pm.url = instancePm.addInRegistrationPresModel.url;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInLocatorPM = function ApiCrossDomainPresModelsFactory$NewAddInLocatorPM(locator) {
		var pm = new Object();
		pm.dashboardPath = new Object();
		pm.dashboardPath.flipboardZoneID = locator.sheetPath.flipboardZoneId;
		pm.dashboardPath.storyPointID = locator.sheetPath.storyPointId;
		pm.dashboardPath.storyboard = locator.sheetPath.storyboard;
		pm.dashboardPath.sheetName = locator.sheetPath.sheetName;
		pm.dashboardPath.isDashboard = locator.sheetPath.isDashboard;
		pm.instanceId = locator.addInInstanceId;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInBootstrapInfoPM(bootstrapPm) {
		var pm = new Object();
		pm.addinDashboardInfo = $tab_ApiCrossDomainPresModelsFactory.newAddInDashboardInfoPM(bootstrapPm.addInDashboardInfoPresModel);
		pm.addInSettingsInfo = $tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM(bootstrapPm.addInSettingsInfo);
		pm.addInEnvironment = $tab_ApiCrossDomainPresModelsFactory.newAddInEnvironmentInfoPM(bootstrapPm.addInEnvironmentPresModel);
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInDashboardInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInDashboardInfoPM(dashboardInfoPm) {
		var pm = new Object();
		pm.name = dashboardInfoPm.dashboardPresModel.sheetPath.sheetName;
		pm.addInZoneId = dashboardInfoPm.zoneId;
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInSettingsInfoPM(settingsInfoPm) {
		var pm = new Object();
		pm.settingsValues = settingsInfoPm.addInSettings || {};
		return pm;
	};
	$tab_ApiCrossDomainPresModelsFactory.newAddInEnvironmentInfoPM = function ApiCrossDomainPresModelsFactory$NewAddInEnvironmentInfoPM(environmentPresModel) {
		var pm = new Object();
		pm.addInContext = environmentPresModel.addInContext;
		pm.addInMode = environmentPresModel.addInMode;
		pm.addInLanguage = environmentPresModel.addInLanguage;
		pm.addInLocale = environmentPresModel.addInLocale;
		pm.tableauVersion = environmentPresModel.tableauVersion;
		pm.operatingSystem = environmentPresModel.operatingSystem;
		pm.apiVersion = environmentPresModel.apiVersion;
		return pm;
	};
	global.tab.ApiCrossDomainPresModelsFactory = $tab_ApiCrossDomainPresModelsFactory;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiParamMappingRegistry
	var $tab_ApiParamMappingRegistry = function() {
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_ApiToDocParameter]).call(this);
	};
	$tab_ApiParamMappingRegistry.__typeName = 'tab.ApiParamMappingRegistry';
	global.tab.ApiParamMappingRegistry = $tab_ApiParamMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiPresModelsConverter
	var $tab_ApiPresModelsConverter = function() {
	};
	$tab_ApiPresModelsConverter.__typeName = 'tab.ApiPresModelsConverter';
	$tab_ApiPresModelsConverter.getApiAddInInstancePresModel = function ApiPresModelsConverter$GetApiAddInInstancePresModel(addInInstance) {
		return $tab_ApiCrossDomainPresModelsFactory.newAddInInstancePM(addInInstance);
	};
	$tab_ApiPresModelsConverter.getApiAddInBootstrapInfoPresModel = function ApiPresModelsConverter$GetApiAddInBootstrapInfoPresModel(addInBootstrapInfo) {
		return $tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM(addInBootstrapInfo);
	};
	$tab_ApiPresModelsConverter.getAddInLocatorPresModel = function ApiPresModelsConverter$GetAddInLocatorPresModel(apiAddInLocator) {
		return $tab_NativePresModelsFactory.newAddInLocatorPresModel(apiAddInLocator);
	};
	global.tab.ApiPresModelsConverter = $tab_ApiPresModelsConverter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ApiToDocParameter
	var $tab_ApiToDocParameter = function(apiParam, toDoc) {
		ss.makeGenericType($tab_ParameterMapping$1, [Object]).call(this, apiParam, toDoc);
	};
	$tab_ApiToDocParameter.__typeName = 'tab.ApiToDocParameter';
	$tab_ApiToDocParameter.create = function(TApiParameterType, TDocParameterType) {
		return function ApiToDocParameter$Create(apiParam, toDoc) {
			return new $tab_ApiToDocParameter(apiParam, ss.makeGenericType($tab_ParameterMapping$1, [Object]).buildConversionFunc(TApiParameterType, TDocParameterType).call(null, toDoc));
		};
	};
	global.tab.ApiToDocParameter = $tab_ApiToDocParameter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandMapping
	var $tab_CommandMapping = function() {
		this.$1$DocCommandIdField = null;
		this.$1$ApiCommandIdField = null;
		this.$1$InputParametersField = null;
		this.$1$OutputParameterField = null;
	};
	$tab_CommandMapping.__typeName = 'tab.CommandMapping';
	global.tab.CommandMapping = $tab_CommandMapping;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.CommandMappingRegistry
	var $tab_CommandMappingRegistry = function() {
		this.$apiToDocMappings = null;
		this.$docToApiMappings = null;
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_CommandMapping]).call(this);
	};
	$tab_CommandMappingRegistry.__typeName = 'tab.CommandMappingRegistry';
	global.tab.CommandMappingRegistry = $tab_CommandMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.DocParamMappingRegistry
	var $tab_DocParamMappingRegistry = function() {
		ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_DocToApiParameter]).call(this);
	};
	$tab_DocParamMappingRegistry.__typeName = 'tab.DocParamMappingRegistry';
	global.tab.DocParamMappingRegistry = $tab_DocParamMappingRegistry;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.DocToApiParameter
	var $tab_DocToApiParameter = function(docParam, toApi) {
		ss.makeGenericType($tab_ParameterMapping$1, [Object]).call(this, docParam, toApi);
	};
	$tab_DocToApiParameter.__typeName = 'tab.DocToApiParameter';
	$tab_DocToApiParameter.create = function(TDocParameterType, TApiParameterType) {
		return function DocToApiParameter$Create(docParam, toApi) {
			return new $tab_DocToApiParameter(docParam, ss.makeGenericType($tab_ParameterMapping$1, [Object]).buildConversionFunc(TDocParameterType, TApiParameterType).call(null, toApi));
		};
	};
	global.tab.DocToApiParameter = $tab_DocToApiParameter;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.MappingRegistryBase
	var $tab_MappingRegistryBase$2 = function(TEnumType, TMappingType) {
		var $type = function() {
			this.$mappings = null;
		};
		ss.registerGenericClassInstance($type, $tab_MappingRegistryBase$2, [TEnumType, TMappingType], {
			initialize: function MappingRegistryBase$Initialize() {
				this.$mappings = {};
				this.initialize$1(this.$mappings);
			},
			has: function MappingRegistryBase$Has(key) {
				return ss.keyExists(this.$mappings, key);
			},
			get: function MappingRegistryBase$Get(key) {
				if (this.has(key)) {
					return this.$mappings[key];
				}
				else {
					throw new ss.KeyNotFoundException('Key not found: ' + key.toString());
				}
			},
			initialize$1: null
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_MappingRegistryBase$2.__typeName = 'tab.MappingRegistryBase$2';
	ss.initGenericClass($tab_MappingRegistryBase$2, $asm, 2);
	global.tab.MappingRegistryBase$2 = $tab_MappingRegistryBase$2;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.NativePresModelsFactory
	var $tab_NativePresModelsFactory = function() {
	};
	$tab_NativePresModelsFactory.__typeName = 'tab.NativePresModelsFactory';
	$tab_NativePresModelsFactory.newAddInLocatorPresModel = function NativePresModelsFactory$NewAddInLocatorPresModel(apiAddInLocator) {
		var addInLocator = new Object();
		addInLocator.addInInstanceId = apiAddInLocator.instanceId;
		addInLocator.sheetPath = new Object();
		addInLocator.sheetPath.flipboardZoneId = apiAddInLocator.dashboardPath.flipboardZoneID;
		addInLocator.sheetPath.isDashboard = apiAddInLocator.dashboardPath.isDashboard;
		addInLocator.sheetPath.sheetName = apiAddInLocator.dashboardPath.sheetName;
		addInLocator.sheetPath.storyboard = apiAddInLocator.dashboardPath.storyboard;
		addInLocator.sheetPath.storyPointId = apiAddInLocator.dashboardPath.storyPointID;
		return addInLocator;
	};
	global.tab.NativePresModelsFactory = $tab_NativePresModelsFactory;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.ApiDomain.ParameterMapping
	var $tab_ParameterMapping$1 = function(TParamId) {
		var $type = function(paramId, conversionFn) {
			this.conversionFn = null;
			this.paramId = ss.getDefaultValue(TParamId);
			this.paramId = paramId;
			this.conversionFn = conversionFn || function(a) {
				return a;
			};
		};
		$type.buildConversionFunc = function(TSourceType, TTargetType) {
			return function ParameterMapping$BuildConversionFunc(conversionFn) {
				if (!ss.staticEquals(conversionFn, null)) {
					return function(a) {
						return conversionFn(ss.cast(a, TSourceType));
					};
				}
				else {
					return null;
				}
			};
		};
		ss.registerGenericClassInstance($type, $tab_ParameterMapping$1, [TParamId], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$tab_ParameterMapping$1.__typeName = 'tab.ParameterMapping$1';
	ss.initGenericClass($tab_ParameterMapping$1, $asm, 1);
	global.tab.ParameterMapping$1 = $tab_ParameterMapping$1;
	ss.initClass($tab_$CommandInputMapping, $asm, {
		get_$mapping: function CommandInputMapping$get_Mapping() {
			return this.$1$MappingField;
		},
		set_$mapping: function CommandInputMapping$set_Mapping(value) {
			this.$1$MappingField = value;
		},
		get_$docParam: function CommandInputMapping$get_DocParam() {
			return this.$1$DocParamField;
		},
		set_$docParam: function CommandInputMapping$set_DocParam(value) {
			this.$1$DocParamField = value;
		},
		get_$isOptional: function CommandInputMapping$get_IsOptional() {
			return this.$1$IsOptionalField;
		},
		set_$isOptional: function CommandInputMapping$set_IsOptional(value) {
			this.$1$IsOptionalField = value;
		}
	});
	ss.initClass($tab_ApiCrossDomainPresModelsFactory, $asm, {});
	ss.initClass($tab_ApiParamMappingRegistry, $asm, {
		initialize$1: function ApiParamMappingRegistry$Initialize(mappingsToInitialize) {
			mappingsToInitialize['api.AddInLocator'] = $tab_ApiToDocParameter.create(Object, Object).call(null, 'api.AddInLocator', $tab_NativePresModelsFactory.newAddInLocatorPresModel);
			mappingsToInitialize['api.AddInSettings'] = $tab_ApiToDocParameter.create(Object, Object).call(null, 'api.AddInSettings', null);
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_ApiToDocParameter]));
	ss.initClass($tab_ApiPresModelsConverter, $asm, {});
	ss.initClass($tab_ApiToDocParameter, $asm, {
		get_apiParamId: function ApiToDocParameter$get_ApiParamId() {
			return this.paramId;
		},
		toDocParam: function ApiToDocParameter$ToDocParam(apiPresModel) {
			return this.conversionFn(apiPresModel);
		}
	}, ss.makeGenericType($tab_ParameterMapping$1, [Object]));
	ss.initClass($tab_CommandMapping, $asm, {
		get_docCommandId: function CommandMapping$get_DocCommandId() {
			return this.$1$DocCommandIdField;
		},
		set_docCommandId: function CommandMapping$set_DocCommandId(value) {
			this.$1$DocCommandIdField = value;
		},
		get_apiCommandId: function CommandMapping$get_ApiCommandId() {
			return this.$1$ApiCommandIdField;
		},
		set_apiCommandId: function CommandMapping$set_ApiCommandId(value) {
			this.$1$ApiCommandIdField = value;
		},
		get_$inputParameters: function CommandMapping$get_InputParameters() {
			return this.$1$InputParametersField;
		},
		set_$inputParameters: function CommandMapping$set_InputParameters(value) {
			this.$1$InputParametersField = value;
		},
		get_$outputParameter: function CommandMapping$get_OutputParameter() {
			return this.$1$OutputParameterField;
		},
		set_$outputParameter: function CommandMapping$set_OutputParameter(value) {
			this.$1$OutputParameterField = value;
		},
		createInternalCommandParams: function CommandMapping$CreateInternalCommandParams(apiParams) {
			var internalCommandParameters = {};
			var $t1 = this.get_$inputParameters();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var inputParam = $t1[$t2];
				if (!ss.keyExists(apiParams, inputParam.get_$mapping().get_apiParamId())) {
					if (inputParam.get_$isOptional()) {
						throw new ss.ArgumentException('Missing parameter: ' + inputParam.get_$mapping().get_apiParamId() + ' in command: ' + this.get_docCommandId());
					}
					else {
						continue;
					}
				}
				var apiParam = apiParams[inputParam.get_$mapping().get_apiParamId()];
				internalCommandParameters[inputParam.get_$docParam()] = inputParam.get_$mapping().toDocParam(apiParam);
			}
			return internalCommandParameters;
		},
		processResult: function(T) {
			return function CommandMapping$ProcessResult(commandResponse) {
				if (!ss.keyExists(commandResponse, this.get_$outputParameter().get_docParamId())) {
					return ss.getDefaultValue(T);
				}
				var resultPm = commandResponse[this.get_$outputParameter().get_docParamId()];
				var apiResult = this.get_$outputParameter().toApiParam(resultPm);
				return apiResult;
			};
		}
	});
	ss.initClass($tab_CommandMappingRegistry, $asm, {
		initialize$1: function CommandMappingRegistry$Initialize(mappingsToInitialize) {
			this.$apiToDocMappings = new $tab_ApiParamMappingRegistry();
			this.$apiToDocMappings.initialize();
			this.$docToApiMappings = new $tab_DocParamMappingRegistry();
			this.$docToApiMappings.initialize();
			var $t1 = new $tab_CommandMapping();
			$t1.set_docCommandId('initialize-add-in-instance');
			$t1.set_apiCommandId('api.InitializeDashboard');
			var $t2 = [];
			$t2.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInLocator'), 'addInLocatorPresModel', false));
			$t1.set_$inputParameters($t2);
			$t1.set_$outputParameter(this.$docToApiMappings.get('addInBootstrapInfo'));
			mappingsToInitialize['api.InitializeDashboard'] = $t1;
			var $t3 = new $tab_CommandMapping();
			$t3.set_docCommandId('save-add-in-settings');
			$t3.set_apiCommandId('api.SaveAddInSettings');
			var $t4 = [];
			$t4.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInLocator'), 'addInLocatorPresModel', false));
			$t4.push(new $tab_$CommandInputMapping(this.$apiToDocMappings.get('api.AddInSettings'), 'addInSettings', false));
			$t3.set_$inputParameters($t4);
			$t3.set_$outputParameter(this.$docToApiMappings.get('addInSettingsInfo'));
			mappingsToInitialize['api.SaveAddInSettings'] = $t3;
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_CommandMapping]));
	ss.initClass($tab_DocParamMappingRegistry, $asm, {
		initialize$1: function DocParamMappingRegistry$Initialize(mappingsToInitialize) {
			mappingsToInitialize['addInBootstrapInfo'] = $tab_DocToApiParameter.create(Object, Object).call(null, 'addInBootstrapInfo', $tab_ApiCrossDomainPresModelsFactory.newAddInBootstrapInfoPM);
			mappingsToInitialize['addInSettingsInfo'] = $tab_DocToApiParameter.create(Object, Object).call(null, 'addInSettingsInfo', $tab_ApiCrossDomainPresModelsFactory.newAddInSettingsInfoPM);
		}
	}, ss.makeGenericType($tab_MappingRegistryBase$2, [Object, $tab_DocToApiParameter]));
	ss.initClass($tab_DocToApiParameter, $asm, {
		get_docParamId: function DocToApiParameter$get_DocParamId() {
			return this.paramId;
		},
		toApiParam: function DocToApiParameter$ToApiParam(docPresModel) {
			return this.conversionFn(docPresModel);
		}
	}, ss.makeGenericType($tab_ParameterMapping$1, [Object]));
	ss.initClass($tab_NativePresModelsFactory, $asm, {});
})();
// END ApiDomain

  var tab = global.tab;
  tab._Deferred = tab._DeferredImpl;
  tab._Collection = tab._CollectionImpl;

(function() {
	'dont use strict';
	var $asm = {};
	global.tab = global.tab || {};
	global.tableauSoftware = global.tableauSoftware || {};
	ss.initAssembly($asm, 'vqladdinapi');
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.AddInImpl
	var $tab__AddInImpl = function() {
		this.$initializationPromiseSingleton = null;
	};
	$tab__AddInImpl.__typeName = 'tab._AddInImpl';
	global.tab._AddInImpl = $tab__AddInImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.AddInSheetBaseImpl
	var $tab__AddInSheetBase = function(sheetInfoImpl, messagingOptions) {
	};
	$tab__AddInSheetBase.__typeName = 'tab._AddInSheetBase';
	global.tab._AddInSheetBase = $tab__AddInSheetBase;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.DashboardImpl
	var $tab__DashboardImpl = function(sheetInfoImpl, messagingOptions) {
		this.$dashboard = null;
		this.$sheetBase = null;
		tab._SharedDashboardImpl.call(this, sheetInfoImpl, messagingOptions);
		this.$sheetBase = new $tab__AddInSheetBase(sheetInfoImpl, messagingOptions);
	};
	$tab__DashboardImpl.__typeName = 'tab._DashboardImpl';
	global.tab._DashboardImpl = $tab__DashboardImpl;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.SettingsImpl
	var $tab__SettingsImpl = function(settingsInfo, messagingOptions) {
		this.$originalSettings = null;
		this.$messagingOptions = null;
		this.$currentSettings = null;
		this.$initialize(settingsInfo);
		this.$messagingOptions = messagingOptions;
	};
	$tab__SettingsImpl.__typeName = 'tab._SettingsImpl';
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.WorksheetImpl
	var $tab__WorksheetImpl = function(sheetInfoImpl, messagingOptions, parentDashboardImpl) {
		this.$worksheet = null;
		this.$sheetBase = null;
		tab._SharedWorksheetImpl.call(this, sheetInfoImpl, messagingOptions, parentDashboardImpl);
		this.$sheetBase = new $tab__AddInSheetBase(sheetInfoImpl, messagingOptions);
	};
	$tab__WorksheetImpl.__typeName = 'tab._WorksheetImpl';
	global.tab._WorksheetImpl = $tab__WorksheetImpl;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.addIn.DashboardContent
	var $tab_DashboardContent = function(getDashboard) {
		this.$getDashboard = null;
		this.$getDashboard = getDashboard;
	};
	$tab_DashboardContent.__typeName = 'tab.DashboardContent';
	global.tab.DashboardContent = $tab_DashboardContent;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.EnvironmentVariablesImpl
	var $tab_EnvironmentVariablesImpl = function(context, mode, locale, language, operatingSystem, tableauVersion, apiVersion) {
		this.$context = null;
		this.$mode = null;
		this.$locale = null;
		this.$language = null;
		this.$operatingSystem = null;
		this.$tableauVersion = null;
		this.$apiVersion = null;
		this.$context = context;
		this.$mode = mode;
		this.$locale = locale;
		this.$language = language;
		this.$operatingSystem = operatingSystem;
		this.$tableauVersion = tableauVersion;
		this.$apiVersion = apiVersion;
	};
	$tab_EnvironmentVariablesImpl.__typeName = 'tab.EnvironmentVariablesImpl';
	global.tab.EnvironmentVariablesImpl = $tab_EnvironmentVariablesImpl;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.AddIn
	var $tableauSoftware_addIn = function() {
	};
	$tableauSoftware_addIn.__typeName = 'tableauSoftware.addIn';
	$tableauSoftware_addIn.initializeAsync = function AddIn$InitializeAsync() {
		return $tableauSoftware_addIn._impl.initializeAsync();
	};
	global.tableauSoftware.addIn = $tableauSoftware_addIn;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.Dashboard
	var $tableauSoftware_Dashboard = function(dashboardImpl, sheetBase) {
		this._impl = null;
		$tableauSoftware_Sheet.call(this, dashboardImpl, sheetBase);
	};
	$tableauSoftware_Dashboard.__typeName = 'tableauSoftware.Dashboard';
	global.tableauSoftware.Dashboard = $tableauSoftware_Dashboard;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.addIn.Environment
	var $tableauSoftware_Environment = function(impl) {
		this._impl = null;
		this._impl = impl;
	};
	$tableauSoftware_Environment.__typeName = 'tableauSoftware.Environment';
	global.tableauSoftware.Environment = $tableauSoftware_Environment;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.addIn.Settings
	var $tableauSoftware_Settings = function(settingsImpl) {
		this._impl = null;
		this._impl = settingsImpl;
	};
	$tableauSoftware_Settings.__typeName = 'tableauSoftware.Settings';
	global.tableauSoftware.Settings = $tableauSoftware_Settings;
	////////////////////////////////////////////////////////////////////////////////
	// tableauSoftware.Sheet
	var $tableauSoftware_Sheet = function(sharedSheetImpl, sheetBase) {
		this._impl = null;
		this.$sheetBase = null;
		this._impl = sharedSheetImpl;
		this.$sheetBase = sheetBase;
	};
	$tableauSoftware_Sheet.__typeName = 'tableauSoftware.Sheet';
	global.tableauSoftware.Sheet = $tableauSoftware_Sheet;
	////////////////////////////////////////////////////////////////////////////////
	// Tableau.JavaScript.Vql.AddInApi.Worksheet
	var $tableauSoftware_Worksheet = function(worksheetImpl, sheetBase) {
		this._impl = null;
		$tableauSoftware_Sheet.call(this, worksheetImpl, sheetBase);
	};
	$tableauSoftware_Worksheet.__typeName = 'tableauSoftware.Worksheet';
	global.tableauSoftware.Worksheet = $tableauSoftware_Worksheet;
	ss.initClass($tab__AddInImpl, $asm, {
		initializeAsync: function AddInImpl$InitializeAsync() {
			var deferred = new tab._Deferred();
			if (ss.isNullOrUndefined(this.$initializationPromiseSingleton)) {
				try {
					this.$initializeDesktopBootstrapAsync(deferred);
					this.$initializationPromiseSingleton = deferred.get_promise();
				}
				catch ($t1) {
					var e = ss.Exception.wrap($t1);
					deferred.reject(e);
				}
			}
			return this.$initializationPromiseSingleton;
		},
		$initializeDesktopBootstrapAsync: function AddInImpl$InitializeDesktopBootstrapAsync(d) {
			var router = tab._ApiObjectRegistry.getApiMessageRouter();
			var returnHandler = new (ss.makeGenericType(tab.CommandReturnHandler$1, [Object]))('api.InitializeDashboard', 0, ss.mkdel(this, function(result) {
				this.$initializeDashboardContent(result.addinDashboardInfo);
				this.$initializeSetting(result.addInSettingsInfo);
				this.$initializeEnvironmentVariables(result.addInEnvironment);
				d.resolve();
			}), function(remoteError, errorMessage) {
				throw tab._TableauException.createInternalError('Error initializing Desktop models: ' + errorMessage);
			});
			router.sendCommand(Object).call(router, null, null, returnHandler);
		},
		$initializeDashboardContent: function AddInImpl$InitializeDashboardContent(pm) {
			var sheetSize = tab.SheetSize.$ctor('automatic', null, null);
			var sheetInfoImpl = tab._SheetInfoImpl.$ctor(pm.name, 'dashboard', sheetSize, pm.addInZoneId);
			var messagingOptions = new tab.ApiMessagingOptions(tab._ApiObjectRegistry.getApiMessageRouter(), null);
			var impl = new $tab__DashboardImpl(sheetInfoImpl, messagingOptions);
			var baseImpl = new $tab__AddInSheetBase(sheetInfoImpl, messagingOptions);
			var dashboardContent = new $tab_DashboardContent(function() {
				return new $tableauSoftware_Dashboard(impl, baseImpl);
			});
			$tableauSoftware_addIn.dashboardContent = dashboardContent;
		},
		$initializeSetting: function AddInImpl$InitializeSetting(pm) {
			var messagingOptions = new tab.ApiMessagingOptions(tab._ApiObjectRegistry.getApiMessageRouter(), null);
			var impl = new $tab__SettingsImpl(pm, messagingOptions);
			var settings = new $tableauSoftware_Settings(impl);
			$tableauSoftware_addIn.settings = settings;
		},
		$initializeEnvironmentVariables: function AddInImpl$InitializeEnvironmentVariables(pm) {
			var envVarsImpl = new $tab_EnvironmentVariablesImpl(pm.addInContext, pm.addInMode, pm.addInLocale, pm.addInLanguage, pm.operatingSystem, pm.tableauVersion, pm.apiVersion);
			$tableauSoftware_addIn.environment = new $tableauSoftware_Environment(envVarsImpl);
		}
	});
	ss.initClass($tab__AddInSheetBase, $asm, {
		getEventListenerManager: function AddInSheetBaseImpl$GetEventListenerManager() {
			throw new ss.NotImplementedException();
		},
		changeParameterValueAsync: function AddInSheetBaseImpl$ChangeParameterValueAsync(name, value) {
			throw new ss.NotImplementedException();
		},
		getParametersAsync: function AddInSheetBaseImpl$GetParametersAsync() {
			throw new ss.NotImplementedException();
		}
	});
	ss.initClass($tab__DashboardImpl, $asm, {
		get_dashboard: function DashboardImpl$get_Dashboard() {
			if (ss.isNullOrUndefined(this.$dashboard)) {
				this.$dashboard = new $tableauSoftware_Dashboard(this, this.$sheetBase);
			}
			return this.$dashboard;
		},
		get_eventListenerManager: function DashboardImpl$get_EventListenerManager() {
			return this.$sheetBase.getEventListenerManager();
		},
		$changeParameterValueAsync: function DashboardImpl$ChangeParameterValueAsync(parameterName, value) {
			return this.$sheetBase.changeParameterValueAsync(parameterName, value);
		},
		getParametersAsync: function DashboardImpl$GetParametersAsync() {
			return this.$sheetBase.getParametersAsync();
		}
	}, tab._SharedDashboardImpl);
	ss.initClass($tab__SettingsImpl, $asm, {
		get_$isModified: function SettingsImpl$get_IsModified() {
			var original = this.$originalSettings.settingsValues;
			if (ss.getKeyCount(original) !== ss.getKeyCount(this.$currentSettings)) {
				return true;
			}
			var $t1 = ss.getEnumerator(Object.keys(original));
			try {
				while ($t1.moveNext()) {
					var key = $t1.current();
					if (!ss.keyExists(this.$currentSettings, key)) {
						return true;
					}
					if (!ss.referenceEquals(original[key], this.$currentSettings[key])) {
						return true;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return false;
		},
		$initialize: function SettingsImpl$Initialize(settingsInfo) {
			tab._Param.verifyValue(settingsInfo, 'settingsInfo');
			tab._Param.verifyValue(settingsInfo.settingsValues, 'settingsInfo.SettingsValues');
			this.$originalSettings = settingsInfo;
			this.$currentSettings = tab._Utility.clone(Object).call(null, settingsInfo.settingsValues);
		},
		$get: function SettingsImpl$Get(key) {
			tab._Param.verifyString(key, 'key');
			return (ss.keyExists(this.$currentSettings, key) ? this.$currentSettings[key] : null);
		},
		$set: function SettingsImpl$Set(key, value) {
			tab._Param.verifyString(key, 'key');
			tab._Param.verifyString(value, 'value');
			this.$currentSettings[key] = value;
		},
		$erase: function SettingsImpl$Erase(key) {
			tab._Param.verifyString(key, 'key');
			if (ss.keyExists(this.$currentSettings, key)) {
				delete this.$currentSettings[key];
			}
		},
		$getAll: function SettingsImpl$GetAll() {
			return tab._Utility.clone(Object).call(null, this.$currentSettings);
		},
		$saveAsync: function SettingsImpl$SaveAsync() {
			var deferred = new tab._Deferred();
			if (!this.get_$isModified()) {
				deferred.resolve(this.$getAll());
				return deferred.get_promise();
			}
			var commandParameters = {};
			commandParameters['api.AddInSettings'] = this.$currentSettings;
			var returnHandler = new (ss.makeGenericType(tab.CommandReturnHandler$1, [Object]))('api.SaveAddInSettings', 0, ss.mkdel(this, function(result) {
				this.$initialize(result);
				deferred.resolve(result.settingsValues);
			}), function(remoteError, message) {
				deferred.reject(tab._TableauException.createServerError(message));
			});
			this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, commandParameters, returnHandler);
			return deferred.get_promise();
		}
	});
	ss.initClass($tab__WorksheetImpl, $asm, {
		get_worksheet: function WorksheetImpl$get_Worksheet() {
			if (ss.isNullOrUndefined(this.$worksheet)) {
				this.$worksheet = new $tableauSoftware_Worksheet(this, this.$sheetBase);
			}
			return this.$worksheet;
		},
		get_eventListenerManager: function WorksheetImpl$get_EventListenerManager() {
			return this.$sheetBase.getEventListenerManager();
		},
		$changeParameterValueAsync: function WorksheetImpl$ChangeParameterValueAsync(parameterName, value) {
			return this.$sheetBase.changeParameterValueAsync(parameterName, value);
		},
		getParametersAsync: function WorksheetImpl$GetParametersAsync() {
			return this.$sheetBase.getParametersAsync();
		}
	}, tab._SharedWorksheetImpl);
	ss.initClass($tab_DashboardContent, $asm, {
		getDashboard: function DashboardContent$GetDashboard() {
			return this.$getDashboard();
		}
	});
	ss.initClass($tab_EnvironmentVariablesImpl, $asm, {
		get_context: function EnvironmentVariablesImpl$get_Context() {
			return this.$context;
		},
		get_mode: function EnvironmentVariablesImpl$get_Mode() {
			return this.$mode;
		},
		get_locale: function EnvironmentVariablesImpl$get_Locale() {
			return this.$locale;
		},
		get_language: function EnvironmentVariablesImpl$get_Language() {
			return this.$language;
		},
		get_operatingSystem: function EnvironmentVariablesImpl$get_OperatingSystem() {
			return this.$operatingSystem;
		},
		get_tableauVersion: function EnvironmentVariablesImpl$get_TableauVersion() {
			return this.$tableauVersion;
		},
		get_apiVersion: function EnvironmentVariablesImpl$get_ApiVersion() {
			return '0.0.1';
		}
	});
	ss.initClass($tableauSoftware_addIn, $asm, {});
	ss.initClass($tableauSoftware_Sheet, $asm, {
		getName: function Sheet$GetName() {
			return this._impl.get_name();
		},
		getSize: function Sheet$GetSize() {
			return this._impl.get_size();
		},
		getSheetType: function Sheet$GetSheetType() {
			return this._impl.get_sheetType();
		},
		getEventListenerManager: function Sheet$GetEventListenerManager() {
			return this.$sheetBase.getEventListenerManager();
		},
		changeParameterValueAsync: function Sheet$ChangeParameterValueAsync(name, value) {
			return this.$sheetBase.changeParameterValueAsync(name, value);
		},
		getParametersAsync: function Sheet$GetParametersAsync() {
			return this.$sheetBase.getParametersAsync();
		}
	});
	ss.initClass($tableauSoftware_Dashboard, $asm, {
		getObjects: function Dashboard$GetObjects() {
			return this._impl.getObjects();
		},
		getWorksheets: function Dashboard$GetWorksheets() {
			return this._impl.getWorksheets();
		}
	}, $tableauSoftware_Sheet);
	ss.initClass($tableauSoftware_Environment, $asm, {
		getContext: function Environment$GetContext() {
			return this._impl.get_context();
		},
		getMode: function Environment$GetMode() {
			return this._impl.get_mode();
		},
		getLocale: function Environment$GetLocale() {
			return this._impl.get_locale();
		},
		getLanguage: function Environment$GetLanguage() {
			return this._impl.get_language();
		},
		getOperatingSystem: function Environment$GetOperatingSystem() {
			return this._impl.get_operatingSystem();
		},
		getTableauVersion: function Environment$GetTableauVersion() {
			return this._impl.get_tableauVersion();
		},
		getApiVersion: function Environment$GetApiVersion() {
			return this._impl.get_apiVersion();
		}
	});
	ss.initClass($tableauSoftware_Settings, $asm, {
		get: function Settings$Get(key) {
			return this._impl.$get(key);
		},
		set: function Settings$Set(key, value) {
			this._impl.$set(key, value);
		},
		erase: function Settings$Erase(key) {
			this._impl.$erase(key);
		},
		getAll: function Settings$GetAll() {
			return this._impl.$getAll();
		},
		isModified: function Settings$IsModified() {
			return this._impl.get_$isModified();
		},
		saveAsync: function Settings$SaveAsync() {
			return this._impl.$saveAsync();
		}
	});
	ss.initClass($tableauSoftware_Worksheet, $asm, {
		getParentDashboard: function Worksheet$GetParentDashboard() {
			return this._impl.get_parentDashboard();
		},
		getSummaryDataAsync: function Worksheet$GetSummaryDataAsync(options) {
			return this._impl.getSummaryDataAsync(options);
		},
		getUnderlyingDataAsync: function Worksheet$GetUnderlyingDataAsync(options) {
			return this._impl.getUnderlyingDataAsync(options);
		}
	}, $tableauSoftware_Sheet);
	(function() {
		$tableauSoftware_addIn._impl = new $tab__AddInImpl();
		$tableauSoftware_addIn.settings = null;
		$tableauSoftware_addIn.dashboardContent = null;
		$tableauSoftware_addIn.environment = null;
	})();
})();

  window.tableau = window.tableauSoftware = global.tableauSoftware;

  tableauSoftware.Promise = tab._PromiseImpl;


  window.tableau._addInApiLoaded = true;
})();

// END AddInApi
