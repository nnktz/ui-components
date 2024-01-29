import { Input } from "../../components/lib/Input"
import { Container } from "../../components/site/Container"
import { Section } from "../../components/site/Section"

export const InputPage = () => {
	return (
		<Container
			title="Inputs"
			description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a interact with and manipulate content on a web page."
		>
			<Section
				id="input-basic"
				title="Basic"
				description="Basic input with a placeholder."
			>
				{/* Basic input */}
				<Input type="text" placeholder="Type thing here" />
				{/* Basic disabled input */}
				<Input disabled type="text" placeholder="Disabled 😔" />
			</Section>

			<Section id="input-label" title="Label" description="Input with a label.">
				{/* Input with a label */}
				<Input type="email" label="Email" placeholder="mail@example.com" />
			</Section>

			<Section
				id="input-description"
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
	)
}
