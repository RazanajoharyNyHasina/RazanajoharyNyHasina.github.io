import { Trans } from "react-i18next";
import HeaderArticle from "./header_article";
import Reveal from "./reveal";

type ComponentsMap = Record<string, React.ReactElement>;

export interface ShowcaseContentProps {
	title: string;
	content_key_i18n: string;
	video_link: string;
	tech_used: string[];
	components: ComponentsMap;
}
function ShowcaseContent({
	title = "Title",
	content_key_i18n = "Content",
	video_link = "multi_mesh_painter_showcase.mp4",
	tech_used = [],
	components = {}
}: ShowcaseContentProps) {
	return (
		<li
			className="grid grid-cols-1 grid-rows-[auto_1fr] place-items-start
			w-full h-full"
		>
			<Reveal
				className="w-full
				md:h-100 overflow-hidden"
			>
				<video
					autoPlay
					muted
					loop
					playsInline
					width={"100%"}
					className="md:-translate-y-35"
				>
					<source
						src={`/videos/${video_link}`}
						type="video/mp4"
					>
					</source>
				</video>
			</Reveal>

			<HeaderArticle
				title={title}
			/>

			<article
				className="px-4 md:px-8 lg:px-32 w-full"
			>
				<Trans
					i18nKey={content_key_i18n}
					components={components}
				/>
				<Reveal
					className="w-full"
				>
					<ul
						className="flex flex-wrap items-center justify-start
						my-4
						gap-3
						w-full"
					>
						{
							tech_used.map((value: string, id: number) => {
								return (
									<li
										className="
									text-sm
								text-accent
								bg-surface-primary
								p-2
								rounded-xl
								"
										style={{
											boxShadow: "inset 0px 0px 6px color-mix(in srgb,var(--color-text) 10%,transparent)"
										}}
										key={"TechUsed" + id}
									>
										{value}
									</li>
								);
							})
						}
					</ul>
				</Reveal>
			</article>

		</li>
	);
}

export default ShowcaseContent;