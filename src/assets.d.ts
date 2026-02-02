declare module '*.jpeg' {
  const src: string
  export default src
}

declare module 'canvas-confetti' {
  type Options = {
    particleCount?: number
    angle?: number
    spread?: number
    origin?: { x?: number; y?: number }
    colors?: string[]
  }
  function confetti(options?: Options): Promise<null>
  export default confetti
}

 