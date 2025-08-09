# RecIntMult

**Input:** Two n-digit positive integers `x` and `y`.
**Output:** The product `x · y`.
**Assumption:** `n` is a power of 2.

---

**Algorithm:**

- If `n = 1` (base case),
  compute `x · y` in one step and return the result.

- Else (recursive case):
  1. Split `x` into two halves: `a` (first half) and `b` (second half).
  2. Split `y` into two halves: `c` (first half) and `d` (second half).
  3. Recursively compute the following products:
     - `ac := a · c`
     - `ad := a · d`
     - `bc := b · c`
     - `bd := b · d`
  4. Compute the product using the grade-school addition and return the result:

  \[
  10^n \cdot ac + 10^{n/2} \cdot (ad + bc) + bd
  \]
