import Reveal from "./reveal";

interface HeaderArticleProps {
	title: string;
}

function HeaderArticle({
	title = "Title"
}: HeaderArticleProps) {
	return (
		<Reveal
			className="w-full"
		>
			<header
				className="w-full
				flex items-center justify-start
				px-4 md:px-8 lg:px-32 my-2"
			>
				<h3
					className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
					font-bold text-2xl
					font-high-priority
					bg-clip-text text-transparent"
				>
					{title}
				</h3>
			</header>
		</Reveal>
	)
}

export default HeaderArticle;