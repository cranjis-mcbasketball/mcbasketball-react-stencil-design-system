import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Cranjis', undefined, undefined)).toEqual('Cranjis');
  });

  it('formats first and last names', () => {
    expect(format('Cranjis', undefined, 'Publique')).toEqual('Cranjis Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Cranjis', 'McBasketball', 'Publique')).toEqual(
      'Cranjis McBasketball Publique'
    );
  });
});
