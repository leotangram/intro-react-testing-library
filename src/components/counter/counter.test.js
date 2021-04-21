import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './counter'

describe('<Counter />', () => {
  test('should display zero initial counts', () => {
    render(<Counter />)

    const result = screen.getByText(/clicked times: 0/i)
    expect(result).toBeInTheDocument()
  })
  test('should display new counter after on click', () => {
    render(<Counter />)

    const button = screen.getByText(/click/i, { selector: 'button' })
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    const result = screen.getByText(/clicked times: 3/i)
    expect(result).toBeInTheDocument()
  })
})
