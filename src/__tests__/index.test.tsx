import { render } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByTestId } = render(<div data-testid="element-root"></div>);

    expect(getByTestId('element-root')).toBeInTheDocument();
  });
});
