import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import {
  LoginForm,
  FormButton,
  SigninForm,
} from "@/components/forms";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

//mocks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("next/link", () => {
  return ({ children, href }) => {
    return (
      <a href={href} onClick={(e) => e.preventDefault()}>
        {children}
      </a>
    );
  };
});

jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve("success")),
  getAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  setDoc: jest.fn(),
  getFirestore: jest.fn(),
}));

const userData = {
  nombre: "elian3",
  email: "correo@ejemplo.com",
  password: "password1234",
};

describe("Experience-Based Tests", () => {
  it("renders and populates form", async () => {
    const {
      getByPlaceholderText,
      getByDisplayValue,
      getAllByDisplayValue
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

describe("Use-Based Tests", () => {
  it("navigates to LoginForm", async () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    const { getByText } = render(<SigninForm />);
    const link = getByText("Ingresa aquí");
    const spy = jest.spyOn(link, 'href', 'get')

    fireEvent.click(link);

    await waitFor(() => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveProperty("href");
      expect(spy).toHaveBeenCalled();
    })
  });
});

describe("Model-Based Tests", () => {
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
})
