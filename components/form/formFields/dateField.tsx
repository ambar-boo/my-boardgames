import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

type DateFieldTypes = {
    placeholder: string;
    name: string;
    validation?: any,
    control?: any,
}
const DateField: React.FunctionComponent<DateFieldTypes> = (
    {
        placeholder,
        name,
        validation,
        control
    }): JSX.Element =>  {
    const errors :any = useFormContext();

    console.log('dateField', name, errors);


    return (
        <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => {
                return (
                    <>
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            locale="ru"
                            placeholderText={placeholder}
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                        />
                        {errors[name] ? <p>{errors[name].message}</p> : ''}
                    </>
                )
            }}
        />
    )
}

export default DateField;