import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	database: Bun.env['DB_NAME'],
	user: Bun.env['DB_USER'],
	password: Bun.env['DB_PASS'],
	host: Bun.env['DB_HOST'],
	dateStrings: true,
});

export default pool;
