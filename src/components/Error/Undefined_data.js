import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

class Undefined_data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }
    render(){
        if(this.state.hasError){
            return (
                <Grid item xs={12} sm={3} className='paper'>
               <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Data passed to Json_display is  <strong>undefined!</strong>
                </Alert>
                </Grid>
            )
        }
        return this.props.children
    
}
}

export default Undefined_data
