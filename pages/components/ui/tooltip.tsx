import React from "react";
import styles from './tooltip.module.scss';

type TooltipTypes = {
    title: string;
    text: string;
    classBtn?: string;
}
const Tooltip: React.FunctionComponent<TooltipTypes> = (
    {
        title,
        text,
        classBtn,
    }): JSX.Element =>  {
    return (
        <div className={`${styles.tooltip} ${classBtn}`}>
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