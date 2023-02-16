import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function PromotionForm({ id, promotion, name }) {
	const [formData, setFormData] = useState({ ...promotion });

	const navigate = useNavigate();

	const formInputHandler = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (name === "New Promotion") {
			axios
				.post("http://localhost:1323/properties", formData, {})
				.then(({ data }) => {
					navigate("/");
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.put(`http://localhost:1323/properties/${id}`, formData, {})
				.then(({ data }) => {
					navigate("/");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="container">
			<div className="card p-4 mx-auto" style={{ width: "45rem" }}>
				<form onSubmit={formSubmitHandler}>
					<h4>{name}</h4>
					<div className="my-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							onChange={formInputHandler}
							value={formData.title}
							type="text"
							className="form-control"
							name="title"
							id="title"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<input
							onChange={formInputHandler}
							value={formData.description}
							type="text"
							className="form-control"
							name="description"
							id="description"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="image_banner" className="form-label">
							Image Banner
						</label>
						<input
							onChange={formInputHandler}
							value={formData.image_banner}
							type="text"
							className="form-control"
							name="image_banner"
							id="image_banner"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="start_time" className="form-label">
							Start Time
						</label>
						<input
							onChange={formInputHandler}
							value={formData.start_time}
							type="date"
							className="form-control"
							name="start_time"
							id="start_time"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="end_time" className="form-label">
							End Time
						</label>
						<input
							onChange={formInputHandler}
							value={formData.end_time}
							type="date"
							className="form-control"
							name="end_time"
							id="end_time"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default PromotionForm;
