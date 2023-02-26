import dictionaryData from '../data.json';

export function Dictionary({ searchTerm }) {
	// Filter the data to get the matching index and details
	const filteredData = dictionaryData.dictionary.filter(
		(item) => item.index.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// If there are no matching index, display a message
	if (filteredData.length === 0) {
		return <p>No results found for "{searchTerm}".</p>;
	}

	// Otherwise, display the matching index
	return (
		<div>
			{filteredData.map((item) => (
				<div key={item.index}>
					<p>{item.index}</p>
				</div>
			))}
		</div>
	);
}