import React from 'react';
import Header from '../partials/header';

export default class Iletisim extends React.Component {
    render() {
        return <div>
            <Header />

            <div className="clearfix colelem" id="u3460">
                <div className="clearfix grpelem" id="u3461">
                    <div className="clearfix grpelem" id="u3462-4" data-muse-uid="U3462" data-muse-type="txt_frame">
                        <p>İLETİŞİM</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="clearfix colelem" id="u2861-4" data-muse-uid="U2861" data-muse-type="txt_frame">
                    <p>BİZE NASIL ULAŞABİLİRSİNİZ?</p>
                </div>
                <div className="row iletisim-map">
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1297741445064!2d29.101683551306678!3d41.00053267919999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac882ab345d37%3A0x9b4a2af9b2b902cf!2sVaryap+Meridian+A+BLOK!5e0!3m2!1str!2str!4v1469624980731"
                            width="445" height="280" frameBorder="0" allowFullScreen=""></iframe>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <p><strong>ADRES:</strong> Barbaros Mah. Ihlamur Bulvarı No: 4B D:1 34746 <br/>
                                Ataşehir/İstanbul</p>
                        </div>
                        <div>
                            <p><strong>TELEFON:</strong> 0216 000 00 00</p>
                        </div>
                        <div>
                            <p><strong>FAX:</strong> 0216 000 00 00</p>
                        </div>
                        <div>
                            <p><strong>E-POSTA:</strong> info@agaogluyapigrup.com</p>
                        </div>
                    </div>
                </div>
                <div className="iletisim-form">
                    <form role="form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control"  name="message" placeholder="Enter Your Message">

                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    }
}