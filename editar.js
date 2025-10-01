const urlParametro = new URLSearchParams(window.location.search);
const id = urlParametro.get("id");

console.log("ID do aluno para editar:", id);

const API = 'http://localhost:3000/alunos';

// Carrega os dados do aluno
async function carregarAluno() {
    if (!id) {
        alert("Nenhum aluno selecionado para edição");
        return;
    }

    try {
        const resposta = await fetch(`${API}/${id}`);
        if (!resposta.ok) throw new Error("Erro ao buscar aluno");

        const aluno = await resposta.json();
        console.log("Aluno carregado:", aluno);

        document.getElementById("id").value = aluno.id;
        document.getElementById("nome").value = aluno.nome;
        document.getElementById("cpf").value = aluno.cpf;
        document.getElementById("cep").value = aluno.cep || "";
        document.getElementById("uf").value = aluno.uf || "";
        document.getElementById("rua").value = aluno.rua || "";
        document.getElementById("numero").value = aluno.numero || "";
        document.getElementById("complemento").value = aluno.complemento || "";
    } catch (error) {
        console.error("Erro ao carregar aluno para edição:", error);
        alert("Erro ao carregar aluno para edição.");
    }
}

// Envia os dados atualizados
document.getElementById("form-edicao").addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const aluno = {
        nome: document.getElementById("nome").value.trim(),
        cpf: document.getElementById("cpf").value.trim(),
        cep: document.getElementById("cep").value.trim() || null,
        uf: document.getElementById("uf").value.trim() || null,
        rua: document.getElementById("rua").value.trim() || null,
        numero: document.getElementById("numero").value.trim() || null,
        complemento: document.getElementById("complemento").value.trim() || null
    };

    if (!aluno.nome || !aluno.cpf) {
        alert("Nome e CPF são obrigatórios.");
        return;
    }

    try {
        const resposta = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno)
        });

        if (!resposta.ok) throw new Error("Erro ao atualizar aluno.");

        alert("Aluno atualizado com sucesso!");
        window.location.href = "index.html";

    } catch (error) {
        console.error("Erro ao atualizar aluno:", error);
        alert("Erro ao atualizar aluno.");
    }
});

carregarAluno();
