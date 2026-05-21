---
title: universalComparator
description: Locale-aware comparator for sorting mixed-type values.
---

`universalComparator` is a general-purpose comparison function that handles numbers natively and coerces everything else to strings for locale-aware comparison. Nullish values are treated as empty strings.

## Quick start

```ts
import { universalComparator } from "@tsd-ui/core";

const sorted = items.toSorted((a, b) => universalComparator(a.name, b.name, "en"));
```

## Signature

```ts
function universalComparator(a: any, b: any, locale: string): number;
```

| Param | Type | Description |
|-------|------|-------------|
| `a` | `any` | First value to compare. |
| `b` | `any` | Second value to compare. |
| `locale` | `string` | BCP 47 locale tag passed to `localeCompare`. |

**Returns** a negative number if `a < b`, positive if `a > b`, or `0` if equal.

## Behavior

1. **Both values are numbers** → arithmetic subtraction (`a - b`).
2. **Otherwise** → both values are coerced to `String(value ?? "")` and compared via `localeNumericCompare`.

Nullish (`null` / `undefined`) values become `""`, so they sort to the beginning when compared against non-empty strings.

## Examples

```ts
import { universalComparator } from "@tsd-ui/core";

// Numeric comparison
universalComparator(10, 2, "en"); // 8 (positive → 10 > 2)

// String comparison with numeric awareness
universalComparator("item2", "item10", "en"); // negative (2 < 10)

// Nullish handling
universalComparator(null, "hello", "en"); // negative ("" < "hello")
```

## `localeNumericCompare`

Lower-level helper used internally by `universalComparator`. Wraps `String.prototype.localeCompare` with the `numeric` option enabled.

```ts
import { localeNumericCompare } from "@tsd-ui/core";

localeNumericCompare("file2", "file10", "en"); // negative (2 < 10)
localeNumericCompare("abc", "abd", "en"); // negative
```

### Signature

```ts
function localeNumericCompare(a: string, b: string, locale: string): number;
```

The `numeric: true` option ensures that embedded numbers are compared by their numeric value rather than character-by-character (`"2" < "10"` instead of `"2" > "1"`).
