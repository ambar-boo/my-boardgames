import React, { useState, useEffect, useRef, useContext } from 'react';
import Input from "@/pages/components/ui/input";
import Button from "@/pages/components/ui/button";
import {debounce} from "@/utils/debounce";
import TeseraApi from "@/pages/api/tesera";
import { AppContext } from "@/context/AppContext";
import {IGames} from '@/types/gamesType'
import styles from './search.module.scss'

// interface IGames {
//     title: string;
//     alias: string;
//     photoUrl: string;
// }
export default function Search() {
    // const [games, setGames] = useState<IGames[]>([]);
    const { state, dispatch } = useContext(AppContext);
    const [games, setGames] = useState<IGames[]>([]);
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
                                <div className={styles.search__games_row_photo}>
                                    <img src={game.photoUrl} alt=""/></div>
                                <div className={styles.search__games_row_title}>{game.title}</div>
                            </div>
                            <Button
                                type="button"
                                text="Добавить игру"
                                classBtn={styles.search__games_row_btn}
                                onClick={() => {
                                    dispatch({
                                        type: 'ADD_GAME',
                                        game
                                    })
                                }}
                            />
                        </div>) :
                        <div>Игр не найдено</div>
                    }
                </div>
            </div>
        </div>
    )
}