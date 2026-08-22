import type { SectionsProps } from "../../App";
import ArticleContentCard from "../../components/article_content_card";
import HeaderArticle from "../../components/header_article";
import Reveal from "../../components/reveal";
import SectionHeader from "../../components/section_header";
import ShowcaseContent, { type ShowcaseContentProps } from "../../components/showcase_content";
// import VideoShowcaseMultiMeshPainter from "../../../public/videos/multi_mesh_painter_showcase.mp4";

function Portfolio({
	t
}: SectionsProps) {
	const schoolProjectsData: string[] = [
		"libft",
		"get_next_line",
		"ft_printf",
		"philosopher",
		"minishell",
		"miniRT",
		"webserv",
		"ft_transcendence",
		"ft_linear_regression"
	];

	const personalProjectsData: ShowcaseContentProps[] = [
		{
			title: t("portfolio.personalProjects.multiMeshPainter.title"),
			content_key_i18n: "portfolio.personalProjects.multiMeshPainter.content",
			video_link: "multi_mesh_painter_showcase.mp4",
			tech_used: ["C++", "GDExtension API", "GDScript", "SCons"],
			components: {
				split: <Reveal className="w-full"></Reveal>,
				link_multi_mesh_instance_3d: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/stable/classes/class_multimeshinstance3d.html" />,
				link_to_multi_mesh: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/stable/classes/class_multimesh.html" />,
				link_to_gdextension: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/4.4/tutorials/scripting/gdextension/index.html" />,
				line_break: <><br /></>,
				newline: <><br /></>,
				sub: <sub></sub>,
				bold: <b className="font-bold"></b>,
				school: <a className="hover:underline font-bold" href="https://42antananarivo.mg" />
			}
		},
		{
			title: t("portfolio.personalProjects.meshMerger.title"),
			content_key_i18n: "portfolio.personalProjects.meshMerger.content",
			video_link: "mesh_merger_showcase.mp4",
			tech_used: ["C++", "GDExtension API", "SCons"],
			components: {
				split: <Reveal className="w-full"></Reveal>,
				link_mesh_instance_3d: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html" />,
				link_array_mesh: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/stable/classes/class_arraymesh.html" />,
				link_to_gdextension: <a className="hover:underline font-bold" href="https://docs.godotengine.org/en/4.4/tutorials/scripting/gdextension/index.html" />,
				line_break: <><br /></>,
				newline: <><br /></>,
				sub: <sub></sub>,
				bold: <b className="font-bold"></b>,
				school: <a className="hover:underline font-bold" href="https://42antananarivo.mg" />
			}
		},
	]

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
				title={t("portfolio.personalProjects.title")}
			/>

			<ul
				className="flex flex-col items-center justify-center
				w-full
				gap-8 lg:gap-8
				mb-4"
			>
				{
					personalProjectsData.map((value: ShowcaseContentProps, id: number) => {
						return (
							<ShowcaseContent
								key={"ShowCaseContent" + id}
								title={value.title}
								content_key_i18n={value.content_key_i18n}
								video_link={value.video_link}
								tech_used={value.tech_used}
								components={value.components}
							/>
						)
					})
				}
			</ul>

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