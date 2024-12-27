import React from "react";
import {AiFillEye} from "react-icons/ai";
import {FaMessage} from "react-icons/fa6";

const FeaturesComponent = () => {
	return (
		<section className="bg-[#F5F5F5]">
			<div className="w-[80%] mx-auto mt-[3.5em] grid grid-cols-4 gap-7 py-[3.5em]">
				<div className="w-full">
					<div className="w-full h-[11em] bg-[url(/public/8.png)] bg-no-repeat bg-cover bg-center rounded-lg mb-4"></div>
					<b>An Evangelist of Singaporean Food Has a New Pulpit</b>
					<div className="flex justify-start items-center gap-2 mt-3 text-sm text-gray-500">
						<AiFillEye className="text-2xl" />
						<p className="text-sm">1,904</p>
						<FaMessage />
						<p className="text-sm">82</p>
					</div>
				</div>
				<div className="w-full">
					<div className="w-full h-[11em] bg-[url(/public/9.png)] bg-no-repeat bg-cover bg-center rounded-lg mb-4"></div>
					<b>At the Mouth of the Mississippi, a Weird and Fragile Beauty</b>
					<div className="flex justify-start items-center gap-2 mt-3 text-sm text-gray-500">
						<AiFillEye className="text-2xl" />
						<p className="text-sm">2,873</p>
						<FaMessage />
						<p className="text-sm">982</p>
					</div>
				</div>
				<div className="w-full">
					<div className="w-full h-[11em] bg-[url(/public/10.png)] bg-no-repeat bg-cover bg-center rounded-lg mb-4"></div>
					<b>Chattanooga Is Changing. But Its Charms Remain.</b>
					<div className="flex justify-start items-center gap-2 mt-3 text-sm text-gray-500">
						<AiFillEye className="text-2xl" />
						<p className="text-sm">821</p>
						<FaMessage />
						<p className="text-sm">30</p>
					</div>
				</div>
				<div className="w-full">
					<div className="w-full h-[11em] bg-[url(/public/11.png)] bg-no-repeat bg-cover bg-center rounded-lg mb-4"></div>
					<b>How to Get by in a Country if You Don’t Know the Language</b>
					<div className="flex justify-start items-center gap-2 mt-3 text-sm text-gray-500">
						<AiFillEye className="text-2xl" />
						<p className="text-sm">5,030</p>
						<FaMessage />
						<p className="text-sm">495</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesComponent;
