import { useEffect, useRef } from "react";

export default function useDraw(onDraw:({ctx, currentPoint, prevPoint}: Draw) => void) {
  
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            console.log({x: e.clientX, y: e.clientY})
            const currentPoint = computePointInCanvas(e )

            const ctx = canvasRef.current?.getContext("2d")
            if(!ctx || !currentPoint) return
        }

        const computePointInCanvas = (e: MouseEvent) => {
           const canvas = canvasRef.current
           if (!canvas) return
           
           const rect = canvas.getBoundingClientRect()
           const x = e.clientX - rect.left
           const y = e.clientY - rect.top;
           return {x, y}
        }
        // add event listener
        canvasRef.current?.addEventListener("mousemove",  handler)
         // remove event listerner
        return () => canvasRef.current?.addEventListener("mousemove", handler);
    },[]);
    return {canvasRef}
}
