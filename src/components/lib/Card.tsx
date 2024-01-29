import { twMerge } from "tailwind-merge"

type Props = React.HTMLAttributes<HTMLDivElement>

export const CardContainer = ({ className, children, ...props }: Props) => {
	const baseClasses: string = "rounded-xl border bg-white shadow-sm"
	const mergedClasses = twMerge([baseClasses, className])

	return (
		<div className="w-full max-w-xs" {...props}>
			<div className={mergedClasses}>{children}</div>
		</div>
	)
}

type ContentCard = {
	header?: string
	footer?: string
	title?: string
	subTitle?: string
	plaintext?: string
	link?: {
		url: string
		text: string
	}
	children?: React.ReactNode
}

export const ContentCard = ({
	header,
	footer,
	title,
	subTitle,
	plaintext,
	link,
	children,
}: ContentCard) => {
	return (
		<CardContainer>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{header}</p>
				</div>
			)}

			<div className="flex flex-col p-4 md:p-5">
				{title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
				{subTitle && (
					<h3 className="mt-1 text-xs font-medium uppercase text-gray-500">
						{subTitle}
					</h3>
				)}
				{plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
				{children}

				{link && (
					<a
						href={link.url}
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-600"
					>
						{link.text}
					</a>
				)}
			</div>

			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500">{footer}</p>
				</div>
			)}
		</CardContainer>
	)
}

export const BlockLinkCard = () => {
	return
}
