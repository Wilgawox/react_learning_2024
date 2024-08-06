import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

interface IButtonProps {
  bgcolor?: string;
  color?: "black" | "white";
  style?: {
    textDecoration?: "underline" | "none";
    fontWeight?: 100 | 500 | 900;
  };
  children:React.ReactElement|string|Array<React.ReactElement|string>
}

const Button: React.FC<IButtonProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(()=>{
    setTimeout(() => {setIsClicked(false);},300);
  }, [isClicked])  

  return (
    <>
      <div
        style={{
          ...props.style,
          backgroundColor: props.bgcolor,
          color: props.color,
        }}
        className={`${style.Button}${isClicked?' '+style.clicked:''}`}
        data-testid="Button"
        onClick={(evt) => {
          setIsClicked(true);
          if(undefined != props.onButtonClick){props.onButtonClick("HI !");}
        }}
      >
        {props.children}
      </div>
    </>
  );
};

Button.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.oneOf(["white", "black"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
Button.defaultProps = {
  bgcolor: "yellow",
  default: "button",
};
export default Button;