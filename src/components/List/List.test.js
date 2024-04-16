import List from './List';
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

    describe('when we would to set a task', () => {
        // it('should return task', () => {
        // // Définir une valeur valide pour la clé 'tasks' dans le localStorage
        // const initialTasks = [{ id: '1', name: 'POUET' }];
        // localStorage.setItem('tasks', JSON.stringify(initialTasks));

        // // Rendre le composant List
        // const { container } = render(<List />);

        // // Récupérer l'élément racine du composant
        // const listComponent = container.firstChild;

        // // Récupérer la fonction addTask du composant
        // const addTaskFunction = listComponent.addTask;

        // // Appeler addTask avec une nouvelle tâche
        // addTaskFunction({ id: '2', name: 'Test-2' });

        // // Vérifier qu'il y a deux éléments <li> dans le DOM
        // const listElements = container.querySelectorAll('li');
        // expect(listElements).toHaveLength(2);
        // })
    })
});




// console.log(addTask('exemple'))
// expect(List.addTask('exemple')).toBe('exemple')