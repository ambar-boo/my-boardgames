import React, {useState} from 'react';
import {IGames} from "@/types/gamesType";
import InputFields from "@/pages/components/form/formFields/inputField";
import DateField from "@/pages/components/form/formFields/dateField";

export default function GameModalDate({control} : any) {

    return (
        <>
            <DateField
                name="play-game-date"
                placeholder="Дата игры"
                control={control}
                validation={{
                    required: {
                        value: true,
                        message: 'Обязательное поле',
                    },
                }}
            />
            <InputFields
                name="play-game-count"
                placeholder="Кол-во партий"
                control={control}
                validation={{
                    required: {
                        value: true,
                        message: 'Обязательное поле',
                    },
                }}
            />
        </>
    )
}