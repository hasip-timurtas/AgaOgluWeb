import React from 'react';
import Header from '../partials/header';
import ProjeLeft from '../partials/proje-left';
import ProjeRight from '../partials/proje-right';

export default class Projeler extends React.Component {
    constructor() {
        super();
        this.state = {

            projeler: {
                resim: 'src/images/cactus.jpg',
                aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                'ullamco' +
                'laboris nisi ut aliquip ex ea commodo consequat.'
            },

            bitenProjeler: [
                {
                    resim: 'src/images/cactus.jpg',
                    aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                }, {
                    resim: 'src/images/road.jpg',
                    aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    }

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
                    <ProjeLeft />
                    <ProjeRight {...this.state.projeler} />

                </div>
            </div>
        </div>
    }
}