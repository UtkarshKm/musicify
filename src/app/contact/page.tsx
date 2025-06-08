import React from "react";
import {Meteors} from "@/components/ui/meteors";

function page() {
	return (
		<div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-black antialiased">
			<div className="container relative z-10 mx-auto flex min-h-screen items-center justify-center">
				<div className="w-full max-w-md">
					<div className="relative overflow-hidden rounded-2xl bg-slate-900/80 px-6 py-8 shadow-xl">
						<form className="relative z-10 space-y-6">
							<h2 className="text-center text-3xl font-bold text-white">
								Contact Us
							</h2>
							<div>
								<input
									type="text"
									placeholder="Name"
									className="w-full rounded-lg border border-gray-600 bg-transparent p-2 text-white"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Email"
									className="w-full rounded-lg border border-gray-600 bg-transparent p-2 text-white"
								/>
							</div>
							<div>
								<textarea
									placeholder="Message"
									rows={4}
									className="w-full rounded-lg border border-gray-600 bg-transparent p-2 text-white"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 py-2 text-white hover:opacity-90"
							>
								Send Message
							</button>
						</form>
						<Meteors number={30} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
