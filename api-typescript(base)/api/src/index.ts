import app from '../src/app';

const port=process.env.PORT || 3000;

app.listen(()=>{
    console.log(`listenin on port ${port}`)
})