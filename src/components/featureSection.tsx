"use client";
import React from "react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import course from "@/data/course.json";
import Link from "next/link";

const FeatureSection = () => {
	return (
		<div className="py-12 bg-gray-900">
			<div className=" text-center ">
				<h2 className="text-base text-purple-600 font-semibold uppercase tracking-wide">
					Learn Form Experts
				</h2>
				<p className="mt-2  text-2xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 sm:text-4xl">
					Join our comprehensive course to master music production.
				</p>
			</div>
			<div>2</div>
			<div className="mt-20 flex justify-center">
				<Link href={"/all-courses"}>
					<HoverBorderGradient
						containerClassName="rounded-full"
						as="button"
						className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
					>
						View All Courses
					</HoverBorderGradient>
				</Link>
			</div>
		</div>
	);
};

export default FeatureSection;
