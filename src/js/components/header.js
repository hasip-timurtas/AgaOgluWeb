import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="agaLogo">
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
                                src="src/images/svg-logo-37081x381.svg?crc=4176079696"
                                alt="Dispute Bills"/>
                            </a>
                        </div>
                        <div id="navbar3" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/#/">Anasayfa</a></li>
                                <li><a href="/#/kurumsal">Kurumsal</a></li>
                                <li><a href="/#/projeler">Projeler</a></li>
                                <li><a href="/#/iletisim">İletişim</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}