-- Drop the trigger
DROP TRIGGER IF EXISTS before_meal_insert;

-- Drop the unique index
DROP INDEX IF EXISTS meal_date_unique_idx ON meals;
