import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cx from "classnames";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    active?: boolean;
}

export const Button = (props: IButtonProps) => {
    return (
        <button {...props} className={cx("px-4 py-2 rounded transition-colors duration-200 ease-in-out focus:outline-none", {
            "bg-gray-300 hover:bg-gray-200": !props.primary && !props.active,
            "bg-gray-400": !props.primary && props.active
        }, props.className)}>
            {props.children}
        </button>
    );
};