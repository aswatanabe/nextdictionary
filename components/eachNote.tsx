import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from "styles/eachNote.module.css";

type Props = {
    name: string;
    h2?: string;
    p2?: string;
    h3?: string[];
    p3?: string[];
};

export function EachNote(props: Props) {
    return (
        <div className={styles.captionBox}>
            <p className={styles.caption}><AttachFileIcon />{props.name}</p>
            <h2>{props.h2}</h2>
            <p className={styles.p2}>{props.p2}</p>
            {props.h3?.map((h, i) => (
                <React.Fragment key={i}>
                    <h3>{h}</h3>
                    <p className={styles.p3}>{props.p3?.[i]}</p>
                </React.Fragment>
            ))}
        </div>
    );
};