import React, { ReactElement } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const LoaderIcon = (props: SvgProps): ReactElement => (
  <Svg width="37" height="37" viewBox="0 0 37 37" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path d="M33.0091 11.771C33.3315 11.771 33.6137 11.6904 33.9362 11.5291C34.8231 11.0051 35.1053 9.91668 34.5812 9.07013C34.0572 8.18328 32.9687 7.90109 32.1222 8.42515C31.2353 8.90889 30.9532 10.0376 31.4772 10.9245C31.7594 11.4485 32.3641 11.771 33.0091 11.771Z" fill="#3E4059"/>
    <Path d="M26.1158 5.56303C26.398 5.72428 26.7204 5.8049 27.0429 5.8049C27.6476 5.8049 28.2926 5.48241 28.6151 4.87773C29.0988 4.03119 28.8167 2.90246 27.9701 2.41872C27.0832 1.93498 25.9948 2.21716 25.4708 3.06371C24.987 3.95056 25.2692 5.03898 26.1158 5.56303Z" fill="#3E4059"/>
    <Path d="M18.9 36.1999C28.8973 36.1999 37 28.0973 37 18.1C37 17.0922 36.1937 16.2859 35.1859 16.2859C34.1781 16.2859 33.3719 17.0922 33.3719 18.1C33.3719 26.0817 26.8817 32.5719 18.9 32.5719C10.9183 32.5719 4.4281 26.0817 4.4281 18.1C4.4281 10.1182 10.9183 3.62805 18.9 3.62805C19.9078 3.62805 20.714 2.82182 20.714 1.81403C20.714 0.806234 19.9078 0 18.9 0C8.9027 0 0.800049 8.10265 0.800049 18.1C0.800049 28.0973 8.9027 36.1999 18.9 36.1999Z" fill="#3E4059"/>
  </Svg>
);

export default LoaderIcon;