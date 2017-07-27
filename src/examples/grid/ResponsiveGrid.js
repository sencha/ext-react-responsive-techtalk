import React, { Component } from 'react';
import { Grid, Column, RendererCell } from '@extjs/ext-react';
import data from './data';
import { xsmall, small, medium } from '../responsiveFormulas';

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
                    responsiveConfig={{
                        "true": {
                            hidden: false
                        },
                        [medium]: {
                            hidden: true
                        } 
                    }}
                />
                
                <Column 
                    text="Name"
                    flex={1} 
                    renderer={(value, data) => <div>{data.get('first_name')} {data.get('last_name')}</div> } 
                    responsiveConfig={{ 
                        "true": {
                            hidden: true
                        },
                        [xsmall]: { 
                            hidden: false 
                        } 
                    }} 
                />

                <Column 
                    dataIndex="first_name" 
                    text="First Name" 
                    flex={1}
                    responsiveConfig={{
                        "true": {
                            hidden: false
                        },
                        [xsmall]: {
                            hidden: true
                        }
                    }}
                />
                <Column 
                    dataIndex="last_name" 
                    text="Last Name" 
                    flex={1}
                    responsiveConfig={{
                        "true": {
                            hidden: false
                        },
                        [xsmall]: {
                            hidden: true
                        }
                    }}
                />
                <Column 
                    dataIndex="email" 
                    text="Email" 
                    flex={2}
                    responsiveConfig={{
                        "true": {
                            hidden: false
                        },
                        [xsmall]: {
                            hidden: true
                        }
                    }}
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