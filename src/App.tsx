import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/lib/Button"
import { ContentCard } from "./components/lib/Card"

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
					<Button
						colors={{
							bg: "bg-amber-500",
							hoverBg: "hover:bg-amber-600",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						colors={{
							bg: "bg-rose-500",
							hoverBg: "hover:bg-rose-600",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						colors={{
							bg: "bg-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-600",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						colors={{
							bg: "bg-indigo-500",
							hoverBg: "hover:bg-indigo-600",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						colors={{
							bg: "bg-blue-500",
							hoverBg: "hover:bg-blue-600",
							focusRing: "focus:ring-blue-500",
						}}
					>
						Blue
					</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					<Button variant="secondary">Default</Button>
					<Button disabled variant="secondary">
						Disable
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-amber-500",
							hoverBg: "hover:bg-amber-500",
							hoverBorder: "border-amber-500",
							focusRing: "ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-rose-500",
							hoverBg: "hover:bg-rose-500",
							hoverBorder: "border-rose-500",
							focusRing: "ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-fuchsia-500",
							hoverBg: "hover:bg-fuchsia-500",
							hoverBorder: "border-fuchsia-500",
							focusRing: "ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-indigo-500",
							hoverBg: "hover:bg-indigo-500",
							hoverBorder: "border-indigo-500",
							focusRing: "ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-blue-500",
							hoverBg: "hover:bg-blue-500",
							hoverBorder: "border-blue-500",
							focusRing: "ring-blue-500",
						}}
					>
						Blue
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
					<Button
						variant="tertiary"
						colors={{
							text: "text-amber-500",
							hoverText: "hover:text-amber-700",
							focusRing: "focus:ring-amber-500",
						}}
					>
						Amber
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-rose-500",
							hoverText: "hover:text-rose-700",
							focusRing: "focus:ring-rose-500",
						}}
					>
						Rose
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-fuchsia-500",
							hoverText: "hover:text-fuchsia-700",
							focusRing: "focus:ring-fuchsia-500",
						}}
					>
						Fuchsia
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-indigo-500",
							hoverText: "hover:text-indigo-700",
							focusRing: "focus:ring-indigo-500",
						}}
					>
						Indigo
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-blue-500",
							hoverText: "hover:text-blue-700",
							focusRing: "focus:ring-blue-500",
						}}
					>
						Blue
					</Button>
				</Section>

				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
				>
					<Button
						colors={{
							bg: "bg-red-500",
							hoverBg: "hover:bg-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Yes, I'm sure I want to delete this
					</Button>
					<Button
						variant="secondary"
						colors={{
							text: "text-red-500",
							hoverBg: "hover:bg-red-600",
							hoverBorder: "hover:border-red-500",
							focusRing: "focus:ring-red-500",
						}}
					>
						Unsubscribe
					</Button>
					<Button
						variant="tertiary"
						colors={{
							text: "text-red-500",
							hoverText: "hover:text-red-600",
							focusRing: "focus:ring-red-500",
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>

			<Container
				title="Card"
				description="A card is flexible and extensible content container."
			>
				<Section
					title="Simple"
					description="Simple cards display content and provide a distinct link that can be selected."
				>
					{/* Simple card */}
					<ContentCard
						title="Card title"
						subTitle="Card subtile"
						plaintext="Some quick example text build on the card title and make up the bulk of the card's content"
						link={{ url: "#", text: "Card link" }}
					></ContentCard>
				</Section>

				<Section
					title="Simple with header and footer"
					description="Add an optional header and footer within a card."
				>
					{/* Simple card with header */}
					<ContentCard
						header="Featured"
						title="Card title"
						subTitle="Card subtile"
						plaintext="Some quick example text build on the card title and make up the bulk of the card's content"
						link={{ url: "#", text: "Card link" }}
					></ContentCard>

					{/* Simple card with footer */}
					<ContentCard
						footer="Last updated 5 mins ago"
						title="Card title"
						subTitle="Card subtile"
						plaintext="Some quick example text build on the card title and make up the bulk of the card's content"
						link={{ url: "#", text: "Card link" }}
					></ContentCard>
				</Section>
			</Container>
		</Layout>
	)
}

export default App
