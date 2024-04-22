ALTER TABLE meals ADD CONSTRAINT unique_meal_type_date UNIQUE (meal_type, date);
