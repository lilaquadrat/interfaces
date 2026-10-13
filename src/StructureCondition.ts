import type { StructureConditionConstraint } from './StructureConditionConstraint';
import type { StructureConditionGrade } from './StructureConditionGrade';
import type { StructureConditionOperator } from './StructureConditionOperator';

export interface StructureCondition {
  structure: string;
  constraint?: StructureConditionConstraint;
  grade?: StructureConditionGrade;
  /** Comparison for a `number` structure's value; ignored for other types. */
  operator?: StructureConditionOperator;
  value?: string | number | boolean;
}