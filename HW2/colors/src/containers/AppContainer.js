import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PixelGrid from '../components/PixelGrid';
import ColorPicker from '../components/ColorPicker';
import Navbar from '../components/Navbar';
import Color from 'color';
import '../index.css'

const SIZE = 10
const PALETTE = ["#1E90FF", "#90EE90", "#00FF00", "#FFA500", "#FFB6C1", "#FFFF00", "#9ACD32", "#FF6347", "#008080", "#20B2AA"]

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            colors: Array.from({length: SIZE ** 2}, () => PALETTE[Math.floor(Math.random()*PALETTE.length)]),
            selected: undefined
        }
    }

    handlePixelClick = (index) => {
        if (!this.state.selected) return
        this.setState({colors: this.state.colors.map((x, i) => i === index ? this.state.selected : x)})
    }

    handlePickerClick = (color) => {
        this.setState({selected: color})
    }

    grayscale = (colors) => {
        return colors.map(x => Color(x).grayscale().string())
    }

	render() {
		return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/bw" render={() => 
                            <div className="canvas">
                                <PixelGrid size={SIZE} colors={this.grayscale(this.state.colors)} onClick={() => null}/>
                            </div>
                        } />
                        <Route path="/(rgb|)/" render={() => 
                            <div className="canvas">
                                <PixelGrid size={SIZE} colors={this.state.colors} onClick={this.handlePixelClick}/>
                                <ColorPicker colors={PALETTE} onClick={this.handlePickerClick} selected={this.state.selected}/>
                            </div>
                        } />
                    </Switch>
                </div>
            </BrowserRouter>
		);
	}
}

export default AppContainer;
