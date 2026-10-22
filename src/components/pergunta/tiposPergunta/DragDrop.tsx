import { useEffect, useRef, useState } from 'react'
import {
    DndContext,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
    useDraggable,
    useDroppable,
    type DragEndEvent,
} from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import type { DragDropQuestion } from '../../../types/questions'
import "./drag-drop.css"

type DragDropProps = {
    question: DragDropQuestion
    onAnswer: (
        questionId: number,
        answerId: string,
        isCorrect: boolean
    ) => void
    onNext: () => void
}

type Placements = Record<string, string[]>

function DraggableItem({
    id,
    text,
    disabled,
}: {
    id: string
    text: string
    disabled: boolean
}) {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({ id, disabled })

    return (
        <button
            ref={setNodeRef}
            type="button"
            className={`drag-item ${isDragging ? 'dragging' : ''}`}
            style={{
                transform: CSS.Translate.toString(transform),
                opacity: isDragging ? 0.4 : 1,
            }}
            {...listeners}
            {...attributes}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

function DropTarget({
    id,
    text,
    items,
    disabled,
}: {
    id: string
    text: string
    items: { id: string; text: string }[]
    disabled: boolean
}) {
    const { isOver, setNodeRef } = useDroppable({
        id,
        disabled,
    })

    return (
        <div
            ref={setNodeRef}
            className={`drop-target ${isOver ? 'target-hover' : ''}`}
        >
            <span className="target-label">{text}</span>

            <div className="target-items">
                {items.length > 0 ? (
                    items.map(item => (
                        <span className="placed-item" key={item.id}>
                            {item.text}
                        </span>
                    ))
                ) : (
                    <span className="target-placeholder">
                        Solte aqui
                    </span>
                )}
            </div>
        </div>
    )
}

export function DragDrop({
    question,
    onAnswer,
    onNext,
}: DragDropProps) {
    const [placements, setPlacements] = useState<Placements>({})
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
    const [answered, setAnswered] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 },
        }),
        useSensor(TouchSensor, {
            activationConstraint: { delay: 150, tolerance: 8 },
        }),
    )

    useEffect(() => {
        setPlacements({})
        setFeedback(null)
        setAnswered(false)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [question.id])

    function handleDragEnd(event: DragEndEvent) {
        if (answered || !event.over) return

        const itemId = String(event.active.id)
        const targetId = String(event.over.id)
        const target = question.targets.find(t => t.id === targetId)

        if (!target) return

        setPlacements(previous => {
            const next: Placements = {}

            // Remove the dragged item from its previous location.
            for (const [id, itemIds] of Object.entries(previous)) {
                next[id] = itemIds.filter(id => id !== itemId)
            }

            const currentItems = next[targetId] ?? []

            // A target accepts one item unless multiple is enabled.
            if (!target.multiple && currentItems.length > 0) {
                return previous
            }

            next[targetId] = [...currentItems, itemId]

            return next
        })
    }

    function handleRemove(itemId: string) {
        if (answered) return

        setPlacements(previous => {
            const next: Placements = {}

            for (const [targetId, itemIds] of Object.entries(previous)) {
                next[targetId] = itemIds.filter(id => id !== itemId)
            }

            return next
        })
    }

    const placedIds = Object.values(placements).flat()

    const expectedCount = question.targets.reduce(
        (total, target) =>
            total +
            (target.correctItemIds?.length ??
                (target.correctItemId ? 1 : 0)),
        0,
    )

    const canCheck = placedIds.length >= expectedCount

    function checkAnswer() {
        if (answered || !canCheck) return

        const isCorrect = question.targets.every(target => {
            const expected =
                target.correctItemIds ??
                (target.correctItemId ? [target.correctItemId] : [])

            const actual = placements[target.id] ?? []

            return (
                expected.length === actual.length &&
                expected.every(id => actual.includes(id))
            )
        })

        setFeedback(isCorrect ? 'correct' : 'wrong')
        setAnswered(true)

        onAnswer(question.id, '', isCorrect)

        timeoutRef.current = setTimeout(onNext, 1200)
    }

    return (
        <div className="drag-drop">
            <h2>{question.question}</h2>

            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <div className="drag-items">
                    {question.items.map(item => {
                        const isPlaced = placedIds.includes(item.id)

                        return (
                            <div className="item-container" key={item.id}>
                                {!isPlaced ? (
                                    <DraggableItem
                                        id={item.id}
                                        text={item.text}
                                        disabled={answered}
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        className="drag-item placed-source"
                                        onClick={() => handleRemove(item.id)}
                                        disabled={answered}
                                        title="Clique para devolver o item"
                                    >
                                        {item.text} ↩
                                    </button>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="drop-targets">
                    {question.targets.map(target => {
                        const targetItems = (placements[target.id] ?? [])
                            .map(id =>
                                question.items.find(item => item.id === id),
                            )
                            .filter(
                                (item): item is DragDropQuestion['items'][number] =>
                                    item !== undefined,
                            )

                        return (
                            <DropTarget
                                key={target.id}
                                id={target.id}
                                text={target.text}
                                items={targetItems}
                                disabled={answered}
                            />
                        )
                    })}
                </div>
            </DndContext>

            {feedback && (
                <p className={`drag-feedback ${feedback}`}>
                    {feedback === 'correct'
                        ? 'Muito bem! Resposta correta!'
                        : 'Não foi dessa vez! Vamos para a próxima.'}
                </p>
            )}

            <button
                type="button"
                className="check-answer"
                onClick={checkAnswer}
                disabled={answered || !canCheck}
            >
                Confirmar resposta
            </button>
        </div>
    )
}