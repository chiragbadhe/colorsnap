import { useColorStore } from "@/lib/useColorStore";
import React from "react";

type Props = {};

function LeftCard({}: Props) {
  const { shades } = useColorStore();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(170deg, ${shades[600]}, ${shades[300]})`,
      }}
      className="border rounded-[10px] h-[450px] flex items-center justify-center flex-col px-5"
    >
      <svg
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.4873 126.884C28.5518 129.236 25.0592 129.589 22.8574 127.483C11.952 117.055 4.46073 103.506 1.46046 88.6293C-1.90442 71.9444 0.585291 54.6096 8.51003 39.5462C16.4348 24.4828 29.31 12.6118 44.966 5.93366C58.9255 -0.0208367 74.3348 -1.52225 89.1057 1.55809C92.0879 2.18 93.7761 5.25764 92.9339 8.18523V8.18523C92.0916 11.1128 89.0379 12.7779 86.0479 12.195C73.7255 9.79273 60.9191 11.1222 49.2943 16.0808C35.9723 21.7634 25.0165 31.8647 18.2731 44.6825C11.5298 57.5003 9.41124 72.2508 12.2745 86.4484C14.773 98.8371 20.9315 110.144 29.8912 118.938C32.0653 121.072 32.4229 124.532 30.4873 126.884V126.884Z"
          fill={shades[100]}
        />
        <path
          d="M83.646 6.1986C84.0751 3.18263 86.8742 1.06485 89.8498 1.71733C99.6094 3.85734 108.854 7.95621 117.015 13.7862C126.675 20.6871 134.533 29.8108 139.926 40.3872C145.318 50.9637 148.087 62.6823 147.998 74.5537C147.909 86.4252 144.965 98.101 139.415 108.596C133.865 119.09 125.871 128.095 116.109 134.851C106.347 141.606 95.1025 145.914 83.3254 147.41C71.5482 148.906 59.584 147.547 48.4427 143.447C39.0304 139.983 30.4389 134.649 23.1767 127.787C20.9625 125.694 21.1374 122.189 23.3887 120.136V120.136C25.64 118.084 29.1134 118.266 31.3547 120.329C37.4051 125.898 44.5019 130.241 52.2527 133.094C61.7331 136.583 71.9137 137.739 81.9352 136.466C91.9566 135.193 101.525 131.528 109.832 125.779C118.139 120.031 124.94 112.368 129.663 103.438C134.386 94.5081 136.891 84.5729 136.966 74.4712C137.042 64.3695 134.686 54.3979 130.098 45.3982C125.509 36.3984 118.822 28.6348 110.602 22.7627C103.882 17.9619 96.298 14.5405 88.2891 12.6744C85.3222 11.9832 83.2169 9.21456 83.646 6.1986V6.1986Z"
          fill={shades[900]}
        />
        <path
          d="M46.8324 85.348C45.5232 85.3397 44.2596 85.1201 43.0415 84.6893C41.8318 84.2584 40.7463 83.5582 39.7852 82.5888C38.824 81.6193 38.0617 80.335 37.4982 78.7358C36.9431 77.1366 36.6655 75.1728 36.6655 72.8445C36.6738 70.7067 36.9182 68.7968 37.3988 67.1147C37.8877 65.4244 38.5837 63.9909 39.4869 62.8143C40.3983 61.6377 41.4879 60.7428 42.7557 60.1296C44.0234 59.5082 45.4445 59.1974 47.0188 59.1974C48.7174 59.1974 50.2172 59.5289 51.5181 60.1918C52.819 60.8464 53.863 61.7371 54.6502 62.864C55.4457 63.9909 55.9263 65.2545 56.092 66.6548H50.7848C50.5777 65.7682 50.1426 65.0722 49.4798 64.5668C48.8169 64.0613 47.9966 63.8086 47.0188 63.8086C45.3616 63.8086 44.1022 64.5295 43.2404 65.9712C42.387 67.413 41.9519 69.3726 41.9354 71.8501H42.1094C42.4905 71.0961 43.0043 70.454 43.6506 69.9237C44.3052 69.3851 45.0468 68.9749 45.8754 68.6932C46.7122 68.4032 47.5947 68.2582 48.5227 68.2582C50.0308 68.2582 51.3731 68.6145 52.5497 69.3271C53.7263 70.0314 54.6544 71.0008 55.3338 72.2354C56.0133 73.4701 56.353 74.8828 56.353 76.4737C56.353 78.1972 55.9511 79.7301 55.1474 81.0724C54.3519 82.4148 53.2375 83.4671 51.804 84.2294C50.3788 84.9834 48.7216 85.3563 46.8324 85.348ZM46.8075 81.1222C47.6361 81.1222 48.3777 80.9233 49.0323 80.5256C49.6869 80.1278 50.2006 79.5893 50.5735 78.9098C50.9464 78.2304 51.1328 77.468 51.1328 76.6229C51.1328 75.7777 50.9464 75.0195 50.5735 74.3484C50.2089 73.6772 49.7035 73.1428 49.0572 72.745C48.4109 72.3473 47.6734 72.1484 46.8448 72.1484C46.2234 72.1484 45.6475 72.2644 45.1172 72.4964C44.5952 72.7285 44.1353 73.0516 43.7376 73.4659C43.3481 73.8802 43.0415 74.3608 42.8178 74.9077C42.5941 75.4463 42.4822 76.0221 42.4822 76.6353C42.4822 77.4556 42.6687 78.2055 43.0415 78.8849C43.4227 79.5644 43.9364 80.1071 44.5827 80.5131C45.2373 80.9192 45.9789 81.1222 46.8075 81.1222ZM70.1491 85.5593C68.0114 85.551 66.1719 85.0249 64.6307 83.9808C63.0978 82.9368 61.917 81.4246 61.0884 79.4442C60.2681 77.4639 59.8621 75.0817 59.8704 72.2976C59.8704 69.5218 60.2805 67.1561 61.1009 65.2006C61.9295 63.2451 63.1102 61.7578 64.6431 60.7386C66.1843 59.7112 68.0196 59.1974 70.1491 59.1974C72.2786 59.1974 74.1098 59.7112 75.6428 60.7386C77.1839 61.7661 78.3688 63.2576 79.1974 65.2131C80.026 67.1603 80.4362 69.5218 80.4279 72.2976C80.4279 75.09 80.0136 77.4763 79.185 79.4567C78.3647 81.437 77.1881 82.9492 75.6552 83.9933C74.1223 85.0373 72.2869 85.5593 70.1491 85.5593ZM70.1491 81.0973C71.6075 81.0973 72.7717 80.364 73.6417 78.8974C74.5117 77.4308 74.9426 75.2308 74.9343 72.2976C74.9343 70.367 74.7354 68.7595 74.3377 67.4751C73.9483 66.1908 73.3931 65.2255 72.6722 64.5792C71.9596 63.9329 71.1186 63.6097 70.1491 63.6097C68.6991 63.6097 67.5391 64.3348 66.669 65.7848C65.799 67.2348 65.3598 69.4058 65.3516 72.2976C65.3516 74.2531 65.5463 75.8854 65.9357 77.1946C66.3335 78.4955 66.8928 79.4732 67.6136 80.1278C68.3345 80.7741 69.1797 81.0973 70.1491 81.0973ZM98.1982 80.2273V78.8849C98.1982 77.8658 98.4137 76.9295 98.8445 76.076C99.2837 75.2143 99.9176 74.5265 100.746 74.0128C101.583 73.4908 102.602 73.2298 103.804 73.2298C105.022 73.2298 106.045 73.4866 106.874 74.0004C107.711 74.5141 108.34 75.2018 108.763 76.0636C109.194 76.917 109.409 77.8575 109.409 78.8849V80.2273C109.409 81.2464 109.194 82.1869 108.763 83.0487C108.332 83.9021 107.698 84.5857 106.861 85.0994C106.024 85.6214 105.005 85.8825 103.804 85.8825C102.586 85.8825 101.562 85.6214 100.734 85.0994C99.9052 84.5857 99.2754 83.9021 98.8445 83.0487C98.4137 82.1869 98.1982 81.2464 98.1982 80.2273ZM101.815 78.8849V80.2273C101.815 80.8156 101.956 81.3707 102.238 81.8928C102.528 82.4148 103.05 82.6758 103.804 82.6758C104.558 82.6758 105.071 82.4189 105.345 81.9052C105.627 81.3915 105.767 80.8321 105.767 80.2273V78.8849C105.767 78.2801 105.635 77.7166 105.37 77.1946C105.105 76.6726 104.583 76.4116 103.804 76.4116C103.058 76.4116 102.54 76.6726 102.25 77.1946C101.96 77.7166 101.815 78.2801 101.815 78.8849ZM85.1354 65.6605V64.3182C85.1354 63.2907 85.355 62.3503 85.7941 61.4968C86.2333 60.6351 86.8672 59.9473 87.6958 59.4336C88.5326 58.9199 89.5435 58.663 90.7284 58.663C91.9548 58.663 92.9822 58.9199 93.8108 59.4336C94.6394 59.9473 95.2691 60.6351 95.7 61.4968C96.1309 62.3503 96.3463 63.2907 96.3463 64.3182V65.6605C96.3463 66.688 96.1267 67.6284 95.6876 68.4819C95.2567 69.3353 94.6228 70.0189 93.786 70.5327C92.9574 71.0381 91.9382 71.2908 90.7284 71.2908C89.5187 71.2908 88.4954 71.034 87.6585 70.5202C86.8299 69.9982 86.2001 69.3146 85.7693 68.4695C85.3467 67.616 85.1354 66.6797 85.1354 65.6605ZM88.7771 64.3182V65.6605C88.7771 66.2654 88.9179 66.8247 89.1997 67.3384C89.4897 67.8522 89.9993 68.109 90.7284 68.109C91.4907 68.109 92.0086 67.8522 92.282 67.3384C92.5638 66.8247 92.7046 66.2654 92.7046 65.6605V64.3182C92.7046 63.7133 92.5721 63.1499 92.3069 62.6278C92.0418 62.1058 91.5156 61.8448 90.7284 61.8448C89.991 61.8448 89.4814 62.11 89.1997 62.6403C88.9179 63.1706 88.7771 63.7299 88.7771 64.3182ZM86.776 85L104.276 59.5455H107.532L90.0324 85H86.776Z"
          fill={shades[800]}
        />
      </svg>

      <p className="mt-[15px]">20 feb - 25 feb</p>

      <div className="w-full space-y-[4px] opacity-60 mt-[10px]">
        <p className="flex justify-between">
          <span>prev stats</span>
          <span>40%</span>
        </p>
        <p className="flex justify-between">
          <span>prev stats</span>
          <span>80%</span>
        </p>
      </div>
      <div className="mt-7">
        <button
          style={{ backgroundColor: shades[700] }}
          className="px-[60px] text-white py-[7px] rounded-[6px] "
        >
          trade
        </button>
      </div>
    </div>
  );
}

export default LeftCard;
