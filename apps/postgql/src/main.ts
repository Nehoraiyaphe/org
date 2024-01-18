import express from 'express';
import postgraphile  from 'postgraphile'
import cors from "cors"


const app = express();
app.use(cors())

app.use (
    postgraphile(
        process.env.URL_LOCAL_POSTGRAS as string ,"public" ,   {
            watchPg:true,
            graphiql: true,
            enhanceGraphiql: true,
            jwtPgTypeIdentifier: 'public.token',
            jwtSecret: 'secret_key_%$%&*#@764khfg'
        }
        )
);
app.listen(3001,()=>{
    console.log('Server is running on port 3001')
    // func()
})