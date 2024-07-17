// tests/App.test.tsx
import { render, screen } from '@testing-library/react'
import App from '../App.jsx'
import { describe, expect, test } from 'vitest'

describe('App', () => {
    test('renders the App component', () => {
        render(<App />)
        // Check if the "Vite + React" text is rendered
        const textElement = screen.getByText(/Vite \+ React/i)
        expect(textElement).to.exist
    })
})