import React, { Component } from 'react';
import { Grid, Column, RendererCell } from '@extjs/ext-react';
import data from './data';

export default class ResponsiveGrid extends Component {

    store = new Ext.data.Store({
        data
    })

    render() {
        return (
            <Grid title="Users" iconCls="x-fa fa-user" store={this.store}>
                <Column 
                    dataIndex="id" 
                    text="ID" 
                    width={50}
                />
                <Column 
                    dataIndex="first_name" 
                    text="First Name" 
                    flex={1}
                />
                <Column 
                    dataIndex="last_name" 
                    text="Last Name" 
                    flex={1}
                />
                <Column 
                    dataIndex="email" 
                    text="Email" 
                    flex={2}
                />
                <Column 
                    dataIndex="title" 
                    text="Title" 
                    flex={1}
                />
            </Grid>
        )
    }

}