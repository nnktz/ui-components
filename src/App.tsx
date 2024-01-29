import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/lib/Button"
import { BlockLinkCard, ContentCard } from "./components/lib/Card"
import { SiNextdotjs, SiReact, SiTailwindcss, SiVite } from "react-icons/si"
import { Input } from "./components/lib/Input"

const App = () => {
	return (
		<Layout>
			{/* content container */}
			{/* button */}
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
							darkHoverBorder: "dark:hover:border-amber-500",
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
							darkHoverBorder: "dark:hover:border-rose-500",
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
							darkHoverBorder: "dark:hover:border-fuchsia-500",
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
							darkHoverBorder: "dark:hover:border-indigo-500",
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
							darkHoverBorder: "dark:hover:border-blue-500",
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
							darkHoverText: "dark:hover:text-amber-400",
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
							darkHoverText: "dark:hover:text-rose-400",
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
							darkHoverText: "dark:hover:text-fuchsia-400",
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
							darkHoverText: "dark:hover:text-indigo-400",
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
							darkHoverText: "dark:hover:text-blue-400",
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
							darkHoverBorder: "dark:hover:border-red-500",
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
							darkHoverText: "dark:hover:text-zinc-400",
						}}
					>
						Cancel
					</Button>
				</Section>
			</Container>

			{/* card */}
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

				<Section
					title="Block link"
					description="Simple cards enhanced into selectable block link."
				>
					{/* Vite card */}
					<BlockLinkCard url="https://vitejs.dev" text="Vite">
						<SiVite className="h-10 w-10" />
					</BlockLinkCard>

					{/* Next.js card */}
					<BlockLinkCard url="https://nextjs.org" text="Next.js">
						<SiNextdotjs className="h-10 w-10" />
					</BlockLinkCard>

					{/* React card */}
					<BlockLinkCard url="https://react.dev" text="React">
						<SiReact className="h-10 w-10" />
					</BlockLinkCard>

					{/* Tailwindcss card */}
					<BlockLinkCard url="https://tailwindcss.com" text="Tailwind CSS">
						<SiTailwindcss className="h-10 w-10" />
					</BlockLinkCard>
				</Section>
			</Container>

			{/* input */}
			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a interact with and manipulate content on a web page."
			>
				<Section title="Basic" description="Basic input with a placeholder.">
					{/* Basic input */}
					<Input type="text" placeholder="Type thing here" />
					{/* Basic disabled input */}
					<Input disabled type="text" placeholder="Disabled 😔" />
				</Section>

				<Section title="Label" description="Input with a label.">
					{/* Input with a label */}
					<Input type="email" label="Email" placeholder="mail@example.com" />
				</Section>

				<Section
					title="Description"
					description="Basic input with a description."
				>
					{/* Input with a description */}
					<Input
						type="password"
						label="Password"
						placeholder="Super secret"
						description="We'll totally never share your deets my friends 😏"
					/>
				</Section>
			</Container>
		</Layout>
	)
}

export default App
