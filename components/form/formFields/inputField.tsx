import React from 'react';
import {Controller} from "react-hook-form";

type InputFieldsTypes = {
    type: string;
    placeholder: string;
    name: string;
    validation?: any,
    control?: any,
}
const InputFields: React.FunctionComponent<InputFieldsTypes> = (
    {
        type,
        placeholder,
        name,
        validation,
        control
    }): JSX.Element =>  {

    return (
        <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field, fieldState }) => {
                return (
                    <>
                        <input
                            type={type}
                            placeholder={placeholder}
                            value={field.value}
                            className={fieldState.error ? 'error' : ''}
                            onChange={(value) => field.onChange(value)}
                        />
                        {fieldState.error ? <p className="error-message">{fieldState.error?.message}</p> : ''}
                    </>
                )
            }}
        />
    )
}

export default InputFields;