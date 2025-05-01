import { useContext } from 'react';
import styles from './TodoList.module.css';
import { AppContext } from '../../context';
export const TodoList = () => {
	const { todos, loading, filteredItems, sort } = useContext(AppContext);
	return (
		<div className={styles.todoList}>
			<div className={styles.title}>Список дел</div>
			{loading ? (
				<div className={styles.loader}></div>
			) : filteredItems.length !== 0 ? (
				filteredItems.map(({ id, text }) => (
					<div className={styles.todo} key={id}>
						{text}
					</div>
				))
			) : sort.length !== 0 ? (
				sort.map(({ id, text }) => (
					<div className={styles.todo} key={id}>
						{text}
					</div>
				))
			) : (
				todos.map(({ id, text }) => (
					<div className={styles.todo} key={id}>
						{text}
					</div>
				))
			)}
		</div>
	);
};
