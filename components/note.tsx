import { EachNote } from "@/components/eachNote";

type Note = {
	name: string;
};

type Props = {
	notes: Note[];
};

export function Note(props: Props) {
	const { notes } = props;

	return (
		<div>
			{notes.map((note) => (
				<div key={note.name}>
					<EachNote name={note.name} />
				</div>
			))}
		</div>
	);
}