import type { SectionsProps } from "../../App";
import BackgroundPictureDesktop from "../../assets/BackgroundPictureDesktop.png";
import BackgroundPictureMobile from "../../assets/BackgroundPictureMobile.png";
import CTAPrimary from "../../components/cta_primary";
import CTASecondary from "../../components/cta_secondary";
import IconArrowPointingTopRight from "../../assets/icons/ArrowPointingTopRight.svg?react";
import IconStar from "../../assets/icons/Star.svg?react";
import TypingAnimated from "../../components/typing_animated";
import Reveal from "../../components/reveal";
import { Trans } from "react-i18next";

function Hero({
	t
}: SectionsProps) {
	const titleRole: string[] = [
		t("hero.role.systemDev"),
		t("hero.role.webDev"),
		t("hero.role.UIUXDev"),
		t("hero.role.graphicsDesigner"),
		t("hero.role.3dArtist")
	];

	return (
		<section
			className="overflow-y-scroll overflow-x-hidden
			relative
			flex flex-col items-center justify-center
			w-full h-screen"
		>
			<Reveal
				className="absolute top-0 left-0
				overflow-hidden
				w-full h-full
				-z-2"
				duration={2.0}
				initial={{
					opacity: 0,
					transform: "scale(105%)"
				}}
				whileInView={{
					opacity: 1,
					transform: "scale(100%)"
				}}
			>
				<picture
				>

					<source
						media="(max-width: 768px)"
						srcSet={BackgroundPictureMobile}
					/>
					<img
						src={BackgroundPictureDesktop}
						alt="A picture showing Ny Hasina in the front of a breathtaking landscape. This image was generated with AI and edited by Ny Hasina."
						className="w-full h-full object-cover select-none"
						fetchPriority="high"
					/>
				</picture>
			</Reveal>

			<div
				className="absolute bottom-0 left-0
				bg-linear-to-t from-bg to-transparent
				-z-1
				w-full h-125"
			>
			</div>
			<header
				className="flex flex-col items-center justify-end
				lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-end
				w-full h-full
				text-shadow-lg
				pointer-events-none
				p-4 md:p-8"
			>
				<div
					className="flex flex-col items-start justify-center
					pointer-events-auto
					gap-4"
				>
					<h1
						className="flex flex-col"
					>
						<Reveal
						>
							<TypingAnimated
								text={titleRole}
							/>
						</Reveal>
						<Reveal
							className="
							font-high-priority
							text-4xl
							md:text-5xl"
							delay={0.2}
						>
							<Trans
								i18nKey="hero.header"
								components={{
									bold: <b className="font-bold text-accent"></b>
								}}
							/>
						</Reveal>
					</h1>
					<Reveal
						className="pointer-events-auto"
						delay={0.6}
					>
						<Trans
							i18nKey="hero.paragraph"
							components={{
								strong: <strong className="font-bold text-accent"></strong>
							}}
						/>
					</Reveal>

					<Reveal
						className="w-full flex gap-4"
						delay={0.8}
					>

						<CTAPrimary
							title={t("hero.cta.primary")}
							onClick={() => { window.location.href = "mailto:djazejhasi@gmail.com" }}
							icon={IconArrowPointingTopRight}
						/>
						<CTASecondary
							title={t("hero.cta.secondary")}
							onClick={() => { document.getElementById("projects")?.scrollIntoView() }}
							icon={IconStar}
						/>
					</Reveal>
				</div>
			</header>
		</section>
	);
}

export default Hero;