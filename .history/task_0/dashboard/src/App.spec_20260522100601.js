import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders the School dashboard heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /school dashboard/i })
    ).toBeInTheDocument()
  })

  test('renders the body and footer text content', () => {
    render(<App />)

    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument()

    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`copyright ${currentYear} - holberton school`, 'i'))
    ).toBeInTheDocument()
  })

  test('renders the logo image', () => {
    render(<App />)

    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument()
  })
})