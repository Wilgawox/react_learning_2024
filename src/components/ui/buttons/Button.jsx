import React from 'react'
import style from "./Button.module.css"

const Button=(props)=>{
    console.log(props)
    return (
        <div style={{...props.style}} 
            className={style.Button} 
            data_testid="Button"
        >
            {props.children}
        </div>    
    );
};
export default Button