import { WasmInt, WasmValue, Wasm } from "../../ts-type-math/wasm"
import { State } from "../state"
import { ProgramState } from "../types"

// https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Numeric/Wrap
export type IWrap = {
  kind: "Wrap"
}

export type IExtend = {
  kind: "Extend" // can only be i64.extend_i32_s or i64.extend_i32_u
  signed: boolean
}

export type ICountLeadingZeros = {
  kind: "CountLeadingZeros"
  type: WasmInt
}

export type ICountTrailingZeros = {
  kind: "CountTrailingZeros"
  type: WasmInt
}

export type IPopCount = {
  kind: "PopCount"
  type: WasmInt
}

export type IReinterpret = {
  kind: "Reinterpret"
}

export type ConversionInstruction =
  | IWrap
  | IExtend
  | ICountLeadingZeros
  | ICountTrailingZeros
  | IPopCount
  | IReinterpret

export type HandleConversionInstructions<
  instruction extends ConversionInstruction,
  state extends ProgramState
> =
    instruction extends IWrap
  ? Warp<instruction, state>

  : instruction extends IExtend
  ? Extend<instruction, state>

  : instruction extends ICountLeadingZeros
  ? CountLeadingZeros<instruction, state>

  : instruction extends ICountTrailingZeros
  ? CountTrailingZeros<instruction, state>

  : instruction extends IPopCount
  ? PopCount<instruction, state>

  : instruction extends IReinterpret
  ? Reinterpret<instruction, state>

  : never

export type Warp<
  instruction extends IWrap,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.get<state> extends [
    ...infer remaining extends WasmValue[],
    infer a extends WasmValue,
  ]
  ? State.Stack.set<
      [
        ...remaining,
        Wasm.I32WrapI64<a>
      ],
      state
    >
  : State.error<"stack exhausted", instruction, state>
>

export type Extend<
  instruction extends IExtend,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.get<state> extends [
    ...infer remaining extends WasmValue[],
    infer a extends WasmValue,
  ]
  ? State.Stack.set<
      [
        ...remaining,
        instruction['signed'] extends true
          ? Wasm.I64ExtendI32S<a>
          : Wasm.I64ExtendI32U<a>
      ],
      state
    >
  : State.error<"stack exhausted", instruction, state>
>

export type CountLeadingZeros<
  instruction extends ICountLeadingZeros,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.Stack.get<state> extends [
    ...infer remaining extends WasmValue[],
    infer a extends WasmValue,
  ]
  ? State.Stack.set<
      [
        ...remaining,
        instruction['type'] extends 'i32'
          ? Wasm.I32Clz<a>
          : Wasm.I64Clz<a>
      ],
      state
    >
  : State.error<"stack exhausted", instruction, state>
>

export type CountTrailingZeros<
  instruction extends ICountTrailingZeros,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.unimplemented<instruction, state>
>

export type PopCount<
  instruction extends IPopCount,
  state extends ProgramState
> = Satisfies<ProgramState,
  State.unimplemented<instruction, state>
>

/** here's the thing about this.  since we're only ever using the binary representation, the Reinterpret instruction is a no-op. */
export type Reinterpret<
  instruction extends IReinterpret, // unused
  state extends ProgramState
> = Satisfies<ProgramState,
  state
>