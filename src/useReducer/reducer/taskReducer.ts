interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number

}

//Acciones
export type TaskActions =
    | { type: 'ADD_TODO', payload: string } //Agregar
    | { type: 'TOGGLE_TODO', payload: number } //Cambiar
    | { type: 'DELETE_TODO', payload: number } //Eliminar


export const getTastInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem("task-state");

    if (!localStorageState) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0,
        };
    }
    return JSON.parse(localStorageState) as TaskState;
};

export const taskReducer = (state: TaskState, action: TaskActions): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter(todo => todo.completed).length, //Filtro los todos completados para obtener la cantidad de tareas completadas
                pending: currentTodos.filter(todo => !todo.completed).length, //Filto los diferentes a los compleados

            }
        }

        case 'TOGGLE_TODO': {
            const updateTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTodos
            };
        }

            return state

        default:
            return state

    }


}