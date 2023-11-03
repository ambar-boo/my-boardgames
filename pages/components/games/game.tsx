import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "@/context/AppContext";
import Link from 'next/link';
import styles from './game.module.scss';
import {useRouter} from "next/router";
import TeseraApi from "@/pages/api/tesera";
import {gamesCard} from "@/types/gamesType";

export default function GameCard() {
    const router = useRouter();
    const [gameInfo, setGame] = useState<gamesCard|null>(null);

    useEffect(() => {
        const getGameByAlias = async (): Promise<void> => {
            if(router.query?.alias) {
                const gameResponse = await TeseraApi.getGameByAlias(router.query?.alias);
                if(gameResponse) {
                    console.log(gameResponse);
                    setGame(gameResponse);
                }
            }
        }

        getGameByAlias();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card__info}>
                    <h1 className={styles.card__info_title}>
                        {gameInfo?.game.title}
                    </h1>
                    <div className={styles.card__info_description}  dangerouslySetInnerHTML={{ __html:  typeof gameInfo?.game.description === 'string' ?
                            gameInfo?.game.description : '' }} />
                </div>
            </div>
        </div>
    )
}