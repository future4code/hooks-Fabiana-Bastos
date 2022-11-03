SELECT * FROM Funcionarios_Empresa;

SELECT name, id AS indetifier FROM Funcionarios_Empresa;

SELECT * FROM Funcionarios_Empresa
WHERE id = "003";

SELECT name FROM Funcionarios_Empresa
WHERE name LIKE "%a%";

SELECT name, email FROM Funcionarios_Empresa
WHERE name NOT LIKE "%r%" AND email LIKE "%u%";

