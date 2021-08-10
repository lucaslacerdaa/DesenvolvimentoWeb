const pool = require("../dbs/postgres");

exports.save = async (paciente) => {
    const result = await pool.query(
        "INSERT INTO pacientes(nome, sobrenome, cpf, idade, peso, telefone, email, rua, bairro, cidade, estado) VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;",
        [paciente.nome, paciente.sobrenome, paciente.cpf, paciente.idade, paciente.peso, paciente.telefone, paciente.email, paciente.rua, paciente.bairro, paciente.cidade, paciente.estado]
    );
    return result.rows[0];
};

exports.findAll = async () => {
    const result = await pool.query("SELECT * FROM pacientes;");
    return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE id=$1;", [id]);
    return result.rows[0];
};
