import { render } from '@testing-library/react';

import RouterDOM from './RouterDOM';

describe('RouterDOM', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterDOM />);
    expect(baseElement).toBeTruthy();
  });
});
