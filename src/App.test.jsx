import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the blog title", () => {
  render(<App />);
  expect(screen.getByText("Code Chronicles")).toBeInTheDocument();
});