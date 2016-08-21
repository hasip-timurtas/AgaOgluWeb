import React from 'react';

export default class ProjeLeft extends React.Component {
    render() {
        return (
            <div className="row proje-right">
                <div className="col-md-6 proje-description">
                    {this.props.baslik} <br/>

                    <p> {this.props.aciklama}</p>

                    <div className="proje-detay-btn-left">
                        <button type="submit" className="btn btn-default">Detay Gör</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={this.props.resim}/>

                </div>
            </div>
        )
    }
}