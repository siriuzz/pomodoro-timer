import { Timer } from "@/components/features";
import { IconButton } from "@/components/ui";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


const toggleTimer = jest.fn();
describe("Timer Unit Tests",()=>{
    it("renders the timer",()=>{
        const {container, getByText} = render(<Timer/>);
        expect(getByText("Restart")).toBeInTheDocument();
        expect(getByText("Start")).toBeInTheDocument();
        expect(getByText("Skip")).toBeInTheDocument();
    })


})

describe("Timer Integration Tests",()=>{
    it("starts the timer",()=>{
        const {getByText} = render(<Timer/>);
        const button = getByText("Start");
        button.addEventListener('click',toggleTimer)
        fireEvent.click(button);
        expect(toggleTimer).toHaveBeenCalled();
        expect(toggleTimer).toHaveBeenCalledTimes(1);
    })
})

