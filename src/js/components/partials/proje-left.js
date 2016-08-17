import React from 'react';

export default class ProjeLeft extends React.Component {
    render() {
        return (
            <div className="row proje-left">
                <div className="col-md-6">
                    <img src="src/images/cactus.jpg" alt="Chania"/>
                </div>
                <div className="col-md-6 proje-description">
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
        )
    }
}