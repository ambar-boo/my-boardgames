import React from "react";

type ButtonTypes = {
    type: "submit" | "reset" | "button";
    text: string;
    classBtn?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FunctionComponent<ButtonTypes> = (
    {
        type,
        text,
        classBtn,
        onClick,
    }): JSX.Element =>  {
    return (
        <button type={type} className={classBtn} onClick={onClick}>
            {text}
        </button>
    )
}
export default Button;