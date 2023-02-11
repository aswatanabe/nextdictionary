import { EachNote } from "@/components/eachNote"

const notes = [
  { name: "Note 1",
    h2: "発音",
    p2: "used toは、usedが [juːst] のように発音される"
  },
  { name: "Note 2",
    h2: "be used to 原形 / get used to 原形",
    h3: [
      "be used to 「～に慣れている」",
      "get used to 「～に慣れる」"
    ],
    p3: [
      "\"Aren't you cold?\" \"I'm used to the weather here.\"（「寒くない？」「ここの天気には慣れてるよ」）",
      "Tomorrow I start a new job. I have to get used to it soon.（明日から新しい仕事だ。早く慣れないと）"
    ],
  },
  { name: "Note 3",
    h2: "used to 原形 / be used to -ing / be used to 原形",
    h3: [
      "used to 原形 「よく～したものだ」「昔は～であった」",
      "be used to -ing 「～するのに慣れている」",
      "be used to 原形 「～するために使われる」"
    ],
    p3: [
      "I used to cook. Now I don't.（よく料理をしたものだが、今はしない）",
      "I am used to cooking with herbs and spices.（ハーブやスパイスで料理をすることに慣れている）",
      "What kitchen equipment is used?（なんのキッチン用品が使われていますか？）"
    ],
  },
];

export function Note() {
  return (
    <div>
      {notes.map((note, index) => (
        <EachNote {...note} key={index} />
    ))}
    </div>
  )
}