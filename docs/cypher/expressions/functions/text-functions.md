---
layout: default
title: Text function
parent: Expressions
grand_parent: Cypher
---

# Text operators

| Operator | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| [index] | alias of array extract | STRING("TEXT")[1]  | "T" (STRING) | 
| [begin:end] | alias of array slice | STRING("TEXT")[1:3] | "TEX" (STRING) |

# Text functions

| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| array_extract(list, index) | extracts a single character from string using 1-based index | array_extract("year", 2) | "e" (STRING) |
| array_slice(list, begin, end) | slices a string using 1-based index | array_slice("year", 1, 4) | "year" (STRING) |
| concat(string1, string2) | concatenates two string | concat("university", " of waterloo") | "university of waterloo" (STRING) |
| ends_with(string1, string2) | alias of suffix | ends_with("best student", "student") | True (BOOL) |
| lcase(string) | alias of lower | lcase("UPPER CASE") | "upper case" (STRING) |
| left(string, count) | returns the left most count number of characters from string | left("long string", 2) | "lo" (STRING) |
| length(string) | returns the number of characters in string | length("database") | 8 (INT64) |
| list_element(string, index) | alias of array_extract | list_element("university", 3) | "i" (STRING) | 
| list_extract(string, index) | alias of array_extract | list_extract("waterloo", 2) | "a" (STRING) |
| lower(string) | returns the string in lower case | lower("WaterLoo") | "waterloo" (STRING) |
| lpad(string, count, character) | pads the string with the character from the left until it has count characters | lpad("WaterLoo", 10, ">") | ">>WaterLoo" (STRING) |
| ltrim(string) | removes any white spaces on the left of the string | ltrim("  waterloo  ") | "waterloo  " (STRING) |
| prefix(string, search_string) | returns whether the string starts with serach_string | prefix("good university", "good") | True (BOOL) |
| repeat(string, count) | repeats the string count number of times | repeat("##", 5) | "##########" (STRING) |
| reverse(string)	| reverses the string | reverse("<<12345>>") | ">>54321<<" (STRING) |
| right(string, count) | returns the right most count number of characters from string | right("toronto", 2) | "to" (STRING) |
| rpad(string, count, character) | pads the string with the character from the right until it has count characters | rpad("toronto", 10, '<') | "toronto<<<" (STRING) |
| rtrim(string)	| removes any white spaces on the right of the string | rtrim("  toronto  ") | "  toronto" (STRING) |
| starts_with(string1, string2) | alias of prefix | starts_with("best student", "best") | True (BOOL) |
| substr(string, start, length) | alias of substring | substr("long str", 2, 3) | "ong" (STRING) |
| substring(string, start, length) | extracts the string from start position until length number of characters using 1-based index | substring("toronto", 1, 2) | "to" (STRING) |
| suffix(string, search_string) | returns whether the string ends with search_string | suffix("toronto12", "12") | True (BOOL) |
| trim(string) | removes any white spaces either on the left or right of the string | trim("  good  ") | "good" (STRING) |
| ucase(string) | alias of upper | ucase("small case") | "SMALL CASE" (STRING) |
| upper(string) | returns the string in upper case | upper("small case") | "SMALL CASE" (STRING) |
