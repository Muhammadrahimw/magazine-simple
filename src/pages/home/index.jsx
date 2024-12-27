import AboutComponent from "../../components/about";
import FeaturesComponent from "../../components/features";
import ShowcaseComponent from "../../components/showcase";
import SubscribeComponent from "../../components/subscribe";

const Home = () => {
	return (
		<>
			<ShowcaseComponent />
			<AboutComponent />
			<FeaturesComponent />
			<SubscribeComponent />
		</>
	);
};

export default Home;
