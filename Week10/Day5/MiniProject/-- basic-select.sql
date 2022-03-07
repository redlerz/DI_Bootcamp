-- basic-select

--1:
SELECT  first_name AS "First Name",
        last_name  AS "Last Name"
FROM employees;

--2:
SELECT  DISTINCT department_id
FROM employees;

--3:
SELECT  *
FROM employees
ORDER BY first_name DESC;

--4:
SELECT  first_name,
        last_name,
        salary,
        salary * 0.15 AS PF
FROM employees;

--5:
SELECT  first_name,
        last_name,
        salary
FROM employees
ORDER BY salary ASC;

--6:
SELECT  SUM(salary)
FROM employees;

--7:
SELECT  MAX(salary),
        MIN(salary)
FROM employees;

--8:
SELECT  AVG(salary)
FROM employees;

--9:
SELECT  COUNT(*)
FROM employees;

--10:
SELECT  upper(first_name)
FROM employees;

--11:
SELECT  substring(first_name,1,3)
FROM employees;

--12:
SELECT  concat(first_name,' ',last_name) AS "Full name"
FROM employees;

--13:
SELECT  concat(first_name,' ',last_name) AS full_name,
        length(concat(first_name,' ',last_name))
FROM employees;

--14:
SELECT  COUNT(*)
FROM employees
WHERE first_name ~ '\d+';

--15:
SELECT  *
FROM employees
LIMIT 10;

-- restricting_sorting
--1:
SELECT  first_name,
        last_name,
        salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

--2:
SELECT  first_name,
        last_name,
        hire_date
FROM employees
WHERE extract(year FROM hire_date) = 1987;

--3:
SELECT  first_name
FROM employees
WHERE first_name ILIKE '%c%'
AND first_name ILIKE '%e%';

--4:
SELECT  last_name,
        job_title,
        salary
FROM employees e
INNER JOIN ( 
    SELECT job_id, job_title
    FROM jobs 
    WHERE job_title NOT IN ('Programmer', 'Shipping Clerk')
) AS j ON j.job_id = e.job_id
WHERE salary NOT IN (4500, 10000, 15000);

--5:
SELECT  last_name
FROM employees
WHERE length(last_name) = 6;

--6:
SELECT  last_name
FROM employees
WHERE last_name ILIKE '__e%';

--7:
SELECT  e.job_id, e.first_name,
        job_title
FROM employees e
INNER JOIN
(
    SELECT  job_id, job_title
    FROM jobs
) AS j
ON e.job_id = j.job_id;

--8:
SELECT  *
FROM employees
WHERE last_name ~* '(JONES|BLAKE|SCOTT|KING|FORD)';
