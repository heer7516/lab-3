// Component containing
// 1. Body for the title of the To do message
// 2. Button for deleting entries
// 3. Button to edit entries
// 4. A checkbox that will check if entry is completed.

import type { TodoCardFunction } from "./TodoApp";

export default function TodoCard({
    id,
    checked,
    title,
    handleTodoCheck,
    handleDeleteTodo,
    handleEditTodo,
}: TodoCardFunction) {
    return (
        <div>
            <input
                type="checkbox"
                name="checked"
                id="checked"
                checked={checked}
                onChange={(e) => handleTodoCheck(e, id)}
            />
            <span>{title}</span>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
            <button onClick={() => handleEditTodo(id)}>Edit</button>
        </div>
    );
}