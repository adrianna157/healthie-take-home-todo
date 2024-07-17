import {render, screen} from '@testing-library/react'
import App from '../App'
import {describe, expect, it} from 'vitest'

describe('App', () => {
    it('renders the App component', async () => {
        render(<App />)

        // Check if the App component is rendered
        const toastContainer = await screen.findByRole('status')
        expect(toastContainer).not.toBeNull()

        // Check if the "Create Task" button is rendered
        const createTaskButton = await screen.findByRole('button', { name: /Create Task/i })
        expect(createTaskButton).not.toBeNull()

        // Check if the input field for adding tasks is rendered
        const taskInput = await screen.findByRole('textbox')
        expect(taskInput).not.toBeNull()

        // Check if the "To Do" section is rendered
        const todoSection = await screen.findByText(/To Do/i)
        expect(todoSection).not.toBeNull()

        // Check if the "In Progress" section is rendered
        const inProgressSection = await screen.findByText(/In Progress/i)
        expect(inProgressSection).not.toBeNull()

        // Check if the "Done" section is rendered
        const doneSection = await screen.findByText(/Done/i)
        expect(doneSection).not.toBeNull()
    })
});