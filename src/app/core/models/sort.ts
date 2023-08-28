/** Defines field name for sorting */
export type field = string;

/**
 * Defines direction for order ascending or descending
 * asc for ascending
 * desc for descending
 */
export type direction = 'asc' | 'desc'

/**  */
export type Sort = `${field}:${direction}`

export function sortSplit(sort: Sort) {
  if (!sort) { return undefined; }

  const s = (sort as string).split(':');

  return { field: s[0], direction: s[1]}
}
