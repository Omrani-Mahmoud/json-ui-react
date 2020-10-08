import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './components/style/json_display.css';
import Custom_span from './components/Custom_span';
import {ID} from './_ID';
import Typography from '@material-ui/core/Typography';

export const Json_display = ({data,height}) => {
    const getObjectLength = (object)=>{
            return Object.keys(object).length;
    }

    const return_objects_key = (object) =>{
            let keys = [];
            let size = getObjectLength(object);
            for (let index = 0; index < size; index++) {
                if(object[Object.keys(object)[index]] instanceof Array){

                    keys.push(<Custom_span key={ID()} array={object[Object.keys(object)[index]]}  extract_data = {return_objects_key} object_length={getObjectLength}>{Object.keys(object)[index]}</Custom_span>);

                }
                else if(object[Object.keys(object)[index]] instanceof Object){

                    keys.push(<Custom_span key={ID()} object_={object[Object.keys(object)[index]]} extract_data = {return_objects_key}>{Object.keys(object)[index]}</Custom_span>);

                }
            
                else {
                    keys.push(<Custom_span key={ID()} value_type={typeof(object[Object.keys(object)[index]])} value={object[Object.keys(object)[index]]}>{Object.keys(object)[index]}</Custom_span>);
            }

                }
                return keys

    }

    if(!data){
        throw new Error('Data passed to Json_display is undefined')
    }

    const custom_style = {
        height:height?`${height}px`:`auto`,
        overflowY:height?`scroll`:'none'

    }
    return (
        <Grid item xs={12} sm={6} className='paper' >
            <Paper style={custom_style}>
                {data.length>0?
                    data.map(o =>(
                        <div className='container' key={ID()}>
                            {return_objects_key(o)}
                       </div>
                        ))
                    :
                    <Typography variant="h4" gutterBottom>
                            Empty data or Undefined
                    </Typography>
                }
            </Paper>
        </Grid>
    )
}
