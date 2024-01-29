import { Link } from "react-router-dom"
import { Container } from "../../components/site/Container"

export const HomePage = () => {
	return (
		<Container
			title="NN's components"
			description="A collection of my customized components. Built with React and Tailwind CSS."
		>
			<div className="flex flex-col text-black dark:text-white">
				<Link to={"/button"}>Button</Link>
				<Link to={"/card"}>Card</Link>
				<Link to={"/input"}>Input</Link>
			</div>
		</Container>
	)
}
