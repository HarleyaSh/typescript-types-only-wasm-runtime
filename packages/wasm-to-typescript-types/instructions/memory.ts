import type { MemoryAddress, ProgramState } from "../types"
import type { State } from '../state'
import { WasmValue, Wasm, Pad, Store as Storage } from "ts-type-math"
import type * as TypeMath from 'ts-type-math'

export type IMemorySize = {
  kind: "MemorySize"
}

export type ILoad = {
  kind: "Load"
  offset: WasmValue
  subkind: string
}

export type IStore = {
  kind: "Store"
  offset: WasmValue
  subkind: string
}

export type MemoryInstruction =
  | IMemorySize
  | ILoad
  | IStore

export type HandleMemoryInstructions<
  instruction extends MemoryInstruction,
  state extends ProgramState
> = Satisfies<ProgramState,
  instruction extends IMemorySize
  ? MemorySize<instruction, state>

  : instruction extends ILoad
  ? Load<instruction, state>

  : instruction extends IStore
  ? Store<instruction, state>

  : never
>

export type MemorySize<
  instruction extends IMemorySize, // unused
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.push<
    state['memorySize'],
    state
  >
>

export type Load<
  instruction extends ILoad,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.get<state> extends [
    ...infer remaining extends WasmValue[],
    infer address extends WasmValue
  ]
  ? State.Stack.set<
      [
        ...remaining,

        instruction['subkind'] extends 'I32Load'    ? I32Load<instruction, state, address> :
        instruction['subkind'] extends 'I32Load8u'  ? I32Load8U<instruction, state, address> :
        instruction['subkind'] extends 'I32Load8s'  ? I32Load8S<instruction, state, address> :
        instruction['subkind'] extends 'I32Load16u' ? I32Load16U<instruction, state, address> :
        instruction['subkind'] extends 'I32Load16s' ? I32Load16S<instruction, state, address> :

        instruction['subkind'] extends 'I64Load'    ? I64Load<instruction, state, address> :
        instruction['subkind'] extends 'I64Load8u'  ? I64Load8U<instruction, state, address> :
        instruction['subkind'] extends 'I64Load8s'  ? I64Load8S<instruction, state, address> :
        instruction['subkind'] extends 'I64Load16u' ? I64Load16U<instruction, state, address> :
        instruction['subkind'] extends 'I64Load16s' ? I64Load16S<instruction, state, address> :
        instruction['subkind'] extends 'I64Load32u' ? I64Load32U<instruction, state, address> :
        instruction['subkind'] extends 'I64Load32s' ? I64Load32S<instruction, state, address> :
        never,
      ],

      state
    >

  : State.error<"stack exhausted", instruction, state>
>

type I32Load<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  TypeMath.Load.Read4Bytes<
    State.Memory.get<state>,
    Wasm.I32Add<address, instruction['offset']>
  >
>

type I32Load8U<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Pad.StartWith24Zeros<
    TypeMath.Load.Read1Byte<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >
  >
>

type I32Load8S<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Storage.SignedFill<
    TypeMath.Load.Read1Byte<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >,
    24
  >
>

type I32Load16U<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Pad.StartWith16Zeros<
    TypeMath.Load.Read2Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >
  >
>

type I32Load16S<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Storage.SignedFill<
    TypeMath.Load.Read2Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >,
    16
  >
>

type I64Load<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  TypeMath.Load.Read8Bytes<
    State.Memory.get<state>,
    Wasm.I32Add<address, instruction['offset']>
  >
>

type I64Load8U<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Pad.StartWith56Zeros<
    TypeMath.Load.Read1Byte<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >
  >
>

type I64Load8S<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Storage.SignedFill<
    TypeMath.Load.Read1Byte<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >,
    56
  >
>

type I64Load16U<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Pad.StartWith48Zeros<
    TypeMath.Load.Read2Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >
  >
>

type I64Load16S<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Storage.SignedFill<
    TypeMath.Load.Read2Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >,
    48
  >
>

type I64Load32U<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Pad.StartWith32Zeros<
    TypeMath.Load.Read2Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >
  >
>

type I64Load32S<
  instruction extends ILoad,
  state extends ProgramState,
  address extends WasmValue
> = Satisfies<WasmValue,
  Storage.SignedFill<
    TypeMath.Load.Read4Bytes<
      State.Memory.get<state>,
      Wasm.I32Add<address, instruction['offset']>
    >,
    32
  >
>

export type Store<
  instruction extends IStore,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.get<state> extends [
    ...infer remaining extends WasmValue[],
    infer address extends MemoryAddress,
    infer value extends WasmValue,
  ]
  ? State.Stack.set<
      remaining,

      instruction['subkind'] extends 'I32Store'   ? StoreAll<address, value, instruction, state> :
      instruction['subkind'] extends 'I32Store8'  ? Store8<address, value, instruction, state> :
      instruction['subkind'] extends 'I32Store16' ? Store16<address, value, instruction, state> :

      instruction['subkind'] extends 'I64Store'   ? StoreAll<address, value, instruction, state> :
      instruction['subkind'] extends 'I64Store8'  ? Store8<address, value, instruction, state> :
      instruction['subkind'] extends 'I64Store16' ? Store16<address, value, instruction, state> :
      instruction['subkind'] extends 'I64Store32' ? Store32<address, value, instruction, state> :
      never
    >
  : State.error<"stack exhausted", instruction, state>
>

type StoreAll<
  address extends MemoryAddress,
  value extends WasmValue,
  instruction extends IStore,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Memory.insert<
    Wasm.I32Add<address, instruction['offset']>,
    TypeMath.SplitToBytes<value>,
    state
  >
>

type Store8<
  address extends MemoryAddress,
  value extends WasmValue,
  instruction extends IStore,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Memory.insert<
    Wasm.I32Add<address, instruction['offset']>,
    TypeMath.Store.GetLSB<value>,
    state
  >
>

type Store16<
  address extends MemoryAddress,
  value extends WasmValue,
  instruction extends IStore,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Memory.insert<
    Wasm.I32Add<address, instruction['offset']>,
    TypeMath.Store.GoodLuckBro<value, 16>,
    state
  >
>

type Store32<
  address extends MemoryAddress,
  value extends WasmValue,
  instruction extends IStore,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Memory.insert<
    Wasm.I32Add<address, instruction['offset']>,
    TypeMath.Store.GoodLuckBro<value, 32>,
    state
  >
>

