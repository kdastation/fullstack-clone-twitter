import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RegistrationForm } from "../../components/forms/registration-form/registration-form";
import { useSubmitData } from "../../hooks/submit-data-hook";
import { RenderWithReduxAndRouter } from "../heplers/render-with-redux-and-router";
import userEvent from "@testing-library/user-event";
import { MessageErrorValidate } from "../../validators/message-error-validate";

jest.mock("../../hooks/submit-data-hook");

const useSumbitDataMock = useSubmitData as jest.MockedFn<typeof useSubmitData>;

describe("Registration Form Component", () => {
  const sumbitDataMock = jest.fn();
  beforeEach(() => {
    useSumbitDataMock.mockReturnValue({
      submitData: sumbitDataMock,
      messageError: null,
    });
  });
  test("should rendenr", () => {
    RenderWithReduxAndRouter(<RegistrationForm />);
    expect(screen.getByText("Зарегистроваться")).toBeInTheDocument();
  });

  test("a validation error should be thrown if the 'email' field is not filled in", async () => {
    RenderWithReduxAndRouter(<RegistrationForm />);
    const emailField = getInputField("email");
    userEvent.click(emailField);
    userEvent.click(document.body);
    const messageError = await screen.findByText(MessageErrorValidate.REQUIRED);
    expect(messageError).toBeInTheDocument();
  });

  test("an error should be shown if the 'password field is empty", async () => {
    RenderWithReduxAndRouter(<RegistrationForm />);
    const passwordField = getInputField("password");
    userEvent.click(passwordField);
    userEvent.click(document.body);
    const messageError = await screen.findByText(MessageErrorValidate.REQUIRED);
    expect(messageError).toBeInTheDocument();
  });

  test("an error should be shown if the passwords do not match", async () => {
    RenderWithReduxAndRouter(<RegistrationForm />);
    const passwordField = getInputField("password");
    const cofirmPasswordField = getInputField("confirmPassword");
    userEvent.type(passwordField, "123");
    userEvent.type(cofirmPasswordField, "12");
    userEvent.click(document.body);
    const messageError = await screen.findByText("Пароли не совпадают");
    expect(messageError).toBeInTheDocument();
  });

  test("the send method should be called", async () => {
    RenderWithReduxAndRouter(<RegistrationForm />);
    const emailField = getInputField("email");
    const passwordField = getInputField("password");
    const cofirmPasswordField = getInputField("confirmPassword");
    userEvent.type(emailField, "zxc");
    userEvent.type(passwordField, "zxc");
    userEvent.type(cofirmPasswordField, "zxc");
    clickSumbitButton();
    await waitFor(() => {
      expect(sumbitDataMock).toBeCalled();
    });
  });
});

const getInputField = (nameTestId: string) => {
  const emailField = screen
    .getByTestId(nameTestId)
    // eslint-disable-next-line testing-library/no-node-access
    .querySelector("input") as HTMLInputElement;
  return emailField;
};

const clickSumbitButton = () => {
  const registerBtn = screen.getByTestId("registerBtn");
  userEvent.click(registerBtn);
};
