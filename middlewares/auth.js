const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).send('Access denied. No credentials sent.');

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username === process.env.AUTH_USER && password === process.env.AUTH_PASS) {
        next();
    } else {
        res.status(401).send('Access denied. Invalid credentials.');
    }
};

export default basicAuth;