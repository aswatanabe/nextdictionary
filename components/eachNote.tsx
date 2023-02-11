type Props = {
    name: string
    h2?: string
    p2?: string
    h301?: string
    p301?: string
    h302?: string
    p302?: string
    h303?: string
    p303?: string
};

export function EachNote(props: Props) {    
    return (
        <div>
            <p> {props.name} </p>
            <h2> {props.h2} </h2>
            <p> {props.p2} </p>
            <h3> {props.h301} </h3>
            <p> {props.p301} </p>
            <h3> {props.h302} </h3>
            <p> {props.p302} </p>
            <h3> {props.h303} </h3>
            <p> {props.p303} </p>
        </div>
    );
};  