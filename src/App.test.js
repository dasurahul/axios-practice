import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App Component by me", () => {
  test("renders posts heading", () => {
    render(<App />);
    const linkElement = screen.findByText(/posts/i);
    expect(linkElement).toBeInTheDocument();
  });
});
