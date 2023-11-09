import React, {useState, useEffect, useRef, SetStateAction} from 'react';
import Modal from "@/pages/components/common/modal";
import {IGames} from "@/types/gamesType";

type GameModalProps = {
    game: IGames,
    setShowModal: SetStateAction<any>,
}
export default function GameModal({game, setShowModal} :GameModalProps) {

    return (
        <Modal title={game?.title ? `Добавьте даты, когда играли в ${game.title}` : ''}
               onClose={() => setShowModal({
                   id: null,
                   isOpen: false
               })}>
            In progress
        </Modal>
    )
}