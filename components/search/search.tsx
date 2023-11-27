import React, { useState, useEffect, useRef, useContext } from 'react';
import Input from "../ui/input";
import Button from "../ui/button";
import {debounce} from "@/utils/debounce";
import TeseraApi from "../../api/tesera";
import { AppContext } from "@/context/AppContext";
import {GameProps, GameInfo} from '@/types/gamesType'
import styles from './search.module.scss'

const ButtonAddGame = ({game}: GameProps) => {
    const { myGames, dispatch } = useContext(AppContext);
    const isGameAdded = myGames.find(myGame => myGame.alias === game.alias);

    return (
        <Button
            type="button"
            text={`${!isGameAdded ? 'Добавить игру' : 'Добавлена'}`}
            classBtn={`${!isGameAdded ? styles.search__games_row_btn : styles.search__games_row_btn___is_added}`}
            onClick={() => {
                if (!isGameAdded) {
                    dispatch({
                        type: 'ADD_GAME',
                        game
                    })
                }
            }}
        />
    )
}

export default function Search() {
    const [games, setGames] = useState<GameInfo[]>([]);
    const [showResult, handleResult] = useState(false);
    const wrapperRef = useRef<HTMLInputElement>(null);

    const debounceSearchByText = debounce(searchByText, 300);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLDivElement)) {
                handleResult(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

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

    return (
        <div className={styles.wrapper}>
            <div ref={wrapperRef} className={styles.search}>
                <Input
                    type="text"
                    placeholder="Введите название игры и выберите игру"
                    onChange={debounceSearchByText} />
                <div className={`${styles.search__games} ${showResult ? styles.search__games___open : ''}`}>
                    {games.length > 0 ? games.map((game) =>
                        <div className={styles.search__games_row} key={game.alias}>
                            <div className={styles.search__games_row_info}>
                                <div className={`${styles.search__games_row_photo} ${!game.photoUrl ? styles.search__games_row_photo___nophoto : ''}`}>
                                    <img src={game.photoUrl} alt=""/></div>
                                <div className={styles.search__games_row_title}>{game.title}</div>
                            </div>
                            <ButtonAddGame game={game} />
                        </div>) :
                        <div>Игр не найдено</div>
                    }
                </div>
            </div>
        </div>
    )
}