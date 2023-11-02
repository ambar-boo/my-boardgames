import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "@/pages/context/AppContext";
import styles from './list.module.scss'
import {IGames} from '../types/gamesType'

export default function List() {
    // const [games, setGames] = useState<IGames[]>([]);
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {state.myGames.length > 0 ? state.myGames.map((game) =>
                    <div className={styles.list__game} key={game.alias}>
                        <div className={styles.list__game_info}>
                            <div className={styles.list__game_photo}>
                                <img src={game.photoUrl} alt=""/></div>
                            <div className={styles.list__game_title}>{game.title}</div>
                        </div>
                    </div>) :
                    <div>Добавьте свои игры, используя поиск</div>
                }
            </div>
        </div>
    )
}