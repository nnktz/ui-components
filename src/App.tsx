import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/lib/Button"

const App = () => {
	return (
		<Layout>
			{/* content container */}
			<Container
				title="Button"
				description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, cancelling an action, or performing a delete operation."
			>
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, high contrast background colors work great here."
				>
					<Button>Default</Button>
					<Button disabled>Disable</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					<Button variant="secondary">Default</Button>
					<Button disabled variant="secondary">
						Disable
					</Button>
				</Section>

				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
				>
					<Button variant="tertiary">Default</Button>
					<Button disabled variant="tertiary">
						Disable
					</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
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
