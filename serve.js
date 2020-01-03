var port = normalizePort(process.env.PORT || '3001');
var server = http.createServer(app);
server.listen(port);