import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const RightArrow = (props?: SvgProps): ReactElement => (
  <Svg width="8" height="12" viewBox="0 0 8 12" fill="none"  preserveAspectRatio="xMidYMid meet" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.82441 11.0217L1.66248 10.0534L5.04028 6.00003L1.66248 1.94667L2.82441 0.97839L7.00911 6.00003L2.82441 11.0217Z" fill="#3E4059" stroke="#3E4059"/>
  </Svg>

);

export default RightArrow;