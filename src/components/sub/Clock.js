import React, {Component} from "react"

class Clock extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    

    drawClock() {
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        let radius = canvas.height / 2
        ctx.translate(radius, radius)
        radius = radius * 0.90

        this.drawFace(ctx, radius)
        this.drawTime(ctx, radius)
    }

    drawFace(ctx, radius) {
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, 2*Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()    
    }

    drawTime(ctx, radius){
        var now = new Date()
        var hour = now.getHours()
        var minute = now.getMinutes()
        var second = now.getSeconds()
        
        hour=hour%12
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60))
        this.drawHand(ctx, hour, radius*0.5, radius*0.07)
        
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60))
        this.drawHand(ctx, minute, radius*0.8, radius*0.07)
    }

    drawHand(ctx, pos, length, width) {
        ctx.strokeStyle = "#787878"

        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap = "round"
        ctx.moveTo(0,0)
        ctx.rotate(pos)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-pos)
    }


    componentDidMount() {
        // let canvas = document.getElementById("canvas")
        // let ctx = canvas.getContext("2d")
        // let radius = canvas.height / 2
        // ctx.translate(radius, radius)
        // radius = radius * 0.90
        // this.drawClock()
        setInterval(this.drawClock(), 1000 )
    }


    
    render() {
        return (
            <canvas id="canvas" width={this.props.width} height={this.props.width}></canvas>
      )
    }
}

export default Clock