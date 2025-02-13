import { Hono } from 'hono'

const app = new Hono()

//middleware using hono
const authMiddleware = async(c : any, next : any) =>{
  if(c.req.header("Authorization")){
    //write the validation logic
    await next();
  }else{
    return c.text("You don't have access");
  }
}

app.use(authMiddleware);


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/name', async(c) => {
  const body = await c.req.json();
  const name = body.name;
  const header = c.req.header("Authorization");
  const param = c.req.query("param")

  // console.log(body);

  return c.json({
    message : (`Hello, ${name} !`),
    header : (header),
    queryParam : (param)
  })
})

export default app
