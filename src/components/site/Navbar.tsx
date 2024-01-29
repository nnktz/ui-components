import { FiFacebook, FiGithub } from "react-icons/fi"
import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white dark:border-zinc-700 dark:bg-zinc-900">
			<div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							<Link
								to={"/"}
								className="inline-flex h-10 select-none items-center justify-center text-lg font-bold text-gray-800 dark:text-white"
							>
								nnktz
							</Link>
						</div>

						<div className="flex flex-1 items-center justify-end">
							<ThemeToggle />

							<a
								href="https://www.facebook.com/nhatnguyen.KTz"
								className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000] dark:text-white dark:hover:text-[#ff0000]"
							>
								<FiFacebook className="h-full w-full" />
							</a>

							<a
								href="https://github.com/nnktz"
								className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white dark:hover:text-[#4078c0]"
							>
								<FiGithub className="h-full w-full" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
