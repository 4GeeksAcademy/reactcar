import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";

const cards = [
	{
		image: "https://media.vandal.net/m/5-2023/20235101754480_1.jpg",
		title: "Link",
		description: "Link personaje",
	},
	{
		image: "https://i.blogs.es/a79c78/zelda-origen-nombre-princesa/1366_2000.jpeg",
		title: "Zelda",
		description: "Protagonista de un videojuego",
	},
	{
		image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/zelda-ganondorf-3010884.jpg?tf=3840x",
		title: "Ganondorf",
		description: "Villano del videojuego",
	},
	{
		image: "https://pbs.twimg.com/media/C2DDX77XUAAh6U9?format=jpg&name=4096x4096",
		title: "Daruk",
		description: "Personaje de zelda",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;