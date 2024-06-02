import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ChatPage from './chat';

import styles from './index.module.css';

// 站点首页
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header
          className={clsx('hero hero--primary', styles.heroBanner)}
          style={{
              backgroundColor: 'rgb(255 255 255)',
          }}
      >
          <div className="container">
              <div
                  className="top-tips"
                  style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      fontWeight: 'rgb(255 255 255)',
                      textAlign: 'center',
                      padding: '1.25rem',
                      color: 'white',
                      fontSize: '1.05rem',
                      backgroundImage: `linear-gradient(90deg, #3b82f6, #ef4444)`
                  }}
              >
                  每天都要自我更新！
              </div>
              <Heading
                  as="h1"
                  className="hero__title"
                  style={{
                      marginTop: '4rem',
                      fontSize: '3rem',
                      color: '#1c1e21',
                      fontWeight: '700',
                      lineHeight: '1',
                  }}
              >
                  {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">
                  {siteConfig.tagline}
              </p>
              <div className={styles.buttons}>
                  <Link
                      className="button button1 button--secondary button--lg"
                      to="/docs/intro">
                      快速阅读 📖
                  </Link>
                  <Link
                      className="button button2 button--secondary button--lg"
                      to="/navigation">
                      站点导航 ⏱️
                  </Link>
              </div>
          </div>
      </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <ChatPage/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
