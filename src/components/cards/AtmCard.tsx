import React from "react";

type Props = {};

function AtmCard({}: Props) {
  return (
    <div>
      <svg
        width="295"
        height="182"
        viewBox="0 0 295 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14_27)">
          <path
            d="M290.288 0H4.71246C2.10984 0 0 2.11099 0 4.71503V177.285C0 179.889 2.10984 182 4.71246 182H290.288C292.89 182 295 179.889 295 177.285V4.71503C295 2.11099 292.89 0 290.288 0Z"
            fill="#7FCD91"
          />
          <path
            d="M181.435 38.1917V28.9948H184.541C185.259 28.9948 185.849 29.1176 186.309 29.3631C186.77 29.6056 187.112 29.9394 187.333 30.3645C187.554 30.7896 187.665 31.2731 187.665 31.815C187.665 32.3569 187.554 32.8373 187.333 33.2565C187.112 33.6756 186.772 34.0049 186.314 34.2444C185.856 34.4809 185.271 34.5992 184.559 34.5992H182.046V33.5933H184.523C185.014 33.5933 185.409 33.5214 185.708 33.3777C186.01 33.234 186.229 33.0304 186.363 32.767C186.501 32.5005 186.57 32.1832 186.57 31.815C186.57 31.4467 186.501 31.1249 186.363 30.8495C186.226 30.5741 186.006 30.3615 185.703 30.2118C185.401 30.0591 185.002 29.9828 184.505 29.9828H182.548V38.1917H181.435ZM185.762 34.0603L188.024 38.1917H186.731L184.505 34.0603H185.762ZM191.405 38.3534C190.968 38.3534 190.571 38.2711 190.216 38.1064C189.859 37.9387 189.577 37.6977 189.367 37.3834C189.158 37.066 189.053 36.6829 189.053 36.2338C189.053 35.8386 189.131 35.5183 189.286 35.2728C189.442 35.0243 189.65 34.8297 189.91 34.689C190.17 34.5483 190.458 34.4435 190.772 34.3747C191.089 34.3028 191.408 34.2459 191.728 34.204C192.147 34.1501 192.487 34.1097 192.747 34.0827C193.01 34.0528 193.201 34.0034 193.321 33.9346C193.444 33.8657 193.505 33.746 193.505 33.5753V33.5394C193.505 33.0963 193.384 32.752 193.142 32.5065C192.902 32.2611 192.539 32.1383 192.051 32.1383C191.545 32.1383 191.149 32.2491 190.862 32.4706C190.574 32.6921 190.373 32.9287 190.256 33.1802L189.251 32.8209C189.43 32.4017 189.669 32.0754 189.969 31.8419C190.271 31.6054 190.6 31.4407 190.956 31.3479C191.315 31.2521 191.668 31.2042 192.015 31.2042C192.237 31.2042 192.491 31.2312 192.778 31.2851C193.069 31.336 193.348 31.4422 193.618 31.6039C193.89 31.7655 194.116 32.0096 194.295 32.3359C194.475 32.6622 194.564 33.0993 194.564 33.6472V38.1917H193.505V37.2577H193.451C193.38 37.4073 193.26 37.5675 193.092 37.7382C192.925 37.9088 192.702 38.054 192.423 38.1737C192.145 38.2935 191.806 38.3534 191.405 38.3534ZM191.566 37.4014C191.985 37.4014 192.338 37.319 192.626 37.1544C192.916 36.9897 193.134 36.7772 193.281 36.5167C193.43 36.2562 193.505 35.9823 193.505 35.6949V34.7249C193.46 34.7788 193.362 34.8282 193.209 34.8731C193.06 34.915 192.886 34.9524 192.688 34.9854C192.494 35.0153 192.304 35.0423 192.119 35.0662C191.936 35.0871 191.788 35.1051 191.674 35.1201C191.399 35.156 191.142 35.2144 190.902 35.2952C190.666 35.3731 190.474 35.4913 190.328 35.65C190.184 35.8057 190.112 36.0182 190.112 36.2877C190.112 36.6559 190.248 36.9343 190.521 37.123C190.796 37.3085 191.144 37.4014 191.566 37.4014ZM197.557 34.0423V38.1917H196.498V31.294H197.521V32.3718H197.611C197.773 32.0215 198.018 31.7401 198.347 31.5276C198.676 31.312 199.101 31.2042 199.622 31.2042C200.088 31.2042 200.497 31.3 200.847 31.4917C201.197 31.6803 201.469 31.9676 201.664 32.3538C201.858 32.737 201.955 33.222 201.955 33.8088V38.1917H200.896V33.8807C200.896 33.3388 200.756 32.9167 200.474 32.6143C200.193 32.309 199.807 32.1562 199.316 32.1562C198.978 32.1562 198.676 32.2296 198.41 32.3763C198.146 32.523 197.938 32.737 197.786 33.0185C197.634 33.2999 197.557 33.6412 197.557 34.0423ZM206.494 38.3354C205.919 38.3354 205.412 38.1902 204.973 37.8998C204.533 37.6064 204.189 37.1933 203.94 36.6604C203.692 36.1245 203.568 35.4913 203.568 34.7609C203.568 34.0364 203.692 33.4077 203.94 32.8748C204.189 32.3419 204.534 31.9302 204.977 31.6398C205.42 31.3494 205.932 31.2042 206.512 31.2042C206.961 31.2042 207.316 31.2791 207.576 31.4288C207.839 31.5755 208.04 31.7431 208.177 31.9317C208.318 32.1173 208.427 32.27 208.505 32.3898H208.595V28.9948H209.654V38.1917H208.631V37.1319H208.505C208.427 37.2577 208.316 37.4163 208.173 37.6079C208.029 37.7965 207.824 37.9657 207.558 38.1154C207.292 38.2621 206.937 38.3354 206.494 38.3354ZM206.638 37.3834C207.063 37.3834 207.422 37.2726 207.715 37.0511C208.008 36.8266 208.231 36.5167 208.384 36.1215C208.536 35.7233 208.613 35.2638 208.613 34.7429C208.613 34.228 208.538 33.7774 208.388 33.3912C208.238 33.002 208.017 32.6996 207.724 32.4841C207.431 32.2655 207.069 32.1562 206.638 32.1562C206.189 32.1562 205.815 32.2715 205.516 32.502C205.22 32.7296 204.997 33.0394 204.847 33.4316C204.7 33.8208 204.627 34.2579 204.627 34.7429C204.627 35.2339 204.702 35.6799 204.852 36.0811C205.004 36.4793 205.229 36.7966 205.525 37.0331C205.824 37.2666 206.195 37.3834 206.638 37.3834ZM214.541 38.3354C213.919 38.3354 213.373 38.1872 212.903 37.8908C212.437 37.5945 212.072 37.1798 211.808 36.6469C211.548 36.114 211.418 35.4913 211.418 34.7788C211.418 34.0603 211.548 33.4331 211.808 32.8972C212.072 32.3613 212.437 31.9452 212.903 31.6488C213.373 31.3524 213.919 31.2042 214.541 31.2042C215.164 31.2042 215.709 31.3524 216.175 31.6488C216.645 31.9452 217.01 32.3613 217.27 32.8972C217.534 33.4331 217.665 34.0603 217.665 34.7788C217.665 35.4913 217.534 36.114 217.27 36.6469C217.01 37.1798 216.645 37.5945 216.175 37.8908C215.709 38.1872 215.164 38.3354 214.541 38.3354ZM214.541 37.3834C215.014 37.3834 215.403 37.2621 215.709 37.0196C216.014 36.7772 216.24 36.4583 216.386 36.0632C216.533 35.6679 216.606 35.2399 216.606 34.7788C216.606 34.3177 216.533 33.8882 216.386 33.49C216.24 33.0918 216.014 32.77 215.709 32.5245C215.403 32.279 215.014 32.1562 214.541 32.1562C214.069 32.1562 213.68 32.279 213.375 32.5245C213.069 32.77 212.843 33.0918 212.697 33.49C212.55 33.8882 212.477 34.3177 212.477 34.7788C212.477 35.2399 212.55 35.6679 212.697 36.0632C212.843 36.4583 213.069 36.7772 213.375 37.0196C213.68 37.2621 214.069 37.3834 214.541 37.3834ZM219.282 38.1917V31.294H220.306V32.3718H220.395C220.539 32.0036 220.771 31.7177 221.091 31.5141C221.411 31.3075 221.796 31.2042 222.244 31.2042C222.699 31.2042 223.078 31.3075 223.38 31.5141C223.685 31.7177 223.923 32.0036 224.093 32.3718H224.166C224.342 32.0155 224.607 31.7326 224.96 31.5231C225.313 31.3105 225.736 31.2042 226.23 31.2042C226.847 31.2042 227.351 31.3974 227.742 31.7835C228.134 32.1668 228.33 32.764 228.33 33.5753V38.1917H227.271V33.5753C227.271 33.0664 227.132 32.7026 226.854 32.4841C226.576 32.2655 226.248 32.1562 225.871 32.1562C225.386 32.1562 225.011 32.303 224.744 32.5963C224.478 32.8867 224.345 33.255 224.345 33.7011V38.1917H223.268V33.4675C223.268 33.0753 223.141 32.7595 222.886 32.52C222.632 32.2775 222.304 32.1562 221.903 32.1562C221.628 32.1562 221.371 32.2296 221.131 32.3763C220.895 32.523 220.703 32.7266 220.557 32.987C220.413 33.2445 220.341 33.5424 220.341 33.8807V38.1917H219.282ZM233.966 38.1917V28.9948H237.179C237.819 28.9948 238.347 29.1056 238.763 29.3271C239.179 29.5457 239.489 29.8406 239.692 30.2118C239.896 30.5801 239.998 30.9887 239.998 31.4378C239.998 31.8329 239.927 32.1593 239.786 32.4167C239.649 32.6742 239.466 32.8778 239.239 33.0274C239.015 33.1771 238.771 33.2879 238.508 33.3597V33.4496C238.789 33.4675 239.072 33.5663 239.356 33.746C239.64 33.9256 239.878 34.183 240.069 34.5183C240.261 34.8537 240.357 35.2638 240.357 35.7488C240.357 36.2098 240.252 36.6245 240.042 36.9927C239.833 37.3609 239.502 37.6528 239.05 37.8684C238.599 38.0839 238.011 38.1917 237.287 38.1917H233.966ZM235.078 37.2038H237.287C238.014 37.2038 238.53 37.0631 238.835 36.7816C239.143 36.4972 239.297 36.1529 239.297 35.7488C239.297 35.4374 239.218 35.15 239.059 34.8866C238.901 34.6201 238.675 34.4076 238.382 34.2489C238.089 34.0872 237.741 34.0064 237.341 34.0064H235.078V37.2038ZM235.078 33.0364H237.143C237.478 33.0364 237.78 32.9706 238.049 32.8388C238.322 32.7071 238.537 32.5215 238.696 32.282C238.858 32.0425 238.938 31.7611 238.938 31.4378C238.938 31.0336 238.798 30.6908 238.516 30.4094C238.235 30.125 237.789 29.9828 237.179 29.9828H235.078V33.0364ZM244.071 38.3534C243.634 38.3534 243.237 38.2711 242.881 38.1064C242.525 37.9387 242.243 37.6977 242.033 37.3834C241.824 37.066 241.719 36.6829 241.719 36.2338C241.719 35.8386 241.797 35.5183 241.952 35.2728C242.108 35.0243 242.316 34.8297 242.576 34.689C242.836 34.5483 243.124 34.4435 243.438 34.3747C243.755 34.3028 244.073 34.2459 244.394 34.204C244.813 34.1501 245.152 34.1097 245.413 34.0827C245.676 34.0528 245.867 34.0034 245.987 33.9346C246.11 33.8657 246.171 33.746 246.171 33.5753V33.5394C246.171 33.0963 246.05 32.752 245.808 32.5065C245.568 32.2611 245.205 32.1383 244.717 32.1383C244.211 32.1383 243.815 32.2491 243.528 32.4706C243.24 32.6921 243.039 32.9287 242.922 33.1802L241.916 32.8209C242.096 32.4017 242.335 32.0754 242.634 31.8419C242.937 31.6054 243.266 31.4407 243.622 31.3479C243.981 31.2521 244.334 31.2042 244.681 31.2042C244.902 31.2042 245.157 31.2312 245.444 31.2851C245.734 31.336 246.014 31.4422 246.284 31.6039C246.555 31.7655 246.782 32.0096 246.961 32.3359C247.141 32.6622 247.23 33.0993 247.23 33.6472V38.1917H246.171V37.2577H246.117C246.046 37.4073 245.926 37.5675 245.758 37.7382C245.591 37.9088 245.368 38.054 245.089 38.1737C244.811 38.2935 244.472 38.3534 244.071 38.3534ZM244.232 37.4014C244.651 37.4014 245.004 37.319 245.292 37.1544C245.582 36.9897 245.8 36.7772 245.947 36.5167C246.096 36.2562 246.171 35.9823 246.171 35.6949V34.7249C246.126 34.7788 246.028 34.8282 245.875 34.8731C245.725 34.915 245.552 34.9524 245.354 34.9854C245.16 35.0153 244.97 35.0423 244.784 35.0662C244.602 35.0871 244.454 35.1051 244.34 35.1201C244.064 35.156 243.807 35.2144 243.568 35.2952C243.332 35.3731 243.14 35.4913 242.993 35.65C242.85 35.8057 242.778 36.0182 242.778 36.2877C242.778 36.6559 242.914 36.9343 243.186 37.123C243.462 37.3085 243.81 37.4014 244.232 37.4014ZM250.223 34.0423V38.1917H249.164V31.294H250.187V32.3718H250.277C250.439 32.0215 250.684 31.7401 251.013 31.5276C251.342 31.312 251.767 31.2042 252.287 31.2042C252.754 31.2042 253.163 31.3 253.513 31.4917C253.863 31.6803 254.135 31.9676 254.33 32.3538C254.524 32.737 254.621 33.222 254.621 33.8088V38.1917H253.562V33.8807C253.562 33.3388 253.421 32.9167 253.14 32.6143C252.859 32.309 252.473 32.1562 251.982 32.1562C251.644 32.1562 251.342 32.2296 251.076 32.3763C250.812 32.523 250.604 32.737 250.452 33.0185C250.299 33.2999 250.223 33.6412 250.223 34.0423ZM257.544 35.6769L257.527 34.3657H257.742L260.758 31.294H262.068L258.855 34.5453H258.765L257.544 35.6769ZM256.557 38.1917V28.9948H257.616V38.1917H256.557ZM260.937 38.1917L258.244 34.7788L258.998 34.0423L262.284 38.1917H260.937Z"
            fill="#4D4646"
          />
          <path
            d="M242.776 115.612C239.951 115.614 237.157 116.209 234.576 117.36C231.996 118.511 229.685 120.192 227.796 122.294C231.171 126.002 233.041 130.838 233.041 135.854C233.041 140.87 231.171 145.706 227.796 149.414C230.055 151.913 232.902 153.808 236.08 154.926C239.257 156.044 242.662 156.35 245.988 155.817C249.313 155.284 252.453 153.927 255.121 151.871C257.79 149.816 259.903 147.125 261.268 144.045C262.633 140.965 263.208 137.592 262.94 134.233C262.672 130.874 261.569 127.635 259.731 124.811C257.895 121.987 255.381 119.666 252.421 118.061C249.459 116.455 246.144 115.615 242.776 115.617V115.612Z"
            fill="#F15A24"
          />
          <path
            d="M221.504 149.41C224.401 149.41 226.749 143.339 226.749 135.849C226.749 128.36 224.401 122.289 221.504 122.289C218.608 122.289 216.26 128.36 216.26 135.849C216.26 143.339 218.608 149.41 221.504 149.41Z"
            fill="#ED1C24"
          />
          <path
            d="M33.9811 129.906H35.4656V138.675C35.4656 139.457 35.3219 140.122 35.0346 140.669C34.7473 141.216 34.3422 141.631 33.8194 141.915C33.2967 142.198 32.6801 142.34 31.9698 142.34C31.2993 142.34 30.7027 142.218 30.18 141.975C29.6572 141.727 29.2462 141.376 28.9469 140.92C28.6475 140.465 28.4979 139.924 28.4979 139.297H29.9585C29.9585 139.645 30.0443 139.948 30.2159 140.208C30.3915 140.463 30.6309 140.663 30.9342 140.807C31.2375 140.951 31.5827 141.022 31.9698 141.022C32.3968 141.022 32.7599 140.933 33.0592 140.753C33.3585 140.573 33.586 140.31 33.7416 139.962C33.9012 139.611 33.9811 139.181 33.9811 138.675V129.906ZM41.9843 142.364C41.1542 142.364 40.426 142.166 39.7994 141.771C39.1769 141.376 38.69 140.823 38.3389 140.112C37.9916 139.401 37.818 138.571 37.818 137.62C37.818 136.662 37.9916 135.826 38.3389 135.111C38.69 134.396 39.1769 133.841 39.7994 133.446C40.426 133.05 41.1542 132.853 41.9843 132.853C42.8143 132.853 43.5407 133.05 44.1632 133.446C44.7897 133.841 45.2766 134.396 45.6238 135.111C45.9749 135.826 46.1505 136.662 46.1505 137.62C46.1505 138.571 45.9749 139.401 45.6238 140.112C45.2766 140.823 44.7897 141.376 44.1632 141.771C43.5407 142.166 42.8143 142.364 41.9843 142.364ZM41.9843 141.094C42.6148 141.094 43.1336 140.933 43.5406 140.609C43.9477 140.286 44.249 139.86 44.4445 139.333C44.6401 138.806 44.7378 138.235 44.7378 137.62C44.7378 137.005 44.6401 136.433 44.4445 135.902C44.249 135.37 43.9477 134.941 43.5406 134.614C43.1336 134.286 42.6148 134.123 41.9843 134.123C41.3538 134.123 40.835 134.286 40.4279 134.614C40.0209 134.941 39.7196 135.37 39.524 135.902C39.3285 136.433 39.2307 137.005 39.2307 137.62C39.2307 138.235 39.3285 138.806 39.524 139.333C39.7196 139.86 40.0209 140.286 40.4279 140.609C40.835 140.933 41.3538 141.094 41.9843 141.094ZM49.7198 136.638V142.172H48.307V129.906H49.7198V134.41H49.8395C50.0548 133.935 50.3781 133.558 50.8093 133.278C51.2443 132.995 51.823 132.853 52.5449 132.853C53.1717 132.853 53.7202 132.979 54.191 133.23C54.6622 133.478 55.0274 133.859 55.2866 134.374C55.55 134.885 55.6815 135.536 55.6815 136.326V142.172H54.2692V136.423C54.2692 135.692 54.0793 135.127 53.7004 134.728C53.3253 134.324 52.8046 134.123 52.1377 134.123C51.675 134.123 51.2598 134.22 50.8927 134.416C50.5299 134.612 50.2424 134.897 50.0308 135.273C49.8235 135.648 49.7198 136.103 49.7198 136.638ZM59.6786 136.638V142.172H58.2663V132.973H59.631V134.41H59.7507C59.9661 133.943 60.2931 133.568 60.7323 133.284C61.1711 132.997 61.738 132.853 62.4321 132.853C63.0551 132.853 63.5994 132.981 64.0664 133.236C64.5334 133.488 64.8967 133.871 65.1559 134.386C65.4156 134.897 65.5452 135.544 65.5452 136.326V142.172H64.1324V136.423C64.1324 135.7 63.9448 135.137 63.5697 134.734C63.1946 134.326 62.68 134.123 62.0254 134.123C61.5744 134.123 61.1711 134.22 60.8162 134.416C60.4651 134.612 60.1876 134.897 59.984 135.273C59.7804 135.648 59.6786 136.103 59.6786 136.638ZM76.8419 142.172H73.0587V129.906H77.0096C78.1991 129.906 79.2165 130.152 80.0624 130.643C80.9087 131.13 81.5572 131.831 82.0081 132.745C82.4587 133.655 82.6844 134.746 82.6844 136.015C82.6844 137.293 82.4568 138.393 82.002 139.315C81.5468 140.234 80.8847 140.941 80.0148 141.436C79.1449 141.927 78.0869 142.172 76.8419 142.172ZM74.5436 140.854H76.7462C77.7599 140.854 78.6001 140.659 79.2664 140.268C79.9328 139.876 80.4295 139.319 80.757 138.597C81.084 137.874 81.2476 137.013 81.2476 136.015C81.2476 135.025 81.0859 134.173 80.7626 133.458C80.4398 132.739 79.9568 132.188 79.314 131.805C78.6717 131.418 77.8716 131.224 76.914 131.224H74.5436V140.854ZM88.7182 142.364C87.8884 142.364 87.1598 142.166 86.5335 141.771C85.911 141.376 85.4237 140.823 85.0727 140.112C84.7253 139.401 84.5519 138.571 84.5519 137.62C84.5519 136.662 84.7253 135.826 85.0727 135.111C85.4237 134.396 85.911 133.841 86.5335 133.446C87.1598 133.05 87.8884 132.853 88.7182 132.853C89.5481 132.853 90.2747 133.05 90.8973 133.446C91.5235 133.841 92.0103 134.396 92.3576 135.111C92.7087 135.826 92.8845 136.662 92.8845 137.62C92.8845 138.571 92.7087 139.401 92.3576 140.112C92.0103 140.823 91.5235 141.376 90.8973 141.771C90.2747 142.166 89.5481 142.364 88.7182 142.364ZM88.7182 141.094C89.3487 141.094 89.8676 140.933 90.2747 140.609C90.6814 140.286 90.983 139.86 91.1786 139.333C91.3742 138.806 91.4717 138.235 91.4717 137.62C91.4717 137.005 91.3742 136.433 91.1786 135.902C90.983 135.37 90.6814 134.941 90.2747 134.614C89.8676 134.286 89.3487 134.123 88.7182 134.123C88.0877 134.123 87.5689 134.286 87.1617 134.614C86.755 134.941 86.4534 135.37 86.2578 135.902C86.0623 136.433 85.9647 137.005 85.9647 137.62C85.9647 138.235 86.0623 138.806 86.2578 139.333C86.4534 139.86 86.755 140.286 87.1617 140.609C87.5689 140.933 88.0877 141.094 88.7182 141.094ZM98.8957 142.364C98.0098 142.364 97.2459 142.168 96.6031 141.777C95.9646 141.381 95.4716 140.831 95.1248 140.124C94.7813 139.413 94.6097 138.587 94.6097 137.644C94.6097 136.702 94.7813 135.871 95.1248 135.153C95.4716 134.43 95.9547 133.867 96.5734 133.464C97.1959 133.057 97.9221 132.853 98.752 132.853C99.2312 132.853 99.7039 132.933 100.171 133.092C100.638 133.252 101.063 133.512 101.446 133.871C101.829 134.226 102.134 134.697 102.362 135.284C102.589 135.871 102.703 136.594 102.703 137.453V138.052H95.6154V136.83H101.266C101.266 136.311 101.162 135.847 100.955 135.441C100.751 135.033 100.46 134.712 100.081 134.476C99.7058 134.241 99.2628 134.123 98.752 134.123C98.1893 134.123 97.7025 134.262 97.2916 134.542C96.8844 134.817 96.5711 135.177 96.3519 135.62C96.1323 136.063 96.0225 136.538 96.0225 137.046V137.86C96.0225 138.555 96.1422 139.144 96.3816 139.627C96.6253 140.106 96.9622 140.471 97.3934 140.723C97.8246 140.97 98.325 141.094 98.8957 141.094C99.2671 141.094 99.6021 141.042 99.9014 140.938C100.205 140.831 100.466 140.671 100.686 140.459C100.905 140.244 101.075 139.976 101.194 139.657L102.559 140.04C102.415 140.503 102.174 140.91 101.835 141.262C101.496 141.609 101.077 141.881 100.578 142.076C100.079 142.268 99.5182 142.364 98.8957 142.364Z"
            fill="white"
          />
          <path
            d="M34.5011 94.2241L34.6479 90.1829L31.2334 92.3504L30.3522 90.8076L33.9503 88.9339L30.3522 87.0606L31.2334 85.5178L34.6479 87.6849L34.5011 83.6441H36.2634L36.1165 87.6849L39.5311 85.5178L40.4123 87.0606L36.8141 88.9339L40.4123 90.8076L39.5311 92.3504L36.1165 90.1829L36.2634 94.2241H34.5011ZM47.4248 94.2241L47.5718 90.1829L44.1573 92.3504L43.2761 90.8076L46.8742 88.9339L43.2761 87.0606L44.1573 85.5178L47.5718 87.6849L47.4248 83.6441H49.1872L49.0407 87.6849L52.4548 85.5178L53.3361 87.0606L49.7381 88.9339L53.3361 90.8076L52.4548 92.3504L49.0407 90.1829L49.1872 94.2241H47.4248ZM60.3487 94.2241L60.4957 90.1829L57.0811 92.3504L56.1998 90.8076L59.7983 88.9339L56.1998 87.0606L57.0811 85.5178L60.4957 87.6849L60.3487 83.6441H62.1111L61.9646 87.6849L65.3788 85.5178L66.26 87.0606L62.662 88.9339L66.26 90.8076L65.3788 92.3504L61.9646 90.1829L62.1111 94.2241H60.3487ZM73.2726 94.2241L73.4196 90.1829L70.005 92.3504L69.1237 90.8076L72.7222 88.9339L69.1237 87.0606L70.005 85.5178L73.4196 87.6849L73.2726 83.6441H75.0351L74.8885 87.6849L78.3027 85.5178L79.1839 87.0606L75.5859 88.9339L79.1839 90.8076L78.3027 92.3504L74.8885 90.1829L75.0351 94.2241H73.2726ZM93.4664 94.2241L93.6135 90.1829L90.1988 92.3504L89.3176 90.8076L92.9155 88.9339L89.3176 87.0606L90.1988 85.5178L93.6135 87.6849L93.4664 83.6441H95.2289L95.0819 87.6849L98.4965 85.5178L99.3777 87.0606L95.7793 88.9339L99.3777 90.8076L98.4965 92.3504L95.0819 90.1829L95.2289 94.2241H93.4664ZM106.39 94.2241L106.537 90.1829L103.123 92.3504L102.242 90.8076L105.839 88.9339L102.242 87.0606L103.123 85.5178L106.537 87.6849L106.39 83.6441H108.153L108.006 87.6849L111.42 85.5178L112.302 87.0606L108.703 88.9339L112.302 90.8076L111.42 92.3504L108.006 90.1829L108.153 94.2241H106.39ZM119.314 94.2241L119.461 90.1829L116.047 92.3504L115.165 90.8076L118.763 88.9339L115.165 87.0606L116.047 85.5178L119.461 87.6849L119.314 83.6441H121.077L120.93 87.6849L124.344 85.5178L125.226 87.0606L121.628 88.9339L125.226 90.8076L124.344 92.3504L120.93 90.1829L121.077 94.2241H119.314ZM132.238 94.2241L132.385 90.1829L128.971 92.3504L128.089 90.8076L131.687 88.9339L128.089 87.0606L128.971 85.5178L132.385 87.6849L132.238 83.6441H134.001L133.854 87.6849L137.268 85.5178L138.15 87.0606L134.551 88.9339L138.15 90.8076L137.268 92.3504L133.854 90.1829L134.001 94.2241H132.238ZM152.432 94.2241L152.579 90.1829L149.164 92.3504L148.283 90.8076L151.881 88.9339L148.283 87.0606L149.164 85.5178L152.579 87.6849L152.432 83.6441H154.194L154.047 87.6849L157.462 85.5178L158.343 87.0606L154.745 88.9339L158.343 90.8076L157.462 92.3504L154.047 90.1829L154.194 94.2241H152.432ZM165.356 94.2241L165.503 90.1829L162.088 92.3504L161.207 90.8076L164.805 88.9339L161.207 87.0606L162.088 85.5178L165.503 87.6849L165.356 83.6441H167.118L166.971 87.6849L170.386 85.5178L171.267 87.0606L167.669 88.9339L171.267 90.8076L170.386 92.3504L166.971 90.1829L167.118 94.2241H165.356ZM178.28 94.2241L178.426 90.1829L175.012 92.3504L174.131 90.8076L177.729 88.9339L174.131 87.0606L175.012 85.5178L178.426 87.6849L178.28 83.6441H180.042L179.895 87.6849L183.31 85.5178L184.191 87.0606L180.593 88.9339L184.191 90.8076L183.31 92.3504L179.895 90.1829L180.042 94.2241H178.28ZM191.204 94.2241L191.35 90.1829L187.936 92.3504L187.055 90.8076L190.653 88.9339L187.055 87.0606L187.936 85.5178L191.35 87.6849L191.204 83.6441H192.966L192.819 87.6849L196.234 85.5178L197.115 87.0606L193.517 88.9339L197.115 90.8076L196.234 92.3504L192.819 90.1829L192.966 94.2241H191.204ZM214.371 83.6441V102.453H212.095V86.0318H211.985L207.395 89.081V86.7668L212.095 83.6441H214.371ZM219.778 102.453V100.8L225.983 94.0035C226.711 93.2076 227.31 92.5159 227.781 91.9279C228.253 91.3343 228.601 90.777 228.828 90.2564C229.06 89.7302 229.177 89.1791 229.177 88.6034C229.177 87.9423 229.018 87.3699 228.699 86.8861C228.387 86.4024 227.959 86.0289 227.414 85.7658C226.87 85.5023 226.258 85.3707 225.579 85.3707C224.856 85.3707 224.226 85.5207 223.688 85.8205C223.155 86.1148 222.742 86.5278 222.449 87.0606C222.161 87.5934 222.017 88.2177 222.017 88.9339H219.851C219.851 87.832 220.105 86.8644 220.613 86.0318C221.121 85.1991 221.812 84.5503 222.687 84.0849C223.569 83.6196 224.557 83.3871 225.652 83.3871C226.754 83.3871 227.73 83.6196 228.58 84.0849C229.431 84.5503 230.098 85.1779 230.581 85.9676C231.065 86.7574 231.306 87.6363 231.306 88.6034C231.306 89.2955 231.181 89.9716 230.93 90.6332C230.685 91.2881 230.257 92.0199 229.645 92.828C229.039 93.63 228.198 94.6098 227.121 95.7669L222.898 100.285V100.432H231.637V102.453H219.778ZM241.779 102.71C240.568 102.71 239.488 102.502 238.54 102.085C237.597 101.669 236.847 101.091 236.29 100.35C235.74 99.6026 235.44 98.7364 235.391 97.7505H237.704C237.753 98.3569 237.961 98.8802 238.328 99.3211C238.695 99.7558 239.176 100.092 239.769 100.332C240.363 100.57 241.021 100.689 241.743 100.689C242.55 100.689 243.267 100.549 243.891 100.267C244.515 99.9854 245.005 99.5936 245.359 99.0914C245.714 98.5893 245.891 98.0079 245.891 97.3464C245.891 96.6547 245.72 96.0455 245.378 95.5189C245.035 94.9861 244.533 94.5697 243.872 94.2699C243.211 93.97 242.404 93.8201 241.449 93.8201H239.944V91.7997H241.449C242.195 91.7997 242.85 91.6648 243.413 91.3956C243.982 91.1259 244.426 90.7463 244.744 90.2564C245.069 89.7665 245.231 89.1913 245.231 88.5298C245.231 87.8933 245.09 87.3392 244.809 86.8677C244.527 86.3962 244.129 86.0289 243.615 85.7658C243.107 85.5023 242.508 85.3707 241.816 85.3707C241.168 85.3707 240.556 85.49 239.981 85.7291C239.411 85.9615 238.946 86.3015 238.585 86.7485C238.224 87.1893 238.028 87.7216 237.998 88.3464H235.795C235.832 87.3605 236.128 86.4971 236.685 85.7564C237.242 85.0096 237.97 84.4277 238.87 84.0114C239.776 83.595 240.77 83.3871 241.853 83.3871C243.015 83.3871 244.013 83.6229 244.845 84.0944C245.677 84.5593 246.317 85.1746 246.764 85.9403C247.21 86.7055 247.434 87.5321 247.434 88.4199C247.434 89.4789 247.155 90.3819 246.598 91.1292C246.048 91.876 245.298 92.3933 244.35 92.6809V92.828C245.537 93.0242 246.464 93.5291 247.131 94.3434C247.798 95.1516 248.131 96.1526 248.131 97.3464C248.131 98.3691 247.853 99.2876 247.296 100.102C246.745 100.91 245.993 101.547 245.038 102.012C244.083 102.477 242.997 102.71 241.779 102.71ZM251.445 98.5954V96.7222L259.706 83.6441H261.065V86.5462H260.147L253.905 96.4279V96.575H265.03V98.5954H251.445ZM260.293 102.453V98.0263V97.1536V83.6441H262.459V102.453H260.293Z"
            fill="white"
          />
          <path
            d="M134.68 142.022C133.786 142.022 133.025 141.779 132.397 141.292C131.768 140.802 131.287 140.092 130.955 139.162C130.623 138.229 130.457 137.101 130.457 135.78C130.457 134.466 130.623 133.345 130.955 132.415C131.291 131.482 131.774 130.77 132.402 130.279C133.035 129.784 133.794 129.537 134.68 129.537C135.565 129.537 136.322 129.784 136.951 130.279C137.584 130.77 138.066 131.482 138.398 132.415C138.734 133.345 138.903 134.466 138.903 135.78C138.903 137.101 138.736 138.229 138.404 139.162C138.072 140.092 137.592 140.802 136.963 141.292C136.334 141.779 135.573 142.022 134.68 142.022ZM134.68 140.717C135.565 140.717 136.253 140.289 136.744 139.435C137.234 138.581 137.479 137.362 137.479 135.78C137.479 134.728 137.366 133.832 137.141 133.092C136.92 132.352 136.599 131.788 136.18 131.401C135.765 131.013 135.265 130.819 134.68 130.819C133.802 130.819 133.116 131.252 132.622 132.119C132.127 132.981 131.881 134.201 131.881 135.78C131.881 136.832 131.991 137.726 132.213 138.462C132.434 139.198 132.752 139.758 133.168 140.141C133.586 140.525 134.091 140.717 134.68 140.717ZM145.426 129.703V141.856H143.955V131.247H143.884L140.919 133.216V131.721L143.955 129.703H145.426ZM153.237 129.134L149.323 143.684H148.041L151.956 129.134H153.237ZM158.977 142.022C158.194 142.022 157.496 141.888 156.883 141.619C156.274 141.35 155.79 140.976 155.43 140.497C155.074 140.015 154.88 139.455 154.849 138.818H156.343C156.375 139.21 156.509 139.548 156.746 139.833C156.984 140.114 157.294 140.331 157.677 140.486C158.061 140.64 158.486 140.717 158.953 140.717C159.475 140.717 159.937 140.626 160.34 140.444C160.744 140.262 161.06 140.009 161.29 139.685C161.519 139.36 161.634 138.984 161.634 138.557C161.634 138.11 161.523 137.716 161.301 137.376C161.08 137.032 160.756 136.763 160.329 136.569C159.902 136.375 159.38 136.278 158.763 136.278H157.79V134.973H158.763C159.245 134.973 159.668 134.886 160.032 134.712C160.4 134.538 160.686 134.292 160.892 133.976C161.102 133.66 161.207 133.288 161.207 132.86C161.207 132.449 161.116 132.091 160.934 131.786C160.752 131.482 160.495 131.244 160.163 131.074C159.834 130.904 159.447 130.819 159 130.819C158.581 130.819 158.185 130.896 157.814 131.05C157.447 131.201 157.146 131.421 156.913 131.709C156.679 131.994 156.553 132.338 156.533 132.742H155.11C155.133 132.105 155.325 131.547 155.685 131.068C156.045 130.585 156.515 130.21 157.096 129.941C157.682 129.672 158.324 129.537 159.024 129.537C159.775 129.537 160.42 129.69 160.957 129.994C161.495 130.295 161.908 130.693 162.197 131.187C162.486 131.682 162.63 132.215 162.63 132.789C162.63 133.473 162.45 134.057 162.09 134.54C161.734 135.022 161.25 135.357 160.637 135.542V135.638C161.404 135.764 162.003 136.09 162.434 136.616C162.865 137.139 163.08 137.786 163.08 138.557C163.08 139.218 162.901 139.811 162.541 140.337C162.185 140.86 161.699 141.271 161.082 141.571C160.465 141.872 159.763 142.022 158.977 142.022ZM169.468 142.022C168.575 142.022 167.813 141.779 167.184 141.292C166.556 140.802 166.076 140.092 165.743 139.162C165.411 138.229 165.245 137.101 165.245 135.78C165.245 134.466 165.411 133.345 165.743 132.415C166.079 131.482 166.562 130.77 167.191 130.279C167.823 129.784 168.582 129.537 169.468 129.537C170.354 129.537 171.111 129.784 171.739 130.279C172.372 130.77 172.854 131.482 173.187 132.415C173.523 133.345 173.69 134.466 173.69 135.78C173.69 137.101 173.525 138.229 173.192 139.162C172.861 140.092 172.38 140.802 171.751 141.292C171.123 141.779 170.362 142.022 169.468 142.022ZM169.468 140.717C170.354 140.717 171.042 140.289 171.532 139.435C172.022 138.581 172.267 137.362 172.267 135.78C172.267 134.728 172.155 133.832 171.929 133.092C171.708 132.352 171.387 131.788 170.969 131.401C170.553 131.013 170.053 130.819 169.468 130.819C168.59 130.819 167.904 131.252 167.41 132.119C166.916 132.981 166.669 134.201 166.669 135.78C166.669 136.832 166.779 137.726 167.001 138.462C167.222 139.198 167.541 139.758 167.956 140.141C168.375 140.525 168.879 140.717 169.468 140.717Z"
            fill="white"
          />
          <path
            d="M228.45 122.195C225.711 119.158 222.116 117.024 218.139 116.073C214.163 115.122 209.992 115.398 206.176 116.867C202.361 118.335 199.079 120.926 196.765 124.298C194.45 127.67 193.211 131.664 193.211 135.755C193.211 139.846 194.45 143.84 196.765 147.212C199.079 150.584 202.361 153.175 206.176 154.643C209.992 156.112 214.163 156.388 218.139 155.437C222.116 154.486 225.711 152.352 228.45 149.315C225.078 145.605 223.209 140.77 223.209 135.755C223.209 130.74 225.078 125.905 228.45 122.195Z"
            fill="#ED1C24"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_27">
            <rect width="295" height="182" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default AtmCard;
