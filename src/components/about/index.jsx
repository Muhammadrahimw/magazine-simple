import {FaFacebookF, FaTwitter} from "react-icons/fa6";
import {ImTwitter} from "react-icons/im";
import {IoMdHeart} from "react-icons/io";

const AboutComponent = () => {
	return (
		<section className="mt-[4em] w-[70%] mx-auto">
			<div className="flex justify-between items-start gap-4">
				<div className="w-[40em]">
					<p className="first-letter:text-8xl first-letter:font-bold first-letter:float-left first-letter:leading-[1] first-letter:text-blue-600 text-[1.025em] leading-8">
						M any geographers are trained in toponymy and cartology, this
						is not their main preoccupation. Geographers study the space and the
						temporal database distribution of phenomena, <br />
						processes, and features as well as the interaction of humans and
						their environment. Because space and place affect a variety of
						topics, such as economics, health, climate, plants and animals,
						geography is highly interdisciplinary. The interdisciplinary nature
						of the geographical approach depends on an attentiveness
						to the relationship between physical and human phenomena and its
						spatial patterns.
					</p>
					<h3 className="text-2xl font-bold mt-6">Integrated Geography</h3>
					<p className="text-[1.025em] leading-8 mt-4">
						Geography as a discipline can be split broadly into two main
						subsidiary fields: human geography and physical geography. The
						former largely focuses on the built environment and how humans
						create, view, manage, and influence space. The latter examines the
						natural environment, and how organisms, climate, soil, water, and
						landforms produce and interact.
						<br />
						<br />
						The difference between these approaches led to a third field,
						environmental geography, which combines physical and human geography
						and concerns the interactions between the environment and humans.
						<br />
						<br />
						The accompanying text mentions seven outer regions beyond the
						encircling ocean. The descriptions of five of them have survived. In
						contrast to the Imago Mundi, an earlier Babylonian world map dating
						back to the 9th century BC depicted Babylon as being further north
						from the center of the world, though it is not certain what that
						center was supposed to represent.
					</p>
				</div>
				<div className="w-[16em] h-[24em] rounded-lg flex flex-col justify-start items-center border bg-white border-gray-400 translate-y-[-10em]">
					<div className="w-[5.5em] h-[5.5em] rounded-full mt-8 mb-4 bg-[url(/public/user.png)] bg-no-repeat bg-cover bg-center"></div>
					<strong className="text-xl mt-3">Mira Anderson</strong>
					<p className="mt-1 text-sm mb-3">Traveler & Photographer</p>
					<b className="mb-6">82 articles</b>
					<div className="flex justify-center items-center gap-2">
						<div className="cursor-pointer">
							<img src="/public/3.svg" alt="" />
						</div>
						<div className="cursor-pointer">
							<img src="/public/2.svg" alt="" />
						</div>
						<div className="cursor-pointer">
							<img src="/public/1.svg" alt="" />
						</div>
					</div>
					<div className="mt-8 w-full border border-gray-300"></div>
					<b className="my-2 cursor-pointer">Follow on Universal</b>
				</div>
			</div>
			<div className="mt-10 h-[34em] bg-[url(/public/4.png)] bg-no-repeat bg-cover bg-center rounded-t-md"></div>
			<div className="py-3 px-8 rounded-b-md border border-gray-400 flexC">
				<div className="w-[70%] border-gray-400">
					<p className="text-sm">
						Geostatistics deal with quantitative data analysis, specifically the
						application of statistical methodology
					</p>
				</div>
				<div className="flex justify-start items-center ml-7 gap-2 mr-8">
					<div className="w-11 h-11 rounded-full bg-[url(/public/5.png)] bg-no-repeat bg-cover bg-center"></div>
					<div>
						<strong className="text-sm">Andrew Washington</strong>
						<p className="text-xs text-gray-500">Photographer</p>
					</div>
				</div>
			</div>
			<div className="flexC mt-7 gap-12">
				<div className="w-[39em]">
					<p className="text-[1.025em] leading-8 text-gray-600">
						The oldest known world maps date back to ancient Babylon from the
						9th century BC. The best known Babylonian world map, however, is the
						Imago Mundi of 600 BC. The map as reconstructed by Eckhard Unger
						shows Babylon on the Euphrates, surrounded by a circular landmass
						showing Assyria, Urartu and several cities, in turn surrounded by a
						"bitter river" (Oceanus), with seven islands arranged around it so
						as to form a seven-pointed star.
					</p>
					<br />
					<p className="text-[1.025em] leading-8 text-gray-600">
						The accompanying text mentions seven outer regions beyond the
						encircling ocean. The descriptions of five of them have survived. In
						contrast to the Imago Mundi, an earlier Babylonian world map dating
						back to the 9th century BC depicted Babylon as being further north
						from the center of the world, though it is not certain what that
						center was supposed to represent.
					</p>
					<br />
					<p className="text-[1.025em] leading-8 text-gray-600">
						The ideas of Anaximander: considered by later Greek writers to be
						the true founder of geography, come to us through fragments quoted
						by his successors. Anaximander is credited with the invention of the
						gnomon, the simple, yet efficient Greek instrument that allowed the
						early measurement of latitude. Thales is also credited with the
						prediction of eclipses. The foundations of geography can be traced
						to the ancient cultures, such as the ancient, medieval, and early
						modern Chinese.
					</p>
					<br />
				</div>
				<div className="w-[17em]">
					<p className="font-bold text-xl mb-5">Material on Theme</p>
					<div className="bg-[url(/public/6.png)] w-full h-[11em] bg-no-repeat bg-cover bg-center rounded-lg"></div>
					<p className="pt-3 pb-1 font-bold">
						Application of Postcolonial Theory in the Middle East
					</p>
					<p className="text-gray-500 text-sm">
						In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is
						Jordan Palestine?", by Raphael Israel, the authors deal with the
						psychologically fragmented postcolonial identity.
					</p>
				</div>
			</div>
			<div className="mt-11">
				<div className="flex justify-start items-center gap-8">
					<p className="text-2xl font-bold w-[21em]">
						Names of places... are not geography... know by heart a whole
						gazetteer full of them would not, in itself, constitute anyone
						a geographer. Geography has higher aims than this: it seeks to
						classify phenomena.
					</p>
					<div>
						<div className="w-[4em] h-[4em] rounded-full bg-[url(/public/7.png)] bg-no-repeat bg-center bg-cover"></div>
						<p className="text-[1.05em] mt-1">William Peterson</p>
						<p className="text-sm text-gray-500">Travel Agent</p>
					</div>
				</div>
				<p className="text-[1.025em] leading-8 text-gray-600 mt-10 w-[40em]">
					The Greeks, who were the first to explore geography as both art and
					science, achieved this through Cartography, Philosophy, and
					Literature, or through Mathematics. There is some debate about who was
					the first person to assert that the Earth is spherical in shape, with
					the credit going either to Parmenides or Pythagoras. Anaxagoras was
					able to demonstrate that the profile of the Earth was circular by
					explaining eclipses. However, he still believed that the Earth was a
					flat disk, as did many of his contemporaries.
				</p>
				<br />
				<p className="text-[1.025em] leading-8 text-gray-600 w-[40em]">
					The first rigorous system of latitude and longitude lines is credited
					to Hipparchus. He employed a sexagesimal system that was derived from
					Babylonian mathematics.
				</p>
			</div>
			<div className="mt-8 flex items-center justify-start gap-2">
				<div className="py-1 px-4 rounded border border-gray-300 flex justify-center items-center font-semibold cursor-pointer">
					Travel
				</div>
				<div className="py-1 px-4 rounded border border-gray-300 flex justify-center items-center font-semibold cursor-pointer">
					Destinations
				</div>
				<div className="py-1 px-4 rounded border border-gray-300 flex justify-center items-center font-semibold cursor-pointer">
					Nature
				</div>
				<div className="py-1 px-4 rounded border border-gray-300 flex justify-center items-center font-semibold cursor-pointer">
					World
				</div>
				<div className="py-1 px-4 rounded border border-gray-300 flex justify-center items-center font-semibold cursor-pointer">
					Alaska
				</div>
			</div>
			<div className="border-b border-gray-300 w-full mt-[4em]"></div>
			<div>
				<h2 className="text-2xl font-bold mt-7 mb-5">Show Your Support</h2>
				<div className="flex items-center gap-3 justify-start">
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 bg-red-500 cursor-pointer">
						<IoMdHeart className="text-xl" />
						<p className="font-medium">Like it</p>
						<p className="text-sm font-light">42</p>
					</div>
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 cursor-pointer bg-[#4267B2]">
						<FaFacebookF className="text-xl" />
						<p className="font-medium">Share</p>
						<p className="text-sm font-light">80</p>
					</div>
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 cursor-pointer bg-[#1DA1F2]">
						<ImTwitter className="text-xl" />
						<p className="font-medium">Tweet</p>
						<p className="text-sm font-light">33</p>
					</div>
                    <div></div>
				</div>
			</div>
		</section>
	);
};

export default AboutComponent;
