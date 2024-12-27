import {HiMiniBars3CenterLeft} from "react-icons/hi2";
import {IoIosSearch} from "react-icons/io";
import {Link, Outlet} from "react-router-dom";
import {FaUser} from "react-icons/fa6";
import {LuSun} from "react-icons/lu";

const Layout = () => {
	return (
		<>
			<header className="w-[90%] mx-auto">
				<nav className="flexC border-b py-4">
					<div className="flex items-center gap-2">
						<HiMiniBars3CenterLeft className="text-xl cursor-pointer" />
						<p className="font-semibold">Sections</p>
					</div>
					<div className="flex items-center border-l pl-2 w-[60em]">
						<IoIosSearch className="text-2xl text-gray-500" />
						<input
							className="pl-2 w-full h-full border-none text-gray-500 text-base outline-none bg-none"
							type="Search"
						/>
					</div>
					<div className="flex items-center gap-8">
						<div className="text-xs flex items-center gap-2">
							<div>
								<img src="/public/Image.svg" alt="" />
							</div>
							<div>
								<b>Subscribe Now</b>
								<p className="text-gray-400">3 month for $19</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<FaUser />
							Sign In
						</div>
					</div>
				</nav>
				<div className="grid grid-cols-3 place-items-center gap-8">
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
						<p className="text-sm text-gray-500">Monday, January 1, 2018</p>
						<div className="flex items-center gap-2">
							<LuSun />
							<b>- 23 °C</b>
						</div>
					</div>
				</div>
			</header>
			<div className="bg-[#262D33]">
				<div className="w-[90%] mx-auto flexC gap-12 py-4 text-white text-sm font-bold">
					<p className="cursor-pointer">NEWS</p>
					<p className="cursor-pointer">OPINION</p>
					<p className="cursor-pointer">SCIENCE</p>
					<p className="cursor-pointer">LIFE</p>
					<p className="cursor-pointer">TRAVEL</p>
					<p className="cursor-pointer">MONEYS</p>
					<p className="cursor-pointer">ART & DESIGN</p>
					<p className="cursor-pointer">SPORTS</p>
					<p className="cursor-pointer">PEOPLE</p>
					<p className="cursor-pointer">HEALTH</p>
					<p className="cursor-pointer">EDUCATION</p>
				</div>
			</div>
			<Outlet />
			<footer className="w-[90%] mx-auto mt-[4em]">
				<div className="h-1 w-full grid grid-cols-6 mb-7">
					<div className="h-full w-full bg-red-500 rounded-l-full"></div>
					<div className="h-full w-full bg-[#AC8EE3]"></div>
					<div className="h-full w-full bg-[#4592FF]"></div>
					<div className="h-full w-full bg-[#FFA34D]"></div>
					<div className="h-full w-full bg-[#3DC47E]"></div>
					<div className="h-full w-full bg-[#6E99AE] rounded-r-full"></div>
				</div>
				<div className="grid grid-cols-6 gap-4 pb-7">
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">News</p>
						<p className="text-sm">Nation</p>
						<p className="text-sm">World</p>
						<p className="text-sm">Politics</p>
						<p className="text-sm">Solar Eclipse</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">Arts</p>
						<p className="text-sm">Art & Design</p>
						<p className="text-sm">Movies</p>
						<p className="text-sm">People</p>
						<p className="text-sm">Video: Arts</p>
						<p className="text-sm">Theater</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">Travel</p>
						<p className="text-sm">Destinations</p>
						<p className="text-sm">Flights</p>
						<p className="text-sm">Business Travel</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">Sports</p>
						<p className="text-sm">Olympics</p>
						<p className="text-sm">Motor Sports</p>
						<p className="text-sm">Volleyball</p>
						<p className="text-sm">MMA</p>
						<p className="text-sm">Cycling</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">Tech</p>
						<p className="text-sm">Tech</p>
						<p className="text-sm">Tech Columnists</p>
						<p className="text-sm">Tech Reviews</p>
						<p className="text-sm">Talking Tech</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-bold mb-4">Moneys</p>
						<p className="text-sm">Markets</p>
						<p className="text-sm">Business</p>
						<p className="text-sm">Personal Finance</p>
						<p className="text-sm">Retirement</p>
						<p className="text-sm">Careers</p>
					</div>
				</div>
				<div className="w-full border-t border-gray-400"></div>
				<div className="py-6 flexC">
					<div className="flex items-center gap-7">
						<div>
							<img src="/public/Symbol.svg" alt="logo" />
						</div>
						<p className="text-sm font-semibold">Contact Us</p>
						<p className="text-sm font-semibold">Work with Us</p>
						<p className="text-sm font-semibold">Advertise</p>
						<p className="text-sm font-semibold">Your Ad Choise</p>
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
				<div className="flexC py-6">
					<p className="text-sm text-gray-400 w-[60%]">
						Universal’s business concept is to offer fashion and quality at the
						best price in a sustainable way. Universal has since it was founded
						in 2015 grown into one of the world's leading fashion companies.
					</p>
					<p className="text-sm text-gray-400">© 2019 Universal UI Kit</p>
				</div>
			</footer>
		</>
	);
};

export default Layout;
