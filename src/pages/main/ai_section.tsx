import type { SectionsProps } from "../../App";
import SectionHeader from "../../components/section_header";
import IconDebugging from "../../assets/icons/Debugging.svg?react";
import IconTeacher from "../../assets/icons/Teacher.svg?react";
import IconResearchAssistant from "../../assets/icons/ResearchAssistant.svg?react";
import IconBrainstorm from "../../assets/icons/Brainstorm.svg?react";
import SVGSquareGrid from "../../assets/SquareGrid.svg";
import type { ComponentType, SVGProps } from "react";
import Reveal from "../../components/reveal";

interface CardProps {
	title: string;
	subtitle: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
}

function Card({
	title = "Title",
	subtitle = "Subtitle",
	icon: Icon
}: CardProps) {

	return (
		<article
			className="grid grid-cols-1 grid-rows-[auto_auto_1fr]
			rounded-2xl
			w-full h-full
			relative
			overflow-hidden
			bg-surface-primary
			inset-shadow-xs inset-shadow-[color-mix(in_srgb,var(--color-text)_25%,transparent)]
			flex-none
			p-4"
		>
			<div
				className="absolute top-0 left-0 inset-0 opacity-10
				mask-[radial-gradient(circle_at_top_center,white,transparent_70%)]"
				style={{
					backgroundImage: `url("${SVGSquareGrid}")`,
					backgroundRepeat: "repeat",
					backgroundSize: "45px",
				}}
			/>

			{
				<Icon
					className="w-12 h-12 text-accent my-8"
				/>
			}
			<h3
				className="text-lg
				bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
				font-bold
				font-high-priority
				bg-clip-text text-transparent"
			>
				{title}
			</h3>
			<p
				className="text-sm"
			>
				{subtitle}
			</p>
		</article>
	)
}

type AIUsageType = {
	i18nkey: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function AI({
	t
}: SectionsProps) {
	const IAUsage: AIUsageType[] = [
		{ i18nkey: "teacher", icon: IconTeacher },
		{ i18nkey: "debug", icon: IconDebugging },
		{ i18nkey: "research_assistant", icon: IconResearchAssistant },
		{ i18nkey: "brainstorming", icon: IconBrainstorm }
	]

	return (
		<section
			className=""
		>
			<div
				className="h-20"
				id="AI"
			></div>
			<SectionHeader
				header={t("ai.section.header.title")}
				content={t("ai.section.header.subtitle")}
			/>
			<ul
				className="
				grid grid-cols-1 grid-rows-4
				p-4 md:p-8 lg:p-32
				md:grid md:grid-cols-2 md:grid-rows-1
				lg:grid lg:grid-cols-4 lg:grid-rows-1
				gap-4
				w-full"
			>
				{
					IAUsage.map((value: AIUsageType, id: number) => {
						return (
							<li
								key={value + id.toString()}
								className="w-full h-full"
							>
								<Reveal
									className="w-full h-full"
								>
									<Card
										title={t(`ai.bento.${value.i18nkey}.title`)}
										subtitle={t(`ai.bento.${value.i18nkey}.subtitle`)}
										icon={value.icon}
									/>
								</Reveal>
							</li>
						);
					})
				}
			</ul>
		</section>
	)
}

export default AI;