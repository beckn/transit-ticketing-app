import React, { ReactElement } from "react";
import { Path, Svg, SvgProps } from "react-native-svg";
const BackIcon = (props?: SvgProps): ReactElement => {
  return (
    <Svg width="7" height="14" viewBox="0 0 7 14" fill="none" strokeWidth="1.7" { ...props }>
      <Path d="M5.5 1L1 7L5.5 13" stroke="#3E4059" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

export default BackIcon;