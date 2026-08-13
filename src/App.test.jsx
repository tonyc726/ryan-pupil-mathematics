import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the new game button on the home page', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /新游戏/ })).toBeInTheDocument();
});

test('can create a game and reach the play screen', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /新游戏/ }));
  expect(screen.getByText('游戏规则')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /开始游戏/ }));
  expect(screen.getByLabelText('back')).toBeInTheDocument();

  const startButton = document.querySelector('button.MuiFab-root');
  expect(startButton).not.toBeNull();
  await user.click(startButton);

  const optionButtons = document.querySelectorAll('button.MuiFab-root');
  expect(optionButtons.length).toBeGreaterThanOrEqual(2);
  await user.click(optionButtons[0]);
});
