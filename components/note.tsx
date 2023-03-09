import { EachNote } from "@/components/eachNote"

export function Note(props) {
  const { notes } = props;
  return (
    <div>
      {notes.map((note, index) => (
        <EachNote {...note} key={index} />
    ))}
    </div>
  )
}