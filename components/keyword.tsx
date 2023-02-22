import styles from 'styles/keyword.module.css';

import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const res = await fetch(filePath);
  const objectData = await res.json();

  return {
    props: {
      keyword: objectData.data.keyword,
    },
  };
}

export function Keyword(props) {
  const keyword = props.keyword;
      // const keyword = {
    //     h1: "be used to",
    //     p: [
    //         "助動詞",
    //         "熟語"
    //     ]
    // };
  return (
    <div className={styles.sideBySide}>
      <h1>{keyword.h1}</h1>
      {keyword.p.map((p, index) => (
        <p key={index} className={`${styles.icon} ${styles.iconText}`}>
          {p}
        </p>
      ))}
    </div>
  );
}
