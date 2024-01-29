import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Layout } from "./components/site/Layout"
import {
	ButtonPage,
	CardPage,
	HomePage,
	InputPage,
	NotFoundPage,
} from "./routes"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route index element={<HomePage />} />
					<Route path="button" element={<ButtonPage />} />
					<Route path="card" element={<CardPage />} />
					<Route path="input" element={<InputPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
