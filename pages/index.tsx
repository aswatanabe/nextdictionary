import { Container } from "@/components/container"
import { Search } from "@/components/search"
import { Keyword } from "@/components/keyword"
import { Tips } from "@/components/tips"
import { Japanese } from "@/components/japanese"
import { English } from "@/components/english"
import { Description } from "@/components/description"
import { Example } from "@/components/example"
import { Note } from "@/components/note"
import { More } from "@/components/more"

export default function Home() {
	return (
		<>
			<Search />
			<Container>
				<div>
					<div><p>広告メイン1</p></div>
					<Keyword />
					<Tips />
					<Japanese />
					<English />
					<Description />
					<Example />
					<div><p>広告メイン2</p></div>
					<Note />
					<More />
					<div><p>広告サイド</p></div>
				</div>
			</Container>
		</>
	)
}