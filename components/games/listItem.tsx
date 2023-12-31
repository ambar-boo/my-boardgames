import React, { useState, useContext, memo } from 'react';
import { AppContext } from "@/context/AppContext";
import styles from './list.module.scss';
import Tooltip from "../ui/tooltip";
import GameModal from "../games/gameModal";
import {GameProps} from '@/types/gamesType';

interface stateModalProps {
    id: string | null,
    isOpen: boolean
}

const MemoListItem = memo(({game} :GameProps) => {
    const { myGames, dispatch } = useContext(AppContext);
    const [modal, setShowModal] = useState<stateModalProps>({
        id: null,
        isOpen: false
    });

    return game?.alias && (
        <div className={styles.list__game}>
            <div className={styles.list__game_item}
                onClick={(e) => {
                    e.preventDefault();
                    setShowModal({
                        id: `addStatistic${game.alias}`,
                        isOpen: true
                    })
                }}>
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
                    {/*<div className={styles.list__game_button_add}>*/}
                    {/*    <Button*/}
                    {/*        type="button"*/}
                    {/*        text="Отметить даты игры"*/}
                    {/*        classBtn=""*/}
                    {/*        onClick={(e) => {*/}
                    {/*            e.preventDefault();*/}
                    {/*            setShowModal({*/}
                    {/*                id: `addStatistic${game.alias}`,*/}
                    {/*                isOpen: true*/}
                    {/*            })*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <Tooltip*/}
                    {/*        title="?"*/}
                    {/*        text="Для сбора статистики"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
            {modal.isOpen && modal.id === `addStatistic${game.alias}` &&
                <GameModal
                    game={game}
                    setShowModal={setShowModal}
                />
            }
        </div>
    )
});

MemoListItem.displayName = 'MemoListItem';
export default MemoListItem;