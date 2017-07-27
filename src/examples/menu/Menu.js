import React from 'react';
import { TreeList } from '@extjs/ext-react';
import { medium, large } from '../responsiveFormulas';

export default function() {
    return (
        <TreeList 
            ui="nav"
            expanderFirst={false}
            responsiveConfig={{
                true: {
                    micro: false
                },
                [medium]: {
                    micro: true
                },
                phone: {
                    micro: false
                }
            }}
            store={{
                root: {
                    children: [
                        { text: "Profile", leaf: true, iconCls: 'x-fa fa-user' },
                        { text: "Settings", leaf: true, iconCls: 'x-fa fa-cog' },
                        { text: "Data", leaf: true, iconCls: 'x-fa fa-table' },
                    ]
                }
            }}
        />        
    )
}