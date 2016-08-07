import React from 'react';


export default class Header extends React.Component {
    render() {
        return (<div>
                <div className="agaLogo diger-logo">
                    <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#navbar3">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/#/"><img
                                    src="src/images/pasted svg 37181x276_poster_.png"
                                    alt="Dispute Bills"/>
                                </a>
                            </div>
                            <div id="navbar3" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="/">Anasayfa</a></li>
                                    <li><a href="/#/kurumsal">Kurumsal</a></li>
                                    <li><a href="/#/projeler">Projeler</a></li>
                                    <li><a href="/#/iletisim">İletişim</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <section>
                    <div id="myCarousel" className="carousel slide fullscreen ust-slider" data-ride="carousel">
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
            </div>
        )
    }
}