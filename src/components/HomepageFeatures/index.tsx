import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {useState} from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Spring Boot',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity,
          and productivity has made it the world's most popular Java framework.
      </>
    ),
  },
  {
    title: 'Java',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Oracle Java is the #1 programming language and development platform. It reduces costs, shortens development
          timeframes, drives innovation, and improves application services.
      </>
    ),
  },
  {
    title: 'Go',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Build simple, secure, scalable systems with Go. An open-source programming language supported by Google.
          Easy to learn and great for teams.Built-in concurrency and a robust standard library.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
