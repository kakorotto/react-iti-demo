import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Navbar and Home link", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
});
