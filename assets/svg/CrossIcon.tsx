import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CrossIcon = (props: SvgProps): ReactElement => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path d="M18.1652 5.29957L6.07918 17.9557" stroke="#3E4059" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <Path d="M5.99997 5.37598L18.2441 17.8793" stroke="#3E4059" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </Svg>
);

export default CrossIcon;