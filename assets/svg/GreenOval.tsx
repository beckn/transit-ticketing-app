import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const GreenOval = (props: SvgProps): ReactElement => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" fill="white" stroke="#8BB19C" strokeWidth="3"/>
  </Svg>
);

export default GreenOval;