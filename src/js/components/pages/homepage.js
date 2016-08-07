import React from 'react';
import Slider from '../partials/slider';
import HeaderHome from '../partials/header-home';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <Slider />
            </div>
        )
    }
}