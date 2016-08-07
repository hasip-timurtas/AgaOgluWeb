import React from 'react';

export default class Slider extends React.Component {
    render() {
        return (
            <section>

                <div id="myCarousel" className="carousel slide fullscreen" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner " role="listbox">
                        <div className="item active">
                            <img src="src/images/cactus.jpg" alt="Chania"/>
                        </div>

                        <div className="item">
                            <img src="src/images/road.jpg" alt="Chania"/>
                        </div>

                        <div className="item">
                            <img src="src/images/trees.jpg" alt="Flower"/>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}