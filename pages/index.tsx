import { Container } from "@/components/container"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/twoColumn"
import { Paper } from "@mui/material"
import { Search } from "@/components/search"
import { Keyword } from "@/components/keyword"
import { Tips } from "@/components/tips"
import { Japanese } from "@/components/japanese"
import { English } from "@/components/english"
import { Description } from "@/components/description"
import { Example } from "@/components/example"
import { Note } from "@/components/note"
import { More } from "@/components/more"
import { Ad } from "@/components/ad"

export default function Home() {
	return (
		<>
			<Search />
			<Container>
				<TwoColumn>
					<TwoColumnMain>
						<Ad height="sm" />
						<Keyword />
						<Tips />
						<Japanese />
						<English />
						<Description />
						<Example />
						<Ad height="md"/>
						<Note />
						<More />
					</TwoColumnMain>
					<TwoColumnSidebar>
						<Ad height="md"/>
						<Ad height="sm" />
						<Ad height="md"/>
						<Ad height="md"/>
						<Ad height="lg"/>
					</TwoColumnSidebar>
				</TwoColumn>
			</Container>
		</>
	)
}