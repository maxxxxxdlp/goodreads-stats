import type { RA } from './types';

/**
 * A collection of helper functions for functional programming style
 * Kind of like underscore or ramda, but typesafe
 */
export const f = {
  /**
   * A better typed version of Array.prototype.includes
   *
   * It allows first argument to be of any type, but if value is present
   * in the array, its type is changed using a type predicate
   */
  includes: <T>(array: RA<T>, item: unknown): item is T =>
    array.includes(item as T),
  parseInt(value: string): number | undefined {
    const parsed = Number.parseInt(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  },
  parseFloat(value: string): number | undefined {
    const parsed = Number.parseFloat(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  },
  id: <T>(a: T): T => a,
} as const;
