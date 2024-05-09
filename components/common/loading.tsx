import { RefObject, useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

type LoadingProps = {
  canvasWidth: number
  canvasHeight: number
  onAnimationEnd?: () => void
}

const FRAME_DURATION = 1000 / 60 // 60fps frame duration ~16.66ms
const getTime = typeof performance === 'function' ? performance.now : Date.now

let rafId: number

export default function Loading({ canvasWidth, canvasHeight, onAnimationEnd }: LoadingProps) {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (canvas && ctx) {
      drawCanvas(canvas, ctx)
    }

    // cleanup 함수
    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [canvasWidth, canvasHeight, onAnimationEnd])

  const drawCanvas = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const devicePixelRatio = window.devicePixelRatio || 1
    const setCanvasSize = () => {
      canvas.width = canvasWidth
      canvas.height = canvasHeight
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasSize()
    drawBackground(ctx)

    // 육각형 그리기
    ctx.strokeStyle = '#64ffda'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'

    drawHexagon(
      ctx,
      canvasWidth / 4,
      canvasHeight / 4,
      Math.min(canvasWidth, canvasHeight) / 2 ** 6,
      1.7,
      () => {
        drawText(ctx, 'H', canvasWidth / 4, canvasHeight / 4 + 2)
      }
    )
  }

  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    // 이전에 그려진 내용을 지웁니다.
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // 배경을 채웁니다.
    ctx.fillStyle = '#0a192f'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  }

  const drawHexagon = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    size: number,
    drawingSpeed: number,
    onDrawEnd: () => void
  ) => {
    // 육각형의 꼭지점 좌표 계산
    const points: Point[] = []
    // 시작 각도를 0으로 설정하여 가장 위 꼭지점부터 시작
    const startAngleRad = -Math.PI / 2
    for (let i = 0; i < 6; i++) {
      const angleRad = startAngleRad + (Math.PI / 3) * i
      const x = centerX + size * Math.cos(angleRad)
      const y = centerY + size * Math.sin(angleRad)
      points.push({ x, y })
    }

    points.reverse()

    // 꼭지점들을 순차적으로 연결하여 선 그리기
    const drawLinesSequentially = (index: number) => {
      if (index >= points.length) {
        onDrawEnd()

        setTimeout(() => {
          onAnimationEnd?.()
        }, 1000) // 애니메이션이 끝나고 1초 후에 onAnimationEnd를 호출합니다.
        return
      }

      const startPoint = points[index]
      const endPoint = points[(index + 1) % points.length] // 다음 꼭지점과 연결
      drawLine(ctx, startPoint, endPoint, drawingSpeed, () => {
        drawLinesSequentially(index + 1) // 다음 선 그리기
      })
    }

    // 첫 선 그리기 시작
    drawLinesSequentially(0)
  }

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    startPoint: Point,
    endPoint: Point,
    drawingSpeed: number,
    onAnimationEnd: () => void
  ) => {
    let lastTime = getTime()

    // Set initial state
    let currentPoint = startPoint
    const vector = { x: endPoint.x - startPoint.x, y: endPoint.y - startPoint.y }
    const startToEndDistance = Math.sqrt(vector.x ** 2 + vector.y ** 2)

    const lineStep = drawingSpeed / startToEndDistance

    const vectorStep = {
      x: vector.x * lineStep,
      y: vector.y * lineStep
    }

    const animate = () => {
      const now = getTime()
      const delta = (now - lastTime) / FRAME_DURATION

      const deltaVector = {
        x: vectorStep.x * delta,
        y: vectorStep.y * delta
      }

      let nextPoint = {
        x: currentPoint.x + deltaVector.x,
        y: currentPoint.y + deltaVector.y
      }

      let isFinished = false

      const startToNextPointDistance = Math.sqrt(
        (nextPoint.x - startPoint.x) ** 2 + (nextPoint.y - startPoint.y) ** 2
      )

      if (startToNextPointDistance >= startToEndDistance) {
        isFinished = true
        nextPoint = endPoint
      }

      ctx.beginPath()
      ctx.moveTo(currentPoint.x, currentPoint.y)
      ctx.lineTo(nextPoint.x, nextPoint.y)
      ctx.stroke()

      if (isFinished) {
        onAnimationEnd()
      } else {
        currentPoint = nextPoint
        lastTime = now

        rafId = requestAnimationFrame(animate) // 다음 프레임 호출
      }
    }

    animate()
  }

  const drawText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number) => {
    const fontSize = Math.min(canvasWidth, canvasHeight) / 55 // Adjust the divisor to change the font size relative to canvas size
    let opacity = 0 // 초기 투명도를 0으로 설정합니다.

    // fade-in 애니메이션 함수
    const fadeIn = () => {
      opacity += 0.01 // 프레임마다 opacity를 증가시켜 나타나도록 합니다.
      if (opacity >= 1) {
        opacity = 1 // 투명도가 1 이상이 되면 최대 투명도로 설정합니다.
      }

      ctx.globalAlpha = opacity // 투명도를 설정합니다.
      ctx.font = `${fontSize}px sans-serif` // 텍스트 크기 설정
      ctx.fillStyle = '#64ffda'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, x, y)

      // opacity가 1보다 작을 때는 계속해서 애니메이션을 반복합니다.
      if (opacity < 1) {
        requestAnimationFrame(fadeIn)
      }
    }

    // fade-in 애니메이션 시작
    fadeIn()
  }

  return <canvas ref={canvasRef} />
}
