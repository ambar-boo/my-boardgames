"use client";

import React, {useEffect, useRef, useState} from "react";
import { createPortal } from "react-dom";
import styles from './modal.module.scss';
import Button from "../ui/button";

type ModalTypes = {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
}

const Modal = ({ onClose, children, title } :ModalTypes) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);
    const handleCloseClick = () :void => {
        onClose();
    };

    const modalContent = (
        <div className={styles.modal__overlay}>
            <div className={styles.modal__wrapper}>
                <div className={styles.modal}>
                    <div className={styles.modal__header}>
                        {title && <div className={styles.modal__title}>{title}</div>}
                        <Button
                            type="button"
                            text="&#215;"
                            classBtn={styles.modal__header_btn}
                            onClick={(e) => {
                                handleCloseClick()
                            }}
                        />
                    </div>
                    <div className={styles.modal__body}>{children}</div>
                </div>
            </div>
        </div>
    );

    return mounted ? createPortal(modalContent, document?.getElementById("modal-root") as HTMLElement) : null;
};

export default Modal;