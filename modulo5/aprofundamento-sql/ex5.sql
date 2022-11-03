USE `hooks-4313275-fabiana-bastos`;

-- EXERCÍCIO A
SELECT dueDate
FROM Projetos
ORDER BY dueDate DESC;

-- EXERCÍCIO B 
SELECT name, dueDate
FROM Projetos
ORDER BY dueDate ASC
LIMIT 2;
