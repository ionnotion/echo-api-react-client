import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import PromotionForm from "../components/PromotionForm";
import axios from "axios";
import { useEffect, useState } from "react";

function FormPage() {
	const { id } = useParams();
    let name = id ? "Update Promotion" : "New Promotion"
	let defaultState = {
		title: "",
		description: "",
		image_banner: "",
		start_time: "",
		end_time: "",
	};
	const [promotion, setPromotion] = useState(defaultState);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			axios
				.get(`http://localhost:1323/properties/${id}`)
				.then(({ data }) => {
					setPromotion({
						title: data.title,
						description: data.description,
						image_banner: data.image_banner,
						start_time: data.start_time,
						end_time: data.end_time,
					});
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, [id]);

	return (
		<div>
			<Navbar />
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<PromotionForm id={id} promotion={promotion} name={name} />
			)}
		</div>
	);
}

export default FormPage;
