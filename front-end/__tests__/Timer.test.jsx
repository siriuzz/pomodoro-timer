import { Timer } from "@/components/features";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";


const toggleTimer = jest.fn();
describe("Experience-Based Tests",()=>{
    it("renders the timer",()=>{
        const {getByText} = render(<Timer/>);
        expect(getByText("Restart")).toBeInTheDocument();
        expect(getByText("Start")).toBeInTheDocument();
        expect(getByText("Skip")).toBeInTheDocument();
    })
})

describe("Use-Based Tests",()=>{
    it("starts the timer",()=>{
        const {getByText} = render(<Timer/>);
        const button = getByText("Start");
        button.addEventListener('click',toggleTimer)
        fireEvent.click(button);
        expect(toggleTimer).toHaveBeenCalled();
        expect(toggleTimer).toHaveBeenCalledTimes(1);
    })
})