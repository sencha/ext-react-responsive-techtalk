import React from 'react';
import { Container, Panel } from '@extjs/ext-react';

export default function VboxHboxSwitch() {
    return (
        <Container 
            fullscreen
            padding={5}
            defaults={{
                margin: 5
            }}
            layout="hbox"
        >
            <Panel 
                flex={1} 
                bodyPadding={10} 
                shadow
                title="Left"
            >
                Item 1
            </Panel>
            <Panel 
                flex={1} 
                bodyPadding={10} 
                shadow
                title="Right"
            >
                Item 2
            </Panel>
        </Container>
    )
}