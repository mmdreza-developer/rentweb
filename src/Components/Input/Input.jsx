import React from 'react'

export default function Input(props) {
    const element = props.element == "input" ?
        <input
            type={props.type}
            className={props.className}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        : <textarea
            type={props.type}
            className={props.className}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        ></textarea>
    return (
        <>{element}</>
    )
}
