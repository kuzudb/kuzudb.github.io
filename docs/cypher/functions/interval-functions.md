# Interval operators
| Operator | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| + | addition of INTERVAL | INTERVAL(79 DAYS 32 YEARS) + INTERVAL(20 MILLISECONDS 30 HOURS 20 DAYS)  | 32 years 99 days 30:00:00.02 (INTERVAL) | 
| + | addition of DATE | INTERVAL(300 DAYS 2 YEARS 30 MINUTES) + DATE(2025-10-01) | 2028-07-27 (DATE) |
| + | addition of TIMESTAMP | INTERVAL(342 DAYS 1 YEARS 32 MINUTES 20 SECONDS) + TIMESTAMP(2013-02-21) | 2015-01-29 00:32:20 (TIMESTAMP)|
| - | substraction of INTERVAL | INTERVAL(5 DAYS 2 MONTHS) - INTERVAL(1 DAYS) | 1 year 8 months 4 days (INTERVAL) |
| - | substraction of DATE | DATE(2025-03-06) - INTERVAL(1 DAYS) | 2025-03-05 (DATE) |
| - | substraction of TIMESTAMP | TIMESTAMP(1984-01-01) - INTERVAL(30 HOURS 20 SECONDS) | 1983-12-30 17:59:40 (TIMESTAMP) |

# Interval functions
| Function | Description | Example | Result |
| ----------- | ----------- |  ----------- |  ----------- |
| date_part | returns the subfield of the given date | date_part('year', INTERVAL(20 YEARS 367 DAYS)) | 20 (INT64) |
| to_years | returns the year interval based on the year | to_years(3) | 3 years (INTERVAL) |
| to_months | returns the month interval based on the month | to_months(5) | 5 months (INTERVAL) |
| to_days | returns the day interval based on the days | to_days(2) | 2 days (INTERVAL) |
| to_hours | returns the hour interval based on the hours | to_hours(10) | 10:00:00 (INTERVAL) | 
| to_minutes | returns the minutes interval based on the minutes | to_minutes(30) | 00:30:00 (INTERVAL) |
| to_seconds | returns the seconds interval based on the seconds | to_seconds(22) | 00:00:22 (INTERVAL) |
| to_milliseconds | returns the milliseconds interval based on the milliseconds | to_milliseconds(27) | 00:00:00.027 (INTERVAL) |
| to_microseconds | returns the microseconds interval based on the microseconds | to_microseconds(98) | 00:00:00.000098 (INTERVAL) |
