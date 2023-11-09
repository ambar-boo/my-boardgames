import React, { useState, useContext } from 'react';
import { AppContext } from "@/context/AppContext";
import Link from 'next/link';
import styles from './list.module.scss';
import Tooltip from "@/pages/components/ui/tooltip";
import Button from "@/pages/components/ui/button";
import GameModal from "@/pages/components/games/gameModal";

type modalProps = {
    id: string | null,
    isOpen: boolean
}

export default function List() {
    const { state, dispatch } = useContext(AppContext);
    const [modal, setShowModal] = useState<modalProps>({
        id: null,
        isOpen: false
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {state.myGames.length > 0 ? state.myGames.map((game) =>
                    <div className={styles.list__game} key={game.alias}>
                        <Link className={styles.list__game_row} href={`/games/${encodeURIComponent(game.alias)}`}>
                            <div className={`${styles.list__game_photo} ${!game.photoUrl ? styles.list__game_photo___nophoto : ''}`}>
                                <img src={game.photoUrl} alt=""/>
                                <div className={styles.list__game_action}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch({
                                            type: 'REMOVE_GAME',
                                            alias: game.alias
                                        })
                                    }}>
                                    <Tooltip
                                        title="&#215;"
                                        text="Удалить из коллекции"
                                        classBtn="list_game"
                                    />
                                </div>
                            </div>
                            <div className={styles.list__game_info}>
                                <div className={styles.list__game_title}>{game.title}</div>
                                <div className={styles.list__game_button_add}>
                                    <Button
                                        type="button"
                                        text="Отметить даты игры"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowModal({
                                                id: `addStatistic${game.alias}`,
                                                isOpen: true
                                            })
                                        }}
                                    />
                                    <Tooltip
                                        title="?"
                                        text="Для сбора статистики"
                                        classBtn=""
                                    />
                                </div>
                            </div>
                        </Link>
                        {modal.isOpen && modal.id === `addStatistic${game.alias}` &&
                            <GameModal
                                game={game}
                                setShowModal={setShowModal}
                            />
                        }
                    </div>) :
                    <div>Добавьте свои игры, используя поиск</div>
                }
            </div>
        </div>
    )
}