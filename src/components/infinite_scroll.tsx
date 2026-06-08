import { useEffect, useRef } from "react";
import type { ComponentType, SVGProps } from "react";

export interface InfiniteScrollData {
	title: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface InfiniteScrollProps {
	data: InfiniteScrollData[];
}

function InfiniteScroll({ data }: InfiniteScrollProps) {
	const containerRef = useRef<HTMLUListElement | null>(null);
	const directionRef = useRef(1);
	const pausedRef = useRef(false);
	const rafRef = useRef<number | null>(null);

	const icons = data;

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const speed = 0.8;

		const animate = () => {
			if (!el || pausedRef.current) {
				rafRef.current = requestAnimationFrame(animate);
				return;
			}

			el.scrollLeft += directionRef.current * speed * (1 + Math.sin(Date.now() * 0.002) * 0.02);

			const maxScroll = el.scrollWidth - el.clientWidth;

			if (el.scrollLeft <= 0) {
				directionRef.current = 1;
			} else if (el.scrollLeft >= maxScroll) {
				directionRef.current = -1;
			}

			rafRef.current = requestAnimationFrame(animate);
		};

		rafRef.current = requestAnimationFrame(animate);

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<ul
			ref={containerRef}
			className="flex items-center justify-start
			w-full gap-24 overflow-x-scroll px-4"
			style={{
				scrollbarWidth: "none"
			}}
		>
			{icons.map((value, index) => {
				const Icon = value.icon;

				return (
					<li
						key={value.title + index}
						className="flex flex-col items-center shrink-0 gap-4 hover:text-accent transition-colors duration-300"
						onPointerEnter={() => (pausedRef.current = true)}
						onPointerLeave={() => (pausedRef.current = false)}
					>
						<Icon className="h-14 w-14 opacity-75" />
						<p className="text-sm">{value.title}</p>
					</li>
				);
			})}
		</ul>
	);
}

export default InfiniteScroll;