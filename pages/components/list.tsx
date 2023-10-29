import React, { useState, useEffect } from 'react';
import list from '../config/list.json' assert { type: 'json' };

interface IGames {
    id: number;
    name: string;
}
export default function List() {
    const [games, setGames] = useState<IGames[]>([]);

    useEffect(() => {
        setGames(list);
    }, []);

    return (
        <div>
            {games.length > 0 ? games.map((game) => <div key={game.id}>{game.name}</div>) : <div>!!</div>}
        </div>
    )
}