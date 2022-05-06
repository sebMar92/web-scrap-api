const app = require('./src/app.js');

app.listen(process.env.PORT || 3001, () => {
  console.log('%s listening at 3001'); // eslint-disable-line no-console
});
