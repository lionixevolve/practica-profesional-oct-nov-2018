DROP TABLE IF EXISTS `Animes`;

CREATE TABLE `Animes` (
  `idanime` int(11) NOT NULL AUTO_INCREMENT,
  `anime` varchar(100) DEFAULT NULL,
  `genero` varchar(11) DEFAULT NULL,
  `imagen`  image NULL,
  PRIMARY KEY (`idanime`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `animes` WRITE;

INSERT INTO `animes` VALUES (1,'Galleta',200,0.60),(2,'Sublime',150,1.50),(3,'Frugos',50,3.50);

UNLOCK TABLES;
