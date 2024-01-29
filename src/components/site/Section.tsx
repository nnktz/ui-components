import { Title } from "./title"

type Props = {
	id?: string
	title: string
	description: string
	children: React.ReactNode
}

export const Section = ({ id, title, description, children }: Props) => {
	return (
		<div>
			{/* section heading */}
			<Title id={id || title} title={title} />

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
