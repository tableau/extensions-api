import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function detectOS() {
    if (!ExecutionEnvironment.canUseDOM) {
        return undefined;
    }
    let os = navigator.userAgent;
    if (os.search('Windows') !== -1) {
        return 'windows';
    } else if (os.search('Mac') !== -1) {
        return 'macos';
    } else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
        return 'linux';
    }
    return undefined;
}
