import React from 'react'
import styles from "./input.module.scss";

type InputTypes = {
    type: string;
    placeholder: string;
}
const Input: React.FunctionComponent<InputTypes> = (
    {
        type,
        placeholder,
        onChange,
        onBlur,
        onFocus,
    }): JSX.Element =>  {

    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}/>
    )
}

export default Input;