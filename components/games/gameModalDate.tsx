import InputFields from "../form/formFields/inputField";
import DateField from "../form/formFields/dateField";
import styles from './gameModal.module.scss';
import Button from "@/components/ui/button";
import React from "react";
import showNotification from "@/components/notification/notification";

type dateFieldsType = [
    play_game_date: string,
    play_game_count: number,
]

export default function GameModalDate({control, fields, append, remove} : any) {

    return (
        <>
            {fields.map((item: dateFieldsType, index: number) => (
                <div key={index} className={`${styles.row} ${fields.length > 1 ? styles.row_many : ''}`}>
                    <div className={styles.col}>
                        <DateField
                            name={`dates.${index}.play_game_date`}
                            placeholder="Дата игры"
                            control={control}
                            validation={{
                                required: {
                                    value: true,
                                    message: 'Обязательное поле',
                                },
                            }}
                        />
                    </div>
                    <div className={styles.col}>
                        <InputFields
                            type="number"
                            name={`dates.${index}.play_game_count`}
                            placeholder="Кол-во партий"
                            control={control}
                            validation={{
                                required: {
                                    value: true,
                                    message: 'Обязательное поле',
                                },
                            }}
                        />
                    </div>
                    {fields.length > 1 &&
                        <Button
                            type="button"
                            classBtn={styles.row_remove}
                            onClick={() => remove(index)}
                            text="&#215;"
                        />
                    }
                </div>
            ))}
            <div className={styles.btn_add}>
                <Button
                    type="button"
                    classBtn="btn_secondary"
                    onClick={() => {
                        showNotification({type: 'success', message: 'Lorem ipsum dolor sit amet'})
                        append({ play_game_date: "", play_game_count: "" });
                    }}
                    text="Добавить дату"
                />
            </div>
        </>
    )
}