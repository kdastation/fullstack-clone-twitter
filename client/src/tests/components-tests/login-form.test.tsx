import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "../../components/forms/login-form/login-form";
import { RenderWithReduxAndRouter } from "../heplers/render-with-redux-and-router";

describe("Login Form Component", () => {
  test("should render", () => {
    RenderWithReduxAndRouter(<LoginForm />);
    const login = screen.getByTestId("login");
    expect(login).toBeInTheDocument();
  });
});
