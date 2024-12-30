import {FaShare} from "react-icons/fa6";
import {FaClock} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const ShowcaseComponent = () => {
	const {t} = useTranslation();
	return (
		<section className="bg-[url(/public/showcase.png)] bg-no-repeat bg-cover bg-center w-full pb-[4em]">
			<div className="w-[75%] mx-auto">
				<p className="py-8 text-blue-800">{t("showcase.destinations")}</p>
				<h1 className="w-[13em] text-[3.5em] font-semibold leading-normal text-white">
					{t("showcase.title")}
				</h1>
				<p className="text-white mt-8 w-[42em]">{t("showcase.description")}</p>
				<div className="flex items-center gap-8 mt-[4em]">
					<div className="flex items-center gap-2 pb-1">
						<FaClock className="text-gray-400" />
						<p className="text-sm text-white"> {t("showcase.date")}</p>
					</div>
					<div className="text-white flex items-center gap-1 py-2 cursor-pointer w-[9em] justify-center border border-gray-400 rounded-full">
						<FaShare />
						<p> {t("showcase.shares")}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShowcaseComponent;
