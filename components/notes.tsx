import { EachNote } from "@/components/eachNote";

type Note = {
    name: string;
    h2?: string;
    p2?: string;
    h3?: string[];
    p3?: string[];
};

type Props = {
    notes: Note[];
};

export function Notes(props: Props) {
    const { notes } = props;

    return (
        <div>
            {notes.map((note) => (
                <div key={note.name}>
                    <EachNote
                        name={note.name}
                        h2={note.h2}
                        p2={note.p2}
                        h3={note.h3}
                        p3={note.p3}
                    />
                </div>
            ))}
        </div>
    );
}
