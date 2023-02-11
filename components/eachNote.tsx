import React from "react";

type Props = {
    name: string
    h2?: string
    p2?: string
    h3?: string[]
    p3?: string[]
};

export function EachNote(props: Props) {
    return (
        <div>
            <p>{props.name}</p>
            <h2>{props.h2}</h2>
            <p>{props.p2}</p>
            {props.h3?.map((h, i) => (
                <React.Fragment key={i}>
                    <h3>{h}</h3>
                    <p>{props.p3?.[i]}</p>
                </React.Fragment>
            ))}
        </div>
    );
};
    
    
    
    
    