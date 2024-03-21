-- Add a unique index on meal_type and date
CREATE UNIQUE INDEX meal_date_unique_idx ON meals (meal_type, date);

-- Create a BEFORE INSERT trigger
DELIMITER //
CREATE TRIGGER before_meal_insert
BEFORE INSERT ON meals
FOR EACH ROW
BEGIN
    IF EXISTS (SELECT 1 FROM meals WHERE meal_type = NEW.meal_type AND date = NEW.date) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Duplicate meal entry for the same type and date';
    END IF;
END;
//
DELIMITER ;
