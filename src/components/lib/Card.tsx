import { twMerge } from "tailwind-merge"

type Props = React.HTMLAttributes<HTMLDivElement> & {
	widthLimit?: "none" | "xs" | "sm" | "md" | "lg"
}

const cardWidths = {
	xs: "max-w-xs",
	sm: "max-w-sm",
	md: "max-w-md",
	lg: "max-w-lg",
	none: "",
}

export const CardContainer = ({
	widthLimit = "xs",
	className,
	children,
	...props
}: Props) => {
	const baseClasses: string =
		"rounded-xl border bg-white shadow-sm dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-zinc-700/[.7]"

	const mergedClasses = twMerge([baseClasses, className])

	const widthClass = twMerge(["w-full", cardWidths[widthLimit]])

	return (
		<div className={widthClass} {...props}>
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
	widthLimit?: Props["widthLimit"]
}

export const ContentCard = ({
	header,
	footer,
	title,
	subTitle,
	plaintext,
	link,
	children,
	widthLimit,
}: ContentCard) => {
	return (
		<CardContainer widthLimit={widthLimit}>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-zinc-700 dark:bg-zinc-800">
					<p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
						{header}
					</p>
				</div>
			)}

			<div className="flex flex-col p-4 md:p-5">
				{title && (
					<h3 className="text-lg font-bold text-gray-800 dark:text-white">
						{title}
					</h3>
				)}
				{subTitle && (
					<h3 className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-zinc-500">
						{subTitle}
					</h3>
				)}
				{plaintext && (
					<p className="mt-2 text-gray-800 dark:text-zinc-400">{plaintext}</p>
				)}
				{children}

				{link && (
					<a
						href={link.url}
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
					>
						{link.text}
					</a>
				)}
			</div>

			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-zinc-700 dark:bg-zinc-800">
					<p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
						{footer}
					</p>
				</div>
			)}
		</CardContainer>
	)
}

type BlockLinkCardProps = {
	url?: string
	text?: string
	children?: React.ReactNode
	customLinkComponent?: React.ComponentType<any>
	customLinkProps?: any
	widthLimit?: Props["widthLimit"]
}

export const BlockLinkCard = ({
	url,
	text,
	children,
	customLinkComponent: CustomLinkComponent,
	customLinkProps = {},
	widthLimit,
}: BlockLinkCardProps) => {
	const linkClasses: string = "flex flex-col items-center p-6 sm:p-10"

	const linkContent: JSX.Element = (
		<>
			{children}

			{text && <p className="mt-2 font-medium">{text}</p>}
		</>
	)

	return (
		<CardContainer
			widthLimit={widthLimit}
			className="text-gray-800 transition-colors hover:bg-gray-200/50 dark:text-white dark:hover:bg-zinc-700"
		>
			{CustomLinkComponent ? (
				<CustomLinkComponent className={linkClasses} {...customLinkProps}>
					{linkContent}
				</CustomLinkComponent>
			) : (
				<a
					href={url || "#"}
					className={linkClasses}
					target="_blank"
					{...(customLinkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{linkContent}
				</a>
			)}
		</CardContainer>
	)
}
