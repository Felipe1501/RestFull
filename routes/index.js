module.exports = (app)=>{

app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/hmtl');
    res.end('<h1>Olá</h1>');
    });

};