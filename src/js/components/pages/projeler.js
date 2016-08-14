import React from 'react';
import Header from '../partials/header';


export default class Projeler extends React.Component {


    render() {
        return <div>
            <Header />
            <div className="container">
                <div id="u3460">
                    <div className="clearfix grpelem" id="u3461">
                        <div className="clearfix grpelem" id="u3462-4" data-muse-uid="U3462" data-muse-type="txt_frame">
                            <p>PROJELER</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container projects">
                <div className="all-projects">
                    <div><p>TÜM PROJELER</p></div>
                    <div><p>BİTEN PROJELER</p></div>
                    <div><p>DEVAM EDEN PROJELER</p></div>

                </div>
            </div>
            <div className="container">
                <div className="proje-content">
                    <div className="row proje-left">
                        <div className="col-md-6">
                            <img src="src/images/cactus.jpg" alt="Chania"/>
                        </div>
                        <div className="col-md-6">
                            LOREM IPSUM <br/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div className="proje-detay-btn-right">
                                <button type="submit" className="btn btn-default">Detay Gör</button>
                            </div>
                        </div>
                    </div>
                    <div className="row proje-right">
                        <div className="col-md-6">
                            LOREM IPSUM <br/>

                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div className="proje-detay-btn-left">
                                <button type="submit" className="btn btn-default">Detay Gör</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="src/images/road.jpg" alt="Chania"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}