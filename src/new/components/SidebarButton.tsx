import React, { createElement } from "react";
import classNames from "classnames";

type AProps = JSX.IntrinsicElements["a"];

export interface ISidebarButtonProps extends AProps {
    active?: boolean;
    label?: string;
}

function clearProps(props: { [key: string]: any }, ignore: string[]): object {
    ignore.forEach((key: string) => {
        delete props[key];
    });
    return props;
}

export function SidebarButton(props: ISidebarButtonProps) {
    return (
        createElement(props.href ? "a" : "button", clearProps(Object.assign({
            className: classNames(
                "btn btn-lg btn-theme h-touchy d-flex align-items-center rounded-0 pl-2 box-shadow-inset",
                {
                    "border-left": props.active
                }
            )
        }, props), ["active"]),
            <>
                {props.children}
                {props.label && <span className="ml-2">{props.label}</span>}
            </>
        )
    );
}