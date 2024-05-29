import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const logoSrc = useBaseUrl('/img/flex.png');
    const tileViz = useBaseUrl('/img/Scatterplot_rendering.gif');
    const logoTab = useBaseUrl('/img/tableau-logo.svg');
    const tileSankey = useBaseUrl('/img/Sankey.png');
    const logoExt = useBaseUrl('/img/ExtensionApi_24px.svg');

    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img src={logoTab} className={styles.heroLogo} />
                <img src={logoExt} className={styles.heroLogo} />
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/">
                        Get Started with the Tableau Extensions API
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader />
        </Layout>
    );
}
