import React from "react";
import "../App.css";

function UserCard(props) {
	return (
		<div className="userCard">
			<p className="id">{props?.user?.id}</p>
			<p className="name">{props?.user?.name}</p>
			{/* TODO iTEMS */}
			<p className="address">{props?.user?.address}</p>
			<p className="pincode">{props?.user?.pincode}</p>
		</div>
	);
}

export default UserCard;

// {
//     id: "113-n2-563",
//     name: "Ben Bish",
//     items: ["Kitchen Set", "Chair"],
//     address: "Sunshine City",
//     pincode: "5xx072",
// },
