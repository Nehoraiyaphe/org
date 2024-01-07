import { render } from '@testing-library/react';

import MatchingClothes from './MatchingClothes';

describe('MatchingClothes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MatchingClothes />);
    expect(baseElement).toBeTruthy();
  });
});
