import { EachNote } from "@/components/eachNote"

const eachNote = [
  { name: "Note 1",
    h2: "発音",
    h2Description: "used toは、usedが [juːst] のように発音される"
  },
  { name: "Note 2",
    h2: "be used to 原形 / get used to 原形",
    h301: "be used to 「～に慣れている」",
    h301Description: "\"Aren't you cold?\" \"I'm used to the weather here.\"（「寒くない？」「ここの天気には慣れてるよ」）",
    h302: "get used to 「～に慣れる」",
    h302Description: "Tomorrow I start a new job. I have to get used to it soon.（明日から新しい仕事だ。早く慣れないと）"
  },
  { name: "Note 3",
    h2: "used to 原形 / be used to -ing / be used to 原形",
    h301: "used to 原形 「よく～したものだ」「昔は～であった」",
    h301Description: "I used to cook. Now I don't.（よく料理をしたものだが、今はしない）",
    h302: "be used to -ing 「～するのに慣れている」",
    h302Descroption: "I am used to cooking with herbs and spices.（ハーブやスパイスで料理をすることに慣れている）",
    h303: "be used to 原形 「～するために使われる」",
    h303Description: "What kitchen equipment is used?（なんのキッチン用品が使われていますか？）"
  },
];

export function Note() {
  return (
    <div>
      <EachNote
        name = {eachNote[0].name}
        h2 = {eachNote[0].h2}
        h2Description = {eachNote[0].h2Description}
        h301 = {eachNote[0].h301}
        h301Description = {eachNote[0].h301Description}
        h302 = {eachNote[0].h302}
        h302Description = {eachNote[0].h302Description}
        h303 = {eachNote[0].h303}
        h303Description = {eachNote[0].h303Description}
      />
      <EachNote {...eachNote[1]} />
      <EachNote {...eachNote[2]} />
    </div>
  )
}