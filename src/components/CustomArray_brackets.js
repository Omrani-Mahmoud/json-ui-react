import React from 'react'

function CustomArray_brackets(props) {

    const brackets_style={
        color:'black'
    }
    return (
       <span >
           <span style={brackets_style}>{`[ `} </span>
               {props.children}
               <span style={brackets_style}>{` ],`} </span>
       </span>
    )
}

export default CustomArray_brackets
