import React from "react";
import {useTranslation} from "react-i18next";
import {AiFillEye} from "react-icons/ai";
import {FaMessage} from "react-icons/fa6";

const FeaturesComponent = () => {
	let {t} = useTranslation();

	const features = t("features_section", {returnObjects: true});

	return (
		<section className="bg-[#F5F5F5]">
			<div className="w-[80%] mx-auto mt-[3.5em] grid grid-cols-4 gap-7 py-[3.5em]">
				{features.map((feature, index) => (
					<div className="w-full" key={index}>
						<div
							className="w-full h-[11em] bg-no-repeat bg-cover bg-center rounded-lg mb-4"
							style={{backgroundImage: `url(${feature.image_url})`}}></div>
						<b>{feature.title}</b>
						<div className="flex items-center justify-start gap-2 mt-3 text-sm text-gray-500">
							<AiFillEye className="text-2xl" />
							<p className="text-sm">{feature.views}</p>
							<FaMessage />
							<p className="text-sm">{feature.comments}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturesComponent;
