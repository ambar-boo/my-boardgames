import React from 'react';
import {Controller} from 'react-hook-form';
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

    return (
        <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field, fieldState }) => {
                return (
                    <>
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            locale="ru"
                            wrapperClassName="datePicker"
                            placeholderText={placeholder}
                            className={fieldState.error ? 'error' : ''}
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                        />
                        {fieldState.error ? <p className="error-message">{fieldState.error?.message}</p> : ''}
                    </>
                )
            }}
        />
    )
}

export default DateField;