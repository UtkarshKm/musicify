"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "./ui/navbar-menu";
import {cn} from "@/utils/cn";
import Link from "next/link";

const NavBar = ({className}: {className?: string}) => {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href={"/"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Home"
					></MenuItem>
				</Link>
				<MenuItem
					setActive={setActive}
					active={active}
					item="Courses"
				>
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/all-courses">All Courses</HoveredLink>
						<HoveredLink href="/basic-music-theory">
							Basic Music Theory
						</HoveredLink>
						<HoveredLink href="/advanced-composition">
							Advance Composition
						</HoveredLink>
						<HoveredLink href="/song-writting">Song Writting</HoveredLink>
						<HoveredLink href="/song-production">Song Production</HoveredLink>
					</div>
				</MenuItem>
				<Link href={"/contact"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Contact Us"
					></MenuItem>
				</Link>
			</Menu>
		</div>
	);
};

export default NavBar;
