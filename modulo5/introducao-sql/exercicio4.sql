INSERT INTO Funcionarios_Empresa(id, name, email)
VALUES("004", "Yuzo", "yuzo@lbn.com");

SELECT * FROM Funcionarios_Empresa;

DELETE FROM Funcionarios_Empresa
WHERE id = "004";

SELECT * FROM Funcionarios_Empresa;
