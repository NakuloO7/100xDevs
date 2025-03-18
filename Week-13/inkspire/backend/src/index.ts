import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from 'hono/cors'

//you cannot globally define the prisma client because it .env file does not have a global access
//either you have to define the primsa client in each route or create a middleware for it

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET : string
  };
}>(); //typescript does not read the wrangler.jsonc file
//thus we have to explicitly define it to the hono
app.use('/api/*', cors())


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


export default app;
