"use client";
import React from "react";
import {StickyScroll} from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from the best in the industry. Our instructors are seasoned professionals with years of experience in music education and performance. They are dedicated to helping you achieve your musical goals.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">

            </div>
        ),
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "Our curriculum is designed to cater to all skill levels, from beginners to advanced musicians. We offer a wide range of courses that cover various aspects of music, including theory, composition, and performance.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">

            </div>
        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Practice and learn in our state-of-the-art facilities equipped with the latest musical instruments and technology. Our environment is designed to inspire creativity and foster a love for music.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">

            </div>
        ),
    },
];
function StickyScrollRevealDemo() {
	return (
		<div>
			<StickyScroll content={content} />
		</div>
	);
}
export default StickyScrollRevealDemo;
