import { Link } from "react-router-dom";

function DisplayCard({ promotion, deleteEvent }) {
	const deleteHandler = () => {
		deleteEvent(promotion.id);
	};

	return (
		<div className="card m-4" style={{ width: "18rem" }}>
			<div className="card-header">
				<h6 className="card-title mt-2">{promotion.title}</h6>
			</div>
			<img src={promotion.image_banner} className="" alt="Banner" />
			<div className="card-body">
				<p>Start : {promotion.start_time}</p>
				<p>End : {promotion.end_time}</p>
				<p className="card-text">{promotion.description}</p>
			</div>
			<div className="card-footer d-flex justify-content-around">
				<Link
					type="button"
					className="btn btn-primary m-4"
					to={`/form/${promotion.id}`}
				>
					Edit
				</Link>
				<button className="btn btn-danger m-4" onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default DisplayCard;
