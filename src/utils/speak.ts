
let muted = false

export function speak(text: string) {
    if (muted) return

    window.speechSynthesis.cancel()

    const cleanText = text
        .replace(/MA-CA-CO/gi, 'macaco')
        .replace(/B_LA/gi, 'bola')
        .replace(/SA-PO/gi, 'sapo')
        .replace(/_+/g, '')

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = 'pt-BR'
    utterance.rate = 0.85
    utterance.pitch = 1.1
    utterance.volume = 1

    const voices = window.speechSynthesis.getVoices()
    const portugueseVoice =
        voices.find(voice => voice.name.includes('Google português do Brasil')) ??
        voices.find(voice => voice.lang === 'pt-BR') ??
        voices.find(voice => voice.lang.startsWith('pt'))

    if (portugueseVoice) {
        utterance.voice = portugueseVoice
    }

    window.speechSynthesis.speak(utterance)
}

export function stopSpeaking() {
    window.speechSynthesis.cancel()
}

export function toggleMute() {
    muted = !muted

    if (muted) {
        stopSpeaking()
    }

    return muted
}

export function isMuted() {
    return muted
}