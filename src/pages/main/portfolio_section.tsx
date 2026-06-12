import type { SectionsProps } from "../../App";
import ArticleContentCard from "../../components/article_content_card";
import HeaderArticle from "../../components/header_article";
import SectionHeader from "../../components/section_header";

function Portfolio({
	t
}: SectionsProps) {
	const schoolProjectsData: string[] = [
		"libft",
		"get_next_line",
		"ft_printf",
		"philosopher",
		"minishell",
		"webserv",
		"ft_transcendence",
		"ft_linear_regression"
	];

	return (
		<section
			className="flex flex-col items-center justify-center
			w-full"
		>
			<div
				className="h-20"
				id="projects"
			>
			</div>
			<SectionHeader
				header={t("portfolio.header.title")}
				content={t("portfolio.header.subtitle")}
			/>
			<div
				className="h-10"
			>
			</div>

			<HeaderArticle
				title={t("portfolio.schoolProjects.title")}
			/>

			<ul
				className="flex flex-col items-center justify-center
				md:grid md:grid-cols-2 md:grid-rows-1
				lg:grid lg:grid-cols-4 lg:grid-rows-1
				px-4 md:px-8 lg:px-32
				gap-4 lg:gap-8"
			>
				{
					schoolProjectsData.map((value: string, id: number) => {
						return (
							<ArticleContentCard
								key={value + id}
								title={value}
								subtitle={t(`portfolio.schoolProjects.${value}`)}
							/>
						)
					})
				}

			</ul>

		</section>
	);
}

export default Portfolio;