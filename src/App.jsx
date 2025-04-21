import styles from './App.module.css';
import Fuse from 'fuse.js';
import { usePostRequest, useGetRequest, usePutRequest, useDeleteRequest } from './hooks';
import { TodoList, CrudForm } from './components';
import { useState, useEffect } from 'react';
export const App = () => {
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [sort, setSort] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { todos } = useGetRequest(setLoading, refreshTodosFlag);

	const lastId = todos[todos.length - 1];

	const sortByAlphabet = () => {
		const sortItems = [...todos].sort((a, b) => a.text.localeCompare(b.text));
		setSort(sortItems);
	};

	useEffect(() => {
		const filtered = todos.filter((item) =>
			item.text.toLowerCase().includes(text.toLowerCase()),
		);
		setFilteredItems(filtered);
	}, [text]);

	console.log(filteredItems);
	return (
		<div className={styles.app}>
			<CrudForm
				loading={loading}
				postRequest={usePostRequest}
				usePutRequest={usePutRequest}
				useDeleteRequest={useDeleteRequest}
				refreshTodos={refreshTodos}
				lastId={lastId}
				text={text}
				setText={setText}
				sortByAlphabet={sortByAlphabet}
			/>

			<TodoList
				todos={todos}
				filteredItems={filteredItems}
				loading={loading}
				sort={sort}
			/>
		</div>
	);
};
