import { FiFacebook, FiGithub } from "react-icons/fi"

const App = () => {
	return (
		<div>
			{/* navbar */}
			<header className="w-full border-b bg-white">
				<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
					<div className="mx-auto w-full max-w-3xl space-y-20">
						<div className="flex justify-between">
							<div className="flex flex-1 items-center justify-start">
								<a
									href="/"
									className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
								>
									nntkz
								</a>
							</div>

							<div className="flex flex-1 items-center justify-end">
								<a
									href="https://www.facebook.com/nhatnguyen.KTz"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]"
								>
									<FiFacebook className="h-full w-full" />
								</a>

								<a
									href="https://github.com/nnktz"
									className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]"
								>
									<FiGithub className="h-full w-full" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* main content are */}
		</div>
	)
}

export default App
