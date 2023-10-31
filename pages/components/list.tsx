import React, { useState, useEffect } from 'react';
// import list from '../config/list.json' assert { type: 'json' };
import Input from "@/pages/components/ui/input";
import {debounce} from "../../utils/debounce";
import TeseraApi from "@/pages/api/tesera";
import styles from './list.module.scss'

interface IGames {
    title: string;
    alias: string;
    photoUrl: string;
}
export default function List() {
    // const [games, setGames] = useState<IGames[]>([]);
    const [games, setGames] = useState<IGames[]>([]);
    const [showResult, handleResult] = useState(false);

    const debounceSearchByText = debounce(searchByText, 300);

    async function searchByText(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
        handleResult(true);
        if(event.target.value) {
            const searchList = await TeseraApi.searchByText(event.target.value);
            if(searchList && searchList.length > 0) {
                setGames(searchList);
            } else {
                setGames([]);
            }
        } else {
            setGames([]);
        }
    }

    // useEffect(() => {
    //     setGames(list);
    // }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Input
                    type="text"
                    placeholder="Введите название игры и выберите игру"
                    onChange={debounceSearchByText}
                    onBlur={() => handleResult(false)} />
                <div className={`${styles.search__games} ${showResult ? styles.search__games___open : ''}`}>
                    {games.length > 0 ? games.map((game) =>
                        <div className={styles.search__games_row} key={game.alias}>
                            <div className={styles.search__games_row_info}>
                                <div className={styles.search__games_row_photo}><img src={game.photoUrl} alt=""/></div>
                                <div className={styles.search__games_row_title}>{game.title}</div>
                            </div>
                            <button type="button" className={styles.search__games_row_btn}>Добавить игру</button>
                        </div>) :
                        <div>Игр не найдено</div>
                    }
                </div>
            </div>
        </div>
    )
}