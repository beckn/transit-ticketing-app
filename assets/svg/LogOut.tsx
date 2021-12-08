import React, { ReactElement } from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const LogOut = (props: SvgProps): ReactElement => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
      <Path d="M8.24123 12.8255H13.0874H14.472H15.8566V15.5829C15.8566 15.8617 16.0253 16.1131 16.284 16.2198C16.5427 16.3265 16.8405 16.2675 17.0385 16.0704L20.5 12.6236C20.7704 12.3544 20.7704 11.9179 20.5 11.6487L17.0385 8.20192C16.8405 8.00477 16.5427 7.94579 16.284 8.05249C16.0253 8.15919 15.8566 8.41055 15.8566 8.68937V11.4468H14.472H13.0874H8.24123C7.85888 11.4468 7.54893 11.7554 7.54893 12.1361C7.54893 12.5169 7.85888 12.8255 8.24123 12.8255Z" fill="#3E4059"/>
      <Rect x="3.75" y="4.75" width="10.5" height="14.5" rx="1.25" stroke="#3E4059" stroke-width="1.5"/>
    </Svg>
  );
};

export default LogOut;