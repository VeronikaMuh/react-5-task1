export const usePostRequest = (text, refreshTodos) => {
	fetch('http://localhost:3000/products', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			text: text,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log(response);
			refreshTodos();
		})
		.catch((error) => console.error(error));
};
