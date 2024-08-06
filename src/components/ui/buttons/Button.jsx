import React from 'react'
import style from "./Button.module.css"
import PropTypes from "prop-types"

const Button = (props) => {
    console.log(props)
    return (
        <div style={{ ...props.style, backgroundColor: props.bgcolor, color: props.color }}
            className={style.Button}
            data_testid="Button"
        >
            {props.children}
        </div>
    );
};
Button.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['white', 'black']).isRequired,
};
Button.defaultProps = {
    bgcolor: "gold",
}

export default Button;