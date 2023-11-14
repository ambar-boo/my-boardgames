import React, { useContext } from 'react';
import { AppContext } from "@/context/AppContext";
import styles from './list.module.scss';
import MemoListItem from "../games/listItem";
import {GameInfo} from '@/types/gamesType'

type ListProps = {
    game: GameInfo,
}

export default function List() {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {state.myGames?.length > 0 ? state.myGames.map((game) => <MemoListItem key={game.alias} game={game} />) :
                    <div>Добавьте свои игры, используя поиск</div>
                }
            </div>
        </div>
    )
}