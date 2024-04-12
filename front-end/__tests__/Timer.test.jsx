import { Timer } from "@/components/features";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Timer Unit Tests",()=>{
    it("renders the timer",()=>{
        const {container, getByText} = render(<Timer/>);
        expect(getByText("Restart")).toBeInTheDocument();
        expect(getByText("Start")).toBeInTheDocument();
        expect(getByText("Skip")).toBeInTheDocument();
    })
})