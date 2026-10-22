type Difficulty = 'Facil' | 'Médio' | 'Difícil'

export interface MultipleChoiceQuestion {
    id: number
    type: 'multiple-choice'
    difficulty: Difficulty
    question: string
    options: { 
        id: string
        text: string
        image?: string 
    }[]
    correctAnswer: string
}
  
  export type DragDropQuestion = {
    id: number;
    type: "drag-drop"
    difficulty: Difficulty
    question: string
    items: {
      id: string
      text: string
    }[]
    targets: {
      id: string
      text: string
      correctItemId: string
    }[]
  };
  
  export type Question =
    | MultipleChoiceQuestion
    | DragDropQuestion