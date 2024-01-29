import { Container } from "../../components/site/Container"

export const HomePage = ({ children }: React.PropsWithChildren) => {
	return (
		<Container
			title="NN's components"
			description="A collection of my customized components. Built with React and Tailwind CSS."
		>
			{children}
		</Container>
	)
}
