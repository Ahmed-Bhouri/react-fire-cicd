import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders Hello World! text', () => {
    const textElement = screen.getByText(/Hello World!/i);
    expect(textElement).toBeInTheDocument();
  })

  it('renders CI/CD text', () => {
    const textElement = screen.getByTestId("cicd");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("We Added CI/CD!");
    expect(textElement).toHaveClass("App-link");
  })

  it('renders New Feature text', () => {
    const textElement = screen.getByTestId("nf");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Added New Feature ⭐!");
    expect(textElement).toHaveClass("App-link");
  })

});
