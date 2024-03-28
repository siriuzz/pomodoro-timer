import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormButton from '../components/forms/FormButton'
 
describe('Form Tests', () => {
  it('renders a FormButton component', () => {
    render(<FormButton text={"test"} />)
 
    const button = screen.getByText('test');
 
    expect(button).toBeInTheDocument()
  })
})