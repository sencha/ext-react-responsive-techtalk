import React, { Component } from 'react';
import { Container, Panel, Sheet, Button, TitleBar, TreeList } from '@extjs/ext-react';
import { medium, large } from '../responsiveFormulas';
import Menu from './Menu';

export default class ResponsiveMenu extends Component {

    state = {
        showMenu: !Ext.platformTags.phone
    }

    render() {
        return (
            <Container layout="center">
                <TitleBar title="App" docked="top">
                    { Ext.platformTags.phone && (
                        <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleMenu}/>
                    ) }
                </TitleBar>
                { Ext.platformTags.phone ? (
                    <Sheet layout="fit" side="left" displayed={this.state.showMenu} onHide={() => this.setState({ showMenu: false })} width={225}>
                        <TitleBar title="Menu" docked="top">
                            <Button iconCls="x-fa fa-bars" handler={this.toggleMenu}/>
                        </TitleBar>
                        <Container title="Menu" scrollable>
                            <Menu/>
                        </Container>
                    </Sheet>
                ) : (
                    <Panel docked="left" layout="fit" shadow width="225"
                        responsiveConfig={{
                            "true": {
                                width: 225
                            },
                            [medium]: {
                                width: 56
                            }
                        }}
                    >
                        <Menu/>
                    </Panel>
                )}
                <Container style={{ color: '#999', fontSize: '18px' }}>App Body</Container>
            </Container>
        )
    }

    toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

}