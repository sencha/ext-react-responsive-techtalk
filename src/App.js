import React, { Component } from 'react';
import { Container } from '@extjs/ext-react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Main from './Main';
import VboxHboxSwitch from './examples/layout/VboxHboxSwitch';
import ResponsiveGrid from './examples/grid/ResponsiveGrid';
import ResponsiveMenu from './examples/menu/ResponsiveMenu';

Ext.require([
    'Ext.plugin.Responsive', // Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
    'Ext.layout.*',
    'Ext.panel.Collapser',
    'Ext.data.TreeStore'
]);

export default class App extends Component {

    render() {
        return (
            <Container fullscreen layout="fit">
                <Router>
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/vbox-hbox-switch" component={VboxHboxSwitch} exact/>
                        <Route path="/responsive-grid" component={ResponsiveGrid} exact/>
                        <Route path="/responsive-menu" component={ResponsiveMenu} exact/>
                    </Switch>                    
                </Router>
            </Container>
        )
    }

}