import { useState, useEffect } from 'react';
export const useGetRequest = (setLoading, refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setLoading(true);

		fetch('http://localhost:3000/products')
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setTodos(response);
			})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, [refreshTodosFlag]);
	return {
		todos,
	};
};
