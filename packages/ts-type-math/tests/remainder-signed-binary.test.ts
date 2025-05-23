import { Equal, Expect } from "type-testing"
import { t, T } from '../test-cases/arithmetic';
import { expect, test } from 'vitest';
import { twosComplementToNumber, numberToTwosComplement, arithmetic } from "../test-utils";
import { DivideSignedBinary32 } from "../divide";

test.each(t)('(%#)', ({ a, a_binary, b, b_binary, rem_s, rem_s_binary }) => {
  expect(a_binary).toEqual(numberToTwosComplement(a));
  expect(a).toEqual(twosComplementToNumber(a_binary));
  expect(b_binary).toEqual(numberToTwosComplement(b));
  expect(b).toEqual(twosComplementToNumber(b_binary));
  expect(rem_s_binary).toEqual(numberToTwosComplement(rem_s));
  expect(rem_s).toEqual(twosComplementToNumber(rem_s_binary));

  const actual = arithmetic.rem_s(a, b)
  expect(actual).toBe(rem_s);
});

type i = 32
type a = T[i]['a_binary']     // =>
type b = T[i]['b_binary']     // =>
type x1 = DivideSignedBinary32<a, b>
type e = T[i]['rem_s_binary'] // =>
type x = x1['remainder']      // =>

type Case00 = Expect<Equal<DivideSignedBinary32<T[ 0]['a_binary'], T[ 0]['b_binary']>['remainder'], T[ 0]['rem_s_binary']>>
type Case01 = Expect<Equal<DivideSignedBinary32<T[ 1]['a_binary'], T[ 1]['b_binary']>['remainder'], T[ 1]['rem_s_binary']>>
type Case02 = Expect<Equal<DivideSignedBinary32<T[ 2]['a_binary'], T[ 2]['b_binary']>['remainder'], T[ 2]['rem_s_binary']>>
type Case03 = Expect<Equal<DivideSignedBinary32<T[ 3]['a_binary'], T[ 3]['b_binary']>['remainder'], T[ 3]['rem_s_binary']>>
type Case04 = Expect<Equal<DivideSignedBinary32<T[ 4]['a_binary'], T[ 4]['b_binary']>['remainder'], T[ 4]['rem_s_binary']>>
type Case05 = Expect<Equal<DivideSignedBinary32<T[ 5]['a_binary'], T[ 5]['b_binary']>['remainder'], T[ 5]['rem_s_binary']>>
type Case06 = Expect<Equal<DivideSignedBinary32<T[ 6]['a_binary'], T[ 6]['b_binary']>['remainder'], T[ 6]['rem_s_binary']>>
type Case07 = Expect<Equal<DivideSignedBinary32<T[ 7]['a_binary'], T[ 7]['b_binary']>['remainder'], T[ 7]['rem_s_binary']>>
type Case08 = Expect<Equal<DivideSignedBinary32<T[ 8]['a_binary'], T[ 8]['b_binary']>['remainder'], T[ 8]['rem_s_binary']>>
type Case09 = Expect<Equal<DivideSignedBinary32<T[ 9]['a_binary'], T[ 9]['b_binary']>['remainder'], T[ 9]['rem_s_binary']>>
type Case10 = Expect<Equal<DivideSignedBinary32<T[10]['a_binary'], T[10]['b_binary']>['remainder'], T[10]['rem_s_binary']>>
type Case11 = Expect<Equal<DivideSignedBinary32<T[11]['a_binary'], T[11]['b_binary']>['remainder'], T[11]['rem_s_binary']>>
type Case12 = Expect<Equal<DivideSignedBinary32<T[12]['a_binary'], T[12]['b_binary']>['remainder'], T[12]['rem_s_binary']>>
type Case13 = Expect<Equal<DivideSignedBinary32<T[13]['a_binary'], T[13]['b_binary']>['remainder'], T[13]['rem_s_binary']>>
type Case14 = Expect<Equal<DivideSignedBinary32<T[14]['a_binary'], T[14]['b_binary']>['remainder'], T[14]['rem_s_binary']>>
type Case15 = Expect<Equal<DivideSignedBinary32<T[15]['a_binary'], T[15]['b_binary']>['remainder'], T[15]['rem_s_binary']>>
type Case16 = Expect<Equal<DivideSignedBinary32<T[16]['a_binary'], T[16]['b_binary']>['remainder'], T[16]['rem_s_binary']>>
type Case17 = Expect<Equal<DivideSignedBinary32<T[17]['a_binary'], T[17]['b_binary']>['remainder'], T[17]['rem_s_binary']>>
type Case18 = Expect<Equal<DivideSignedBinary32<T[18]['a_binary'], T[18]['b_binary']>['remainder'], T[18]['rem_s_binary']>>
type Case19 = Expect<Equal<DivideSignedBinary32<T[19]['a_binary'], T[19]['b_binary']>['remainder'], T[19]['rem_s_binary']>>
type Case20 = Expect<Equal<DivideSignedBinary32<T[20]['a_binary'], T[20]['b_binary']>['remainder'], T[20]['rem_s_binary']>>
type Case21 = Expect<Equal<DivideSignedBinary32<T[21]['a_binary'], T[21]['b_binary']>['remainder'], T[21]['rem_s_binary']>>
type Case22 = Expect<Equal<DivideSignedBinary32<T[22]['a_binary'], T[22]['b_binary']>['remainder'], T[22]['rem_s_binary']>>
type Case23 = Expect<Equal<DivideSignedBinary32<T[23]['a_binary'], T[23]['b_binary']>['remainder'], T[23]['rem_s_binary']>>
type Case24 = Expect<Equal<DivideSignedBinary32<T[24]['a_binary'], T[24]['b_binary']>['remainder'], T[24]['rem_s_binary']>>
type Case25 = Expect<Equal<DivideSignedBinary32<T[25]['a_binary'], T[25]['b_binary']>['remainder'], T[25]['rem_s_binary']>>
type Case26 = Expect<Equal<DivideSignedBinary32<T[26]['a_binary'], T[26]['b_binary']>['remainder'], T[26]['rem_s_binary']>>
type Case27 = Expect<Equal<DivideSignedBinary32<T[27]['a_binary'], T[27]['b_binary']>['remainder'], T[27]['rem_s_binary']>>
type Case28 = Expect<Equal<DivideSignedBinary32<T[28]['a_binary'], T[28]['b_binary']>['remainder'], T[28]['rem_s_binary']>>
type Case29 = Expect<Equal<DivideSignedBinary32<T[29]['a_binary'], T[29]['b_binary']>['remainder'], T[29]['rem_s_binary']>>
type Case30 = Expect<Equal<DivideSignedBinary32<T[30]['a_binary'], T[30]['b_binary']>['remainder'], T[30]['rem_s_binary']>>
type Case31 = Expect<Equal<DivideSignedBinary32<T[31]['a_binary'], T[31]['b_binary']>['remainder'], T[31]['rem_s_binary']>>
type Case32 = Expect<Equal<DivideSignedBinary32<T[32]['a_binary'], T[32]['b_binary']>['remainder'], T[32]['rem_s_binary']>>
type Case33 = Expect<Equal<DivideSignedBinary32<T[33]['a_binary'], T[33]['b_binary']>['remainder'], T[33]['rem_s_binary']>>
type Case34 = Expect<Equal<DivideSignedBinary32<T[34]['a_binary'], T[34]['b_binary']>['remainder'], T[34]['rem_s_binary']>>
type Case35 = Expect<Equal<DivideSignedBinary32<T[35]['a_binary'], T[35]['b_binary']>['remainder'], T[35]['rem_s_binary']>>
type Case36 = Expect<Equal<DivideSignedBinary32<T[36]['a_binary'], T[36]['b_binary']>['remainder'], T[36]['rem_s_binary']>>
type Case37 = Expect<Equal<DivideSignedBinary32<T[37]['a_binary'], T[37]['b_binary']>['remainder'], T[37]['rem_s_binary']>>
type Case38 = Expect<Equal<DivideSignedBinary32<T[38]['a_binary'], T[38]['b_binary']>['remainder'], T[38]['rem_s_binary']>>
type Case39 = Expect<Equal<DivideSignedBinary32<T[39]['a_binary'], T[39]['b_binary']>['remainder'], T[39]['rem_s_binary']>>
type Case40 = Expect<Equal<DivideSignedBinary32<T[40]['a_binary'], T[40]['b_binary']>['remainder'], T[40]['rem_s_binary']>>
type Case41 = Expect<Equal<DivideSignedBinary32<T[41]['a_binary'], T[41]['b_binary']>['remainder'], T[41]['rem_s_binary']>>
type Case42 = Expect<Equal<DivideSignedBinary32<T[42]['a_binary'], T[42]['b_binary']>['remainder'], T[42]['rem_s_binary']>>
type Case43 = Expect<Equal<DivideSignedBinary32<T[43]['a_binary'], T[43]['b_binary']>['remainder'], T[43]['rem_s_binary']>>
type Case44 = Expect<Equal<DivideSignedBinary32<T[44]['a_binary'], T[44]['b_binary']>['remainder'], T[44]['rem_s_binary']>>
type Case45 = Expect<Equal<DivideSignedBinary32<T[45]['a_binary'], T[45]['b_binary']>['remainder'], T[45]['rem_s_binary']>>
type Case46 = Expect<Equal<DivideSignedBinary32<T[46]['a_binary'], T[46]['b_binary']>['remainder'], T[46]['rem_s_binary']>>
type Case47 = Expect<Equal<DivideSignedBinary32<T[47]['a_binary'], T[47]['b_binary']>['remainder'], T[47]['rem_s_binary']>>
type Case48 = Expect<Equal<DivideSignedBinary32<T[48]['a_binary'], T[48]['b_binary']>['remainder'], T[48]['rem_s_binary']>>
type Case49 = Expect<Equal<DivideSignedBinary32<T[49]['a_binary'], T[49]['b_binary']>['remainder'], T[49]['rem_s_binary']>>
type Case50 = Expect<Equal<DivideSignedBinary32<T[50]['a_binary'], T[50]['b_binary']>['remainder'], T[50]['rem_s_binary']>>
type Case51 = Expect<Equal<DivideSignedBinary32<T[51]['a_binary'], T[51]['b_binary']>['remainder'], T[51]['rem_s_binary']>>
type Case52 = Expect<Equal<DivideSignedBinary32<T[52]['a_binary'], T[52]['b_binary']>['remainder'], T[52]['rem_s_binary']>>
type Case53 = Expect<Equal<DivideSignedBinary32<T[53]['a_binary'], T[53]['b_binary']>['remainder'], T[53]['rem_s_binary']>>
type Case54 = Expect<Equal<DivideSignedBinary32<T[54]['a_binary'], T[54]['b_binary']>['remainder'], T[54]['rem_s_binary']>>
type Case55 = Expect<Equal<DivideSignedBinary32<T[55]['a_binary'], T[55]['b_binary']>['remainder'], T[55]['rem_s_binary']>>
type Case56 = Expect<Equal<DivideSignedBinary32<T[56]['a_binary'], T[56]['b_binary']>['remainder'], T[56]['rem_s_binary']>>
type Case57 = Expect<Equal<DivideSignedBinary32<T[57]['a_binary'], T[57]['b_binary']>['remainder'], T[57]['rem_s_binary']>>
type Case58 = Expect<Equal<DivideSignedBinary32<T[58]['a_binary'], T[58]['b_binary']>['remainder'], T[58]['rem_s_binary']>>
type Case59 = Expect<Equal<DivideSignedBinary32<T[59]['a_binary'], T[59]['b_binary']>['remainder'], T[59]['rem_s_binary']>>
type Case60 = Expect<Equal<DivideSignedBinary32<T[60]['a_binary'], T[60]['b_binary']>['remainder'], T[60]['rem_s_binary']>>
type Case61 = Expect<Equal<DivideSignedBinary32<T[61]['a_binary'], T[61]['b_binary']>['remainder'], T[61]['rem_s_binary']>>
type Case62 = Expect<Equal<DivideSignedBinary32<T[62]['a_binary'], T[62]['b_binary']>['remainder'], T[62]['rem_s_binary']>>
type Case63 = Expect<Equal<DivideSignedBinary32<T[63]['a_binary'], T[63]['b_binary']>['remainder'], T[63]['rem_s_binary']>>
type Case64 = Expect<Equal<DivideSignedBinary32<T[64]['a_binary'], T[64]['b_binary']>['remainder'], T[64]['rem_s_binary']>>
type Case65 = Expect<Equal<DivideSignedBinary32<T[65]['a_binary'], T[65]['b_binary']>['remainder'], T[65]['rem_s_binary']>>
type Case66 = Expect<Equal<DivideSignedBinary32<T[66]['a_binary'], T[66]['b_binary']>['remainder'], T[66]['rem_s_binary']>>
type Case67 = Expect<Equal<DivideSignedBinary32<T[67]['a_binary'], T[67]['b_binary']>['remainder'], T[67]['rem_s_binary']>>
type Case68 = Expect<Equal<DivideSignedBinary32<T[68]['a_binary'], T[68]['b_binary']>['remainder'], T[68]['rem_s_binary']>>
type Case69 = Expect<Equal<DivideSignedBinary32<T[69]['a_binary'], T[69]['b_binary']>['remainder'], T[69]['rem_s_binary']>>
type Case70 = Expect<Equal<DivideSignedBinary32<T[70]['a_binary'], T[70]['b_binary']>['remainder'], T[70]['rem_s_binary']>>
type Case71 = Expect<Equal<DivideSignedBinary32<T[71]['a_binary'], T[71]['b_binary']>['remainder'], T[71]['rem_s_binary']>>
type Case72 = Expect<Equal<DivideSignedBinary32<T[72]['a_binary'], T[72]['b_binary']>['remainder'], T[72]['rem_s_binary']>>
type Case73 = Expect<Equal<DivideSignedBinary32<T[73]['a_binary'], T[73]['b_binary']>['remainder'], T[73]['rem_s_binary']>>
type Case74 = Expect<Equal<DivideSignedBinary32<T[74]['a_binary'], T[74]['b_binary']>['remainder'], T[74]['rem_s_binary']>>
type Case75 = Expect<Equal<DivideSignedBinary32<T[75]['a_binary'], T[75]['b_binary']>['remainder'], T[75]['rem_s_binary']>>
type Case76 = Expect<Equal<DivideSignedBinary32<T[76]['a_binary'], T[76]['b_binary']>['remainder'], T[76]['rem_s_binary']>>
type Case77 = Expect<Equal<DivideSignedBinary32<T[77]['a_binary'], T[77]['b_binary']>['remainder'], T[77]['rem_s_binary']>>

type CaseLength = Expect<Equal<T['length'], 78>>
