"use client";
import React from "react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import courseData from "@/data/course.json";
import Link from "next/link";
import {BackgroundGradient} from "./ui/background-gradient";
import Image from "next/image";
interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}
const FeatureSection = () => {
	const featuredCourses = courseData.courses.filter(
		(course: Course) => course.isFeatured
	);
	return (
		<div className="py-12 bg-gray-900">
			<div className=" text-center ">
				<h2 className="text-base text-purple-600 font-semibold uppercase tracking-wide">
					Learn Form Experts
				</h2>
				<p className="mt-2   text-2xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 sm:text-4xl">
					Join our comprehensive course to master music production.
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center my-4 ">
				{featuredCourses.map((course: Course) => (
					<div
						key={course.id}
						className="flex justify-center "
					>
						<BackgroundGradient className="rounded-[22px] flex flex-col overflow-hidden h-full max-w-sm bg-white dark:bg-zinc-900 ">
					<div className="p-4 sm:p-6 flex flex-col text-center flex-grow items-center justify-evenly ">
            	<Image
            src={course.image}
            alt={course.title}
            height="300"
            width="400"
            className="object-contain "
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {course.title}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 ">
            {course.description}
          </p>
          <Link className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200" href={`/course/${course.slug}`}>
            Learn More
          </Link>
          
          </div>
						</BackgroundGradient>
					</div>
				))}
			</div>
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
