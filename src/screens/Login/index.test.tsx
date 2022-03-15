import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import Login from '../Login';

describe('Check login screen', () => {
  const queryClient = new QueryClient();
  const setup = () => {
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    const emailInput = utils.getByLabelText('SignUp:email');
    const passwordInput = utils.getByLabelText('SignUp:password');
    const submitButton = utils.getByRole('button');
    return {
      emailInput,
      passwordInput,
      submitButton,
      ...utils
    };
  };
  test('Error message when one field is missing', async () => {
    const { emailInput, submitButton } = setup();
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'test1@test.com' } });
    });
    await waitFor(() => {
      fireEvent.submit(submitButton);
    });
    expect(screen.getByText('SignUp:requiredField')).toBeInTheDocument();
  });

  test('Error message when one field is wrong', async () => {
    const { emailInput, passwordInput, submitButton } = setup();
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: '' } });
      fireEvent.change(passwordInput, { target: { value: 'test123' } });
    });
    await waitFor(() => {
      fireEvent.submit(submitButton);
    });
    expect(screen.getByText('SignUp:requiredField')).toBeInTheDocument();
  });

  test('Form should be able when all fields are correct', async () => {
    const { emailInput, passwordInput, submitButton } = setup();
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(passwordInput, { target: { value: 'test123' } });
    });
    await waitFor(() => {
      fireEvent.submit(submitButton);
    });
    expect(submitButton).not.toBeDisabled();
  });

  test('Form should be disabled when a field is wrong', async () => {
    const { emailInput, passwordInput, submitButton } = setup();
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: '' } });
      fireEvent.change(passwordInput, { target: { value: 'test123' } });
    });
    await waitFor(() => {
      fireEvent.submit(submitButton);
    });
    expect(submitButton).toBeDisabled();
  });
});
