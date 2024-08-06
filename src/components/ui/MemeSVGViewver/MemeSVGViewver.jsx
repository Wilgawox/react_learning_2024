import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSVGViewver.module.css";

const MemeSVGViewver = (props) => {
  return (
    <div className={styles.MemeSvgViewver} data-testid="MemeSVGViewver">
      MemeSVGViewver Component
    </div>
  );
};

MemeSVGViewver.propTypes = {};

MemeSVGViewver.defaultProps = {};

export default MemeSVGViewver;