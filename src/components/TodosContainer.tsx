//This component will include a To do list as a prop
// We will then map it into several To do cards

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
    todosList,
    handleTodoCheck,
    handleDeleteTodo,
    handleEditTodo,
}: TodosContainerProps) {
    return (
        <div>
            {todosList.length > 0 || "Todo List is Empty"}
            {todosList.map((todo) => (
                <TodoCard
                    key={todo.id}
                    {...todo}
                    handleTodoCheck={handleTodoCheck}
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                />
            ))}
        </div>
    );
}