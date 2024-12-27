import {FaShare} from "react-icons/fa6";
import {FaClock} from "react-icons/fa";

const ShowcaseComponent = () => {
	return (
		<section className="bg-[url(/public/showcase.png)] bg-no-repeat bg-cover bg-center w-full pb-[4em]">
			<div className="w-[75%] mx-auto">
				<p className="text-blue-800 py-8">Destinations</p>
				<h1 className="w-[13em] text-[3.5em] font-semibold leading-normal text-white">
					Five Travel Stories From 2017 to Help You Escape Into the World
				</h1>
				<p className="text-white mt-8 w-[42em]">
					From the coastlines of Europe to remote Kodiak Island, Alaska, here
					are five of our favorite stories to help you explore the world
				</p>
				<div className="flex items-center gap-8 mt-[4em]">
					<div className="flex items-center gap-2 pb-1">
						<FaClock className="text-gray-400" />
						<p className="text-sm text-white">Aug 6, 10:23 pm</p>
					</div>
					<div className="text-white flex items-center gap-1 py-2 cursor-pointer w-[9em] justify-center border border-gray-400 rounded-full">
						<FaShare />
						<p>142 shares</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShowcaseComponent;
