import { RxButton, RxIdCard, RxInput } from "react-icons/rx"
import { Link } from "react-router-dom"
import { Container } from "../../components/site/Container"
import { BlockLinkCard } from "../../components/lib/Card"

export const HomePage = () => {
	const cards = [
		{
			text: "Button",
			href: "/button",
			icon: RxButton,
		},
		{
			text: "Card",
			href: "/card",
			icon: RxIdCard,
		},
		{
			text: "Input",
			href: "/input",
			icon: RxInput,
		},
	]

	return (
		<Container
			title="NN's components"
			description="A collection of my customized components. Built with React and Tailwind CSS."
		>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
				{cards.map((card, index) => (
					<BlockLinkCard
						key={index}
						text={card.text}
						widthLimit="none"
						customLinkComponent={Link}
						customLinkProps={{ to: `${card.href}` }}
					>
						<card.icon className="h-10 w-10" />
					</BlockLinkCard>
				))}
			</div>
		</Container>
	)
}
