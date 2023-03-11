import React from "react";
import { Meta } from "@/components/meta";
import { Container } from "@/components/container";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/twoColumn";
import { Search } from "@/components/search";
import { Keyword } from "@/components/keyword";
import { Tips } from "@/components/tips";
import { Japanese } from "@/components/japanese";
import { English } from "@/components/english";
import { Descriptions } from "@/components/description";
import { Examples } from "@/components/examples";
import { Notes } from "@/components/notes";
import { More } from "@/components/more";
import { Ad } from "@/components/ad";
//for dynamic routing
import { GetStaticPaths, GetStaticProps } from "next";
import data from "../../data.json";

type PathParams = {
	slug: keyof typeof data.dictionary;
}

type Dictionary = {
	id: string;
	title: string;
	content: {
		keyword: {
			h1: string;
			p: string[];
		};
		tips: {
			id: number;
			text: string[];
		}
		japanese: string;
		english: {
			quote: string;
			source: string;
		};
		descriptions: {
			text: string;
			imageSrc: string;
			imageAlt: string;
		};
		examples: {
			id: number;
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
			id: number;
			text: string;
			example: string;
		}[];
	}
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
	return (
		<div>
			<Meta
				pageTitle="検索ワード"
				pageDesc="検索ワードの意味・使い方・例文・よく問われる問題形式について解説しています。"
			/>
			<Search />
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
						<Ad height="md" />
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