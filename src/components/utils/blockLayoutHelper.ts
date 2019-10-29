import { defaultLayouts } from "components/blockLayouts/defaultLayout";
import { exoticFormLayouts } from "components/blockLayouts/exoticFormLayout";
import { BlockLayoutMap } from "model/blockLayout";

export function getBlockLayouts(form: string): BlockLayoutMap {
  switch (form) {
    case 'exotic':
      return {...defaultLayouts, ...exoticFormLayouts};
    default:
      return defaultLayouts;
  }
}