import React, { ReactElement } from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

const Boat = (props: SvgProps): ReactElement => {
  return (
    <Svg width="340" height="83" viewBox="0 0 340 83" fill="none" {...props}>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M360.049 26.8689C359.35 27.1487 357.908 28.842 357.74 33.3762C357.727 33.7362 357.714 34.1638 357.7 34.649C357.491 41.8027 356.917 61.4733 347.874 61.4733C340.586 61.4733 292.613 61.847 265.589 62.0655V62.103C264.841 62.0969 264.071 62.0906 263.279 62.0842C262.487 62.0906 261.717 62.0969 260.97 62.103V62.0655C233.946 61.847 185.973 61.4733 178.685 61.4733C169.642 61.4733 169.068 41.8027 168.859 34.649C168.845 34.1638 168.832 33.7362 168.819 33.3762C168.651 28.8421 167.209 27.1488 166.51 26.8689C178.475 27.2887 182.883 31.487 183.303 34.0059C183.646 36.0625 182.589 36.44 182.075 36.6235C181.96 36.6648 181.872 36.6962 181.833 36.7348C189.054 40.2613 201.075 40.8631 206.183 40.7231L260.97 40.7231H320.376C325.484 40.863 337.505 40.2613 344.726 36.7348C344.687 36.6962 344.599 36.6648 344.484 36.6235C343.97 36.44 342.913 36.0625 343.256 34.0059C343.676 31.4869 348.084 27.2887 360.049 26.8689Z" fill="#3E4059" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M201.279 5.45773H202.405L325.834 5.0379L328.316 5.0379C328.056 4.43104 327.608 3.95368 327.055 3.56799C326.155 2.94037 325.042 2.61703 324.287 2.51895H205.554C204.069 2.51895 202.977 3.20178 202.17 4.13155C201.806 4.5507 201.511 5.01061 201.279 5.45773ZM201.145 7.97668H197.883L198.239 6.434C198.487 5.35955 199.124 3.79873 200.268 2.4807C201.434 1.13642 203.176 0 205.554 0H324.437L324.508 0.00830131C325.573 0.131159 327.149 0.563205 328.495 1.5014C329.879 2.46598 331.081 4.02261 331.081 6.29738V7.55686H327.093V18.4613C327.768 18.7817 328.525 19.2582 329.198 19.9043C330.206 20.8713 331.081 22.2823 331.081 24.14V25.3994H327.093V45.761H324.574V25.3994H246.277V47.2304H243.758V38.2041H235.361V47.2304H232.842V38.2041H227.804V47.2304H225.285V38.2041H220.038V47.2304H217.519V38.2041H216.049V47.2304H213.53V38.2041H207.863V47.0204H205.344V38.2041H196.737V47.0204H194.218V25.3994H189.425L189.611 23.9771C189.738 23.0035 190.169 21.5777 191.088 20.3626C192.038 19.1072 193.539 18.0525 195.688 18.0525H201.145V7.97668ZM203.664 18.0525H207.863V15.9534H203.664V18.0525ZM203.664 13.4344H207.863V7.95813L203.664 7.97241V13.4344ZM210.382 7.94956V13.4344H214.58V7.93528L210.382 7.94956ZM217.099 7.92671V13.4344H222.556V7.90815L217.099 7.92671ZM225.075 7.89958V13.4344H229.484V7.88458L225.075 7.89958ZM232.003 7.87602V13.4344H237.04V7.85888L232.003 7.87602ZM239.559 7.85031V13.4344H244.387V7.83389L239.559 7.85031ZM246.906 7.82532V13.4344H258.242V7.78677L246.906 7.82532ZM260.761 7.7782V18.0525H324.574V7.56115L260.761 7.7782ZM325.624 20.5714H195.688C194.478 20.5714 193.669 21.1261 193.097 21.8823C192.86 22.1964 192.669 22.5402 192.519 22.8805H328.295C328.098 22.4427 327.805 22.0584 327.454 21.7214C326.853 21.1442 326.132 20.7606 325.624 20.5714ZM258.242 18.0525V15.9534H246.906V18.0525H258.242ZM244.387 18.0525V15.9534H239.559V18.0525H244.387ZM237.04 18.0525V15.9534H232.003V18.0525H237.04ZM229.484 18.0525V15.9534H225.075V18.0525H229.484ZM222.556 18.0525V15.9534H217.099V18.0525H222.556ZM214.58 18.0525V15.9534H210.382V18.0525H214.58ZM196.737 25.3994V35.6852H205.344V25.3994H196.737ZM207.863 25.3994V35.6852H213.53V25.3994H207.863ZM216.049 25.3994V35.6852H217.519V25.3994H216.049ZM220.038 25.3994V35.6852H225.285V25.3994H220.038ZM227.804 25.3994V35.6852H232.842V25.3994H227.804ZM235.361 25.3994V35.6852H243.758V25.3994H235.361Z" fill="#3E4059" />
      <Path d="M259.711 35.0555C259.711 30.5341 263.376 26.8689 267.898 26.8689C272.419 26.8689 276.084 30.5341 276.084 35.0555V43.6619H259.711V35.0555Z" fill="#3E4059" />
      <Rect x="268.108" y="6.71722" width="16.793" height="11.7551" fill="#3E4059" />
      <Rect x="297.915" y="6.71722" width="7.55686" height="5.0379" fill="#3E4059" />
      <Rect x="301.694" y="28.1283" width="7.55686" height="15.1137" fill="#3E4059" />
      <Path d="M329.6 53.0002C345.8 53.0002 345.8 59.3334 362 59.3334V72C345.8 72 345.8 65.6667 329.6 65.6667C313.4 65.6667 313.4 72 297.2 72C281 72 281 65.6667 264.8 65.6667C248.6 65.6667 248.6 72 232.4 72C216.2 72 216.2 65.6667 200 65.6667C183.8 65.6667 183.8 72 167.6 72C151.4 72 151.4 65.6667 135.2 65.6667C119 65.6667 119 72 102.8 72C86.6 72 86.6 65.6667 70.4 65.6667C68.5766 65.6615 66.7598 65.7536 65 65.9403V53.2738C66.7598 53.0871 68.5766 52.995 70.4 53.0002C86.6 53.0002 86.6 59.3334 102.8 59.3334C119 59.3334 119 53.0002 135.2 53.0002C151.4 53.0002 151.4 59.3334 167.6 59.3334C183.8 59.3334 183.8 53.0002 200 53.0002C216.2 53.0002 216.2 59.3334 232.4 59.3334C248.6 59.3334 248.6 53.0002 264.8 53.0002C281 53.0002 281 59.3334 297.2 59.3334C313.4 59.3334 313.4 53.0002 329.6 53.0002Z" fill="#D27F65" />
      <Path d="M329.582 64.0002C345.791 64.0002 345.791 70.3335 362 70.3335V83C345.791 83 345.791 76.6667 329.582 76.6667C313.373 76.6667 313.373 83 297.164 83C280.955 83 280.955 76.6667 264.746 76.6667C248.537 76.6667 248.537 83 232.328 83C216.119 83 216.119 76.6667 199.91 76.6667C183.702 76.6667 183.701 83 167.493 83C151.284 83 151.284 76.6667 135.075 76.6667C118.866 76.6667 118.866 83 102.657 83C86.4478 83 86.4478 76.6667 70.2388 76.6667C54.0299 76.6667 54.0299 83 37.8209 83C21.6119 83 21.6119 76.6667 5.40299 76.6667C3.57854 76.6616 1.7608 76.7536 0 76.9403V64.2738C1.7608 64.0871 3.57854 63.995 5.40299 64.0002C21.6119 64.0002 21.6119 70.3335 37.8209 70.3335C54.0299 70.3335 54.0299 64.0002 70.2388 64.0002C86.4478 64.0002 86.4478 70.3335 102.657 70.3335C118.866 70.3335 118.866 64.0002 135.075 64.0002C151.284 64.0002 151.284 70.3335 167.493 70.3335C183.701 70.3335 183.702 64.0002 199.91 64.0002C216.119 64.0002 216.119 70.3335 232.328 70.3335C248.537 70.3335 248.537 64.0002 264.746 64.0002C280.955 64.0002 280.955 70.3335 297.164 70.3335C313.373 70.3335 313.373 64.0002 329.582 64.0002Z" fill="#F8A388" />
    </Svg>
  );
}
export default Boat;