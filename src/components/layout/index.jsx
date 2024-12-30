import {HiMiniBars3CenterLeft} from "react-icons/hi2";
import {IoIosSearch} from "react-icons/io";
import {Link, Outlet} from "react-router-dom";
import {FaUser} from "react-icons/fa6";
import {LuSun} from "react-icons/lu";
import i18next, {t} from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {en} from "../../locale/en";
import {getLang} from "../../redux/language-slice";
import {useDispatch} from "react-redux";
import {ru} from "../../locale/ru";
import {uz} from "../../locale/uz";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		ru: {
			translation: ru,
		},
		uz: {
			translation: uz,
		},
	},
	lng: localStorage.getItem("lang") || "ru",
	fallbackLng: "en",
});

const Layout = () => {
	let {t} = useTranslation();

	let sections = ["news", "arts", "travel", "sports", "tech", "money"];

	let langFunc = (value) => {
		localStorage.setItem("lang", value);
		i18next.changeLanguage(value);
	};

	return (
		<>
			<header className="w-[90%] mx-auto">
				<nav className="py-4 border-b flexC">
					<div className="flex items-center gap-2">
						<HiMiniBars3CenterLeft className="text-xl cursor-pointer" />
						<p className="font-semibold">{t("header.sections")}</p>
					</div>
					<div className="flex items-center border-l pl-2 w-[50em]">
						<IoIosSearch className="text-2xl text-gray-500" />
						<input
							className="w-full h-full pl-2 text-base text-gray-500 border-none outline-none bg-none"
							type="Search"
						/>
					</div>
					<div className="flex items-center gap-8">
						<div className="flex items-center gap-2 text-xs">
							<div className="text-xl">
								<button className="px-3 py-1 " onClick={() => langFunc(`en`)}>
									eng
								</button>
								<button className="px-3 py-1 " onClick={() => langFunc(`ru`)}>
									rus
								</button>
								<button className="px-3 py-1 " onClick={() => langFunc(`uz`)}>
									uzb
								</button>
							</div>
							<div>
								<img src="/public/Image.svg" alt="" />
							</div>
							<div>
								<b>{t("header.subscribe_now")}</b>
								<p className="text-gray-400">{t("header.three_month_offer")}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<FaUser />
							{t("header.sign_in")}
						</div>
					</div>
				</nav>
				<div className="grid grid-cols-3 gap-8 place-items-center">
					<div className="flex items-center gap-4">
						<div>
							<img src="/public/Image2.svg" alt="" />
						</div>
						<p className="text-sm text-gray-500">
							Boston and New York Bear Brunt
						</p>
					</div>
					<div>
						<Link to={`/`}>
							<img src="/public/Universal.svg" alt="logo" />
						</Link>
					</div>
					<div className="flex items-center gap-12">
						<p className="text-sm text-gray-500">{t("header.date_example")}</p>
						<div className="flex items-center gap-2">
							<LuSun />
							<b>- 23 °C</b>
						</div>
					</div>
				</div>
			</header>
			<div className="bg-[#262D33]">
				<div className="w-[90%] mx-auto flexC gap-12 py-4 text-white text-sm font-bold">
					<p className="cursor-pointer">{t("navigation.news")}</p>
					<p className="cursor-pointer">{t("navigation.opinion")}</p>
					<p className="cursor-pointer">{t("navigation.science")}</p>
					<p className="cursor-pointer">{t("navigation.life")}</p>
					<p className="cursor-pointer">{t("navigation.travel")}</p>
					<p className="cursor-pointer">{t("navigation.moneys")}</p>
					<p className="cursor-pointer">{t("navigation.art_and_design")}</p>
					<p className="cursor-pointer">{t("navigation.people")}</p>
					<p className="cursor-pointer">{t("navigation.health")}</p>
					<p className="cursor-pointer">{t("navigation.education")}</p>
					<p className="cursor-pointer">{t("navigation.people")}</p>
				</div>
			</div>
			<Outlet />
			<footer className="w-[90%] mx-auto mt-[4em]">
				<div className="grid w-full h-1 grid-cols-6 mb-7">
					<div className="w-full h-full bg-red-500 rounded-l-full"></div>
					<div className="h-full w-full bg-[#AC8EE3]"></div>
					<div className="h-full w-full bg-[#4592FF]"></div>
					<div className="h-full w-full bg-[#FFA34D]"></div>
					<div className="h-full w-full bg-[#3DC47E]"></div>
					<div className="h-full w-full bg-[#6E99AE] rounded-r-full"></div>
				</div>
				<div className="grid grid-cols-6 gap-4 pb-7">
					{sections.map((sectionKey) => {
						const section = t(`footer.footer.${sectionKey}`, {
							returnObjects: true,
						});
						return (
							<div key={sectionKey} className="flex flex-col gap-3">
								<p className="mb-4 text-sm font-bold">{section.title}</p>
								{section.items.map((item, index) => (
									<p key={index} className="text-sm">
										{item}
									</p>
								))}
							</div>
						);
					})}
				</div>
				<div className="w-full border-t border-gray-400"></div>
				<div className="py-6 flexC">
					<div className="flex items-center gap-7">
						<div>
							<img src="/public/Symbol.svg" alt="logo" />
						</div>
						<p className="text-sm font-semibold">
							{t("footer.footer_links.contact_us")}
						</p>
						<p className="text-sm font-semibold">
							{t("footer.footer_links.work_with_us")}
						</p>
						<p className="text-sm font-semibold">
							{t("footer.footer_links.advertise")}
						</p>
						<p className="text-sm font-semibold">
							{t("footer.footer_links.ad_choice")}
						</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="cursor-pointer">
							<img src="/public/12.svg" alt="" />
						</div>
						<div className="cursor-pointer">
							<img src="/public/13.svg" alt="" />
						</div>
						<div className="cursor-pointer">
							<img src="/public/14.svg" alt="" />
						</div>
						<div className="cursor-pointer">
							<img src="/public/15.svg" alt="" />
						</div>
					</div>
				</div>
				<div className="w-full border-t border-gray-400"></div>
				<div className="py-6 flexC">
					<p className="text-sm text-gray-400 w-[60%]">
						{t("footer.about.description")}
					</p>
					<p className="text-sm text-gray-400">{t("footer.about.copyright")}</p>
				</div>
			</footer>
		</>
	);
};

export default Layout;
