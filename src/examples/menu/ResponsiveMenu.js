import React, { Component } from 'react';
import { Container, Panel, Sheet, Button, TitleBar, TreeList } from '@extjs/ext-react';
import { medium, large } from '../responsiveFormulas';
import Menu from './Menu';

export default class ResponsiveMenu extends Component {

    render() {
        return (
            <Container layout="center">
                <TitleBar title="App" docked="top">
                </TitleBar>
                <Panel docked="left" layout="fit" shadow width="225">
                    <Menu/>
                </Panel>
                <Container style={{ color: '#999', fontSize: '18px' }}>App Body</Container>
            </Container>
        )
    }

    toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

}