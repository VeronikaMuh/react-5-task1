export const useDeleteRequest = (lastId, refreshTodos) => {
	fetch(`http://localhost:3000/products/${lastId.id}`, {
		method: 'DELETE',
	})
	.then((rawResponse) => rawResponse.json())
	.then((response) => {
		console.log(response);
		refreshTodos();
	})
	.catch((error) => console.error(error));
}
