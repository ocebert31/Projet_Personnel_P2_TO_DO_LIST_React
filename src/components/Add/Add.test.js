import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from './Add';

describe('Add component', () => {
  it('should update input value when typing', () => {
    //Rendu du composant "Add" avec une fonction de rappel addTask vide.
    const { getByRole } = render(<Add addTask={() => {}} />);
    const input = getByRole('textbox');

    //Simulation d'un changement dans le champ de saisie en lui attribuant une nouvelle valeur.
    fireEvent.change(input, { target: { value: 'Test Task' } });

    //Vérification que la valeur du champ de saisie a été mise à jour correctement.
    expect(input.value).toBe('Test Task');
  });

  //vérifie si addTask est appelée lorsque le bouton est cliqué.
  it('should call addTask function when button is clicked', () => {
    //Création d'une fonction fictive (mockAddTask) en utilisant jest.fn()
    const mockAddTask = jest.fn();
    const { getByText, getByRole } = render(<Add addTask={mockAddTask} />);
    const input = getByRole('textbox');
    const button = getByText('Valider');

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(button);

    //vérifie si 'addTask' a été appelée et avec les arguments attendus
    expect(mockAddTask).toHaveBeenCalled();
    expect(mockAddTask).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Test Task'
    }));
  });
});
 