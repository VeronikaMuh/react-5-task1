import styles from './App.module.css';
import { usePostRequest, useGetRequest, usePutRequest, useDeleteRequest } from './hooks';
import { TodoList, CrudForm } from './components';
import { useState, useEffect } from 'react';
import { AppContext } from './context';
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

	const mainState = {
		text,
		setText,
		loading,
		setLoading,
		refreshTodosFlag,
		setRefreshTodosFlag,
		sort,
		setSort,
		filteredItems,
		refreshTodos,
		setFilteredItems,
		todos,
		lastId,
		sortByAlphabet,
	};

	useEffect(() => {
		const filtered = todos.filter((item) =>
			item.text.toLowerCase().includes(text.toLowerCase()),
		);
		setFilteredItems(filtered);
	}, [text]);

	return (
		<AppContext value={mainState}>
			<div className={styles.app}>
				<CrudForm />

				<TodoList />
			</div>
		</AppContext>
	);
};
