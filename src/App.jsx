import styles from './App.module.css';
import { useState, useEffect } from 'react';
export const App = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then((data) => {
				setTodos(data)
				console.log(data)
			})
			.catch(error => console.error(error))
			.finally(() => setLoading(false))
	}, [])
	return (
	<div className={styles.app}>
		<div className={styles.title}>Todo List</div>
		{todos.map(({id, title}) => (
			<div className={styles.todo} key={id}><span>{id}</span>. {title}</div>
		))}
	</div>
	)
};

