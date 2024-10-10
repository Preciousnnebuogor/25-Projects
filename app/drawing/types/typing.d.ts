type Draw = {
    ctx: CanvasRenderingContext2D
    curentPoint: Point
    PrevPoint: Point | null
}

type Point = {x: number; y: number}