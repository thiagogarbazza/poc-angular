import { Converters } from "./converters";

describe('Converters', () => {
  describe('Converters.string', () => {
    it('should be null', () => {
      expect(Converters.string(undefined)).toBeNull();
      expect(Converters.string('')).toBeNull();
      expect(Converters.string('  ')).toBeNull();
    });
    it('should be value', () => {
      expect(Converters.string('valor')).toBe('valor');
      expect(Converters.string('    valor')).toBe('valor');
      expect(Converters.string('valor    ')).toBe('valor');
      expect(Converters.string('  valor  ')).toBe('valor');
    });
  });
});
