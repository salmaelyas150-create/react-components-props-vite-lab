import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders the blog title", () => {
  render(<App />);
  expect(screen.getByText("Code Chronicles")).toBeInTheDocument();
});

test("renders Header component", () => {
  render(<App />);
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();
});

test("renders About component with sidebar and blog logo", () => {
  render(<App />);
  const asideElement = screen.getByRole("complementary");
  const logoImage = screen.getByAltText("blog logo");
  
  expect(asideElement).toBeInTheDocument();
  expect(logoImage).toBeInTheDocument();
});

test("renders ArticleList component with main tag", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});