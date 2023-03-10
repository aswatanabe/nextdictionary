type Props = {
    japanese: string;
};

export function Japanese(props: Props) {
    const { japanese } = props;
    return (
        <div>
            <h2>日本語訳</h2>
            <p>{japanese}</p>
        </div>
    );
}