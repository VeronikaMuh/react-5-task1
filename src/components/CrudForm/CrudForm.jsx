import { AppContext } from '../../context';
import styles from './CrudForm.module.css';
import { useContext } from 'react';
export const CrudForm = () => {
	const { text, setText, loading, refreshTodos, lastId, sortByAlphabet } =
		useContext(AppContext);
	const onClick = () => {
		setText('');
	};
	//text, setText, loading, refreshTodos, lastId, sortByAlphabet
	return (
		<form onClick={onClick} className={styles.crudForm}>
			<input
				className={styles.mainInput}
				type="text"
				name="text"
				value={text}
				placeholder="Введите задачу"
				onChange={(e) => setText(e.target.value)}
			/>

			<div className={styles.crudButtons}>
				<button
					className={styles.crudButton}
					disabled={loading}
					onClick={() => postRequest(text, refreshTodos)}
				>
					Добавить
				</button>
				<button
					className={styles.crudButton}
					disabled={loading}
					onClick={() => usePutRequest(text, lastId, refreshTodos)}
				>
					Изменить
				</button>
				<button
					disabled={loading}
					className={styles.crudButton}
					onClick={() => useDeleteRequest(lastId, refreshTodos)}
				>
					Удалить
				</button>
				<button
					type="button"
					disabled={loading}
					className={styles.crudButton}
					onClick={() => sortByAlphabet()}
				>
					Сортировать
				</button>
			</div>
		</form>
	);
};
