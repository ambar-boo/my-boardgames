import React, { useState, useEffect, useRef } from 'react';
import styles from './game.module.scss';
import {useRouter} from "next/router";
import TeseraApi from "../../api/tesera";
import Loader from "../ui/loader";
import {gamesCard} from "@/types/gamesType";
import { register } from 'swiper/element/bundle';

register();

export default function GameCard() {
    const router = useRouter();
    const [gameInfo, setGame] = useState<gamesCard|null>(null);
    const swiperElRef = useRef(null);

    useEffect(() => {
        const getGameByAlias = async (): Promise<void> => {
            if(router.isReady && router.query?.alias) {
                const gameResponse = await TeseraApi.getGameByAlias(router.query?.alias);
                if(gameResponse) {
                    const gallery = [];
                    if(gameResponse.game.photoUrl) {
                        gallery.push({ photoUrl: gameResponse.game.photoUrl});
                    }
                    if(gameResponse.photos && gameResponse.photos.length > 0) {
                        gameResponse.photos.forEach((photo: {
                            photoUrl: string,
                            title?: string
                        }) => {
                            gallery.push({
                                photoUrl: photo.photoUrl,
                                title: photo.title
                            });
                        })
                    }
                    gameResponse.gallery = gallery;
                    setGame(gameResponse);
                }
            }
        }

        getGameByAlias();
    }, [router.isReady]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card__wrapper}>
                    {
                        gameInfo?.game ?
                            <div className={styles.card__main}>
                                <div className={styles.card__gallery}>
                                    { gameInfo?.gallery && gameInfo?.gallery?.length > 0 ?
                                        <div className={styles.card__slider}>
                                            <swiper-container
                                                ref={swiperElRef}
                                                slides-per-view="1"
                                                navigation={true}
                                                navigation-prev-el="#my-prev-button"
                                                navigation-next-el="#my-next-button"
                                            >
                                                {
                                                    gameInfo.gallery.map((item, index) => {
                                                        return <swiper-slide key={index}>
                                                            <div className={styles.card__slider_photo}><img src={item.photoUrl} alt=""/></div>
                                                            {item.title ? <div className={styles.card__slider_title}>
                                                                {item.title}
                                                            </div> : ''}
                                                        </swiper-slide>
                                                    })
                                                }
                                            </swiper-container>
                                            <button type="button" id="my-prev-button" className={styles.card__slider_prev} />
                                            <button type="button" id="my-next-button" className={styles.card__slider_next} />
                                        </div> :
                                        <img src={gameInfo.game.photoUrl} alt=""/>
                                    }
                                </div>
                                <div className={styles.card__info}>
                                    <h1 className={styles.card__info_title}>
                                        {gameInfo.game.title}
                                    </h1>
                                    <div className={styles.card__info_description} dangerouslySetInnerHTML={{ __html:  typeof gameInfo.game.description === 'string' ?
                                            gameInfo.game.description : '' }} />
                                </div>
                            </div> : <div>
                            <Loader />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}