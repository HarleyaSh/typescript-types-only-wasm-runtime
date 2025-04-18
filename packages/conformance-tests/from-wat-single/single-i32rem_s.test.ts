import type { Expect, Equal } from 'type-testing';
import type { entry } from './single-i32rem_s'
import { t, T } from '../../ts-type-math/test-cases/arithmetic'

import { test, expect } from 'vitest';
import { getWasm } from '../utils'

test.each(t)('rem_s($a, $b) === $rem_s', async ({ a, b, rem_s }) => {
  if (b === 0) {
    return;
  }

  const entry = await getWasm("from-wat-single", 'single-i32rem_s');
  expect(entry(a, b)).toStrictEqual(rem_s);
});

type tests = [
  Expect<Equal<entry<[T[ 0]['a'], T[ 0]['b']]>, T[ 0]['rem_s']>>,
  Expect<Equal<entry<[T[ 1]['a'], T[ 1]['b']]>, T[ 1]['rem_s']>>,
  Expect<Equal<entry<[T[ 2]['a'], T[ 2]['b']]>, T[ 2]['rem_s']>>,
  Expect<Equal<entry<[T[ 3]['a'], T[ 3]['b']]>, T[ 3]['rem_s']>>,
  Expect<Equal<entry<[T[ 4]['a'], T[ 4]['b']]>, T[ 4]['rem_s']>>,
  Expect<Equal<entry<[T[ 5]['a'], T[ 5]['b']]>, T[ 5]['rem_s']>>,
  Expect<Equal<entry<[T[ 6]['a'], T[ 6]['b']]>, T[ 6]['rem_s']>>,
  Expect<Equal<entry<[T[ 7]['a'], T[ 7]['b']]>, T[ 7]['rem_s']>>,
  Expect<Equal<entry<[T[ 8]['a'], T[ 8]['b']]>, T[ 8]['rem_s']>>,
  Expect<Equal<entry<[T[ 9]['a'], T[ 9]['b']]>, T[ 9]['rem_s']>>,
  Expect<Equal<entry<[T[10]['a'], T[10]['b']]>, T[10]['rem_s']>>,
  Expect<Equal<entry<[T[11]['a'], T[11]['b']]>, T[11]['rem_s']>>,
  Expect<Equal<entry<[T[12]['a'], T[12]['b']]>, T[12]['rem_s']>>,
  Expect<Equal<entry<[T[13]['a'], T[13]['b']]>, T[13]['rem_s']>>,
  Expect<Equal<entry<[T[14]['a'], T[14]['b']]>, T[14]['rem_s']>>,
  Expect<Equal<entry<[T[15]['a'], T[15]['b']]>, T[15]['rem_s']>>,
  Expect<Equal<entry<[T[16]['a'], T[16]['b']]>, T[16]['rem_s']>>,
  Expect<Equal<entry<[T[17]['a'], T[17]['b']]>, T[17]['rem_s']>>,
  Expect<Equal<entry<[T[18]['a'], T[18]['b']]>, T[18]['rem_s']>>,
  Expect<Equal<entry<[T[19]['a'], T[19]['b']]>, T[19]['rem_s']>>,
  Expect<Equal<entry<[T[20]['a'], T[20]['b']]>, T[20]['rem_s']>>,
  Expect<Equal<entry<[T[21]['a'], T[21]['b']]>, T[21]['rem_s']>>,
  Expect<Equal<entry<[T[22]['a'], T[22]['b']]>, T[22]['rem_s']>>,
  Expect<Equal<entry<[T[23]['a'], T[23]['b']]>, T[23]['rem_s']>>,
  Expect<Equal<entry<[T[24]['a'], T[24]['b']]>, T[24]['rem_s']>>,
  Expect<Equal<entry<[T[25]['a'], T[25]['b']]>, T[25]['rem_s']>>,
  Expect<Equal<entry<[T[26]['a'], T[26]['b']]>, T[26]['rem_s']>>,
  Expect<Equal<entry<[T[27]['a'], T[27]['b']]>, T[27]['rem_s']>>,
  Expect<Equal<entry<[T[28]['a'], T[28]['b']]>, T[28]['rem_s']>>,
  Expect<Equal<entry<[T[29]['a'], T[29]['b']]>, T[29]['rem_s']>>,
  Expect<Equal<entry<[T[30]['a'], T[30]['b']]>, T[30]['rem_s']>>,
  Expect<Equal<entry<[T[31]['a'], T[31]['b']]>, T[31]['rem_s']>>,
  Expect<Equal<entry<[T[32]['a'], T[32]['b']]>, T[32]['rem_s']>>,
  Expect<Equal<entry<[T[33]['a'], T[33]['b']]>, T[33]['rem_s']>>,
  Expect<Equal<entry<[T[34]['a'], T[34]['b']]>, T[34]['rem_s']>>,
  Expect<Equal<entry<[T[35]['a'], T[35]['b']]>, T[35]['rem_s']>>,
  Expect<Equal<entry<[T[36]['a'], T[36]['b']]>, T[36]['rem_s']>>,
  Expect<Equal<entry<[T[37]['a'], T[37]['b']]>, T[37]['rem_s']>>,
  Expect<Equal<entry<[T[38]['a'], T[38]['b']]>, T[38]['rem_s']>>,
  Expect<Equal<entry<[T[39]['a'], T[39]['b']]>, T[39]['rem_s']>>,
  Expect<Equal<entry<[T[40]['a'], T[40]['b']]>, T[40]['rem_s']>>,
  Expect<Equal<entry<[T[41]['a'], T[41]['b']]>, T[41]['rem_s']>>,
  Expect<Equal<entry<[T[42]['a'], T[42]['b']]>, T[42]['rem_s']>>,
  Expect<Equal<entry<[T[43]['a'], T[43]['b']]>, T[43]['rem_s']>>,
  Expect<Equal<entry<[T[44]['a'], T[44]['b']]>, T[44]['rem_s']>>,
  Expect<Equal<entry<[T[45]['a'], T[45]['b']]>, T[45]['rem_s']>>,
  Expect<Equal<entry<[T[46]['a'], T[46]['b']]>, T[46]['rem_s']>>,
  Expect<Equal<entry<[T[47]['a'], T[47]['b']]>, T[47]['rem_s']>>,
  Expect<Equal<entry<[T[48]['a'], T[48]['b']]>, T[48]['rem_s']>>,
  Expect<Equal<entry<[T[49]['a'], T[49]['b']]>, T[49]['rem_s']>>,
  Expect<Equal<entry<[T[50]['a'], T[50]['b']]>, T[50]['rem_s']>>,
  Expect<Equal<entry<[T[51]['a'], T[51]['b']]>, T[51]['rem_s']>>,
  Expect<Equal<entry<[T[52]['a'], T[52]['b']]>, T[52]['rem_s']>>,
  Expect<Equal<entry<[T[53]['a'], T[53]['b']]>, T[53]['rem_s']>>,
  Expect<Equal<entry<[T[54]['a'], T[54]['b']]>, T[54]['rem_s']>>,
  Expect<Equal<entry<[T[55]['a'], T[55]['b']]>, T[55]['rem_s']>>,
  Expect<Equal<entry<[T[56]['a'], T[56]['b']]>, T[56]['rem_s']>>,
  Expect<Equal<entry<[T[57]['a'], T[57]['b']]>, T[57]['rem_s']>>,
  Expect<Equal<entry<[T[58]['a'], T[58]['b']]>, T[58]['rem_s']>>,
  Expect<Equal<entry<[T[59]['a'], T[59]['b']]>, T[59]['rem_s']>>,
  Expect<Equal<entry<[T[60]['a'], T[60]['b']]>, T[60]['rem_s']>>,
  Expect<Equal<entry<[T[61]['a'], T[61]['b']]>, T[61]['rem_s']>>,
  Expect<Equal<entry<[T[62]['a'], T[62]['b']]>, T[62]['rem_s']>>,
  Expect<Equal<entry<[T[63]['a'], T[63]['b']]>, T[63]['rem_s']>>,
  Expect<Equal<entry<[T[64]['a'], T[64]['b']]>, T[64]['rem_s']>>,
  Expect<Equal<entry<[T[65]['a'], T[65]['b']]>, T[65]['rem_s']>>,
  Expect<Equal<entry<[T[66]['a'], T[66]['b']]>, T[66]['rem_s']>>,
  Expect<Equal<entry<[T[67]['a'], T[67]['b']]>, T[67]['rem_s']>>,
  Expect<Equal<entry<[T[68]['a'], T[68]['b']]>, T[68]['rem_s']>>,
  Expect<Equal<entry<[T[69]['a'], T[69]['b']]>, T[69]['rem_s']>>,
  Expect<Equal<entry<[T[70]['a'], T[70]['b']]>, T[70]['rem_s']>>,
  Expect<Equal<entry<[T[71]['a'], T[71]['b']]>, T[71]['rem_s']>>,
  Expect<Equal<entry<[T[72]['a'], T[72]['b']]>, T[72]['rem_s']>>,
  Expect<Equal<entry<[T[73]['a'], T[73]['b']]>, T[73]['rem_s']>>,
  Expect<Equal<entry<[T[74]['a'], T[74]['b']]>, T[74]['rem_s']>>,
  Expect<Equal<entry<[T[75]['a'], T[75]['b']]>, T[75]['rem_s']>>,
  Expect<Equal<entry<[T[76]['a'], T[76]['b']]>, T[76]['rem_s']>>,
  Expect<Equal<entry<[T[77]['a'], T[77]['b']]>, T[77]['rem_s']>>,

  Expect<Equal<T['length'], 78>>,
]
