---
layout: default
title: Numeric function
parent: Expressions
grand_parent: Cypher
---

# Numeric operators

| Operator | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| + | addition | 2 + 3.5  | 5.5 (DOUBLE) | 
| - | subtraction | 4.5 - 2 | 2.5 (DOUBLE) |
| * | multiplication | 3.2 * 2 | 6.4 (DOUBLE) |
| / | division | 9 / 5 | 1 (INT64) |
| % | module(remainder) | 9 % 5 | 4 (INT64) |
| ^ | power | 4 ^ 5 | 1024 (DOUBLE) |

Unsupported numeric operators: 
`**`, `&`, `|`, `<<`, `>>`, `!`

# Numeric functions

| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| abs(x) | returns the absolute value of x | abs(-25.2) | 25.2 (DOUBLE) |
| acos(x) | returns the arccosine of x | acos(0.43) | 1.126304 (DOUBLE) |
| asin(x) | returns the arcsine of x | asin(0.4) | 0.411517 (DOUBLE) |
| atan(x) | returns the arctangent of x | atan(0.221) | 0.217504 (DOUBLE) |
| atan2(x, y) | returns the arctangent of x, y | atan2(0.4, 0.2) | 0.342411 (DOUBLE) |
| bitwise_xor(x, y) | returns the bitwise xor of x and y | bitwise_xor(2, 3) | 1 (INT64) |
| ceil(x) | rounds up x to the next nearest integer | ceil(4.2) | 5 (DOUBLE) |
| ceiling(x) | alias of ceil | ceiling(3.27) | 4 (DOUBLE) |
| cos(x) | returns the cosine value of x | cos(2.79) | -0.938825 (DOUBLE) | 
| cot(x) | returns the cotangent of x | cot(0.78) | 1.010855 (DOUBLE) |
| degrees(x) | converts radians to degree | degrees(1.2534) | 71.814530 (DOUBLE) |
| even(x) | rounds to next even number by rounding away from 0  | even(3.4) | 4 (INT64) |
| factorial(x) | returns the factorial of x | factorial(4) | 24 (INT64) |
| floor(x) | rounds down x to the nearest integer | floor(3.3) | True (BOOL) |
| gamma(x) | interpolation of (x-1) factorial | gamma(2.4) | 1.242169 (DOUBLE) |
| lgamma(x) | returns the log of gamma(x) | lgamma(1.4) | -0.119613 (DOUBLE) |
| ln(x) | returns the natural logarithm of x | ln(2.11) | 0.746688 (DOUBLE) |
| log(x) | returns the 10-log of x | log(2.11) | 0.324282 (DOUBLE) |
| log2(x) | returns the 2-log of x | log2(3) | 1.584963 (DOUBLE) |
| log10(x) | alias of log(x) | log10(100) | 2 (INT64) |
| negate(x) | returns the opposite number of x | negate(100) | -100 (INT64) |
| pi() | returns the value of pi | pi() | 3.141593 | 
| pow(x, y) | returns the value of x to the power of y | pow(4, 5) | 1024 (INT64) |
| radians(x) | converts the degree to radians | radians(89) | 1.553343 (DOUBLE) |
| round(x, s) | rounds x to s decimal places | round(42.651, 1) | 42.700000 (DOUBLE) |
| sin(x) | returns the sin of x | sin(413.31) | -0.981897 (DOUBLE) |
| sign(x) | returns the sign of x | sign(-451) | -1 (INT64) |
| sqrt(x) | returns the square root of x | sqrt(4.25) | 2.061553 (DOUBLE) |
| tan(x) | returns the tangent of x | tan(75) | -0.420701 (DOUBLE) |
