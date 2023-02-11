type Props = {
    name: string
    h2?: string
    h2Description?: string
    h301?: string
    h301Description?: string
    h302?: string
    h302Description?: string
    h303?: string
    h303Description?: string
};

export function EachNote(props: Props) {    
    return (
        <div>
            <p> {props.name} </p>
            <h2> {props.h2} </h2>
            <p> {props.h2Description} </p>
            <h3> {props.h301} </h3>
            <p> {props.h301Description} </p>
            <h3> {props.h302} </h3>
            <p> {props.h302Description} </p>
            <h3> {props.h303} </h3>
            <p> {props.h303Description} </p>
        </div>
    );
};  