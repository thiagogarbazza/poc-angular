import { Converters } from "./converters";

describe('Converters', () => {
  describe('Converters.boolean', () => {
    it('should be null', () => {
      expect(Converters.boolean(undefined)).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.boolean(true)).toBe(true);
      expect(Converters.boolean(false)).toBe(false);
    });
  });

  describe('Converters.date', () => {
    it('should be null', () => {
      expect(Converters.date(undefined)).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.date(new Date('2011-04-11'))).toBe('2011-04-11');
    });
  });

  describe('Converters.identifiable', () => {
    it('should be null', () => {
      expect(Converters.identifiable(undefined)).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.identifiable({id: 'valor'})).toBe('valor');
    });
  });

  describe('Converters.identifiables', () => {
    it('should be null', () => {
      expect(Converters.identifiables(undefined)).toBeUndefined();
      expect(Converters.identifiables([])).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.identifiables([{id: 'valor'}])).toEqual(['valor']);
      expect(Converters.identifiables([{id: 'valor'}, {id: 'valor2'}])).toEqual(['valor', 'valor2']);
    });
  });

  describe('Converters.number', () => {
    it('should be null', () => {
      expect(Converters.number(undefined)).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.number(5)).toBe(5);
      expect(Converters.number(-5)).toBe(-5);
    });
  });

  describe('Converters.string', () => {
    it('should be null', () => {
      expect(Converters.string(undefined)).toBeUndefined();
      expect(Converters.string('')).toBeUndefined();
      expect(Converters.string('  ')).toBeUndefined();
    });
    it('should be value', () => {
      expect(Converters.string('valor')).toBe('valor');
      expect(Converters.string('    valor')).toBe('valor');
      expect(Converters.string('valor    ')).toBe('valor');
      expect(Converters.string('  valor  ')).toBe('valor');
    });
  });
});
