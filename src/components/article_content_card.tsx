import Reveal from "./reveal";

interface ArticleContentCardProps {
	title: string;
	subtitle: string;
}

function ArticleContentCard({
	title = "Title",
	subtitle = "Subtitle"
}: ArticleContentCardProps) {
	return (
		<li
			className="grid grid-cols-1 grid-rows-[auto_1fr] place-items-start
			w-full h-full"
		>
			<Reveal>
				<h4
					className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
				font-bold
				font-high-priority
				bg-clip-text text-transparent"
				>
					{title}
				</h4>
			</Reveal>
			<Reveal>
				<p
					className="text-sm"
				>
					{subtitle}
				</p>
			</Reveal>
		</li>
	)
}

export default ArticleContentCard;