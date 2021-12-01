---
title: Use TypeScript with the Extensions API
layout: docs
---

The Extensions API is a JavaScript library. If you author in TypeScript, Tableau provides the Extensions API type definitions (`@types`) so you can author your extension in TypeScript and enjoy the benefits of type annotations and type-checking. In addition, TypeScript provides support for classes and interfaces, and if you write your source files in Visual Studio, the Tableau Extensions API types provides IntelliSense.

**In this section**

- TOC
  {:toc}

<div class="alert alert-info"><b>Note</b> If you want to examine and use TypeScript versions of several of the sample extensions in the <b>Samples</b> folder, see <a href="https://github.com/tableau/extensions-api/tree/master/Samples-Typescript" target="_blank">Samples-Typescript (GitHub)</a> and follow the instructions to <a href="https://tableau.github.io/extensions-api/docs/trex_examples.html#use-the-typescript-samples" target="_blank">Use the TypeScript Samples</a>.
</div>

## Install the Tableau Extensions API TypeScript types

The Tableau Extension API type definitions are available as an npm @types package.

```cmd
npm install @tableau/extensions-api-types
```

<div class="alert alert-info"><b>Note</b> The version of the types package must match the version of the Extensions API library you are using. You can specify the library version by appending the version number to the package name (<code>@n.n.n</code>). For example, <code>npm install @tableau/extensions-api-types@1.3</code>. You only need to match major and minor versions (e.g. types 1.3.1 works with any 1.3.x version of the extensions library). If you don't specify a version number, npm will install the latest released package.</div>

## Import the type definitions

Import the Extensions API type definitions into your TypeScript code. It is best to only import the modules and interfaces that you need in your code.

For example, to import the module, `Parameter`, from `@tableau/extensions-api-types` you would use the following:

```javascript
import { Parameter } from "@tableau/extensions-api-types";
```

If you want to use Tableau enumerations as parameters to functions, or as a member variables inside class definitions, you need to import the type definitions from `@tableau/extensions-api-types`. You can then declare parameters or variables of that type.
For example, to be able to use the `DataType` enum as a parameter to a function, you need to use the following import statement:

```javascript
import { DataType } from "@tableau/extensions-api-types";
```

You can then use `DataType` as a type for a parameter in a class method. You can't use the fully qualified name as a parameter type (`tableau.DataType`), even though you can use the fully qualified name within a method.

```javascript
 private foo(value: DataType) {

 switch (value) {
     case tableau.DataType.String:
         console.log(value);
         break;
     // ... do other things
 }
}

```

Please note that `@tableau/extension-api-types` submodules are subject to change. Import only from `@tableau/extensions-api-types`.

## Set compiler options for type definitions

You can set the `tsc` compiler options in the `tsconfig.json` file for the project. You can set the `typeRoots` option to point to the folder that contains the Extensions API type definitions. The following example is used for the sample extensions in the Samples-Typescript folder. In the `tsconfig.json` file, the `typeRoots` options includes the `./node_modules/@tableau` path. The TypeScript samples use Node.js and webpack to build the extensions.

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "esnext",
    "module": "commonjs",
    "sourceMap": true,
    "alwaysStrict": true,
    "baseUrl": "./Samples-Typescript",
    "typeRoots": ["./node_modules/@tableau", "./node_modules/@types"]
  }
}
```

## Compile your code with the TypeScript compiler

If you need to install the compiler, see [TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript?=target="_blank"). Visual Studio Code supports TypeScript, but does not automatically include the TypeScript compiler (`tsc`). The TypeScript compiler transpiles your TypeScript source code to JavaScript. You include the JavaScript output in your extension `.html` file(s).

## Use the compiled JavaScript output in your extension

The TypeScript compiler (`tsc`) transpiles the source code into JavaScript. You just need to include the path to the JavaScript file in your extension code.

For example, the extensions in the Samples-Typescript folder all link to Extensions API JavaScript library `tableau.extensions.1.latest.js` and to the compiled JavaScript file for the extension (not the TypeScript source file).
In the HTML code for the extensions, the JavaScript files are referenced. The following example, links to the `datasources.js` file.

```html
<!-- Extensions Library (this will be hosted on a CDN eventually) -->
<script src="../../lib/tableau.extensions.1.latest.js"></script>

<!-- The  extension code (webpack) -->
<script src="../../dist/datasources.js"></script>
```

## Related resources

- [TypeScript](https://www.typescriptlang.org/index.html?=target="_blank")

- [TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript?=target="_blank")

- [TypeScript Sample Extensions (GitHub)](https://github.com/tableau/extensions-api/tree/master/Samples-TypeScript) and [Use the TypeScript samples]({{site.baseurl}}/docs/trex_examples.html#use-the-typescript-samples)
