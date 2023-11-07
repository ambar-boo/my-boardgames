import React, { useContext } from 'react';
import { AppContext } from "@/context/AppContext";
import Link from 'next/link';
import styles from './list.module.scss';
import Tooltip from "@/pages/components/ui/tooltip";

export default function List() {
    const { state, dispatch } = useContext(AppContext);

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
                            </div>
                        </Link>
                    </div>) :
                    <div>Добавьте свои игры, используя поиск</div>
                }
            </div>
        </div>
    )
}