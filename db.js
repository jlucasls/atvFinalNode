
const mysql = require("mysql2/promise");

const conexao = mysql.createPool(process.env.CONNECTION_STRING);

async function listaProduto(){
        const result = await conexao.query("SELECT * FROM produtos");
        return result[0];
}

async function listaProduto(id){
    const resultado = await conexao.query("SELECT * FROM produtos WHERE id=?;",[id]);
    return resultado[0];
}
async function inserirProduto(produto){
    const valores = [produto.nome, produto.quantidade, produto.preco]
    await conexao.query("INSERT INTO produtos(nome,quantidade,preco) VALUES (?,?,?);",valores);
  
}

async function alteraProduto (id,dado){
    const valores = [dado.nome, dado.quantidade, dado.preco, id];
    await conexao.query("UPDATE produtos SET nome=?,quantidade=?,preco=? WHERE id=?",valores);

}

async function removeProduto(id){
    const valores = [id];
    await conexao.query("DELETE FROM produtos WHERE id=?",valores);
}

module.exports = {
    listaProduto,
    inserirProduto,
    alteraProduto,
    removeProduto
}
