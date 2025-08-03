import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../stories/Button";

describe("Button Component", () => {
  it("renders with correct text", () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders with secondary variant by default", () => {
    render(<Button label="Default Button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("storybook-button--secondary");
  });

  it("renders with primary variant when specified", () => {
    render(<Button label="Primary Button" primary={true} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("storybook-button--primary");
  });
});
