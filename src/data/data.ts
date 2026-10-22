import type { Question } from '../types/questions'

export const questions = [
    // FÁCIL (1–10)
    {
        id: 1,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual bicho faz Miau?',
        options: [
            { id: 'cat', text: 'Gato' },
            { id: 'dog', text: 'Cachorro' },
            { id: 'cow', text: 'Vaca' },
        ],
        correctAnswer: 'cat',
    },
    {
        id: 2,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Aponte o que começa com a letra A.',
        options: [
            { id: 'bee', text: 'Abelha' },
            { id: 'ball', text: 'Bola' },
            { id: 'car', text: 'Carro' },
        ],
        correctAnswer: 'bee',
    },
    {
        id: 3,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Coloque o peixinho dentro do aquário.',
        items: [{ id: 'fish', text: 'Peixinho' }],
        targets: [
            { id: 'aquarium', text: 'Aquário', correctItemId: 'fish' },
        ],
    },
    {
        id: 4,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual é a bola MAIOR?',
        options: [
            { id: 'small', text: 'Bola pequena' },
            { id: 'large', text: 'Bola grande' },
            { id: 'medium', text: 'Bola média' },
        ],
        correctAnswer: 'large',
    },
    {
        id: 5,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Quantos patinhos estão na lagoa?',
        options: [
            { id: 'one', text: '1' },
            { id: 'two', text: '2' },
            { id: 'three', text: '3' },
        ],
        correctAnswer: 'two',
    },
    {
        id: 6,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Onde tem MAIS maçãs?',
        options: [
            { id: 'one-apple', text: '1 maçã' },
            { id: 'four-apples', text: '4 maçãs' },
        ],
        correctAnswer: 'four-apples',
    },
    {
        id: 7,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Encontre o balão AZUL.',
        options: [
            { id: 'red', text: 'Vermelho' },
            { id: 'blue', text: 'Azul' },
            { id: 'yellow', text: 'Amarelo' },
        ],
        correctAnswer: 'blue',
    },
    {
        id: 8,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Coloque o passarinho no ninho.',
        items: [{ id: 'bird', text: 'Passarinho' }],
        targets: [
            { id: 'nest', text: 'Ninho', correctItemId: 'bird' },
        ],
    },
    {
        id: 9,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Encontre a sombra do porquinho.',
        items: [{ id: 'pig', text: 'Porquinho' }],
        targets: [
            { id: 'pig-shadow', text: 'Sombra do porquinho', correctItemId: 'pig' },
        ],
    },
    {
        id: 10,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Junte as duas partes da estrela.',
        items: [{ id: 'star-half', text: 'Metade da estrela' }],
        targets: [
            { id: 'star', text: 'Estrela completa', correctItemId: 'star-half' },
        ],
    },

    // MÉDIO (11–20)
    {
        id: 11,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Quantos pedaços tem a palavra SA-PO?',
        options: [
            { id: 'one', text: '1' },
            { id: 'two', text: '2' },
            { id: 'three', text: '3' },
        ],
        correctAnswer: 'two',
    },
    {
        id: 12,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'O que rima com PÃO?',
        options: [
            { id: 'hand', text: 'Mão' },
            { id: 'cat', text: 'Gato' },
            { id: 'house', text: 'Casa' },
        ],
        correctAnswer: 'hand',
    },
    {
        id: 13,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Coloque o sol lá no ALTO.',
        items: [{ id: 'sun', text: 'Sol' }],
        targets: [
            { id: 'top', text: 'Parte de cima', correctItemId: 'sun' },
        ],
    },
    {
        id: 14,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Organize os blocos do menor para o maior.',
        items: [
            { id: 'small', text: 'Bloco pequeno' },
            { id: 'medium', text: 'Bloco médio' },
            { id: 'large', text: 'Bloco grande' },
        ],
        targets: [
            { id: 'first', text: '1º lugar', correctItemId: 'small' },
            { id: 'second', text: '2º lugar', correctItemId: 'medium' },
            { id: 'third', text: '3º lugar', correctItemId: 'large' },
        ],
    },
    {
        id: 15,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Coloque 5 flores no vaso.',
        items: [
            { id: 'flower-1', text: 'Flor 1' },
            { id: 'flower-2', text: 'Flor 2' },
            { id: 'flower-3', text: 'Flor 3' },
            { id: 'flower-4', text: 'Flor 4' },
            { id: 'flower-5', text: 'Flor 5' },
            { id: 'flower-6', text: 'Flor 6' },
            { id: 'flower-7', text: 'Flor 7' },
            { id: 'flower-8', text: 'Flor 8' },
        ],
        targets: [
            {
                id: 'vase',
                text: 'Vaso',
                multiple: true,
                correctItemIds: [
                    'flower-1',
                    'flower-2',
                    'flower-3',
                    'flower-4',
                    'flower-5',
                ],
            },
        ],
    },
    {
        id: 16,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Qual número está faltando? 1, 2, __, 4.',
        items: [{ id: 'three', text: '3' }],
        targets: [
            { id: 'missing-number', text: 'Número faltando', correctItemId: 'three' },
        ],
    },
    {
        id: 17,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Guarde os brinquedos VERMELHOS na caixa.',
        items: [
            { id: 'red-ball', text: 'Bola vermelha' },
            { id: 'red-car', text: 'Carrinho vermelho' },
            { id: 'blue-ball', text: 'Bola azul' },
            { id: 'blue-car', text: 'Carrinho azul' },
        ],
        targets: [
            { id: 'red-ball-slot', text: 'Lugar da bola vermelha', correctItemId: 'red-ball' },
            { id: 'red-car-slot', text: 'Lugar do carrinho vermelho', correctItemId: 'red-car' },
        ],
    },
    {
        id: 18,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Quem mora na água?',
        options: [
            { id: 'frog', text: 'Sapo' },
            { id: 'shark', text: 'Tubarão' },
            { id: 'cat', text: 'Gato' },
        ],
        correctAnswer: 'shark',
    },
    {
        id: 19,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Qual animal é diferente dos outros?',
        options: [
            { id: 'white-rabbit-1', text: 'Coelho branco' },
            { id: 'white-rabbit-2', text: 'Coelho branco' },
            { id: 'brown-rabbit', text: 'Coelho marrom' },
        ],
        correctAnswer: 'brown-rabbit',
    },
    {
        id: 20,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Monte o quebra-cabeça do trenzinho.',
        items: [
            { id: 'train-top', text: 'Parte de cima' },
            { id: 'train-middle', text: 'Parte do meio' },
            { id: 'train-bottom', text: 'Parte de baixo' },
        ],
        targets: [
            { id: 'top-slot', text: 'Parte de cima do trem', correctItemId: 'train-top' },
            { id: 'middle-slot', text: 'Parte do meio do trem', correctItemId: 'train-middle' },
            { id: 'bottom-slot', text: 'Parte de baixo do trem', correctItemId: 'train-bottom' },
        ],
    },

    // DIFÍCIL (21–30)
    {
        id: 21,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Qual palavra é maior?',
        options: [
            { id: 'ox', text: 'BOI' },
            { id: 'hippo', text: 'HIPOPÓTAMO' },
        ],
        correctAnswer: 'hippo',
    },
    {
        id: 22,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Forme a palavra MA-CA-CO.',
        items: [
            { id: 'ma', text: 'MA' },
            { id: 'ca', text: 'CA' },
            { id: 'co', text: 'CO' },
        ],
        targets: [
            { id: 'syllable-1', text: '1ª sílaba', correctItemId: 'ma' },
            { id: 'syllable-2', text: '2ª sílaba', correctItemId: 'ca' },
            { id: 'syllable-3', text: '3ª sílaba', correctItemId: 'co' },
        ],
    },
    {
        id: 23,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Qual letra falta na palavra B_LA?',
        options: [
            { id: 'a', text: 'A' },
            { id: 'o', text: 'O' },
            { id: 'e', text: 'E' },
        ],
        correctAnswer: 'o',
    },
    {
        id: 24,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Coloque o pássaro EM CIMA da árvore e o cachorro EMBAIXO.',
        items: [
            { id: 'bird', text: 'Pássaro' },
            { id: 'dog', text: 'Cachorro' },
        ],
        targets: [
            { id: 'above-tree', text: 'Em cima da árvore', correctItemId: 'bird' },
            { id: 'below-tree', text: 'Embaixo da árvore', correctItemId: 'dog' },
        ],
    },
    {
        id: 25,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Mova o carrinho para a DIREITA.',
        items: [{ id: 'car', text: 'Carrinho' }],
        targets: [
            { id: 'right', text: 'Direita', correctItemId: 'car' },
        ],
    },
    {
        id: 26,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Temos 2 maçãs. Ganhei mais 1. Quantas ficaram?',
        options: [
            { id: 'two', text: '2' },
            { id: 'three', text: '3' },
            { id: 'four', text: '4' },
        ],
        correctAnswer: 'three',
    },
    {
        id: 27,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Tinham 3 passarinhos. 1 voou. Quantos sobraram?',
        options: [
            { id: 'one', text: '1' },
            { id: 'two', text: '2' },
            { id: 'three', text: '3' },
        ],
        correctAnswer: 'two',
    },
    {
        id: 28,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Complete a sequência: Círculo, Quadrado, Círculo, __.',
        items: [{ id: 'square', text: 'Quadrado' }],
        targets: [
            { id: 'missing-shape', text: 'Figura faltando', correctItemId: 'square' },
        ],
    },
    {
        id: 29,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Separe as comidas dos brinquedos.',
        items: [
            { id: 'apple', text: 'Maçã' },
            { id: 'bread', text: 'Pão' },
            { id: 'ball', text: 'Bola' },
            { id: 'doll', text: 'Boneca' },
        ],
        targets: [
            { id: 'food-1', text: 'Comida 1', correctItemId: 'apple' },
            { id: 'food-2', text: 'Comida 2', correctItemId: 'bread' },
            { id: 'toy-1', text: 'Brinquedo 1', correctItemId: 'ball' },
            { id: 'toy-2', text: 'Brinquedo 2', correctItemId: 'doll' },
        ],
    },
    {
        id: 30,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Encontre a cena onde está chovendo e o menino usa guarda-chuva.',
        options: [
            { id: 'sunny', text: 'Dia ensolarado' },
            { id: 'rain', text: 'Chuva com guarda-chuva' },
            { id: 'cloudy', text: 'Dia nublado' },
        ],
        correctAnswer: 'rain',
    },
] satisfies Question[]