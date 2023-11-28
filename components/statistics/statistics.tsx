import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './statistics.module.scss';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import {AppContext} from "@/context/AppContext";
import {setAllGamesStatisticsOptions} from '@/utils/statistics';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
}

export default function Statistics(props: HighchartsReact.Props) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const { myGames, dispatch } = useContext(AppContext);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Общая статистика по играм</h2>
            <HighchartsReact
                highcharts={Highcharts}
                options={setAllGamesStatisticsOptions(myGames)}
                ref={chartComponentRef}
                {...props}
            />
        </div>
    )
}