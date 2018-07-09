CREATE DATABASE IF NOT EXISTS `zelda`;

USE `zelda`;

CREATE TABLE IF NOT EXISTS `zelda`.`account` (
  `idaccount` INT NOT NULL AUTO_INCREMENT,
  `account_firstname` VARCHAR(50) NOT NULL,
  `account_lastname` VARCHAR(50) NOT NULL,
  `account_login` VARCHAR(50) NOT NULL,
  `account_mail` VARCHAR(150) NOT NULL,
  `account_streetno` VARCHAR(10) NULL,
  `account_streetname` VARCHAR(150) NULL,
  `account_town` VARCHAR(150) NULL,
  `account_postalcode` VARCHAR(10) NULL,
  `account_country` VARCHAR(50) NULL,
  `account_password` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idaccount`),
  UNIQUE INDEX `account_login_UNIQUE` (`account_login` ASC))
ENGINE = InnoDB;