# RecIntMult

**Input:** Two n-digit positive integers `x` and `y`.
**Output:** The product `x · y`.

For more information take a look at _Algorithms Illuminated Part 1, 1.3.2_.

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
     10^n · ac + 10^(n/2) · (ad + bc) + bd
