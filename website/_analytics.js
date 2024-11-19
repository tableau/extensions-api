import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {

    //  OptanonConsentNoticeStart

    const script = document.createElement('script');

    script.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
    script.type = 'text/javascript';
    script.setAttribute('data-domain-script', '019321c1-4b7e-7313-9372-ddbd938f50ea')
    script.innerHTML="function OptanonWrapper() { }";

    document.getElementsByTagName('head')[0].appendChild(script);

    // OptanonConsentNoticeStart -->

}