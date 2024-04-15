import { render } from '@testing-library/react'
import App from './App';

describe('App', () => {
  test('Should render without crash', async () => {
      render (<App />);
  })
})