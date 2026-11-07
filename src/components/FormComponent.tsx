//A form component that will have a text input for the todo title.
//A button that will submit the entry
//It will later be used to edit.

import type { FormComponentProps } from "./TodoApp";

export default function FormComponent({
    title,
    handleFormOnChange,
    handleOnSubmit,
}: FormComponentProps){
    return <div>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                name="title" 
                id="title" 
                value={title} 
                onChange={handleFormOnChange}
            />
            <button>Submit</button>
        </form>
    </div>

}