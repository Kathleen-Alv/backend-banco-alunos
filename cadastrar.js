console.log("cadastro.js funcionando");

const API = 'http://localhost:3000/alunos';

// Captura dos elementos do formulário
const formAluno = document.getElementById("form-aluno");
const inputNome = document.getElementById("nome");
const inputCpf = document.getElementById("cpf");
const inputCep = document.getElementById("cep");
const inputUf = document.getElementById("uf");
const inputRua = document.getElementById("rua");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");

// Evento de envio do formulário
formAluno.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    // Validação básica
    if (!inputNome.value.trim() || !inputCpf.value.trim()) {
        alert("Gentileza preencher os campos obrigatórios: Nome e CPF.");
        return;
    }

    // Monta o objeto aluno
    const aluno = {
        nome: inputNome.value.trim(),
        cpf: inputCpf.value.trim(),
        cep: inputCep.value.trim() || null,
        uf: inputUf.value.trim() || null,
        rua: inputRua.value.trim() || null,
        numero: inputNumero.value.trim() || null,
        complemento: inputComplemento.value.trim() || null
    };

    try {
        const resposta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno)
        });

        if (resposta.status === 201) {
            alert("Aluno cadastrado com sucesso!");
            formAluno.reset(); // limpa o formulário
        } else {
            const erro = await resposta.json();
            console.error("Erro ao cadastrar:", erro);
            alert("Erro ao cadastrar aluno.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro na conexão com o servidor.");
    }
});
