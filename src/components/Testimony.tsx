"use client";

import React, {useEffect, useState} from "react";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";


const testimonials = [
	{
		quote:
			"The instructors at the academy are top-notch. I went from barely being able to read sheet music to confidently playing songs I love. The learning environment is so supportive!",
		name: "Ryan Thompson",
		title: "Piano Intermediate Student",
	},
	{
		quote:
			"I’ve always loved singing but never had formal training. Thanks to the academy’s vocal lessons, I now understand the technical aspects of singing and feel much more confident performing.",
		name: "Ava Collins",
		title: "Vocal Beginner Student",
	},
	{
		quote:
			"This academy is a game-changer! The online guitar lessons fit perfectly with my schedule, and I’ve improved my fingerpicking technique significantly in just a few months.",
		name: "Ethan Baker",
		title: "Guitar Intermediate Student",
	},
	{
		quote:
			"From rhythm basics to advanced beat patterns, the drum courses here are incredibly well-structured. The feedback I get from the instructors has really helped me grow as a drummer.",
		name: "Noah Wilson",
		title: "Drum Advanced Student",
	},
	{
		quote:
			"What sets this academy apart is the attention to detail in every lesson. My violin skills have improved dramatically, and I feel more confident tackling complex pieces.",
		name: "Lily Scott",
		title: "Violin Advanced Student",
	},
	{
		quote:
			"As a parent, I appreciate the academy’s personalized approach to teaching kids. My daughter has gained so much confidence in her piano playing, and she looks forward to every lesson!",
		name: "Megan Williams",
		title: "Parent of a Piano Student",
	},
	{
		quote:
			"I’ve been part of several music programs, but this academy stands out because of the quality of teaching and the supportive community. Whether you’re a beginner or an advanced player, this is the place to be!",
		name: "Lucas Johnson",
		title: "Saxophone Intermediate Student",
	},
	{
		quote:
			"Learning music production here has been an amazing experience. The courses are well-paced, and I’ve been able to produce my own tracks much faster than I expected.",
		name: "Oliver Davis",
		title: "Music Production Beginner Student",
	},
	{
		quote:
			"I never thought I’d enjoy learning music theory, but the academy’s approach made it fun and engaging. The theory lessons have helped me become a better musician overall.",
		name: "Chloe Reed",
		title: "Music Theory Beginner Student",
	},
	{
		quote:
			"The live performances organized by the academy gave me the chance to showcase my skills and get valuable feedback. The whole experience has been both challenging and rewarding.",
		name: "Grace Carter",
		title: "Flute Intermediate Student",
	},
];
const Testimony = () => {
	return (
		<>
			<div className="h-[50rem] flex flex-col w-full justify-center items-center overflow-hidden dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
            <div>
				<h2 className="text-3xl font-bold text-center mb-8 z-10">
                Echoes of Excellence: Our Students Musical Journeys
				</h2>
			</div>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-6xl">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>

            </div>
            </div>
		</>
	);
};

export default Testimony;
