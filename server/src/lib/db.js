import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	database: Bun.env['DB_NAME'],
	user: Bun.env['DB_USER'],
	password: Bun.env['DB_PASS'],
	host: Bun.env['DB_HOST'],
	dateStrings: true,
});

export async function select(table, {
	offset = 0,
	limit = 10,
	orderBy = ['id'],
	queryBy = null,
	query = null,
}) {
	if (!table) return false;

	const sql = `
		SELECT * FROM ${table}
		${query && queryBy ? `
			WHERE ${queryBy}
			LIKE '%${query}%'
		` : ''}
		ORDER BY ${orderBy.join?.() || orderBy}
		LIMIT ${limit}
		OFFSET ${offset}
	`;

	return (await pool.query(sql))[0];
}

export default pool;
