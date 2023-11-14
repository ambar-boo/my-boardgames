"use client";

import React, {useState, useEffect, useRef, SetStateAction, BaseSyntheticEvent} from 'react';
import Modal from "../common/modal";
import {IGames} from "@/types/gamesType";
import { useForm, FormProvider } from 'react-hook-form';
import GameModalDate from "../games/gameModalDate";
import Button from "../ui/button";

type GameModalProps = {
    game: IGames,
    setShowModal: SetStateAction<any>,
}
export default function GameModal({game, setShowModal} :GameModalProps) {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const methods = useForm();

    console.log('errors', errors);

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
            <FormProvider {...errors} {...methods}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <GameModalDate
                        control={control} />
                    <Button
                        type="submit"
                        text="Отправить"
                    />
                </form>
            </FormProvider>
        </Modal>
    )
}