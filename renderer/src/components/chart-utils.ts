/**
 * Shared helpers for chart wrapper components.
 */

import { interpolateString } from "../interpolation";

export function getValueFormatter(format?: string) {
  if (!format || format === "auto") {
    return undefined;
  }
  return (value: unknown) => {
    const formatted = interpolateString(`{{ _v | ${format} }}`, { _v: value });
    return formatted == null ? "" : String(formatted);
  };
}
