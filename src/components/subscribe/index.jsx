const SubscribeComponent = () => {
	return (
		<section className="mt-[3.5em] flex flex-col items-center gap-6">
			<h2 className="text-[2.5em] font-bold">Subscribe now and get 20% off</h2>
			<div className="flex justify-center items-center gap-3">
				<input
					placeholder="Enter your email"
					className="pl-2 h-10 w-[19em] border border-gray-300 rounded outline-none"
					type="email"
				/>
				<button className="px-6 py-2 bg-blue-500 rounded-full cursor-pointer text-white">
					Subscribe
				</button>
			</div>
		</section>
	);
};

export default SubscribeComponent;
