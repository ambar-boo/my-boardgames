"use client";

import React, {useState, useEffect, useRef, SetStateAction, BaseSyntheticEvent} from 'react';
import Modal from "../common/modal";
import {IGames} from "@/types/gamesType";
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import GameModalDate from "../games/gameModalDate";
import Button from "../ui/button";
import styles from './gameModal.module.scss';

type GameModalProps = {
    game: IGames,
    setShowModal: SetStateAction<any>,
}
export default function GameModal({game, setShowModal} :GameModalProps) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            dates: [{ play_game_date: "", play_game_count: "" }]
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "dates",
    });

    const methods = useForm();
    const onSubmit = (data :any, e: BaseSyntheticEvent<object, any, any> | undefined) => console.log(data, e);
    const onError = (errors :any, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        // setErrorsValidation(errors);
        console.log('errors', errors, e);
    }

    return (
        <Modal title={game?.title ? `Добавьте даты, когда играли в ${game.title}` : ''}
               onClose={() => setShowModal({
                   id: null,
                   isOpen: false
               })}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <GameModalDate
                        fields={fields}
                        append={append}
                        remove={remove}
                        control={control}/>
                    <Button
                        type="submit"
                        classBtn="btn_primary"
                        text="Отправить"
                    />
                </form>
            </FormProvider>
        </Modal>
    )
}