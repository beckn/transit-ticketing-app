import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HeaderLeftArrow = (props?: SvgProps): ReactElement => (
  <Svg width="7" height="16" viewBox="0 0 7 16" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path d="M5.5 2L1 8L5.5 14" stroke="#3E4059" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </Svg>
);

export default HeaderLeftArrow;