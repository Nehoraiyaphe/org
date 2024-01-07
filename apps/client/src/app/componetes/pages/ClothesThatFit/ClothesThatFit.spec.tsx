import { render } from '@testing-library/react';

import ClothesThatFit from './ClothesThatFit';

describe('ClothesThatFit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClothesThatFit />);
    expect(baseElement).toBeTruthy();
  });
});
