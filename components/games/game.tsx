import React, { useState, useEffect, useRef } from 'react';
import styles from './game.module.scss';
import TeseraApi from "../../api/tesera";
import Loader from "../ui/loader";
import {fullGamesCard} from "@/types/gamesType";
import GameInfoFromTeseraDTO from "@/dto/GameInfoFromTeseraDTO";
import SwiperCore, { Virtual, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Virtual]);

interface gameProps {
    alias: string
}

export default function GameCard({alias}: gameProps) {
    const [gameInfo, setGame] = useState<fullGamesCard|null>(null);
    const swiperElRef = useRef(null);

    useEffect(() => {
        const getGameByAlias = async (): Promise<void> => {
            if(alias) {
                const gameResponse = await TeseraApi.getGameByAlias(`${alias}`);
                if(gameResponse) {
                    setGame(new GameInfoFromTeseraDTO(gameResponse).setDate());
                }
            }
        }

        getGameByAlias();
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.card__wrapper}>
                {
                    gameInfo ?
                        <div className={styles.card__main}>
                            { gameInfo?.gallery && gameInfo?.gallery?.length > 0 ?
                                <div className={styles.card__gallery}>
                                    {gameInfo?.gallery?.length > 1 ?
                                        <div className={styles.card__slider}>
                                            <Swiper
                                                navigation
                                                virtual
                                                autoHeight={true}
                                            >
                                                {
                                                    gameInfo.gallery.map((item, index) => {
                                                        return <SwiperSlide key={index} virtualIndex={index}>
                                                            <div className={styles.card__slider_photo}><img
                                                                src={item.photoUrl} alt=""/></div>
                                                            {item.title ? <div className={styles.card__slider_title}>
                                                                {item.title}
                                                            </div> : ''}
                                                        </SwiperSlide>
                                                    })
                                                }
                                            </Swiper>
                                        </div> :
                                        <img src={gameInfo.gallery[0].photoUrl} alt=""/>
                                    }
                                </div> : ''
                            }
                            <div className={styles.card__info}>
                                <div className={styles.card__info_description} dangerouslySetInnerHTML={{
                                    __html: typeof gameInfo.description === 'string' ?
                                        gameInfo.description : 'Описание игры отсутствует'
                                }}/>
                                <a className={styles.card__info_link} href={gameInfo.teseraUrl} target="_blank">Читать больше на tesera</a>
                            </div>
                        </div> : <div>
                            <Loader/>
                        </div>
                }
            </div>
        </div>
    )
}