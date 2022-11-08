# Date mathematical operations
| Operator | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| + | addition of INT64 | DATE(2022-11-12) + 5  | 2022-11-17 (DATE) | 
| + | addition of INTERVAL | DATE(2021-10-12) + INTERVAL(3 DAYS) | 2021-10-15 (DATE) |
| - | substraction of INT64 | DATE(2022-11-12) - DATE(2022-11-11) | 1 (INT64)|
| - | substraction of INTERVAL | DATE(2023-10-11) - INTERVAL(10 DAYS) | 2023-10-01 (DATE) |
# Date functions
| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| date_part | returns the subfield of the given date | date_part('year', DATE(1995-11-02)) | 1995 (INT64) |
| datepart | alias of date_part | datepart('month', DATE(1933-12-12)) | 12 (INT64) |
| date_trunc | returns the given date with specified precision | date_trunc('month', DATE(2011-11-21)) | 2011-11-01 (DATE) |
| datetrunc | alias of date_trunc | datetrunc('year', DATE(2005-12-11)) | 2005-12-01 (DATE) |
| dayname | returns the english name of the day of the given date | dayname(2022-11-07) | Monday (STRING) | 
| greatest | returns the later of the given two dates | greatest(DATE(2013-12-11), DATE(2005-11-12)) | 2013-12-11 (DATE) |
| last_day | returns the last day of the month of the given date | last_day(2022-10-11) | 2022-10-31 (DATE) |
| least | returns the earlier of the given two dates | least(DATE(2013-12-11), DATE(2005-11-12)) | 2005-11-12 (DATE) |
| make_date | returns the date based on the given parts | make_date(1952,11,22) | 1952-11-22 (DATE) |
| monthname | returns the english name of the month of the given date | monthname(2022-11-07) | November (STRING) |
