import { expect, test } from 'bun:test';
import { sum } from '../src/sum';

test('menjumlahkan dua angka', () => {
  expect(sum(2, 3)).toBe(5);
});

test('hasilnya bukan angka negatif', () => {
  expect(sum(2, 3)).toBeGreaterThan(0);
});
