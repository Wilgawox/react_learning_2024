import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewver.module.css";

const MemeSvgViewver = (props) => {
  return (
    <div className={styles.MemeSvgViewver} data-testid="MemeSvgViewver">
      MemeSvgViewver Component
    </div>
  );
};

MemeSvgViewver.propTypes = {};

MemeSvgViewver.defaultProps = {};

export default MemeSvgViewver;