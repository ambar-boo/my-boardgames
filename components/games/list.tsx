import React, { useContext } from 'react';
import { AppContext } from "@/context/AppContext";
import styles from './list.module.scss';
import MemoListItem from "../games/listItem";
import {GameInfo} from '@/types/gamesType'

export default function List() {
    const { myGames, dispatch } = useContext(AppContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {myGames.length > 0 ? myGames.map((game) => <MemoListItem key={game.alias} game={game} />) :
                    <div>Добавьте свои игры, используя поиск</div>
                }
            </div>
        </div>
    )
}