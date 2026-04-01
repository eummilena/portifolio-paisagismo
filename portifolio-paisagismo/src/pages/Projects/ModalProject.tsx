import React, { useRef, useState } from 'react'


type ModalProps = {
    currentIndex: number | null
    setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>
    images: string[]
}
const ModalProject = ({ currentIndex, setCurrentIndex, images }: ModalProps) => {

    const [translateX, setTranslateX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const nextImage = () => {
        setCurrentIndex((prev) => {
            if (prev === null) return null
            if (prev === images.length - 1) return prev
            return prev + 1
        }
        )
    }

    const prevImage = () => {
        setCurrentIndex((prev) => {
            if (prev === null) return null
            if (prev === 0) return prev
            return prev - 1
        }
        )
    }
    const isFirst = currentIndex === 0
    const isLast = currentIndex === images.length - 1

    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
        setIsDragging(true)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentX = e.touches[0].clientX
        let diff = currentX - touchStartX.current

        const isFirst = currentIndex === 0
        const isLast = currentIndex === images.length - 1

        // 👉 resistência nos limites
        if ((isFirst && diff > 0) || (isLast && diff < 0)) {
            diff *= 0.3
        }

        setTranslateX(diff)
    }

    const handleTouchEnd = () => {
        const threshold = 80

        if (currentIndex !== null && translateX < -threshold && currentIndex < images.length - 1) {
            nextImage()
        } else if (currentIndex !== null && translateX > threshold && currentIndex > 0) {
            prevImage()
        }

        // 👉 volta suave
        setTranslateX(0)
        setIsDragging(false)
    }


    return (
        <div>
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setCurrentIndex(null)}
                >
                    <div
                        className="relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: isDragging ? "none" : "transform 0.3s ease"
                            }}
                        >
                            <img
                                src={images[currentIndex]}
                                className="max-w-[90vw] max-h-[90vh] object-contain"
                            />

                            {/* BOTÃO FECHAR */}
                            <button
                                className="absolute top-4 right-4 text-white text-3xl"
                                onClick={() => setCurrentIndex(null)}
                            >
                                ✕
                            </button>

                            {/* ESQUERDA */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-grab active:cursor-grabbing hidden md:block active:scale-95"
                                onClick={prevImage} disabled={isFirst}
                            >
                                ‹
                            </button>

                            {/* DIREITA */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-grab active:cursor-grabbing hidden md:block active:scale-95"
                                onClick={nextImage} disabled={isLast}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalProject