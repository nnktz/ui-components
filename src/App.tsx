import React from "react"
import { Layout } from "./components/site/Layout"
import { ButtonPage, CardPage, HomePage, InputPage } from "./routes"

const App = () => {
	const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

	React.useEffect(() => {
		const handlePopState = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener("popstate", handlePopState)

		return () => {
			window.removeEventListener("popstate", handlePopState)
		}
	}, [])

	const navigate = (path: string) => {
		window.history.pushState({}, "", path)
		setCurrentPath(path)
	}

	const renderComponent = () => {
		switch (currentPath) {
			case "/":
				return (
					<HomePage>
						<div className="flex flex-col text-black dark:text-white">
							<a href="" onClick={() => navigate("/button")}>
								Button
							</a>
							<a href="" onClick={() => navigate("/card")}>
								Card
							</a>
							<a href="" onClick={() => navigate("/input")}>
								Input
							</a>
						</div>
					</HomePage>
				)
			case "/button":
				return <ButtonPage />
			case "/card":
				return <CardPage />
			case "/input":
				return <InputPage />

			default:
				return <div>oh no, error</div>
		}
	}

	return <Layout>{renderComponent()}</Layout>
}

export default App
