import Highcharts from "highcharts";
import {GalleryStatistics, GameInfo} from '@/types/gamesType';

type dataStatisticsType = {
    name: string,
    y: number,
}

export function setAllGamesStatisticsOptions(myGames: GameInfo[]) {
    const allGamesCount = myGames.flatMap(game => game.statistics)
        .reduce((res, current) => {
            return res + (current?.play_game_count ? +(current.play_game_count) : 0);
        }, 0);

    const dataStatistics: dataStatisticsType[] = [];
    myGames.forEach((game) => {
        if(game.statistics && game.statistics.length > 0) {
            let countGame: number = 0;
            game.statistics.forEach((statistic) => {
                countGame += statistic.play_game_count ? +statistic.play_game_count : 0;
            })
            dataStatistics.push({ name: game.title, y: Math.round(countGame*100/allGamesCount) })
        }
    });

    return {
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
}