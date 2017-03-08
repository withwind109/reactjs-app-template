/**
 * Created by zhade on 2017/3/8.
 */
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from 'store';

import {Router, Route, Link, browserHistory} from 'react-router'


class Menu extends React.Component {
    render() {
        return <ul>
            <li><Link to="/">to-menu</Link></li>
            <li><Link to="/about">to-about</Link></li>
            <li><Link to="/topics">to-topics</Link></li>
        </ul>;
    }
}


class About extends React.Component {
    render() {
        return <div>
            <a><Link to="/">return</Link></a>
            <div>about content</div>
        </div>;
    }
}

class Topics extends React.Component {
    render() {
        return <div>
            <a onClick={() => {

            }}>return</a>
            <div>topics content</div>
        </div>;
    }

    _returnHandler() {

    }
}

import 'index.html';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route exact path="/" component={Menu}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);