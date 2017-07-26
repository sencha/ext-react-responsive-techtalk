import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Panel } from '@extjs/ext-react'

export default function Main() {
    return (
        <Container
            layout="center"
            platformConfig={{
                phone: {
                    layout: 'fit'
                }
            }}
        >
            <Panel title="ExtReact Responsive Tech Talk" shadow bodyPadding={20}>
                <ul style={{ fontSize: '16px' }}>
                    <li><Link to="/vbox-hbox-switch">Switch between vbox and hbox</Link></li>
                    <li><Link to="/responsive-grid">Show/Hide Grid Columns</Link></li>
                    <li><Link to="/responsive-menu">Responsive Menu</Link></li>
                </ul>
            </Panel>
        </Container>
    )
}