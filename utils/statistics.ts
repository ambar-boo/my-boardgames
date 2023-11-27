import Highcharts from "highcharts";
import {GameInfo} from '@/types/gamesType';

type dataStatisticsType = {
    name: string,
    y: number,
}

export function setAllGamesStatisticsOptions(myGames: GameInfo[]): Highcharts.Options {
    let allGamesCount: number = 0;
    myGames.forEach((game) => {
        if(game.statistics?.length > 0) {
            game.statistics.forEach((statistic) => {
                allGamesCount += +statistic.play_game_count;
            })
        }
    });

    const dataStatistics: dataStatisticsType[] = [];
    myGames.forEach((game) => {
        if(game.statistics?.length > 0) {
            let countGame: number = 0;
            game.statistics.forEach((statistic) => {
                countGame += +statistic.play_game_count;
            })
            dataStatistics.push({ name: game.title, y: Math.round(countGame*100/allGamesCount) })
        }
    });

    const options: any = {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [
                    {
                        enabled: true,
                        format: '{point.percentage: f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.7
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }
                ]
            }
        },
        series: [
            {
                name: 'Кол-во партий',
                colorByPoint: true,
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                borderRadius: 5,
                data: dataStatistics,
            }
        ]
    };

    return options;
}