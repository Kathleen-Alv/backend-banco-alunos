-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           11.8.2-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para escola_db
CREATE DATABASE IF NOT EXISTS `escola_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `escola_db`;

-- Copiando estrutura para tabela escola_db.alunos
CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `cpf` char(11) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `uf` char(2) DEFAULT NULL,
  `rua` varchar(120) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `complemento` varchar(120) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Copiando dados para a tabela escola_db.alunos: ~9 rows (aproximadamente)
INSERT INTO `alunos` (`id`, `nome`, `cpf`, `cep`, `uf`, `rua`, `numero`, `complemento`, `create_at`, `update_at`) VALUES
	(1, 'Vitor Lima', '12345678910', '06000000', 'SP', 'Rua Senai', 123, 'APTo 12', '2025-09-16 12:01:00', '2025-09-16 12:01:00'),
	(2, 'Wendel', '98765432100', '06000001', 'SP', 'Avenida Centrar', 123, NULL, '2025-09-16 12:01:00', '2025-09-16 12:01:00'),
	(3, 'Matheus', '45678912399', '06000002', 'SP', 'Rua Nova', 123, 'Casa 1', '2025-09-16 12:01:00', '2025-09-16 12:01:00'),
	(5, 'Teste de Cadastro', '12345678910', '06000000', 'SP', 'Rua Senai', 123, 'APTo 12', '2025-09-16 13:39:54', '2025-09-16 13:39:54'),
	(6, 'Teste 3', '12345678910', '06000000', 'SP', 'Rua Senai', 123, 'APTo 12', '2025-09-16 14:08:27', '2025-09-16 14:08:27'),
	(8, 'Teste4', '26511651561', '46546556', 'sp', 'rua central', 100, 'casa 2', '2025-09-23 13:08:34', '2025-09-23 13:08:34'),
	(10, 'EDICAO', 'bhbhhj', 'jk', 'nk', 'j', 115, 'jkn', '2025-09-23 13:23:47', '2025-09-23 13:43:19'),
	(13, 'TESTE 4', '5656556', '1651651', 'rj', '26', 26, '', '2025-09-23 13:43:41', '2025-09-23 13:43:41'),
	(18, 'Edição', '5151', '032132', '15', '1513', 136, 'casa 1', '2025-09-30 12:20:38', '2025-09-30 13:46:24');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
