import { motion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
	initial?: TargetAndTransition;
	whileInView?: TargetAndTransition;
}

function Reveal({
	children,
	delay = 0,
	duration = 1.0,
	className = "",
	initial = { opacity: 0, y: 40, filter: "blur(10px)" },
	whileInView = { opacity: 1, y: 0, filter: "blur(0px)" }
}: RevealProps) {

	return (
		<motion.div
			className={className}
			initial={initial}
			whileInView={whileInView}
			viewport={{
				once: true,
				amount: 0.2
			}}
			transition={{
				duration: duration,
				delay: delay,
				ease: "easeOut"
			}}
		>
			{children}
		</motion.div>
	)
}

export default Reveal;