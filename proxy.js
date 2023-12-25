// proxy.js
const http = require('http');
const https = require('https');

http.createServer((req, res) => {
    const options = {
        hostname: 'gitee.com',
        path: '/wrq6/wrq6/issues/I8QJF4',
        method: 'GET',
    };

    const proxy = https.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);

        proxyRes.on('data', (chunk) => {
            res.write(chunk);
        });

        proxyRes.on('end', () => {
            res.end();
        });
    });

    proxy.on('error', (err) => {
        console.error('Proxy error:', err.message);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });

    proxy.end();
}).listen(3000, () => {
    console.log('Proxy server listening on port 3000');
});
