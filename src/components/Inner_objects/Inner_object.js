import React from 'react'

function Inner_object(props) {

    const Object_Dots = (props)=>{

        return(
            <span style={{color:'black',fontSize:'12px'}}>
                <span>{`${props.inside_array?'{':': {'}`}</span>
                <div style={{display:'flex',flexDirection:'column',paddingLeft:'20px'}}>
                {
                    props.children
                }
                </div>
                <span>{'},'}</span>
            </span>
            
        )
    }
    return (
       <Object_Dots inside_array={props.inside_array}>
           {
                props.children
           }
           </Object_Dots>
    )
}

export default Inner_object
