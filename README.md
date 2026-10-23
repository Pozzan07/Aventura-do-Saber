# 🎓 AVENTURA DO SABER

<div align="center">

![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-yellow)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)

### 🧒 Um jogo educativo infantil para aprender brincando

[🎮 Jogar online](COLOCAR O LINK DPS)

</div>

---

## 📖 Sobre o Projeto

O **Aventura do Saber** é um jogo educativo interativo criado para tornar o aprendizado mais divertido. A criança informa seu nome, escolhe um nível de dificuldade e responde a desafios sobre linguagem, números, formas, cores, animais e observação.

O jogo possui 30 perguntas divididas em três níveis. As atividades combinam perguntas de múltipla escolha e interações de arrastar e soltar.

---

## 🎯 Objetivos do Projeto

- 📚 Incentivar o aprendizado por meio de atividades lúdicas
- 🎮 Aplicar elementos de gamificação à experiência educativa
- 🧠 Estimular atenção, observação e raciocínio
- 🧩 Oferecer desafios variados de acordo com o nível escolhido
- 👧 Criar uma experiência simples e acolhedora para o público infantil

---

## 🧩 Funcionalidades

- ✅ Entrada do nome da criança
- ✅ Três níveis de dificuldade: Fácil, Médio e Difícil
- ✅ 10 perguntas em cada nível
- ✅ Perguntas de múltipla escolha
- ✅ Atividades interativas de arrastar e soltar
- ✅ Indicador de progresso e pontuação durante a partida
- ✅ 10 pontos por resposta correta
- ✅ Tela de resultado ao final da rodada
- ✅ Opções para jogar novamente ou voltar ao menu

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| React 19 | Construção da interface em componentes |
| TypeScript 6 | Tipagem do código da aplicação |
| Vite 8 | Servidor de desenvolvimento e build de produção |
| dnd-kit | Interações de arrastar e soltar |
| CSS | Estilização da interface |
| Git & GitHub | Versionamento e hospedagem do código |

---

## 👥 Integrantes`r`n`r`nProjeto desenvolvido pelo **Grupo 17** como atividade de curricularização.

---

## 📁 Estrutura do Projeto

```text
📦 Curriculariza-o-grupo-17
 ┣ 📂 src
 ┃ ┣ 📂 assets                 # Recursos visuais
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 dificuldade          # Escolha do nível
 ┃ ┃ ┣ 📂 inicio               # Tela inicial
 ┃ ┃ ┣ 📂 pergunta             # Fluxo e componentes das perguntas
 ┃ ┃ ┃ ┗ 📂 tiposPergunta      # Múltipla escolha e arrastar/soltar
 ┃ ┃ ┗ 📂 resultado            # Resultado e opções de reinício
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📜 data.ts              # Perguntas e alternativas do jogo
 ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 questions.ts         # Tipos das perguntas
 ┃ ┣ 📜 App.tsx                # Fluxo principal da aplicação
 ┃ ┣ 📜 App.css
 ┃ ┣ 📜 index.css
 ┃ ┗ 📜 main.tsx               # Ponto de entrada
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## ❓ Perguntas do Jogo

### 🟢 Nível Fácil

1. Qual bicho faz Miau?
2. Aponte o que começa com a letra A.
3. Coloque o peixinho dentro do aquário.
4. Qual é a bola MAIOR?
5. Quantos patinhos estão na lagoa?
6. Onde tem MAIS maçãs?
7. Encontre o balão AZUL.
8. Coloque o passarinho no ninho.
9. Encontre a sombra do porquinho.
10. Junte as duas partes da estrela.

### 🟡 Nível Médio

1. Quantos pedaços tem a palavra SA-PO?
2. O que rima com PÃO?
3. Coloque o sol lá no ALTO.
4. Organize os blocos do menor para o maior.
5. Coloque 5 flores no vaso.
6. Qual número está faltando? 1, 2, __, 4.
7. Guarde os brinquedos VERMELHOS na caixa.
8. Quem mora na água?
9. Qual animal é diferente dos outros?
10. Monte o quebra-cabeça do trenzinho.

### 🔴 Nível Difícil

1. Qual palavra é maior?
2. Forme a palavra MA-CA-CO.
3. Qual letra falta na palavra B_LA?
4. Coloque o pássaro EM CIMA da árvore e o cachorro EMBAIXO.
5. Mova o carrinho para a DIREITA.
6. Temos 2 maçãs. Ganhei mais 1. Quantas ficaram?
7. Tinham 3 passarinhos. 1 voou. Quantos sobraram?
8. Complete a sequência: Círculo, Quadrado, Círculo, __.
9. Separe as comidas dos brinquedos.
10. Encontre a cena onde está chovendo e o menino usa guarda-chuva.

---

## 🚀 Executar Localmente

Para executar o projeto na sua máquina, instale [Node.js](https://nodejs.org/) (versão 20.19+ ou 22.12+) e npm. Em seguida:

```bash
git clone https://github.com/Pozzan07/Curriculariza-o-grupo-17
cd Curriculariza-o-grupo-17
npm install
npm run dev
```

Abra no navegador o endereço local que o Vite mostrar no terminal.

### Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica o TypeScript e gera a versão de produção em `dist/` |
| `npm run preview` | Executa uma prévia local da build |
| `npm run lint` | Verifica o código com ESLint |

---

## 🌐 Publicação

O endereço público do jogo será adicionado em **Jogar online** no início deste README após a publicação. A plataforma e o link de hospedagem dependem da configuração escolhida para o projeto.

---

## 📄 Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).

