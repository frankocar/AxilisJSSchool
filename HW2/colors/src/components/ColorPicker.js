import React, { PureComponent } from 'react';
import Pixel from './Pixel';

class ColorPicker extends PureComponent {
    render() {
        let pixels = this.props.colors.map((x, i) => (
            <Pixel 
                key={i} 
                value={x} 
                width={1} 
                height={1} 
                color={x} 
                x={i} 
                y={0} 
                onClick={this.props.onClick}/>
        ))

        return (
            <svg viewBox={`0,0,${this.props.colors.length},1`} className="picker">
                {pixels}
            </svg>                
        );
    }
}

export default ColorPicker;