import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const DashedLine = (props?: SvgProps): ReactElement => (
  <Svg width="2" height="54" viewBox="0 0 2 54" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path opacity="0.325846" d="M1 53V1" stroke="#9899A1" strokeWidth="2" stroke-linecap="square" strokeDasharray="4 4"/>
  </Svg>
);

export default DashedLine;