import { sumMajorCredits, sumMinorCredits } from './main';

test('sumMajorCredits adds credits correctly', () => {
  const major1 = { credits: 3, brand: 'Major' as const };
  const major2 = { credits: 4, brand: 'Major' as const };
  const totalMajor = sumMajorCredits(major1, major2);
  expect(totalMajor).toEqual({ credits: 7, brand: 'Major' });
});

test('sumMinorCredits adds credits correctly', () => {
  const minor1 = { credits: 1, brand: 'Minor' as const };
  const minor2 = { credits: 2, brand: 'Minor' as const };
  const totalMinor = sumMinorCredits(minor1, minor2);
  expect(totalMinor).toEqual({ credits: 3, brand: 'Minor' });
});
