const mongoose = require("mongoose");

const alunosSchema = new mongoose.Schema({
  nome: { type: String, required: [true, "Inserir nome"] },
  email: {
    type: String,
    required: [true, "Inserir email"],
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Email inválido. Use um email com domínio válido",
    ],
  },
  cpf: {
    type: String,
    required: [true, 'Inserir CPF'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(v);
      },
      message: props => `${props.value} não é um CPF válido!`
    }
  }
});

module.exports = mongoose.model("Aluno", alunosSchema);