import List from './Tasks';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('List', () => {
    describe('when localstorage is empty', () => {
        beforeEach(() => {
            Object.getPrototypeOf(localStorage).getItem = jest.fn(() => null);
        })

        test('Should not render list', async () => {
            const { container } = render (<List/>);
            const listElements = container.querySelectorAll('li');
            expect(listElements).toHaveLength(0);
        })
    })

    describe('when localstorage contains data', () => {
        beforeEach(() => {
            Object.getPrototypeOf(localStorage).getItem = jest.fn(() => JSON.stringify([{ id: '1', name: 'POUET' }]));
        })

        test('Should render list', async () => {
            const { container } = render (<List/>);
            const listElements = container.querySelectorAll('li');
            expect(listElements).toHaveLength(1);
        })

        test('Should display the task name', async () => {
            const { container } = render (<List/>);
            const listElement = container.querySelector('li');
            expect(listElement.innerHTML).toBe('POUET');
        })
    })

    // describe('when we would to set a task', () => {
    //     it('should return task', () => {
    //         const initialTasks = [{ id: '1', name: 'POUET' }];
    //         localStorage.setItem('tasks', JSON.stringify(initialTasks));
    //         console.log(initialTasks)

    //         const component = render(<List />);
    //         console.log(component)
    //     })
    // })

    // describe('when we would to delete a task,' () => {
        
    // })
});