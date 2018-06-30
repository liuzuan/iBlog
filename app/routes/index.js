import blog from "./blog";
import source from "./source";
import gallery from "./gallery";
import message from './message';
import about from './about';

export default app => {
  app.use('/', blog);
  app.use('/source', source);
  app.use('/gallery', gallery);
  app.use('/message', message);
  app.use('/about', about);
}