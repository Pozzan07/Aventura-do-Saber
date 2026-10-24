import type { Question } from '../types/questions'
// FÁCIL
import gato from '../assets/facil/pergunta01/gato.png'
import cachorro from '../assets/facil/pergunta01/cachorro.png'
import vaca from '../assets/facil/pergunta01/vaca.png'
import abelha from '../assets/facil/pergunta02/abelha.png'
import bola from '../assets/facil/pergunta02/bola.png'
import carro from '../assets/facil/pergunta02/carro.png'
import aquario from '../assets/facil/pergunta03/aquario.png'
import peixe from '../assets/facil/pergunta03/peixe.png'
import bolaG from '../assets/facil/pergunta04/bola_g.png'
import bolaM from '../assets/facil/pergunta04/bola_m.png'
import bolaP from '../assets/facil/pergunta04/bola_p.png'
import patos from '../assets/facil/pergunta05/patos.png'
import umaMaca from '../assets/facil/pergunta06/1maça.png'
import quatroMacas from '../assets/facil/pergunta06/4maças.png'
import duasMacas from '../assets/facil/pergunta06/2maças.png'
import balaoAmarelo from '../assets/facil/pergunta07/balao_amarelo.png'
import balaoVermelho from '../assets/facil/pergunta07/balao_vermelho.png'
import balaoAzul from '../assets/facil/pergunta07/bolao_azul.png'
import ninho from '../assets/facil/pergunta08/ninho.png'
import passaro from '../assets/facil/pergunta08/passaro.png'
import banana from '../assets/facil/pergunta10/banana.png'
import kiwi from '../assets/facil/pergunta10/kiwi.png'
import maca from '../assets/facil/pergunta10/maca.png'
// MÉDIO — imagens das perguntas 11–20
import layout11 from '../assets/medio/pergunta11/layout.png'
import casa from '../assets/medio/pergunta12/casa.png'
import gatoMedio from '../assets/medio/pergunta12/gato.png'
import mao from '../assets/medio/pergunta12/mao.png'
import pao from '../assets/medio/pergunta12/pao.png'
import ceu from '../assets/medio/pergunta13/ceu.png'
import sol from '../assets/medio/pergunta13/sol.png'
import blocoGrande from '../assets/medio/pergunta14/bloco_g.png'
import blocoMedio from '../assets/medio/pergunta14/bloco_m.png'
import blocoPequeno from '../assets/medio/pergunta14/bloco_p.png'
import flor1 from '../assets/medio/pergunta15/flor1.png'
import flor2 from '../assets/medio/pergunta15/flor2.png'
import flor3 from '../assets/medio/pergunta15/flor3.png'
import flor4 from '../assets/medio/pergunta15/flor4.png'
import flor5 from '../assets/medio/pergunta15/flor5.png'
import vaso from '../assets/medio/pergunta15/vaso.png'
import numero3 from '../assets/medio/pergunta16/3.png'
import layout16 from '../assets/medio/pergunta16/layout.png'
import bolaAzul from '../assets/medio/pergunta17/bola_azul.png'
import bolaVermelha from '../assets/medio/pergunta17/bola_vermelha.png'
import caixaAzul from '../assets/medio/pergunta17/caixa_azul.png'
import caixaVermelha from '../assets/medio/pergunta17/caixa_vermelha.png'
import carroAzul from '../assets/medio/pergunta17/carro_azul.png'
import carroVermelho from '../assets/medio/pergunta17/carro_vermelho.png'
import gato18 from '../assets/medio/pergunta18/gato.png'
import sapo from '../assets/medio/pergunta18/sapo.png'
import tubarao from '../assets/medio/pergunta18/tubarao.png'
import coelhoBranco from '../assets/medio/pergunta19/coelho_branco.png'
import coelhoBranco2 from '../assets/medio/pergunta19/coelho_branco2.png'
import coelhoMarrom from '../assets/medio/pergunta19/coelho_marrom.png'
import brinquedoFinal from '../assets/medio/pergunta20/brinquedo-final.png'
import brinquedoFrente from '../assets/medio/pergunta20/brinquedo-frente.png'
import brinquedoMeio from '../assets/medio/pergunta20/brinquedo-meio.png'
// DIFÍCIL imagens das perguntas 21-30
import boi from '../assets/dificil/pergunta21/boi.png'
import hipopotamo from '../assets/dificil/pergunta21/hipopotamo.png'
import silabaCa from '../assets/dificil/pergunta22/ca.png'
import silabaCo from '../assets/dificil/pergunta22/co.png'
import silabaMa from '../assets/dificil/pergunta22/ma.png'
import alternativaA from '../assets/dificil/pergunta23/alternativa-a.png'
import alternativaE from '../assets/dificil/pergunta23/alternativa-e.png'
import alternativaO from '../assets/dificil/pergunta23/alternativa-o.png'
import bola23 from '../assets/dificil/pergunta23/bola.png'
import arvore from '../assets/dificil/pergunta24/arvore.png'
import arvoregrama from '../assets/dificil/pergunta24/arvoregrama.png'
import cachorro24 from '../assets/dificil/pergunta24/cachorro.png'
import passaro24 from '../assets/dificil/pergunta24/passaro.png'
import alvoDireita from '../assets/dificil/pergunta25/alvo-direita.png'
import alvoEsquerda from '../assets/dificil/pergunta25/alvo-esquerda.png'
import carrinho25 from '../assets/dificil/pergunta25/carrinho.png'
import numero26_1 from '../assets/dificil/pergunta26/1.png'
import numero26_2 from '../assets/dificil/pergunta26/2.png'
import numero26_3 from '../assets/dificil/pergunta26/3.png'
import numero27_1 from '../assets/dificil/pergunta27/1.png'
import numero27_2 from '../assets/dificil/pergunta27/2.png'
import numero27_3 from '../assets/dificil/pergunta27/3.png'
import espacoVazio from '../assets/dificil/pergunta28/espaco-vazio.png'
import quadrado from '../assets/dificil/pergunta28/quadrado.png'
import circulo from '../assets/dificil/pergunta28/circulo.png'
import bandejaBrinquedos from '../assets/dificil/pergunta29/bandeja-brinquedos.png'
import bandejaComidas from '../assets/dificil/pergunta29/bandeja-comidas.png'
import bola29 from '../assets/dificil/pergunta29/bola.png'
import boneca from '../assets/dificil/pergunta29/boneca.png'
import maca29 from '../assets/dificil/pergunta29/maca.png'
import pao29 from '../assets/dificil/pergunta29/pao.png'
import cenaChuva from '../assets/dificil/pergunta30/cena-chuva-menino.png'
import cenaNublado from '../assets/dificil/pergunta30/cena-nublado.png'
import cenaSol from '../assets/dificil/pergunta30/cena-sol.png'
export const questions = [
    // FÁCIL (1–10)
    {
        id: 1,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual bicho faz Miau?',
        options: [
            { id: 'cat', text: 'Gato', image: gato },
            { id: 'dog', text: 'Cachorro', image: cachorro },
            { id: 'cow', text: 'Vaca', image: vaca },
        ],
        correctAnswer: 'cat',
    },
    {
        id: 2,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Aponte o que começa com a letra A.',
        options: [
            { id: 'bee', text: 'Abelha', image: abelha },
            { id: 'ball', text: 'Bola', image: bola },
            { id: 'car', text: 'Carro', image: carro },
        ],
        correctAnswer: 'bee',
    },
    {
        id: 3,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Coloque o peixinho dentro do aquário.',
        items: [{ id: 'fish', text: 'Peixinho', image: peixe }],
        targets: [
            { id: 'aquarium', text: 'Aquário', image: aquario, correctItemId: 'fish' },
        ],
    },
    {
        id: 4,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual é a bola MAIOR?',
        options: [
            { id: 'small', text: 'Bola pequena', image: bolaP },
            { id: 'large', text: 'Bola grande', image: bolaG },
            { id: 'medium', text: 'Bola média', image: bolaM },
        ],
        correctAnswer: 'large',
    },
    {
        id: 5,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Quantos patinhos estão na lagoa?',
        image: patos,
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
            { id: 'one-apple', text: '1 maçã', image: umaMaca },
            { id: 'four-apples', text: '4 maçãs', image: quatroMacas },
            { id: 'two-apples', text: "2 maças", image: duasMacas}
        ],
        correctAnswer: 'four-apples',
    },
    {
        id: 7,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Encontre o balão AZUL.',
        options: [
            { id: 'red', text: 'Vermelho', image: balaoVermelho },
            { id: 'yellow', text: 'Amarelo', image: balaoAmarelo },
            { id: 'blue', text: 'Azul', image: balaoAzul },
        ],
        correctAnswer: 'blue',
    },
    {
        id: 8,
        type: 'drag-drop',
        difficulty: 'Facil',
        question: 'Coloque o passarinho no ninho.',
        items: [{ id: 'bird', text: 'Passarinho', image: passaro }],
        targets: [
            { id: 'nest', text: 'Ninho', image: ninho, correctItemId: 'bird' },
        ],
    },
    {
        id: 9,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual desses animais produz leite.',
        options: [
            { id: 'cow', text: 'Vaca', image: vaca },
            { id: 'rabbit', text: 'Coelho', image: coelhoBranco },
            { id: 'dog', text: 'Cachorro', image: cachorro },
        ],
        correctAnswer: 'cow',
    },

    {
        id: 10,
        type: 'multiple-choice',
        difficulty: 'Facil',
        question: 'Qual dessas frutas é geralmente amarela quando está madura.',
        options: [
            { id: 'maca', text: 'Maça', image: maca },
            { id: 'kiwi', text: 'Kiwi', image: kiwi },
            { id: 'banana', text: 'Banana', image: banana },
        ],
        correctAnswer: 'banana',
    },
    // MÉDIO (11–20)
    // MÉDIO (11–20)
    {
        id: 11,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Quantos pedaços tem a palavra SA-PO?',
        image: layout11,
        options: [
            { id: 'one', text: '1' },
            { id: 'two', text: '2'},
            { id: 'three', text: '3'},
        ],
        correctAnswer: 'two',
    },
    {
        id: 12,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'O que rima com PÃO?',
        image: pao,
        options: [
            { id: 'hand', text: 'Mão', image: mao },
            { id: 'cat', text: 'Gato', image: gatoMedio },
            { id: 'house', text: 'Casa', image: casa },
        ],
        correctAnswer: 'hand',
    },
    {
        id: 13,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Coloque o sol lá no ALTO.',
        items: [{ id: 'sun', text: 'Sol', image: sol }],
        targets: [
            { id: 'top', text: 'Céu', image: ceu, correctItemId: 'sun' },
        ],
    },
    {
        id: 14,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Organize os blocos do menor para o maior.',
        items: [
            { id: 'small', text: '', image: blocoPequeno },
            { id: 'medium', text: '', image: blocoMedio },
            { id: 'large', text: '', image: blocoGrande },
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
            { id: 'flower-1', text: '', image: flor1 },
            { id: 'flower-2', text: '', image: flor2 },
            { id: 'flower-3', text: '', image: flor3 },
            { id: 'flower-4', text: '', image: flor4 },
            { id: 'flower-5', text: '', image: flor5 },
        ],
        targets: [
            {
                id: 'vase',
                text: 'Vaso',
                image: vaso,
                multiple: true,
                correctItemIds: ['flower-1', 'flower-2', 'flower-3', 'flower-4', 'flower-5'],
            },
        ],
    },
    {
        id: 16,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Qual número está faltando? 1, 2, __, 4.',
        image: layout16,
        items: [
            { id: 'three', text: '', image: numero3 },
        ],
        targets: [
            { id: 'missing-number', text: 'Número faltando', correctItemId: 'three' },
        ],
    },
    {
        id: 17,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Guarde os brinquedos VERMELHOS na caixa VERMELHA e os AZUIS na caixa AZUL.',
        items: [
            { id: 'red-ball', text: 'Bola vermelha', image: bolaVermelha },
            { id: 'red-car', text: 'Carrinho vermelho', image: carroVermelho },
            { id: 'blue-ball', text: 'Bola azul', image: bolaAzul },
            { id: 'blue-car', text: 'Carrinho azul', image: carroAzul },
        ],
        targets: [
            { id: 'red-box', text: 'Caixa vermelha', image: caixaVermelha, multiple: true, correctItemIds: ['red-ball', 'red-car'] },
            { id: 'blue-box', text: 'Caixa azul', image: caixaAzul, multiple: true, correctItemIds: ['blue-ball', 'blue-car'] },
        ],
    },
    {
        id: 18,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Quem mora na água?',
        options: [
            { id: 'frog', text: 'Sapo', image: sapo },
            { id: 'shark', text: 'Tubarão', image: tubarao },
            { id: 'cat', text: 'Gato', image: gato18 },
        ],
        correctAnswer: 'shark',
    },
    {
        id: 19,
        type: 'multiple-choice',
        difficulty: 'Médio',
        question: 'Qual animal é diferente dos outros?',
        options: [
            { id: 'white-rabbit-1', text: 'Coelho branco', image: coelhoBranco },
            { id: 'white-rabbit-2', text: 'Coelho branco', image: coelhoBranco2 },
            { id: 'brown-rabbit', text: 'Coelho marrom', image: coelhoMarrom },
        ],
        correctAnswer: 'brown-rabbit',
    },
    {
        id: 20,
        type: 'drag-drop',
        difficulty: 'Médio',
        question: 'Monte o quebra-cabeça do trenzinho.',
        image: brinquedoFinal,
        items: [
            { id: 'train-front', text: 'Parte da frente', image: brinquedoFrente },
            { id: 'train-middle', text: 'Parte do meio', image: brinquedoMeio },
            { id: 'train-end', text: 'Parte final', image: brinquedoFinal },
        ],
        targets: [
            { id: 'front-slot', text: 'Parte da frente', correctItemId: 'train-front' },
            { id: 'middle-slot', text: 'Parte do meio', correctItemId: 'train-middle' },
            { id: 'end-slot', text: 'Parte final', correctItemId: 'train-end' },
        ],
    },
    {
        id: 21,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Qual palavra é maior?',
        options: [
            { id: 'ox', text: 'BOI', image: boi },
            { id: 'hippo', text: 'HIPOPÓTAMO', image: hipopotamo },
            { id: 'coelho', text: 'COELHO', image: coelhoMarrom}
        ],
        correctAnswer: 'hippo',
    },
    {
        id: 22,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Forme a palavra MA-CA-CO.',
        items: [
            { id: 'co', text: '', image: silabaCo },
            { id: 'ma', text: '', image: silabaMa },
            { id: 'ca', text: '', image: silabaCa },
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
        image: bola23,
        options: [
            { id: 'a', text: '', image: alternativaA },
            { id: 'o', text: '', image: alternativaO },
            { id: 'e', text: '', image: alternativaE },
        ],
        correctAnswer: 'o',
    },
    {
        id: 24,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Coloque o pássaro EM CIMA da árvore e o cachorro EMBAIXO.',
        items: [
            { id: 'bird', text: 'Pássaro', image: passaro24 },
            { id: 'dog', text: 'Cachorro', image: cachorro24 },
        ],
        targets: [
            { id: 'above-tree', text: 'Em cima da árvore', image: arvore, correctItemId: 'bird' },
            { id: 'below-tree', text: 'Embaixo da árvore', image: arvoregrama, correctItemId: 'dog' },
        ],
    },
    {
        id: 25,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Mova o carrinho para a DIREITA.',
        items: [{ id: 'car', text: 'Carrinho', image: carrinho25 }],
        targets: [
            { id: 'left', text: 'Esquerda', image: alvoEsquerda, correctItemId: '' },
            { id: 'right', text: 'Direita', image: alvoDireita, correctItemId: 'car' },
        ],
    },
    {
        id: 26,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Temos 2 maçãs. Ganhei mais 1. Quantas ficaram?',
        options: [
            { id: 'one', text: '', image: numero26_1 },
            { id: 'two', text: '', image: numero26_2 },
            { id: 'three', text: '', image: numero26_3 },
        ],
        correctAnswer: 'three',
    },
    {
        id: 27,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Tinham 3 passarinhos. 1 voou. Quantos sobraram?',
        options: [
            { id: 'one', text: '', image: numero27_1 },
            { id: 'two', text: '', image: numero27_2 },
            { id: 'three', text: '', image: numero27_3 },
        ],
        correctAnswer: 'two',
    },
    {
        id: 28,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Complete a sequência: Círculo, Quadrado, Círculo, __.',
        image: espacoVazio,
        items: [
            { id: 'square', text: 'Quadrado', image: quadrado },
            { id: 'circle', text: 'Circulo', image: circulo }
        ],
        targets: [
            { id: 'missing-shape', text: 'Figura faltando', image: espacoVazio, correctItemId: 'square' },
            
        ],
    },
    {
        id: 29,
        type: 'drag-drop',
        difficulty: 'Difícil',
        question: 'Separe as comidas dos brinquedos.',
        items: [
            { id: 'apple', text: 'Maçã', image: maca29 },
            { id: 'bread', text: 'Pão', image: pao29 },
            { id: 'ball', text: 'Bola', image: bola29 },
            { id: 'doll', text: 'Boneca', image: boneca },
        ],
        targets: [
            { id: 'food', text: 'Comidas', image: bandejaComidas, multiple: true, correctItemIds: ['apple', 'bread'] },
            { id: 'toys', text: 'Brinquedos', image: bandejaBrinquedos, multiple: true, correctItemIds: ['ball', 'doll'] },
        ],
    },
    {
        id: 30,
        type: 'multiple-choice',
        difficulty: 'Difícil',
        question: 'Encontre a cena onde está chovendo e o menino usa guarda-chuva.',
        options: [
            { id: 'sunny', text: '', image: cenaSol },
            { id: 'rain', text: '', image: cenaChuva },
            { id: 'cloudy', text: '', image: cenaNublado },
        ],
        correctAnswer: 'rain',
    },
] satisfies Question[]
