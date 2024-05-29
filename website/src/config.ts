const version_long = '0.0.17782.r044377f2';
const version_short = version_long.substr(0, version_long.lastIndexOf('.'));

const downloadBaseUrl = 'https://downloads.tableau.com/tssoftware/';

export const config = {
    download: {
        windows_py: `${downloadBaseUrl}/tableauhyperapi-${version_short}-py3-none-win_amd64.whl`,
        windows_cxx: `${downloadBaseUrl}/tableauhyperapi-cxx-windows-x86_64-release-main.${version_long}.zip`,
        windows_java: `${downloadBaseUrl}/tableauhyperapi-java-windows-x86_64-release-main.${version_long}.zip`,
        windows_dotnet: `${downloadBaseUrl}/tableauhyperapi-dotnet-windows-x86_64-main.${version_long}.zip`,

        macos_py: `${downloadBaseUrl}/tableauhyperapi-${version_short}-py3-none-macosx_10_11_x86_64.whl`,
        macos_cxx: `${downloadBaseUrl}/tableauhyperapi-cxx-macos-x86_64-release-main.${version_long}.zip`,
        macos_java: `${downloadBaseUrl}/tableauhyperapi-java-macos-x86_64-release-main.${version_long}.zip`,
        macos_dotnet: `${downloadBaseUrl}/tableauhyperapi-dotnet-macos-x86_64-main.${version_long}.zip`,

        linux_py: `${downloadBaseUrl}/tableauhyperapi-${version_short}-py3-none-manylinux2014_x86_64.whl`,
        linux_cxx: `${downloadBaseUrl}/tableauhyperapi-cxx-linux-x86_64-release-main.${version_long}.zip`,
        linux_java: `${downloadBaseUrl}/tableauhyperapi-java-linux-x86_64-release-main.${version_long}.zip`,
        linux_dotnet: `${downloadBaseUrl}/tableauhyperapi-dotnet-linux-x86_64-main.${version_long}.zip`,

        docs_py: `${downloadBaseUrl}/tableauhyperapi-py-docs-main.${version_long}.zip`,
        docs_java: `${downloadBaseUrl}/tableauhyperapi-java-docs-main.${version_long}.zip`,
        docs_dotnet: `${downloadBaseUrl}/tableauhyperapi-dotnet-docs-main.${version_long}.zip`,
        docs_cxx: `${downloadBaseUrl}/tableauhyperapi-cxx-docs-main.${version_long}.zip`,
    },
    version_long: version_long,
    version_short: version_short,
};
