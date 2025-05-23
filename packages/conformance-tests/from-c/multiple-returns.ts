import type { Func, bootstrap } from 'wasm-to-typescript-types'

type $__wasm_call_ctors = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: [];
  locals: [];
  instructions: [
    { kind: 'Nop'; ziltoid: 'theOmniscient' },
  ];
}>

type $entry = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: ['i32'];
  locals: [];
  instructions: [
    { kind: 'Const'; value: '00000000000000000000010000000000' },
  ];
}>

type $entrySize = Satisfies<Func, {
  kind: 'func';
  params: [];
  paramsTypes: [];
  resultTypes: ['i32'];
  locals: [];
  instructions: [
    { kind: 'Const'; value: '00000000000000000000000000000100' },
  ];
}>

export type funcs = {
  $__wasm_call_ctors: $__wasm_call_ctors;
  $entry: $entry;
  $entrySize: $entrySize;
}

export type entry<
  arguments extends [],
  debugMode extends boolean = false,
  stopAt extends number = number,
> = bootstrap<
  {
    arguments: arguments;
    funcs: funcs;
    globals: {
      $__dso_handle: '00000000000000000000010000000000';
      $__data_end: '00000000000000000000010000010000';
      $__stack_low: '00000000000000000000010000010000';
      $__stack_high: '00000000000000010000010000010000';
      $__global_base: '00000000000000000000010000000000';
      $__heap_base: '00000000000000010000010000010000';
      $__heap_end: '00000000000000100000000000000000';
      $__memory_base: '00000000000000000000000000000000';
      $__table_base: '00000000000000000000000000000001';
    };
    memory:
      & $d0
    ;
    memorySize: '00000000000000000000000000000010';
    indirect: {};
  },
  debugMode,
  stopAt
>

/**            */
type $d0 = {
  '00000000000000000000010000000000': '00000100'; // 
  '00000000000000000000010000000100': '00000101'; // 
  '00000000000000000000010000001100': '00000110'; // 
}
