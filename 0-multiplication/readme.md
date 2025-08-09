# RecIntMult and Karatsuba

**Input:** Two n-digit positive integers `x` and `y`.
**Output:** The product `x · y`.

For more information take a look at _Algorithms Illuminated Part 1, 1.3.2 and 1.3.3_.

---

## RecInt Mult Algorithm

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
     `10^n · ac + 10^(n/2) · (ad + bc) + bd`

## Karatsuba

An optimized version of previous algorithm. Instead of having 4 recursive calls for each `ac`, `ad`, `bc`, `bd`, we can get away with 3 recursive calls, as we only need `(ad + bc)` for our algorithm to work.

- For that:
  1. Calculate `ac` and `bd` recursively.
  2. Calculate `(ad + bc)` from equation `(a + b)(c + d) = ac + ad + bc + bd => (ad + bc) = (a + b)(c + d)  - ac - bd`.
  3. Compute the product as specified in the previous algorithm.
