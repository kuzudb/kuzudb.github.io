---
layout: default
title: List Functions
parent: Functions and Expressions 
grand_parent: Cypher
---
# List Functions

| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| list_creation(arg1, arg2, arg3..) | creates a LIST containing the argument values | list_creation(1,2,3,4,5,56,2) | [1,2,3,4,5,56,2] (LIST) |
| len(list) | returns the length of the list | len([1,2,3]) | 3 (INT64) |
| list_extract(list, index) | extracts the indexth (1-based) value from the list | list_extract([1,2,3], 2) | 2 (INT64) |
| list_element(list, index) | alias of list_extract | list_element([7,234,3], 1) | 7 (INT64) |
| list_concat(list1, list2) | concatenates two lists | list_concat([7,234,3], [1,3]) | [7,234,3,1,3] (LIST) |
| list_cat(list1, list2) | alias of list_concat | list_cat(['7','3'], ['1']) | ['7','3','1'] (LIST) |
| array_concat(list1, list2) | alias of list_concat | array_concat([['7','2'],['3']], [['1']]) | [['7','2'],['3'],['1']] (LIST) |
| array_cat(list1, list2) | alias of list_concat | array_cat([4.23,5.25], [4.1]) | [4.23,5.25,4.1] (LIST) |
| list_append(list, element) | appends the element to list | list_append([3,5,9],4) | [3,5,9,4] (LIST) |
| array_append(list, element) | alias of list_append | array_append([2,1],3) | [2,1,3] (LIST) |
| array_push_back(list, element) | alias of list_append | array_push_back([3,6],4) | [3,6,4] (LIST) |
| list_prepend(list, element) | prepends the element to list | list_prepend([3,6],4) | [4,3,6] (LIST) |
| array_prepend(list, element) | alias of list_prepend | array_prepend([3,6],4) | [4,3,6] (LIST) |
| array_push_front(list, element) | alias of list_prepend | array_push_front([1,2],3) | [3,1,2] (LIST) |
| list_position(list, element) | returns the position of element in the list | list_position([3,4,5], 5) | 3 (INT64) |
| list_indexof(list, element) | alias of list_position | list_indexof([3,4,5], 5) | 3 (INT64) |
| array_position(list, element) | alias of list_position | array_position([3,4,5], 5) | 3 (INT64) |
| array_indexof(list, element) | alias of list_position | array_indexof([3,4,5], 5) | 3 (INT64) |
| list_contains(list, element) | returns true if the list contains the element | list_contains([3,4,5], 5) | true (BOOL) |
| list_has(list, element) | alias of list_contains | list_has([3,4,5], 5) | true (BOOL) |
| array_contains(list, element) | alias of list_contains | array_contains([3,4,5], 5) | true (BOOL) |
| array_has(list, element) | alias of list_contains | array_has([3,4,5], 5) | true (BOOL) |
| list_slice(list, begin, end) | extracts a sublist using slice conventions and negative values are accepted. | list_slice([3,4,5], 2, 3) | [4] (LIST)|
| array_slice(list, begin, end) | extracts a sublist using slice conventions and negative values are accepted. | array_slice([6,7,1], 1, 3) | [6,7] (LIST)|

## List_sort Function
TODO: ziyi