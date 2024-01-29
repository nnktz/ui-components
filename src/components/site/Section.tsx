type Props = {
	title: string
	description: string
	children: React.ReactNode
}

export const Section = ({ title, description, children }: Props) => {
	return (
		<div>
			{/* section heading */}
			<h2 className="text-lg font-bold text-gray-800 dark:text-white">
				{title}
			</h2>

			{/* section description */}
			<p className="mt-1 text-gray-600 dark:text-zinc-400">{description}</p>

			{/* section preview area */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl border p-6 shadow-sm dark:border-zinc-700 dark:bg-transparent">
					<div className="flex flex-wrap gap-2">{children}</div>
				</div>
			</div>
		</div>
	)
}
