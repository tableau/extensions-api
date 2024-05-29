import React from 'react';
import Admonition from '@theme/Admonition';

export function AppleSiliconWorkarounds() {
    return (
        <Admonition type="info" title="Apple Silicon Support">
            If you are on Apple Silicon (Apple M1, Apple M2, ...), you will currently need workarounds, as described
            below.
            <details>
                <summary style={{ fontWeight: 'bold', margin: '.8em .5em' }}>Apple Silicon Workarounds</summary>
                <div style={{ marginLeft: '1.4em' }}>
                    <p>
                        Hyper API runs on Apple Silicon only with [Rosetta 2](https://support.apple.com/en-us/HT211861)
                        instead of natively. You will have to install Rosetta 2 before installing Hyper API.
                    </p>
                    <p>
                        Furthermore, this means that Hyper API can only be used from within other x86 programs, running
                        under Rosetta. In particular for Python and Java, this means that the Python interpreter/Java
                        runtime needs to run with Rosetta, too.
                    </p>
                    <p>
                        To do so, either install the Intel-only version of the Python/Java interpreter, or prefix your
                        call with <code>arch -x86_64</code>. E.g., for Python, you can use:
                    </p>
                    <pre>
                        arch -x86_64 /usr/bin/python3 -m pip install tableauhyperapi
                        <br />
                        arch -x86_64 /usr/bin/python3 your_script.py
                    </pre>
                </div>
            </details>
        </Admonition>
    );
}
