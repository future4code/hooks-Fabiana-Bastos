USE `hooks-4313275-fabiana-bastos`;

-- EXERCÍCIO A
ALTER TABLE Projetos
DROP COLUMN title;

SELECT * FROM Projetos;

-- EXERCÍCIO B
ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL;

DESCRIBE Projetos;