import React from "react";
import "../App.css";

function UserCard({ user, inputValue }) {
	function getHighlightedText(text, higlight) {
		// Split text on higlight term, include term itself into parts, ignore case
		const parts = text.split(new RegExp(`(${higlight})`, "gi"));
		return parts.map((part, index) => (
			<React.Fragment key={index}>
				{part.toLowerCase() === higlight.toLowerCase() ? (
					<b style={{ color: "blue" }}>{part}</b>
				) : (
					part
				)}
			</React.Fragment>
		));
	}

	return (
		<>
			<p className="id">{getHighlightedText(user?.id, inputValue)}</p>
			<p className="name">{getHighlightedText(user?.name, inputValue)}</p>
			{/* “john” found in items */}
			{user?.items?.map((item, index) => (
				<div key={index}>
					{item.toLowerCase().includes(inputValue.toLowerCase()) && (
						<li>
							<b style={{ color: "blue" }}>"{inputValue}"</b> found in items
						</li>
					)}
				</div>
			))}
			<p className="address">{getHighlightedText(user?.address, inputValue)}</p>
			<p className="pincode">{getHighlightedText(user?.pincode, inputValue)}</p>
		</>
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
