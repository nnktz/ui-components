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

			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">
					{/* content container */}
					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component name
						</h1>

						<p className="mt-2 text-lg text-gray-800">Component description</p>
					</header>

					<div className="space-y-10 md:space-y-16">
						{/* content section */}

						<div>
							{/* section heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>

							{/* section description */}
							<p className="mt-1 text-gray-600">Section description text</p>

							{/* section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500 p-3">component 1</div>
										<div className="bg-blue-500 p-3">component 2</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<header>
						<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
							Component name
						</h1>

						<p className="mt-2 text-lg text-gray-800">Component description</p>
					</header>

					<div className="space-y-10 md:space-y-16">
						{/* content section */}

						<div>
							{/* section heading */}
							<h2 className="text-lg font-bold text-gray-800">
								Section heading
							</h2>

							{/* section description */}
							<p className="mt-1 text-gray-600">Section description text</p>

							{/* section preview area */}
							<div className="mt-3">
								<div className="flex flex-col rounded-xl border p-6 shadow-sm">
									<div className="flex flex-wrap gap-2">
										<div className="bg-blue-500 p-3">component 1</div>
										<div className="bg-blue-500 p-3">component 2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
