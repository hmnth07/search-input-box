import { useState, useRef, useEffect } from "react";
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

	const searchData = mockData.filter((item) => {
		let newArr = [];
		if (inputValue) {
			newArr = item?.items?.filter((item) =>
				item.toLowerCase().includes(inputValue.toLowerCase())
			);
		}

		if (
			item?.id.toLowerCase().includes(inputValue.toLowerCase()) ||
			item?.name.toLowerCase().includes(inputValue.toLowerCase()) ||
			item?.address.toLowerCase().includes(inputValue.toLowerCase()) ||
			item?.pincode.toLowerCase().includes(inputValue.toLowerCase()) ||
			newArr.length > 0
		) {
			newArr.length = 0;
			return true;
		}
		return false;
	});

	const [selectedItem, setSelectedItem] = useState(-1);
	const handleKeyDown = (e) => {
		if (selectedItem < searchData.length) {
			if (e.key === "ArrowUp" && selectedItem > 0) {
				setSelectedItem((prev) => prev - 1);
			} else if (
				e.key === "ArrowDown" &&
				selectedItem < searchData.length - 1
			) {
				setSelectedItem((prev) => prev + 1);
			}
		} else {
			setSelectedItem(-1);
		}
	};
	const scollToRef = useRef();

	useEffect(() => {
		if (selectedItem > 0 && scollToRef.current) {
			scollToRef.current.scrollIntoView({
				behavior: "smooth",
				block: "end",
				// inline: "nearest",
			});
		}
	}, [selectedItem]);

	return (
		<div className="App">
			<div className="searchBox">
				<input
					className="input"
					placeholder="search users by ID, Address, name"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				{inputValue && (
					<div className="list">
						{searchData.length !== 0 ? (
							searchData?.map((user, index) => (
								<div
									key={user?.id}
									className={
										selectedItem === index ? "userCard active" : "userCard"
									}
									ref={scollToRef}
								>
									<UserCard user={user} inputValue={inputValue} />
								</div>
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
