# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript where type coercion can lead to runtime errors that are not caught during compilation.  The `add` function is defined to accept two numbers, but it does not prevent string arguments that will be coerced to numbers with unexpected results (NaN). 

## Bug Description

The core issue lies in how TypeScript handles type coercion. While it does perform type checking, it doesn't always catch cases where implicit type conversion leads to unexpected behavior at runtime. This is especially problematic when dealing with operations that might result in `NaN` (Not a Number). 

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the resulting JavaScript code.
4. Observe that the output is `NaN`, even though the type system did not flag an error during compilation.

## Solution

The solution involves stricter type checking and potentially runtime validation to ensure that function arguments are of the expected type. The `bugSolution.ts` file demonstrates a better approach using type guards.