import type { Func, bootstrap } from 'wasm-to-typescript-types'

type $get42 = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: ['i32'];
  locals: [];
  instructions: [
    { kind: 'Const'; value: '00000000000000000000000000101010' },
  ];
}>

type $get42Plus1 = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: ['i32'];
  locals: [];
  instructions: [
    { kind: 'Call'; id: '$get42' },
    { kind: 'Const'; value: '00000000000000000000000000000001' },
    { kind: 'Add', type: 'i32' },
  ];
}>

type $entry = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: ['i32'];
  locals: [];
  instructions: [
    { kind: 'Call'; id: '$get42Plus1' },
  ];
}>

export type funcs = {
  $get42: $get42;
  $get42Plus1: $get42Plus1;
  $entry: $entry;
}

export type entry<
  arguments extends [],
  debugMode extends boolean = false,
  stopAt extends number = number,
> = bootstrap<
  {
    arguments: arguments;
    funcs: funcs;
    globals: {};
    memory: {};
    memorySize: '00000000000000000000000000000000';
    indirect: {};
  },
  debugMode,
  stopAt
>
