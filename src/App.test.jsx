test("renders blog articles", () => {
  render(<App />);

  expect(
    screen.getByText("Learning React")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Why I Love JavaScript")
  ).toBeInTheDocument();
});