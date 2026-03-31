import React, { useRef } from 'react'


type ModalProps = {
    currentIndex: number | null
    setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>
    images: string[]
}
const ModalProject = ({ currentIndex, setCurrentIndex, images }: ModalProps) => {

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : null
        )
    }

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev !== null
                ? (prev - 1 + images.length) % images.length
                : null
        )
    }

    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current

        if (distance > 50) nextImage()     // swipe esquerda
        if (distance < -50) prevImage()   // swipe direita
    }


    return (
        <div>
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setCurrentIndex(null)}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
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
                            onClick={prevImage}
                        >
                            ‹
                        </button>

                        {/* DIREITA */}
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-grab active:cursor-grabbing hidden md:block active:scale-95"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalProject