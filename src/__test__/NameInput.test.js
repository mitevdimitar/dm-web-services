import { render, screen, fireEvent } from '@testing-library/react';
import NameInput from "../Components/ContactForm/NameInput";
import '@testing-library/jest-dom'

describe("NameInput", () => {
    it('should render name input element', () => {
        render(
            <NameInput />
        );
        const inputElement = screen.getByLabelText(/Name/i);
        expect(inputElement).toBeInTheDocument();
    });
    
    it('should be able to type into input', () => {
        render(
            <NameInput />
        );
        const inputElement = screen.getByLabelText(/Name/i)
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Dimitar Mitev" } })
        expect(inputElement.value).toBe("Dimitar Mitev");
    });
})