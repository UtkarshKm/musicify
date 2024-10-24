import FeatureSection from "@/components/featureSection";
import HeroSection from "@/components/heroSection";
import StickyScrollRevealDemo from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen  bg-black/[.96] antialiased bg-grid-white[.02]">
			<HeroSection/>
			<FeatureSection/>
			<StickyScrollRevealDemo/>
		</main>
	);
}
