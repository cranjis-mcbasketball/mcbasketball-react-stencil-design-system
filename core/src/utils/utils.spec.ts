import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Uranus', undefined, undefined)).toEqual('Uranus');
  });

  it('formats first and last names', () => {
    expect(format('Uranus', undefined, 'Publique')).toEqual('Uranus Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Uranus', 'McBasketball', 'Publique')).toEqual(
      'Uranus McBasketball Publique'
    );
  });
});
