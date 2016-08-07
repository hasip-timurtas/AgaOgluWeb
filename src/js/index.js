import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './components/layouts/mainLayout';
import HomePage from './components/pages/homepage';
import Kurumsal from './components/pages/kurumsal';
import Projeler from './components/pages/projeler';
import Iletisim from './components/pages/iletisim';




render((
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="kurumsal" component={Kurumsal}/>
            <Route path="projeler" component={Projeler}/>
            <Route path="iletisim" component={Iletisim}/>
        </Route>
    </Router>
), document.getElementById('app'))
