import type { SectionsProps } from "../../App";
import InfiniteScroll, { type InfiniteScrollData } from "../../components/infinite_scroll";
import SectionHeader from "../../components/section_header";
import IconBlender from "../../assets/icons/simple-icons/blender.svg?react";
import IconCPlusPlus from "../../assets/icons/simple-icons/cplusplus.svg?react";
import IconCSS from "../../assets/icons/simple-icons/css.svg?react";
import IconC from "../../assets/icons/simple-icons/c.svg?react";
import IconDocker from "../../assets/icons/simple-icons/docker.svg?react";
import IconGimp from "../../assets/icons/simple-icons/gimp.svg?react";
import IconGit from "../../assets/icons/simple-icons/git.svg?react";
import IconGnuBash from "../../assets/icons/simple-icons/gnubash.svg?react";
import IconGodotEngine from "../../assets/icons/simple-icons/godotengine.svg?react";
import IconHTML5 from "../../assets/icons/simple-icons/html5.svg?react";
import IconJavaScript from "../../assets/icons/simple-icons/javascript.svg?react";
import IconKrita from "../../assets/icons/simple-icons/krita.svg?react";
import IconLinux from "../../assets/icons/simple-icons/linux.svg?react";
import IconPython from "../../assets/icons/simple-icons/python.svg?react";
import IconReact from "../../assets/icons/simple-icons/react.svg?react";
import IconTypeScript from "../../assets/icons/simple-icons/typescript.svg?react";
import Reveal from "../../components/reveal";

function Tech({
	t
}: SectionsProps) {
	const TechData: InfiniteScrollData[] = [
		{ title: "C", icon: IconC },
		{ title: "C++", icon: IconCPlusPlus },
		{ title: "Python", icon: IconPython },
		{ title: "Godot", icon: IconGodotEngine },
		{ title: "Docker", icon: IconDocker },
		{ title: "Git", icon: IconGit },
		{ title: "GNU Bash", icon: IconGnuBash },
		{ title: "Linux", icon: IconLinux },
		{ title: "HTML5", icon: IconHTML5 },
		{ title: "CSS", icon: IconCSS },
		{ title: "JavaScript", icon: IconJavaScript },
		{ title: "TypeScript", icon: IconTypeScript },
		{ title: "React", icon: IconReact },
		{ title: "Blender", icon: IconBlender },
		{ title: "GIMP", icon: IconGimp },
		{ title: "Krita", icon: IconKrita },
	];

	return (
		<section
			className="w-full"
		>
			<div
				className="h-20"
				id="techStack"
			></div>
			<SectionHeader
				header={t("techStack.header.title")}
				content={t("techStack.header.subtitle")}
			/>
			<Reveal
				className="overflow-hidden w-full
				mt-12
				mask-[linear-gradient(to_right,transparent,white_25%,white_75%,transparent)]
				mask-alpha"
			>
				<InfiniteScroll
					data={TechData}
				/>
			</Reveal>
		</section>
	)
}

export default Tech;