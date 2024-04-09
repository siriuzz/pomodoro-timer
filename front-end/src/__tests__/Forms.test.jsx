import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoginForm, FormButton, SigninForm } from "@/components/forms";
// import {app} from "@/firebase"
// import * as firebase from "firebase/app"
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
require("dotenv").config({ path: "../../../.env.local" });

jest.mock("next/navigation");

describe("Form Tests", () => {
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
    render(<SigninForm/>);
    const text = screen.getByText("Sign In")
    expect(text).toBeInTheDocument();
  });
});
