import React from "react";
import styles from './tooltip.module.scss';

type TooltipTypesProps = {
    title: string;
    text: string;
    classBtn?: string;
}
const Tooltip = ({
        title,
        text,
        classBtn,
    } : TooltipTypesProps) =>  {
    return (
        <div className={`tooltip ${styles.tooltip} ${classBtn ? styles[classBtn] : ''}`}>
            <div className={`tooltip-title ${styles.tooltip__title}`}>
                {title}
            </div>
            <div className={styles.tooltip__text}>
                {text}
            </div>
        </div>
    )
}
export default Tooltip;