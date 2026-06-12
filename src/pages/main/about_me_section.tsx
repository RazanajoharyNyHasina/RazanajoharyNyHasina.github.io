import type { SectionsProps } from "../../App";
import ImgBackgroundMobile from "../../assets/AboutMeMobile.png";
import ImgBackgroundDesktop from "../../assets/AboutMeDesktop.png";
import SVGQuote from "../../assets/icons/Quote.svg?react";
import HeaderArticle from "../../components/header_article";
import Reveal from "../../components/reveal";
import { Trans } from "react-i18next";
import ArticleContentCard from "../../components/article_content_card";

function AboutMe({
	t
}: SectionsProps) {
	const wordsDescription: string[] = [
		"curious",
		"creative",
		"versatile",
		"determined"
	]

	return (
		<section
			className="flex flex-col items-center justify-center
			gap-8
			w-full"
		>
			<div
				className="h-20"
				id="aboutMe"
			></div>
			{/* <SectionHeader
				header={t("about.header.title")}
				content={t("about.header.subtitle")}
			/> */}
			<Reveal
				className="w-full"
			>
				<picture
				>
					<source
						media="(max-width: 768px)"
						srcSet={ImgBackgroundMobile}
					/>
					<img
						src={ImgBackgroundDesktop}
						className="w-full h-full object-cover"
						alt="A picture showing Ny Hasina doing a thumb up."
						fetchPriority="low"
					/>
				</picture>
			</Reveal>
			<article
				className="w-full"
			>
				<HeaderArticle
					title="Rakotoarivony Razanajohary Ny Hasina"
				/>
				<Reveal
					className="px-4 md:px-8 lg:px-32 my-2"
				>
					<Trans
						i18nKey="about.me"
						components={{
							school: <a className="hover:underline font-bold" href="https://42antananarivo.mg" />
						}}
					/>
				</Reveal>
			</article>

			<article
				className="w-full"
			>
				<Reveal
					className="w-full"
				>
					<HeaderArticle
						title={t("about.descriptionOfMyself.title")}
					/>
					<ul
						className="
						grid grid-cols-2 grid-rows-1
						lg:grid lg:grid-cols-4 lg:grid-rows-1
						px-4 md:px-8 lg:px-32
						gap-4 lg:gap-8"
					>
						{
							wordsDescription.map((value: string, index: number) => {
								return (
									<ArticleContentCard
										key={value + index.toString()}
										title={t(`about.descriptionOfMyself.${value}.title`)}
										subtitle={t(`about.descriptionOfMyself.${value}.subtitle`)}
									/>
								);
							})
						}
					</ul>
				</Reveal>
			</article>

			<article
				className="w-full
				"
			>
				<Reveal
					className="flex items-center justify-center
					w-full"
				>
					<h4
						className="flex flex-col items-center justify-center
						px-4 md:px-8 lg:px-32"
					>
						<SVGQuote
							className="text-text w-6 h-6
							rotate-z-180
							mr-auto"
						/>
						<p
							className="font-high-priority
							px-8
							italic
							text-xl text-center"
						>
							{t("about.descriptionOfMyself.1sentence")}
						</p>
						<SVGQuote
							className="text-text w-6 h-6
						ml-auto"
						/>
					</h4>
				</Reveal>
			</article>
		</section>
	)
}

export default AboutMe;