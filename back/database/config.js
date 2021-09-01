const pg =  require('pg');

const db = new pg.Pool({
    user: "postgres",
    password: "1234" ,
    host: "localhost",
    database: "empresa",
    port: 5432,
})

db.on('connect',() =>{
    console.log('conectado com sucesso!');
});

module.exports = {
    query: (text, params) => db.query(text, params),
}
