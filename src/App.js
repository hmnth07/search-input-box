import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
	const mockData = [
		{
			id: "123-s2-546",
			name: "John Jacobs",
			items: ["bucket", "bottle"],
			address: "1st Cross, 9th Main, abc Apartment",
			pincode: "5xx012",
		},
		{
			id: "123-s3-146",
			name: "David Mire",
			items: ["Bedroom Set"],
			address: "2nd Cross, BTI Apartment",
			pincode: "4xx012",
		},
		{
			id: "223-a1-234",
			name: "Soloman Marshall",
			items: ["bottle"],
			address: "Riverbed Apartment",
			pincode: "4xx032",
		},
		{
			id: "121-s2-111",
			name: "Ricky Beno",
			items: ["Mobile Set"],
			address: "Sunshine City",
			pincode: "5xx072",
		},
		{
			id: "123-p2-246",
			name: "Sikander Singh",
			items: ["Air Conditioner"],
			address: "Riverbed Apartment",
			pincode: "4xx032",
		},
		{
			id: "b23-s2-321",
			name: "Ross Wheeler",
			items: ["Mobile"],
			address: "1st Cross, 9th Main, abc Apartement",
			pincode: "5xx012",
		},
		{
			id: "113-n2-563",
			name: "Ben Bish",
			items: ["Kitchen Set", "Chair"],
			address: "Sunshine City",
			pincode: "5xx072",
		},
		{
			id: "323-s2-112",
			name: "John Michael",
			items: ["Refrigerator"],
			address: "1st Cross, 9th Main, abc Apartement",
			pincode: "5xx012",
		},
		{
			id: "abc-34-122",
			name: "Jason Jordan",
			items: ["Mobile"],
			address: "Riverbed Apartment",
			pincode: "4xx032",
		},
	];
	const [inputValue, setInputValue] = useState("");

	const filteredData = mockData.filter((item) => {
		if (
			item?.id.includes(inputValue) ||
			item?.name.includes(inputValue) ||
			item?.address.includes(inputValue) ||
			item?.pincode.includes(inputValue)
		) {
			return true;
		}
		return false;
	});

	console.log(filteredData.length, "filteredData");
	return (
		<div className="App">
			<div className="searchBox">
				<input
					className="input"
					placeholder="search users by ID, Address, name"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				{inputValue && (
					<div className="list">
						{filteredData.length !== 0 ? (
							filteredData?.map((item, index) => (
								<UserCard key={index} user={item} />
							))
						) : (
							<div className="noCardFound">No User Found</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
