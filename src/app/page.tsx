import HomeIntroduction from './components/HomeIntroduction';
import HomeAboutMe from './components/HomeAboutMe';
import HomeProject from './components/HomeProject';
import HomeContact from './components/HomeContact';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-24 below-tablet:px-2 max-w-[1920px] mx-auto">
			<HomeIntroduction />
			<HomeAboutMe />
			<HomeProject />
			<HomeContact />
		</main>
	);
}
