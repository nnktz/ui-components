type Props = {
	title: string
	description: string
	children: React.ReactNode
}

export const Container = ({ title, description, children }: Props) => {
	return (
		<>
			<header>
				<h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
					{title}
				</h1>

				<p className="mt-2 text-lg text-gray-800">{description}</p>
			</header>

			<div className="space-y-10 md:space-y-16">
				{/* content section */}
				{children}
			</div>
		</>
	)
}
