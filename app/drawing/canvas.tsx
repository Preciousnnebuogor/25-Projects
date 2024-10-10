"use client"

import useDraw from "./hooks/useDraw"

export default function Canvas() {

    const {canvasRef} = useDraw(drawLine)

    function drawLine({prevPoint, currentPoint, ctx}: Draw) {
     const {x: currX, y: currY} = currentPoint
     const lineColor = "#000"
     const lineWidth = 5

     let startPoint = prevPoint ?? currentPoint
      ctx.beginPath()
      ctx.lineWidth = lineWidth 
      ctx.strokeStyle = lineColor
      ctx.moveTo(startPoint.x, startPoint.y)
      ctx.stroke(currX)
      ctx.stroke()
      ctx.fillStyle = lineColor
    }
    return <div className={`mt-20 w-screen  h-screen flex items-center justify-center`}>
<canvas width={750} height={750} ref={canvasRef}
className={`border-2 rounded-md`}/>  
  

    </div>
}