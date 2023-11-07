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
        <div className={`${styles.tooltip} ${classBtn ? styles[classBtn] : ''}`}>
            <div className={styles.tooltip__title}>
                {title}
            </div>
            <div className={styles.tooltip__text}>
                {text}
            </div>
        </div>
    )
}
export default Tooltip;