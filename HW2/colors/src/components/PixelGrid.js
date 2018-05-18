import React, { PureComponent } from 'react';
import Pixel from './Pixel';

class PixelGrid extends PureComponent {
    render() {
        let pixels = []
        for(let i = 0; i < this.props.size; i++) {
            for(let j = 0; j < this.props.size; j++) {
                let index = i * this.props.size + j
                pixels.push(
                    <Pixel 
                        key={index} 
                        value={index} 
                        width={1} 
                        height={1} 
                        color={this.props.colors[index]} 
                        x={j} 
                        y={i} 
                        onClick={this.props.onClick}/>
                )
            }
        }

        return (
            <svg viewBox={`0,0,${this.props.size},${this.props.size}`} >
                {pixels}
            </svg>                
        );
    }
}

export default PixelGrid;