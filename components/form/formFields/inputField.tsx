import React from 'react';
import {Controller, useFormContext} from "react-hook-form";

type InputFieldsTypes = {
    placeholder: string;
    name: string;
    validation?: any,
    control?: any,
}
const InputFields: React.FunctionComponent<InputFieldsTypes> = (
    {
        placeholder,
        name,
        validation,
        control
    }): JSX.Element =>  {
    const errors :any = useFormContext();

    if (validation) {
        console.log('input', name, errors);
    }

    return (
        <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => {
                return (
                    <>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                        />
                        {errors[name] ? <p>{errors[name].message}</p> : ''}
                    </>
                )
            }}
        />
    )
}

export default InputFields;