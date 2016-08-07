import React from 'react';
import Header from './header';
import Slider from './slider';
import Footer from './footer';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Slider />
            </div>
        )
    }
}