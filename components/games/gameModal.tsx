"use client";

import React, {SetStateAction, BaseSyntheticEvent, useContext} from 'react';
import Modal from "../common/modal";
import {GameInfo, GalleryStatistics} from "@/types/gamesType";
import { useForm, FormProvider, useFieldArray, SubmitHandler } from 'react-hook-form';
import GameModalDate from "../games/gameModalDate";
import Button from "../ui/button";
import {AppContext} from "@/context/AppContext";
import showNotification from "@/components/notification/notification";
import GameCard from "@/components/games/game";
import styles from './gameModal.module.scss';

type GameModalProps = {
    game: GameInfo,
    setShowModal: SetStateAction<any>,
}

type GameStatistics = {
    dates: GalleryStatistics[],
}
export default function GameModal({game, setShowModal} :GameModalProps) {
    const { myGames, dispatch } = useContext(AppContext);
    const { control, handleSubmit, register } = useForm<any>({
        defaultValues: {
            dates: game?.statistics?.length > 0 ? game.statistics.length : [{ play_game_date: new Date(), play_game_count: null }]
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "dates",
    });

    const methods = useForm();
    const onSubmit: SubmitHandler<GameStatistics> = (data, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        if (data.dates.length > 0) {
            dispatch({
                type: 'ADD_STATISTICS_GAME',
                info: {
                    alias: game.alias,
                    statistics: data
                }
            });
            setShowModal({
                id: null,
                isOpen: false
            });
            showNotification({
                type: 'success',
                message: 'Статистика успешно добавлена'
            });
        }

    }
    const onError = (errors :any, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        // setErrorsValidation(errors);
        console.log('errors', errors, e);
    }

    return (
        <Modal title={game?.title ? `${game.title}` : ''}
               onClose={() => setShowModal({
                   id: null,
                   isOpen: false
               })}>
            <GameCard alias={game.alias} />
            <FormProvider {...methods}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className={styles.form_title}>Добавьте даты, когда играли в {game.title}</div>
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