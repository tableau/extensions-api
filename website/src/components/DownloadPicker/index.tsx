import React, { useState } from 'react';
import { config } from '@site/src/config';
import { detectOS } from '@site/src/os_detection';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';
import LinuxIcon from '@site/static/img/devicon-linux.svg';
import WindowsIcon from '@site/static/img/devicon-windows.svg';
import MacosIcon from '@site/static/img/devicon-macos.svg';

type DotNetWarningProps = {
    url: string;
};

function DotNetWarning({ url }: DotNetWarningProps) {
    return (
        <div style={{ 'margin-top': '1em' }}>
            <Admonition type="danger" title="Deprecation Warning">
                The .NET version of Hyper API is deprecated. Older versions of Hyper API will still be available via
                NuGET. In the future, .Net will not receive any new features or updates. The old packages will stay
                available on NuGET indefinitely, so you can keep using older versions in .Net. The other languages
                (Python, Java, C++) are not impacted by this in any way. In case this is causing issues for you, please
                reach out via{' '}
                <a href="https://join.slack.com/t/tableau-datadev/shared_invite/zt-1q4rrimsh-lHHKzrhid1MR4aMOkrnAFQ">
                    Slack
                </a>
                .
                <br />
                <br />
                <a href={url}>Download the .Net Hyper API</a>
            </Admonition>
        </div>
    );
}

export function DownloadPicker() {
    const [displayDotnet, setDisplayDotnet] = useState(false);
    return (
        <Tabs defaultValue={detectOS()}>
            <TabItem
                value="windows"
                label={
                    <>
                        <WindowsIcon className={styles.svgicon} /> Windows
                    </>
                }
            >
                <ul>
                    <li>
                        <a href={config.download.windows_py}>Python .whl (Windows)</a>
                    </li>
                    <li>
                        <a href={config.download.windows_cxx}>C++ (Windows)</a>
                    </li>
                    <li>
                        <a href={config.download.windows_java}>Java (Windows)</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setDisplayDotnet(true)}>
                            .Net (Windows)
                        </a>
                        {displayDotnet ? <DotNetWarning url={config.download.windows_dotnet} /> : <></>}
                    </li>
                </ul>
            </TabItem>
            <TabItem
                value="macos"
                label={
                    <>
                        <MacosIcon className={styles.svgicon} /> macOS
                    </>
                }
            >
                <ul>
                    <li>
                        <a href={config.download.macos_py}>Python .whl (macOS)</a>
                    </li>
                    <li>
                        <a href={config.download.macos_cxx}>C++ (macOS)</a>
                    </li>
                    <li>
                        <a href={config.download.macos_java}>Java (macOS)</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setDisplayDotnet(true)}>
                            .Net (macOS)
                        </a>
                        {displayDotnet ? <DotNetWarning url={config.download.macos_dotnet} /> : <></>}
                    </li>
                </ul>
            </TabItem>
            <TabItem
                value="linux"
                label={
                    <>
                        <LinuxIcon className={styles.svgicon} /> Linux
                    </>
                }
            >
                <ul>
                    <li>
                        <a href={config.download.linux_py}>Python .whl (Linux)</a>
                    </li>
                    <li>
                        <a href={config.download.linux_cxx}>C++ (Linux)</a>
                    </li>
                    <li>
                        <a href={config.download.linux_java}>Java (Linux)</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setDisplayDotnet(true)}>
                            .Net (Linux)
                        </a>
                        {displayDotnet ? <DotNetWarning url={config.download.linux_dotnet} /> : <></>}
                    </li>
                </ul>
            </TabItem>
        </Tabs>
    );
}
