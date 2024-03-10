import app from './app';

const { PORT = 3000 } = Bun.env;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
