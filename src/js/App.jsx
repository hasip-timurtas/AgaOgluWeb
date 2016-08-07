// define a 'class'
var Badge = React.createClass({
    render: function () {
        return <button className="btn btn-primary" type="button">
            {this.props.title}
            <span className="badge">{this.props.number}</span>
        </button>
    }
});

var Thumbnail = React.createClass({
    render: function () {
        return <div className="col-sm-4">
            <div className="thumbnail">
                <img src={this.props.imageUrl}/>
                <div className="caption">
                    <h3>{this.props.header}</h3>
                    <p>{this.props.description}</p>
                    <p>
                        <Badge title={this.props.title} number={this.props.number}/>
                    </p>
                </div>
            </div>
        </div>
    }
});

var ThumnailList = React.createClass({
    render: function () {
        var list = this.props.thumbnailData.map(function (thumbnailProps) {
            return <Thumbnail key={thumbnailProps._id} {...thumbnailProps}/>
        })

        return <div> {list} </div>
    }
});

var options = {
    thumbnailData: [{
        _id: 1,
        title: 'Show Courses',
        number: 12,
        header: 'Learn React',
        description: 'React is fantactic new library for making fast, dynamic page. React is fantactic new library for making fast, dynamic pages. React is fantactic new library for making fast, dynamic page.',
        imageUrl: 'http://formatjs.io/img/react.svg'
    }, {
        _id: 2,
        title: 'Show Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow...',
        imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }]
};


var Deneme = React.createClass({
    render: function () {
        return <h2>Deneme</h2>
    }
});


// React, please render this class
//var element = React.createElement(ThumnailList, options);
// React, after you render this class, please place it in my body tag
//ReactDOM.render(element, document.querySelector('.target'));


var Header = React.createClass({
    render: function () {
        return <div className="agaLogo">
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
                        <a className="navbar-brand" href="/"><img
                            src="src/images/svg-logo-37081x381.svg?crc=4176079696"
                            alt="Dispute Bills"/>
                        </a>
                    </div>
                    <div id="navbar3" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/newNote">Anasayfa</a></li>
                            <li><a href="/newNote">Kurumsal</a></li>
                            <li><a href="/newNote">Projeler</a></li>
                            <li><a href="/newNote">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
});


var Slider = React.createClass({
    render: function () {
        return <section>
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

    }
})

var Footer = React.createClass({
    render: function () {
        return <footer className="footer">
            <div className="container">
                <p>
                    Place sticky footer content here.
                </p>
            </div>
        </footer>
    }
})


var Anasayfa = React.createClass({
    render: function () {
        return <div>
            <Header />
            <Slider />
            <Footer />
        </div>
    }
})

var ReactRouter = window.ReactRouter;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;
var browserHistory = ReactRouter.browserHistory;

var routes = (
    <Router>
        <Route name="Anasayfa" path="/" component={Anasayfa}>
            <Route name="Footer" path="about" component={Footer}/>
        </Route>
    </Router>
);


ReactDOM.render(
    <Router>{routes}</Router>,
    document.querySelector('.target')
);
