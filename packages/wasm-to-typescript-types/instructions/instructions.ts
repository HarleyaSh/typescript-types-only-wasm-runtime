import type { ProgramState } from "../types"
import type { State } from '../state'
import type { HandleArithmeticInstructions, ArithmeticInstruction } from "./arithmetic"
import type { HandleBitwiseInstructions, BitwiseInstruction } from "./bitwise"
import type { HandleComparisonInstruction, ComparisonInstruction } from "./comparison"
import type { HandleConstInstruction, ConstInstruction } from "./const"
import type { HandleControlFlowInstructions, ControlFlowInstruction } from "./control-flow"
import type { HandleFloatingPointInstructions, FloatingPointInstruction } from "./floating-point"
import type { HandleMemoryInstructions, MemoryInstruction } from "./memory"
import type { HandleSyntheticInstructions, SyntheticInstruction } from "./synthetic"
import type { HandleVariableInstructions, VariableInstruction } from "./variable"
import type { HandleConversionInstructions, ConversionInstruction } from "./conversion"

export type Instruction =
  | ConstInstruction
  | ComparisonInstruction
  | ArithmeticInstruction
  | FloatingPointInstruction
  | BitwiseInstruction
  | VariableInstruction
  | MemoryInstruction
  | ControlFlowInstruction
  | SyntheticInstruction
  | ConversionInstruction

export type selectInstruction<
  initialState extends ProgramState,
  remainingInstructions extends Instruction[],
  instruction extends Instruction,

  state extends ProgramState =
    State.Instructions.set<
      remainingInstructions,
      initialState
    >
> =
  instruction extends ConstInstruction
  ? HandleConstInstruction<instruction, state>

  : instruction extends ComparisonInstruction
  ? HandleComparisonInstruction<instruction, state>

  : instruction extends ArithmeticInstruction
  ? HandleArithmeticInstructions<instruction, state>

  : instruction extends FloatingPointInstruction
  ? HandleFloatingPointInstructions<instruction, state>

  : instruction extends BitwiseInstruction
  ? HandleBitwiseInstructions<instruction, state>

  : instruction extends VariableInstruction
  ? HandleVariableInstructions<instruction, state>

  : instruction extends MemoryInstruction
  ? HandleMemoryInstructions<instruction, state>

  : instruction extends ControlFlowInstruction
  ? HandleControlFlowInstructions<instruction, state>

  : instruction extends SyntheticInstruction
  ? HandleSyntheticInstructions<instruction, state>

  : instruction extends ConversionInstruction
  ? HandleConversionInstructions<instruction, state>

  // Global Fallback
  : State.error<'unrecognized instruction', instruction, state>
