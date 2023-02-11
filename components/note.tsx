import { EachNote } from "@/components/eachNote"

const eachNote = [
  { name: "Note 1",
    h2: "発音",
    p2: "used toは、usedが [juːst] のように発音される"
  },
  { name: "Note 2",
    h2: "be used to 原形 / get used to 原形",
    h301: "be used to 「～に慣れている」",
    p301: "\"Aren't you cold?\" \"I'm used to the weather here.\"（「寒くない？」「ここの天気には慣れてるよ」）",
    h302: "get used to 「～に慣れる」",
    p302: "Tomorrow I start a new job. I have to get used to it soon.（明日から新しい仕事だ。早く慣れないと）"
  },
  { name: "Note 3",
    h2: "used to 原形 / be used to -ing / be used to 原形",
    h301: "used to 原形 「よく～したものだ」「昔は～であった」",
    p301: "I used to cook. Now I don't.（よく料理をしたものだが、今はしない）",
    h302: "be used to -ing 「～するのに慣れている」",
    p302: "I am used to cooking with herbs and spices.（ハーブやスパイスで料理をすることに慣れている）",
    h303: "be used to 原形 「～するために使われる」",
    p303: "What kitchen equipment is used?（なんのキッチン用品が使われていますか？）"
  },
];

export function Note() {
  return (
    <div>
      <EachNote
        name = {eachNote[0].name}
        h2 = {eachNote[0].h2}
        p2 = {eachNote[0].p2}
        h301 = {eachNote[0].h301}
        p301 = {eachNote[0].p301}
        h302 = {eachNote[0].h302}
        p302 = {eachNote[0].p302}
        h303 = {eachNote[0].h303}
        p303 = {eachNote[0].p303}
      />
      <EachNote {...eachNote[1]} />
      <EachNote {...eachNote[2]} />
    </div>
  )
}