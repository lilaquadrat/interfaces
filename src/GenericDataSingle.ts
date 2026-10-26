import { Content } from "./Content"

export interface GenericDataSingle {
    editor?: string
    lists?: string
    customers?: string
    media?: string
    shiftPlans?: string
    data?: Record<string, Content>
  }