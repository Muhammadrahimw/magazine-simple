import {useTranslation} from "react-i18next";
import {FaFacebookF, FaTwitter} from "react-icons/fa6";
import {ImTwitter} from "react-icons/im";
import {IoMdHeart} from "react-icons/io";

const AboutComponent = () => {
	let {t} = useTranslation();

	return (
		<section className="mt-[4em] w-[70%] mx-auto">
			<div className="flex items-start justify-between gap-4">
				<div className="w-[40em]">
					<p className="first-letter:text-8xl first-letter:font-bold first-letter:float-left first-letter:leading-[1] first-letter:text-blue-600 text-[1.025em] leading-8">
						{t("about.intro")}
					</p>
					<h3 className="mt-6 text-2xl font-bold">Integrated Geography</h3>
					<p className="text-[1.025em] leading-8 mt-4">
						{t("about.integrated_geography")}
						<br />
						<br />
						{t("about.environmental_geography")}
						<br />
						<br />
						{t("about.historical_reference")}
					</p>
				</div>
				<div className="w-[16em] h-[24em] rounded-lg flex flex-col justify-start items-center border bg-white border-gray-400 translate-y-[-10em]">
					<div className="w-[5.5em] h-[5.5em] rounded-full mt-8 mb-4 bg-[url(/public/user.png)] bg-no-repeat bg-cover bg-center"></div>
					<strong className="mt-3 text-xl">
						{t("about.author_section.name")}
					</strong>
					<p className="mt-1 mb-3 text-sm">{t("about.author_section.title")}</p>
					<b className="mb-6">{t("about.author_section.articles_count")}</b>
					<div className="flex items-center justify-center gap-2">
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
					<div className="w-full mt-8 border border-gray-300"></div>
					<b className="my-2 cursor-pointer">
						{t("about.author_section.follow_text")}
					</b>
				</div>
			</div>
			<div className="mt-10 h-[34em] bg-[url(/public/4.png)] bg-no-repeat bg-cover bg-center rounded-t-md"></div>
			<div className="px-8 py-3 border border-gray-400 rounded-b-md flexC">
				<div className="w-[70%] border-gray-400">
					<p className="text-sm">
						{t("about.geostatistics_section.description")}
					</p>
				</div>
				<div className="flex items-center justify-start gap-2 mr-8 ml-7">
					<div className="w-11 h-11 rounded-full bg-[url(/public/5.png)] bg-no-repeat bg-cover bg-center"></div>
					<div>
						<strong className="text-sm">
							{t("about.geostatistics_section.author_name")}
						</strong>
						<p className="text-xs text-gray-500">
							{t("about.geostatistics_section.author_title")}
						</p>
					</div>
				</div>
			</div>
			<div className="gap-12 flexC mt-7">
				<div className="w-[39em]">
					<p className="text-[1.025em] leading-8 text-gray-600">
						{t("about.oldest_world_maps_section.description_1")}
					</p>
					<br />
					<p className="text-[1.025em] leading-8 text-gray-600">
						{t("about.oldest_world_maps_section.description_2")}
					</p>
					<br />
					<p className="text-[1.025em] leading-8 text-gray-600">
						{t("about.oldest_world_maps_section.description_3")}
					</p>
					<br />
				</div>
				<div className="w-[17em]">
					<p className="mb-5 text-xl font-bold">
						{t("about.material_on_theme_section.title")}
					</p>
					<div className="bg-[url(/public/6.png)] w-full h-[11em] bg-no-repeat bg-cover bg-center rounded-lg"></div>
					<p className="pt-3 pb-1 font-bold">
						{t("about.material_on_theme_section.article_title")}
					</p>
					<p className="text-sm text-gray-500">
						{t("about.material_on_theme_section.article_description")}
					</p>
				</div>
			</div>
			<div className="mt-11">
				<div className="flex items-center justify-start gap-8">
					<p className="text-2xl font-bold w-[21em]">
						{t("about.quote_section.quote")}
					</p>
					<div>
						<div className="w-[4em] h-[4em] rounded-full bg-[url(/public/7.png)] bg-no-repeat bg-center bg-cover"></div>
						<p className="text-[1.05em] mt-1">
							{t("about.quote_section.author_name")}
						</p>
						<p className="text-sm text-gray-500">
							{t("about.quote_section.author_title")}
						</p>
					</div>
				</div>
				<p className="text-[1.025em] leading-8 text-gray-600 mt-10 w-[40em]">
					{t("about.geography_history.paragraph_1")}
				</p>
				<br />
				<p className="text-[1.025em] leading-8 text-gray-600 w-[40em]">
					{t("about.geography_history.paragraph_2")}
				</p>
			</div>
			<div className="flex items-center justify-start gap-2 mt-8">
				<div className="flex items-center justify-center px-4 py-1 font-semibold border border-gray-300 rounded cursor-pointer">
					{t("about.categories.travel")}
				</div>
				<div className="flex items-center justify-center px-4 py-1 font-semibold border border-gray-300 rounded cursor-pointer">
					{t("about.categories.destinations")}
				</div>
				<div className="flex items-center justify-center px-4 py-1 font-semibold border border-gray-300 rounded cursor-pointer">
					{t("about.categories.nature")}
				</div>
				<div className="flex items-center justify-center px-4 py-1 font-semibold border border-gray-300 rounded cursor-pointer">
					{t("about.categories.world")}
				</div>
				<div className="flex items-center justify-center px-4 py-1 font-semibold border border-gray-300 rounded cursor-pointer">
					{t("about.categories.alaska")}
				</div>
			</div>
			<div className="border-b border-gray-300 w-full mt-[4em]"></div>
			<div>
				<h2 className="mb-5 text-2xl font-bold mt-7">
					{t("about.support_section.heading")}
				</h2>
				<div className="flex items-center justify-start gap-3">
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 bg-red-500 cursor-pointer">
						<IoMdHeart className="text-xl" />
						<p className="font-medium">
							{t("about.support_section.like_button.text")}
						</p>
						<p className="text-sm font-light">
							{t("about.support_section.like_button.count")}
						</p>
					</div>
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 cursor-pointer bg-[#4267B2]">
						<FaFacebookF className="text-xl" />
						<p className="font-medium">
							{t("about.support_section.share_button.text")}
						</p>
						<p className="text-sm font-light">
							{t("about.support_section.share_button.count")}
						</p>
					</div>
					<div className="text-white flex justify-center items-center rounded-full gap-2 w-[8.5em] py-2 cursor-pointer bg-[#1DA1F2]">
						<ImTwitter className="text-xl" />
						<p className="font-medium">
							{t("about.support_section.tweet_button.text")}
						</p>
						<p className="text-sm font-light">
							{t("about.support_section.tweet_button.count")}
						</p>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default AboutComponent;
