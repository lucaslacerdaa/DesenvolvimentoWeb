const pool = require("../dbs/postgres");

exports.findAll = async () => {
 const result = await pool.query("SELECT * FROM login;");
 return result.rows;
};

exports.save = async (user) => {
    const result = await pool.query(
        "INSERT INTO login(nome, senha) VALUES ($1,$2) RETURNING *;",
        [user.nome, user.senha]
    );
    return result.rows[0];
};
