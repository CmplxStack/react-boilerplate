import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-header text-center"><h2>Minimal Boilerplate</h2></div>
                <div className="panel panel-primary">
                    <div className="panel-heading"><h3>Technologies</h3></div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h4><a href="https://facebook.github.io/react/">React</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="http://redux.js.org/">Redux</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://webpack.github.io/">Webpack</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://babeljs.io/">Babel</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/webpack-contrib/sass-loader">SASS Loader</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/webpack-contrib/url-loader">URL Loader</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/webpack-contrib/file-loader">File Loader</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="https://github.com/jinder/path">Path</a></h4>
                        </li>
                        <li className="list-group-item">
                            <h4><a href="http://getbootstrap.com/">Bootstrap</a></h4>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
