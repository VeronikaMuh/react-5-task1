import styles from './CrudForm.module.css';
export const CrudForm = ({
	loading,
	postRequest,
	usePutRequest,
	useDeleteRequest,
	refreshTodos,
	lastId,
	text,
	setText,
	sortByAlphabet,
}) => {
	const onClick = () => {
		setText('');
	};

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
