type Props = {
	title: string
	description: string
	children: React.ReactNode
}

export const Container = ({ title, description, children }: Props) => {
	return (
		<>
			<header className="mb-10 border-b pb-10 dark:border-zinc-700">
				<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
					{title}
				</h1>

				<p className="mt-2 text-lg text-gray-800 dark:text-zinc-400">
					{description}
				</p>
			</header>

			<div className="space-y-10 md:space-y-16">
				{/* content section */}
				{children}
			</div>
		</>
	)
}
