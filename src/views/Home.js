import { useEffect, useState } from "react";
import DisplayCard from "../components/DisplayCard";
import Navbar from "../components/Navbar";
import axios from "axios";

function HomePage() {
	const [promotions, setPromotions] = useState([]);

    const fetchData = () => {
        axios
			.get("http://localhost:1323/properties")
			.then(({ data }) => {
				console.log(data);
				setPromotions(data);
			})
			.catch((err) => {
                console.log(err)
            });
    }

	const deleteEvent = (id) => {
		axios
			.delete(`http://localhost:1323/properties/${id}`)
			.then(() => {
				fetchData()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchData()
	}, []);
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="d-flex flex-wrap justify-content-around">
					{promotions.map((promotion, index) => {
						return (
							<DisplayCard
								promotion={promotion}
								key={`promotion-${index}`}
								deleteEvent={deleteEvent}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
