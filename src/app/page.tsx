import FeatureSection from "@/components/featureSection";
import HeroSection from "@/components/heroSection";
import Testimony from "@/components/Testimony";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import StickyScrollRevealDemo from "@/components/WhyChooseUs";



export default function Home() {
	return (
		<main className="min-h-screen  bg-black/[.96] antialiased bg-grid-white[.02]">
			<HeroSection />
			<FeatureSection />
			<StickyScrollRevealDemo />
			<Testimony />
			<UpcomingWebinar />
		</main>
	);
}
