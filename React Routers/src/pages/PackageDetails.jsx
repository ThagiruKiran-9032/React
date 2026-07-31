import { useParams } from "react-router-dom";
function PackageDetails() {
	const { id } = useParams();
	return (
		<div>
			<h1>Package Details Page</h1>
			<p>Package ID: {id}</p>
		</div>
	);
}

export default PackageDetails;
