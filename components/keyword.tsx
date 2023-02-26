// ***** import 1 *****

// import styles from 'styles/keyword.module.css';

// export function Keyword(props) {
    // const keyword = {
    //     h1: "be used to",
    //     p: [
    //         "助動詞",
    //         "熟語"
    //     ]
    // };
    
    //空のオブジェクトを代入することで、エラーを回避する
    //const keyword = props.keyword || {};

//     const keyword = props.keyword;

//     return (
//         <div className={styles.sideBySide}>
//             <h1>{keyword.h1}</h1>
//             {keyword.p.map((p, index) => (
//                 <p key={index} className={`${styles.icon} ${styles.iconText}`}>
//                     {p}
//                 </p>
//             ))}
//         </div>
//     );
// }

// Fetching data from the JSON file
// import path from 'path'

// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), 'data.json');
//     const res = await fetch(filePath);
//     const objectData = await res.json();

//     return {
//         props: objectData.data
//     };

// }

// ***** import 2 *****

// import { useEffect, useState } from 'react';
// import styles from 'styles/keyword.module.css';

// export function Keyword(props) {
//   const [keyword, setKeyword] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('../data.json');
//       const data = await response.json();
//       setKeyword(data.data.keyword);
//     }
//     fetchData();
//   }, []);

//   if (!keyword) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.sideBySide}>
//       <h1>{keyword.h1}</h1>
//       {keyword.p.map((p, index) => (
//         <p key={index} className={`${styles.icon} ${styles.iconText}`}>
//           {p}
//         </p>
//       ))}
//     </div>
//   );
// }

// import data from '../data.json';
import styles from 'styles/keyword.module.css';

export function Keyword() {
    const keyword = {
        h1: "be used to -ing［名詞］",
        p: [
            "助動詞",
            "イディオム"
        ]
    };

    // const keyword = data.data.keyword;
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