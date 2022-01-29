import React, { useRef, useState } from "react";



type TodoFormProps = {
     onAdd(title: string):void,
}
  

export const TodoForm: React.FC<TodoFormProps> = (props) => {


    const ref = useRef<HTMLInputElement>(null);

     const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
             e.preventDefault();
             e.stopPropagation();
             props.onAdd(ref.current!.value);
             ref.current!.value = '';
           }
     }


    return (
        <>
            <input 
                onKeyPress={Enter}
                // onChange={SetTitle}
                ref={ref}
                type="text" 
                id="title" 
                // value={title}
            />
            <label htmlFor="title">xxxx</label>
        </>
    )
}