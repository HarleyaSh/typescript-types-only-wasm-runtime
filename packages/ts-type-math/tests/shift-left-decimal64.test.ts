import { Equal, Expect } from 'type-testing';
import { test, expect } from 'vitest';
import { ShiftLeftBigInt } from '../shift';
import { t, T } from '../test-cases/bitwise-shift-i64';
import { twosComplementToBigInt, bigIntToTwosComplement, bitwiseBigInt } from '../test-utils';

test.each(t)('$a << $b === $shl', ({
  a,
  b,
  shl,
}) => {
  expect(bitwiseBigInt.shl(a, b)).toBe(shl);
});

type i = 28
type a = T[i]['a']     // =>
type b = T[i]['b']     // =>
type e = T[i]['shl']   // =>
type x = ShiftLeftBigInt<a, b>// =>

type test = [
  Expect<Equal<ShiftLeftBigInt<T[ 0]['a'], T[ 0]['b']>, T[ 0]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 1]['a'], T[ 1]['b']>, T[ 1]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 2]['a'], T[ 2]['b']>, T[ 2]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 3]['a'], T[ 3]['b']>, T[ 3]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 4]['a'], T[ 4]['b']>, T[ 4]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 5]['a'], T[ 5]['b']>, T[ 5]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 6]['a'], T[ 6]['b']>, T[ 6]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 7]['a'], T[ 7]['b']>, T[ 7]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 8]['a'], T[ 8]['b']>, T[ 8]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[ 9]['a'], T[ 9]['b']>, T[ 9]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[10]['a'], T[10]['b']>, T[10]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[11]['a'], T[11]['b']>, T[11]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[12]['a'], T[12]['b']>, T[12]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[13]['a'], T[13]['b']>, T[13]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[14]['a'], T[14]['b']>, T[14]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[15]['a'], T[15]['b']>, T[15]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[16]['a'], T[16]['b']>, T[16]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[17]['a'], T[17]['b']>, T[17]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[18]['a'], T[18]['b']>, T[18]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[19]['a'], T[19]['b']>, T[19]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[20]['a'], T[20]['b']>, T[20]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[21]['a'], T[21]['b']>, T[21]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[22]['a'], T[22]['b']>, T[22]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[23]['a'], T[23]['b']>, T[23]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[24]['a'], T[24]['b']>, T[24]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[25]['a'], T[25]['b']>, T[25]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[26]['a'], T[26]['b']>, T[26]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[27]['a'], T[27]['b']>, T[27]['shl']>>,
  Expect<Equal<ShiftLeftBigInt<T[28]['a'], T[28]['b']>, T[28]['shl']>>,

  Expect<Equal<T['length'], 29>>,
]
