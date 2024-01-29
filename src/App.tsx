import { Layout } from "./components/site/Layout"
import { ButtonPage, CardPage, InputPage } from "./routes"

const App = () => {
	return (
		<Layout>
			{/* content container */}
			<ButtonPage />
			<CardPage />
			<InputPage />
		</Layout>
	)
}

export default App
