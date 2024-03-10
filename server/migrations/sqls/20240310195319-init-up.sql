CREATE TABLE `users` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE (`username`)
);

CREATE TABLE `foods` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`calories` float NOT NULL,
	`protein` float NOT NULL,
	`fats` float NOT NULL,
	`carbs` float NOT NULL,
	`sugars` float NOT NULL,
	`salt` float DEFAULT NULL,
	`unit` enum('g','ml') NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `recipes` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`user_id` INT unsigned NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

CREATE TABLE `ingredients` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`food_id` INT unsigned NOT NULL,
	`recipe_id` INT unsigned NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON DELETE CASCADE,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE
);

CREATE TABLE `meals` (
	`id` INT unsigned NOT NULL AUTO_INCREMENT,
	`date` date NOT NULL DEFAULT curdate(),
	`meal_type` enum('breakfast','lunch','dinner') NOT NULL,
	`user_id` INT unsigned NOT NULL,
	`recipe_id` INT unsigned NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE
);
