import React from "react";
import { Card } from "../components/Card";

export default {
    title: "Card",
    component: Card
};

export const CardRounded = () => (<Card rounded>Hello World</Card>);
export const CardNotRounded = () => (<Card rounded={false}>Hello World</Card>);