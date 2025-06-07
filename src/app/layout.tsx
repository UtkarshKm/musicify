import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Musicify - Online Music Academy",
	description:
		"Learn music theory, instruments, and composition with professional instructors. Interactive lessons, real-time feedback, and personalized learning paths.",
	keywords: [
		"music lessons",
		"online music academy",
		"music theory",
		"music education",
		"learn instruments",
	],
	authors: [{name: "Musicify Academy"}],
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Musicify - Online Music Academy",
		description: "Learn music theory, instruments, and composition online",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="relative w-full flex justify-center items-center">
					<NavBar />
				</div>
				{children}
			</body>
		</html>
	);
}
