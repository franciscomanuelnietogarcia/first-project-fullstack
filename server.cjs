const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

// Добавляем middleware для добавления заголовка Content-Range
server.use((req, res, next) => {
  const totalCount = router.db.getState().users.length; // Замените users на имя вашей коллекции
  res.header('Content-Range', `users 0-${totalCount - 1}/${totalCount}`);
  next();
});

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
