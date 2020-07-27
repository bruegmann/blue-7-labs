import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

test("If content is there", () => {
    const cardComponent = render(<Card rounded>My content</Card>);
    const element = cardComponent.getByText(/My content/);
    expect(element).toBeInTheDocument();
});

test("Set rounded class name", () => {
    const cardComponent = render(<Card rounded>My content</Card>);
    const element = cardComponent.getByTestId("card");
    expect(element).toHaveClass("rounded");
});

test("Set not rounded class name", () => {
    const cardComponent = render(<Card rounded={false}>My content</Card>);
    const element = cardComponent.getByTestId("card");
    expect(element).not.toHaveClass("rounded");
});