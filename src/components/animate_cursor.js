import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

export default function Animate_cursor() {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={50}
            color='90 , 90 , 90'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={1}
        />
    )
}
