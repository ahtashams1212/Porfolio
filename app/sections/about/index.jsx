"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Ahtasham Shafique. I am a youngest Typescript, React.JS, Html, NextJS, Python, Tailwind.css, Shadcn/ui Front-End Developer. And learn AI, Metaverse, Web2.O, Web3.O. And I am a Graphic Design, Logo Design, Templates and other Design work. And expert in MS Office.
						</p>
						<p className="my-3.5">
							I am Student of DAE(Auto &  Diesel).
						</p>
						<p className="my-3.5">
						I successfully certified by PIAIC(Presidential Initiative for Artificial Intelligence & Computing) from Pakistan, Front-End Developer.
						</p>
						<p>
							During my course years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming journey began in 2023 as a developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with Programming.
						</p>
						<p>
							One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js and I used it to build some
							projects working in a team with a frontend dev.
						</p>
						
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
