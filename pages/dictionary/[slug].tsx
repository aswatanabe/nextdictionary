import React from "react";
import { useRouter } from "next/router";
import { Meta } from "@/components/meta";
import { Container } from "@/components/container";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/twoColumn";
import { Search } from "@/components/search";
import { Keyword } from "@/components/keyword";
import { Tips } from "@/components/tips";
import { Japanese } from "@/components/japanese";
import { English } from "@/components/english";
import { Descriptions } from "@/components/descriptions";
import { Examples } from "@/components/examples";
import { Notes } from "@/components/notes";
import { More } from "@/components/more";
import { Ad } from "@/components/ad";
//for dynamic routing
import { GetStaticPaths, GetStaticProps } from "next";
import data from "../../data.json";

type Dictionary = {
	id: string;
	title: string;
	content: {
		keyword: {
			h1: string;
			p: string[];
		};
		tips: string[];
		japanese: string;
		english: {
			quote: string;
			source: string;
		};
		descriptions: {
			text: string;
			imageSrc?: string;
			imageAlt?: string;
		};
		examples: {
			en: string;
			ja: string;
		}[];
		notes: {
			name: string;
			h2: string;
			h3?: string[];
			p2?: string;
			p3?: string[];
		}[];
		more?: {
			text: string;
			example: string;
		}[];
	}
}

type PathParams = {
	slug: keyof typeof data.dictionary;
}

type PageProps = {
	dictionary: Dictionary;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const allSlugs = Object.keys(data.dictionary).map((slug) => ({
		params: { slug },
	}));
	return {
		paths: allSlugs.map(({ params: { slug } }) => `/dictionary/${slug}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
	const { slug } = params as PathParams;
	const dictionary = data.dictionary[slug];
	return {
		props: {
			dictionary: dictionary
		}
	};
};

export default function Home( props: PageProps ){
	const { dictionary } = props;
	const { content } = dictionary;
	const router = useRouter();

	return (
		<div>
			<Meta
				pageTitle={content.keyword.h1}
				pageDesc={`${content.keyword.h1}???????????????????????????????????????????????????????????????????????????????????????????????????`}
			/>

			<Search key={router.asPath} />
			<Container>
				<TwoColumn>
					<TwoColumnMain>
						<Ad height="sm" />
						<Keyword keyword={ content.keyword }/>
						<Tips tips={content.tips}/>
						<Japanese japanese={content.japanese}/>
						<English english={content.english}/>
						<Descriptions descriptions={content.descriptions}/>
						<Examples examples={content.examples}/>
						<div style={{display: 'flex', gap:'var(--space-xs)'}}>
							<Ad height="md" />
							<Ad height="md" />
						</div>
						<Notes notes={content.notes}/>
						{content.more !=null && <More more={content.more}/> }
					</TwoColumnMain>
					<TwoColumnSidebar>
						<Ad height="md" />
						<Ad height="sm" />
						<Ad height="md" />
						<Ad height="md" />
						<Ad height="lg" />
					</TwoColumnSidebar>
				</TwoColumn>
			</Container>
		</div>
	);
}