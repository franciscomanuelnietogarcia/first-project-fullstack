import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { expect, test } from "vitest";

test("render Home", () => {
    render(<Home />);
    const countElement = screen.getBytext(/count is/i);
    expect(countElement).toBeDefined();
})

test("incrementa el valor del contador cuando pulso el botón", () => {
    render(<Home />);
    const countElement = screen.getBytext(/count is/i);
    fireEvent.click(countElement);
    const countNumber = screen.getBytext(/1/i);
    expect
})