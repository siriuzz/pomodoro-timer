import "@testing-library/jest-dom";
import {
  fireEvent,
  getAllByDisplayValue,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import {
  LoginForm,
  FormButton,
  SigninForm,
  MainInput,
} from "@/components/forms";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { Ico1nButton } from "@/components/ui";
jest.mock("next/navigation");
jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve("success")),
  getAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  setDoc: jest.fn(),
}));
describe("Form Unit Tests", () => {
  it("renders a FormButton component", () => {
    render(<FormButton text={"test"} />);

    const button = screen.getByText("test");

    expect(button).toBeInTheDocument();
  });

  it("renders the LoginForm component", () => {
    render(<LoginForm />);
    const text = screen.getByText("Iniciar sesión");
    expect(text).toBeInTheDocument();
  });

  it("renders the SigninForm component", () => {
    render(<SigninForm />);
    const text = screen.getByText("Sign In");
    expect(text).toBeInTheDocument();
  });
});

describe("Form Integration Tests", () => {
  // Before each test, initialize Firebase
  const userData = {
    nombre: "elian3",
    email: "correo@ejemplo.com",
    password: "password1234",
  };

  it("renders and populates form", async () => {
    const {
      getByPlaceholderText,
      getByText,
      getByDisplayValue,
      getAllByDisplayValue,
      baseElement,
    } = render(<SigninForm />);
    fireEvent.change(getByPlaceholderText("Nombre"), {
      target: { value: userData.nombre },
    });
    fireEvent.change(getByPlaceholderText("Correo electrónico"), {
      target: { value: userData.email },
    });
    fireEvent.change(getByPlaceholderText("Contraseña"), {
      target: { value: userData.password },
    });
    fireEvent.change(getByPlaceholderText("Repetir contraseña"), {
      target: { value: userData.password },
    });
    await waitFor(() => {
      expect(getByDisplayValue("elian3")).toBeInTheDocument();
      expect(getByDisplayValue("correo@ejemplo.com")).toBeInTheDocument();
      expect(getAllByDisplayValue("password1234")).toHaveLength(2);
      expect(getAllByDisplayValue("password1234")[0]).toBeInTheDocument();
      expect(getAllByDisplayValue("password1234")[1]).toBeInTheDocument();
    });
  });

  it("submits register form", async () => {
    const signin = async () => {
      createUserWithEmailAndPassword();
      setDoc(userData);
    };

    const { container } = render(
      <form onSubmit={signin}>
        <FormButton text="Crear cuenta" action="submit"></FormButton>
      </form>
    );
    fireEvent.submit(container.querySelector("form"));
    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(setDoc).toHaveBeenCalledTimes(1);
      expect(setDoc).toHaveBeenCalledWith(userData);
      expect(createUserWithEmailAndPassword()).resolves.toBe("success");
    });
  });
});
