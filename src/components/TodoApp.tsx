import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps {
    id: string;
    title: string;
    checked: boolean;
}

export interface TodoCardFunction extends TodoCardProps {
    handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
    handleDeleteTodo: (id: string) => void;
    handleEditTodo: (id: string) => void;
}

export interface TodosContainerProps {
    todosList: TodoCardProps[];
    handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
    handleDeleteTodo: (id: string) => void;
    handleEditTodo: (id: string) => void;
}

export interface FormComponentProps extends TodoCardProps {
    handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function ToDoApp() {
    //Use States
    const [todo, setTodo] = useState<TodoCardProps>({
        id: "",
        title: "",
        checked: false,
    });

    const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

    //Handlers

    //1. Handle the form input that will allow typing
    const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
    };

    //2. Handling the onSubmit event, to add the entry

    const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); //preventing the default action which is to refresh the page.
        if (todo.id === "") {
            setTodosList((prevList) => [
                ...prevList,
                {
                    id: crypto.randomUUID(),
                    title: todo.title,
                    checked: false,
                },
            ]);
        } else {
            setTodosList((prevList) =>
                prevList.map((entry) =>
                    entry.id === todo.id ? { ...entry, title: todo.title } : { ...entry },
                ),
            );
        }

        setTodo({
            id: "",
            title: "",
            checked: false,
        });
    };

    //3. Handling the checkbox toggle in the Todo Card

    const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        setTodosList((prevList) =>
            prevList.map((entry) =>
                entry.id === id
                    ? { ...entry, checked: e.target.checked }
                    : { ...entry },
            ),
        );
    };

    // 4. Handle deleting an entry using delete button

    const handleDeleteTodo = (id: string) => {
        setTodosList((prevList) => prevList.filter((entry) => entry.id !== id));
    };

    //5. Handle editing an entry to change the title

    const handleEditTodo = (id: string) => {
        const todoEntry = todosList.find((entry) => entry.id == id) || {
            title: "",
            id: "",
            checked: false,
        };
        setTodo({ ...todoEntry });
    };

    //Main return

    return (
        <div>
            <h1>To do List App</h1>
            <FormComponent
                {...todo}
                handleFormOnChange={handleFormOnChange}
                handleOnSubmit={handleOnSubmit}
            />
            <TodosContainer
                todosList={todosList}
                handleTodoCheck={handleTodoCheck}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
            />
        </div>
    );
}