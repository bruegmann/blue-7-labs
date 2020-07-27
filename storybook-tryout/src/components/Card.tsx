import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./Card.module.scss";

export interface ICardProps {
    rounded: boolean;
    children: ReactNode;
}

export const Card = ({ children, rounded }: ICardProps) => (
    <div className={cx(styles.card, { [styles.rounded]: rounded })} data-testid="card">
        {children}
    </div>
);