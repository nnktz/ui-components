import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"

const App = () => {
	return (
		<Layout>
			{/* content container */}
			<Container
				title="Component name using a component instead of hardcoding"
				description="Component description using a component instead of hardcoding"
			>
				<Section
					title="Section heading using a component instead of hardcoding"
					description="Section description text using a component instead of hardcoding"
				>
					<div className="bg-blue-500 p-3">component 1</div>
					<div className="bg-blue-500 p-3">component 2</div>
				</Section>

				<Section
					title="Section heading using a component instead of hardcoding"
					description="Section description text using a component instead of hardcoding"
				>
					<div className="bg-blue-500 p-3">component 1</div>
					<div className="bg-blue-500 p-3">component 2</div>
				</Section>
			</Container>

			<Container
				title="Component name using a component instead of hardcoding"
				description="Component description using a component instead of hardcoding"
			>
				<Section
					title="Section heading using a component instead of hardcoding"
					description="Section description text using a component instead of hardcoding"
				>
					<div className="bg-blue-500 p-3">component 1</div>
					<div className="bg-blue-500 p-3">component 2</div>
				</Section>
			</Container>
		</Layout>
	)
}

export default App
