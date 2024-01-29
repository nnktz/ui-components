import { twMerge } from "tailwind-merge"

// Define exclusive color prop types for each variant
type PrimaryColors = {
	bg?: string
	hoverBg?: string
	focusRing?: string
}

type SecondaryColors = {
	text?: string
	hoverBorder?: string
	darkHoverBorder?: string
	hoverBg?: string
	focusRing?: string
}

type TertiaryColors = {
	text?: string
	hoverText?: string
	darkHoverText?: string
	focusRing?: string
}

// Define the base props
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponent = {
	(
		props: Props & {
			variant?: "primary"
			colors?: PrimaryColors
		},
	): JSX.Element
	(
		props: Props & {
			variant: "secondary"
			colors?: SecondaryColors
		},
	): JSX.Element
	(
		props: Props & {
			variant: "tertiary"
			colors?: TertiaryColors
		},
	): JSX.Element
}

export const Button: ButtonComponent = ({
	variant = "primary",
	colors = {},
	...props
}) => {
	const baseClasses: string =
		"inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

	const generateVariantClasses = (variant: string, colorsProps: any) => {
		switch (variant) {
			case "primary":
				return `border border-transparent py-3 text-white ${colorsProps.bg || "bg-emerald-500"} ${colorsProps.hoverBg || "hover:bg-emerald-600"} ${colorsProps.focusRing || "focus:ring-emerald-500"}`

			case "secondary":
				return `border-2 border-gray-200 dark:border-zinc-700 py-[0.688rem] hover:text-white ${colorsProps.text || "text-emerald-500"} ${colorsProps.hoverBorder || "hover:border-emerald-500"} ${colorsProps.hoverBg || "hover:bg-emerald-500"} ${colorsProps.focusRing || "focus:ring-emerald-500"} ${colorsProps.darkHoverBorder || "dark:border-emerald-500"}`

			case "tertiary":
				return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline ${colorsProps.text || "text-emerald-500"} ${colorsProps.hoverText || "hover:text-emerald-700"} ${colorsProps.focusRing || "focus:ring-emerald-500"} ${colorsProps.darkHoverText || "dark:hover:text-emerald-400"}`

			default:
				return ""
		}
	}

	const variantClasses = generateVariantClasses(variant, colors)
	const mergedClasses = twMerge([baseClasses, variantClasses])
	return <button className={mergedClasses} {...props} />
}
