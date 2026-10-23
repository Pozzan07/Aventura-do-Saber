# Aventura do Saber

Jogo educativo infantil desenvolvido como projeto de curricularização. A criança informa o nome, escolhe um nível de dificuldade e responde a desafios de conhecimentos básicos em uma interface lúdica.

## Sobre o projeto

O **Aventura do Saber** oferece três níveis de dificuldade — Fácil, Médio e Difícil — com 10 perguntas em cada nível. As atividades combinam perguntas de múltipla escolha e desafios interativos de arrastar e soltar. Cada resposta correta vale 10 pontos.

## Funcionalidades

- Tela inicial para informar o nome da pessoa que vai jogar.
- Seleção entre os níveis Fácil, Médio e Difícil.
- 30 perguntas no total, divididas em 10 perguntas por nível.
- Questões de múltipla escolha.
- Questões interativas de arrastar e soltar.
- Indicador de pergunta, nível, progresso e pontuação durante a partida.
- Tela de resultado com opções para jogar novamente ou voltar ao menu.

## Tecnologias

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 6
- [Vite](https://vite.dev/) 8
- [dnd-kit](https://dndkit.com/) para interações de arrastar e soltar
- CSS

## Requisitos

- [Node.js](https://nodejs.org/) versão 20.19 ou superior, ou 22.12 ou superior.
- npm, incluído com o Node.js.

## Como executar localmente

1. Clone este repositório:

   ```bash
   git clone (https://github.com/Pozzan07/Curriculariza-o-grupo-17)
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Curriculariza-o-grupo-17
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço local exibido no terminal. Por padrão, o Vite usa `http://localhost:5173`.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção na pasta `dist/`. |
| `npm run preview` | Abre localmente uma prévia da versão de produção. Execute `npm run build` antes. |
| `npm run lint` | Executa o ESLint para verificar o código. |

## Estrutura do projeto

```text
src/
├── assets/                         # Recursos estáticos importados pela aplicação
├── components/
│   ├── dificuldade/                # Seleção do nível de dificuldade
│   ├── inicio/                     # Tela inicial e entrada do nome
│   ├── pergunta/
│   │   └── tiposPergunta/          # Múltipla escolha e arrastar e soltar
│   └── resultado/                  # Resultado e opções de reinício
├── data/
│   └── data.ts                     # Perguntas, alternativas e níveis
├── types/
│   └── questions.ts                # Tipos das perguntas
├── App.tsx                         # Fluxo principal da aplicação
├── App.css                         # Estilos principais
├── index.css                       # Estilos globais
└── main.tsx                        # Ponto de entrada React
```

## Conteúdo das perguntas

As perguntas estão em `src/data/data.ts`. Cada pergunta possui um nível (`Facil`, `Médio` ou `Difícil`) e um tipo:

- `multiple-choice`: pergunta com alternativas.
- `drag-drop`: atividade em que os itens devem ser arrastados para os alvos correspondentes.

Para adicionar ou editar perguntas, mantenha o formato definido em `src/types/questions.ts` e confira se o valor do nível corresponde a um dos níveis usados pela aplicação.

## Build para produção

Gere os arquivos otimizados com:

```bash
npm run build
```

O resultado será salvo em `dist/`. Para visualizar essa versão localmente:

```bash
npm run preview
```

## Licença

Este projeto está sob a licença [MIT](LICENSE).
