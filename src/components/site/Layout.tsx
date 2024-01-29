import { Navbar } from "./Navbar"

export const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="relative min-h-screen bg-white">
			{/* navbar */}
			<Navbar />

			{/* main content area */}
			<main className="p-10 sm:px-16 lg:px-44">
				<div className="mx-auto max-w-3xl space-y-20">{children}</div>
			</main>
		</div>
	)
}
