import { CompareToBuilder } from './compare-to-builder';

describe('CompareToBuilder', () => {
  it('Without use appends', () => {
    expect(CompareToBuilder.builder().build()).toEqual(0);
  });

  describe('Use method append', () => {
    it('Value equals', () => {
      expect(CompareToBuilder.builder().append(15, 15).build()).toEqual(0);
      expect(CompareToBuilder.builder().append('a', 'a').build()).toEqual(0);
    });
    it('Value less than', () => {
      expect(CompareToBuilder.builder().append(14, 15).build()).toEqual(-1);
    });

    it('Value less than', () => {
      expect(CompareToBuilder.builder().append(undefined, 15).build()).toEqual(-1);
    });

    it('Value greater than', () => {
      expect(CompareToBuilder.builder().append(16, 15).build()).toEqual(1);
    });

    it('Value greater than', () => {
      expect(CompareToBuilder.builder().append(16, undefined).build()).toEqual(1);
    });

    it('Use multiples appends', () => {
      expect(CompareToBuilder.builder().append(5, 5).append(16, 15).build()).toEqual(1);
    });
  });

  describe('Use method appendWithSort', () => {
    it('Value withot sort', () => {
      expect(CompareToBuilder.builder().append(6,5).appendWithSort({scale: 5}, {scale: 5}, undefined).build()).toEqual(1);
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 5}, undefined).build()).toEqual(0);
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 5}, []).build()).toEqual(0);
    });
    it('Value asc', () => {
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 5}, ['scale:asc']).build()).toEqual(0);
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 4}, ['scale:asc']).build()).toEqual(1);
      expect(CompareToBuilder.builder().appendWithSort({scale: 4}, {scale: 5}, ['scale:asc']).build()).toEqual(-1);
    });
    it('Value desc', () => {
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 5}, ['scale:desc']).build()).toEqual(0);
      expect(CompareToBuilder.builder().appendWithSort({scale: 5}, {scale: 4}, ['scale:desc']).build()).toEqual(-1);
      expect(CompareToBuilder.builder().appendWithSort({scale: 4}, {scale: 5}, ['scale:desc']).build()).toEqual(1);
    });

    it('Value multiple sorts', () => {
      const obj1 = {code: 'A', scale: 5, length: 5};
      const obj2 = {code: 'B', scale: 4, length: 5};
      expect(CompareToBuilder.builder().appendWithSort(obj1, obj1, ['length:asc', 'scale:asc']).build()).toEqual(0);
      expect(CompareToBuilder.builder().appendWithSort(obj1, obj2, ['length:asc', 'scale:asc']).build()).toEqual(1);
      expect(CompareToBuilder.builder().appendWithSort(obj1, obj2, ['length:asc', 'scale:desc']).build()).toEqual(-1);
    });
  });
});
