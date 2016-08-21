import React from 'react';
import Header from '../partials/header';
import ProjeLeft from '../partials/proje-left';
import ProjeRight from '../partials/proje-right';

export default class Projeler extends React.Component {
    constructor() {
        super();
        this.state = {
            projectsValue: null,
            bitenProjeler: [
                {
                    id: 1,
                    baslik: '1 Lorem ipsum',
                    resim: 'src/images/cactus.jpg',
                    aciklama: 'dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                }, {
                    id: 2,
                    baslik: '2 Lorem ipsum',
                    resim: 'src/images/road.jpg',
                    aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ],

            devamEdenProjeler: [
                {
                    id: 3,
                    baslik: '3 Lorem ipsum',
                    resim: 'src/images/trees.jpg',
                    aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 4,
                    baslik: '4 Lorem ipsum',
                    resim: 'src/images/road.jpg',
                    aciklama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation' +
                    'ullamco' +
                    'laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    }

    componentDidMount(){
        this.getTumProjects();
    }


    getBitenProjects() {
        this.getProjects(this.state.bitenProjeler);
    }

    getDevamEdenProjects() {
        this.getProjects(this.state.devamEdenProjeler);
    }

    getTumProjects() {
        var tumProjects = this.state.bitenProjeler;
        tumProjects = tumProjects.concat(this.state.devamEdenProjeler);
        this.getProjects(tumProjects);

    }

    getProjects(state) {

        var bitenProjeler = state.map(proje => {
            if (proje.id % 2 == 1) {
                return <ProjeLeft {...proje } key={proje.id}/>;
            } else {
                return <ProjeRight {...proje } key={proje.id}/>;
            }
        });

        this.setState({projectsValue: bitenProjeler});
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
                    <div><p onClick={this.getTumProjects.bind(this)}>TÜM PROJELER</p></div>
                    <div><p onClick={this.getBitenProjects.bind(this)}>BİTEN PROJELER</p></div>
                    <div><p onClick={this.getDevamEdenProjects.bind(this)}>DEVAM EDEN PROJELER</p></div>

                </div>
            </div>
            <div className="container">
                <div className="proje-content">
                    {this.state.projectsValue}
                </div>
            </div>
        </div>
    }
}