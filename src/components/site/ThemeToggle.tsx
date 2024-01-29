import { HiMiniMoon, HiMiniSun } from "react-icons/hi2"
import { useTheme } from "../../hooks/useTheme"

export const ThemeToggle = () => {
	const { isDarkMode, toggleDarkMode } = useTheme()

	return (
		<button
			onClick={toggleDarkMode}
			className="h-10 w-10 p-2 text-gray-800 hover:text-amber-400 dark:text-white dark:hover:text-amber-400"
		>
			{isDarkMode ? (
				<HiMiniMoon className="h-full w-full" />
			) : (
				<HiMiniSun className="h-full w-full" />
			)}
		</button>
	)
}
