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

var element = React.createElement(Deneme);

// React, please render this class
//var element = React.createElement(ThumnailList, options);
// React, after you render this class, please place it in my body tag
//ReactDOM.render(element, document.querySelector('.target'));







