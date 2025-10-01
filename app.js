console.log("app.js funcionando");

const API = "http://localhost:3000/alunos";
const tbody = document.getElementById("tbody");

let editandoId = null;

// Função para carregar a tabela
async function carregarTabela() {
    if (!tbody) return; // Garante que a tabela existe na página

    tbody.innerHTML = "<tr><td colspan='9'>Carregando...</td></tr>";

    try {
        const resposta = await fetch(API);
        const alunos = await resposta.json();

        tbody.innerHTML = alunos.map(aluno => `
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.cep || "Não informado"}</td>
                <td>${aluno.uf || "Não informado"}</td>
                <td>${aluno.rua || "Não informado"}</td>
                <td>${aluno.numero || "Não informado"}</td>
                <td>${aluno.complemento || "Não informado"}</td>
                <td>
                    <a href="editar.html?id=${aluno.id}">
                        <button>Editar</button>
                    </a>
                    <button onclick="excluirAluno(${aluno.id})">Excluir</button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("Erro ao carregar alunos:", error);
        tbody.innerHTML = "<tr><td colspan='9'>Erro ao carregar alunos</td></tr>";
    }
}

window.excluirAluno = async function (id) {
    const confirmacao = confirm("Tem certeza que deseja excluir este aluno?");
    if (!confirmacao) return;

    try {
        const resposta = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        if (!resposta.ok) {
            throw new Error("Erro ao excluir aluno.");
        }

        carregarTabela();

    } catch (error) {
        console.error("Erro ao excluir aluno:", error);
        alert("Erro ao excluir aluno.");
    }
}

// Executa ao iniciar, só se for a página da lista
if (tbody) {
    carregarTabela();
}
