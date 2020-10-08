import React from 'react'
import CustomArray_brackets from './CustomArray_brackets'
import Custom_comma from './Custom_comma'
import Inner_object from './Inner_objects/Inner_object'
import {ID} from '../_ID'



const Dots = ()=>{
    return(
        <span style={{color:'black',fontSize:'12px'}}>: </span>
    )
}


const Object_Dots = (props)=>{
    return(
        <span style={{color:'black',fontSize:'12px'}}>
            <span>{': {'}</span>
            {
                props.children
            }
            <span>{'}'}</span>
        </span>
        
    )
}


function Custom_span(props) {

    
    const key_style={
        color:'rgb(167,49,168)',
        fontSize:'13px'
    }
   
    const value_style={
        color: props.value_type==='number'?'rgb(52,34,202)':props.value_type==='string'?'green':'rgb(167,49,168)',
        fontSize:'13px'
    }
    const getArrayElements= (array)=>{
        //let objects = ['['];
            let res = [];
         
                array.map((elem,index) =>{
               
                    if(elem instanceof Object){

                        for (let index = 0; index < props.object_length(elem); index++) {
                            //res = res+`${Object.keys(elem)[index]}, `
                            res.push(<Inner_object key={ID()} inside_array>{props.extract_data(elem)}</Inner_object>)
                            //console.log('elem',elem)
                            //res = res+`${<Custom_span object_={elem} extract_data = {props.extract_data}>{Object.keys(object)[index]}</Custom_span>}`;
                        }
                    }
                    else{
                        if(index<array.length-1)
                            res.push(elem+',')
                        else 
                            res.push(elem)
                    }

                     
                })
          //  res = res+']';
            //objects.push(']')
           
                return res
    }
    
    return (
        props.array?
    <span style={key_style}>{`"${props.children}" `}<Dots /><CustomArray_brackets>{getArrayElements(props.array)}</CustomArray_brackets></span>
    :
        props.object_?
    <span style={key_style}>{`"${props.children}" `}<Inner_object>{props.extract_data(props.object_)}</Inner_object></span>
    :
    <span style={key_style}>{`"${props.children}" `}<Dots /><span style={value_style}>{props.value_type==='string'?"'"+props.value+"'":props.value}</span><Custom_comma /></span>
    )
}

export default Custom_span
