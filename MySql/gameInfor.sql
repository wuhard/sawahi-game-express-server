-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game_infor`
--

DROP TABLE IF EXISTS `game_infor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_infor` (
  `id` varchar(8) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `iconUrl` varchar(12) DEFAULT NULL,
  `imageUrl` varchar(12) DEFAULT NULL,
  `howto` varchar(300) DEFAULT NULL,
  `intro` varchar(300) DEFAULT NULL,
  `gameUrl` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_infor`
--

LOCK TABLES `game_infor` WRITE;
/*!40000 ALTER TABLE `game_infor` DISABLE KEYS */;
INSERT INTO `game_infor` VALUES ('000001','RunBall','跑酷类',5,'S000001.png','B000001.jpg','通过前后左右进行控制','控制球跑的更远','games/000001/RunBall'),('000002','StickMan','跑酷类',4.9,'S000002.png','B000002.jpg','xxxxxxxxxxxxxxxxxxxxxx','xxxxxxxxxxxxxxxxxxxxxx','games/000002/StickMan'),('000010','CarRush','赛车类',3.8,'S000010.png','B000010.jpg','xxxxxxxxxxxxxxxxxxxxxx','xxxxxxxxxxxxxxxxxxxxxx','games/000010/CarRush'),('000011','MonsterTruck','赛车类',4.6,'S000011.png','B000011.jpg','XXXXXXXXXXXXXX','XXXXXXXXXX','games/000011/MonsterTruck'),('000020','CatRun','射击类',5,'S000020.png','B000020.jpg','xxxxx','xxxxx','games/000020/CatRun'),('000021','FisherCat','射击类',5,'S000021.png','B000021.jpg','xxxxx','xxxxx','games/000021/FisherCat'),('000030','PirateBattle','塔防',5,'S000030.png','B000030.jpg','xxxxx','xxxxx','games/000030/PirateBattle'),('000031','ArrowDefense','塔防',5,'S000031.png','B000031.jpg','xxxxx','xxxxxx','games/000031/ArrowDefense'),('000040','PopStar','消除类',5,'S000040.png','B000040.jpg','xxxxx','xxxxx','games/000040/PopStar'),('000041','Zuma','消除类',5,'S000041.png','B000041.jpg','xxxxx','xxxxx','games/000041/Zuma');
/*!40000 ALTER TABLE `game_infor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_game_infor`
--

DROP TABLE IF EXISTS `new_game_infor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_game_infor` (
  `id` varchar(8) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `iconUrl` varchar(12) DEFAULT NULL,
  `imageUrl` varchar(12) DEFAULT NULL,
  `howto` varchar(300) DEFAULT NULL,
  `intro` varchar(300) DEFAULT NULL,
  `gameUrl` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_game_infor`
--

LOCK TABLES `new_game_infor` WRITE;
/*!40000 ALTER TABLE `new_game_infor` DISABLE KEYS */;
INSERT INTO `new_game_infor` VALUES ('000001','RunBall','跑酷类',5,'S000001.png','B000001.jpg','通过前后左右进行控制','控制球跑的更远','games/000001/RunBall'),('000002','StickMan','跑酷类',4.9,'S000002.png','B000002.jpg','xxxxxxxxxxxxxxxxxxxxxx','xxxxxxxxxxxxxxxxxxxxxx','games/000002/StickMan'),('000010','CarRush','赛车类',3.8,'S000010.png','B000010.jpg','xxxxxxxxxxxxxxxxxxxxxx','xxxxxxxxxxxxxxxxxxxxxx','games/000010/CarRush'),('000011','MonsterTruck','赛车类',4.6,'S000011.png','B000011.jpg','XXXXXXXXXXXXXX','XXXXXXXXXX','games/000011/MonsterTruck'),('000020','CatRun','射击类',5,'S000020.png','B000020.jpg','xxxxx','xxxxx','games/000020/CatRun'),('000021','FisherCat','射击类',5,'S000021.png','B000021.jpg','xxxxx','xxxxx','games/000021/FisherCat'),('000030','PirateBattle','塔防',5,'S000030.png','B000030.jpg','xxxxx','xxxxx','games/000030/PirateBattle'),('000031','ArrowDefense','塔防',5,'S000031.png','B000031.jpg','xxxxx','xxxxxx','games/000031/ArrowDefense'),('000040','PopStar','消除类',5,'S000040.png','B000040.jpg','xxxxx','xxxxx','games/000040/PopStar'),('000041','Zuma','消除类',5,'S000041.png','B000041.jpg','xxxxx','xxxxx','games/000041/Zuma');
/*!40000 ALTER TABLE `new_game_infor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-08 21:52:16
