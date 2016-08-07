import React from 'react';
import Footer from '../partials/footer';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}