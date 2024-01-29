import { SiNextdotjs, SiReact, SiTailwindcss, SiVite } from "react-icons/si"
import { BlockLinkCard, ContentCard } from "../../components/lib/Card"
import { Container } from "../../components/site/Container"
import { Section } from "../../components/site/Section"

export const CardPage = () => {
	return (
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
	)
}
