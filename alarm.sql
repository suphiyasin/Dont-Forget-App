-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 15 Tem 2022, 05:59:19
-- Sunucu sürümü: 8.0.27
-- PHP Sürümü: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `alarm`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `gorevliste`
--

DROP TABLE IF EXISTS `gorevliste`;
CREATE TABLE IF NOT EXISTS `gorevliste` (
  `gorev` text COLLATE utf8_turkish_ci NOT NULL,
  `tarih` text COLLATE utf8_turkish_ci NOT NULL,
  `ayrinti` text COLLATE utf8_turkish_ci NOT NULL,
  `Createx` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Statu` int NOT NULL,
  `ID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `gorevliste`
--

INSERT INTO `gorevliste` (`gorev`, `tarih`, `ayrinti`, `Createx`, `Statu`, `ID`) VALUES
('netflix subscription', '17/07/2022', 'cancel netflix subscription from credit card ending with 3802', '2022-07-15 07:21:34', 0, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
