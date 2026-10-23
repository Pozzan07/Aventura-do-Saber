export type Difficulty = 'Facil' | 'Médio' | 'Difícil'

export interface QuestionBase {
    id: number
    difficulty: Difficulty
    question: string
    image?: string
}

export interface MultipleChoiceQuestion extends QuestionBase {
    type: 'multiple-choice'
    options: {
        id: string
        text: string
        image?: string
    }[]
    correctAnswer: string
}

export interface DragDropQuestion extends QuestionBase {
    type: 'drag-drop'
    items: {
        id: string
        text: string
        image?: string
    }[]
    targets: {
        id: string
        text: string
        image?: string
        correctItemId?: string
        correctItemIds?: string[]
        multiple?: boolean
    }[]
}

export type Question = MultipleChoiceQuestion | DragDropQuestion