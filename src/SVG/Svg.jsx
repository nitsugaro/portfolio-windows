import filePDF from "../assets/file-pdf.png";
import bloc from "../assets/bloc.png";

export default function Svg({ icon, className }) {
  if (icon == "folder")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className={className}
      >
        <linearGradient
          id="WQEfvoQAcpQgQgyjQQ4Hqa_dINnkNb1FBl4_gr1"
          x1="24"
          x2="24"
          y1="6.708"
          y2="14.977"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#eba600"></stop>
          <stop offset="1" stop-color="#c28200"></stop>
        </linearGradient>
        <path
          fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa_dINnkNb1FBl4_gr1)"
          d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30	c0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"
        ></path>
        <linearGradient
          id="WQEfvoQAcpQgQgyjQQ4Hqb_dINnkNb1FBl4_gr2"
          x1="24"
          x2="24"
          y1="10.854"
          y2="40.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffd869"></stop>
          <stop offset="1" stop-color="#fec52b"></stop>
        </linearGradient>
        <path
          fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb_dINnkNb1FBl4_gr2)"
          d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26	c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"
        ></path>
      </svg>
    );

  if (icon == "folder-js")
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M42 194V844C42 882.66 73.3401 914 112 914H912C950.66 914 982 882.66 982 844V268C982 229.34 950.66 198 912 198H462.663C443.089 198 424.049 191.619 408.429 179.824L358.571 142.176C342.951 130.381 323.911 124 304.337 124H112C73.3401 124 42 155.34 42 194Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_ii)">
          <path
            d="M982 375.5H42V194C42 155.34 73.3401 124 112 124H304.337C323.911 124 342.951 130.381 358.571 142.176L408.429 179.824C424.049 191.619 443.089 198 462.663 198H912C950.66 198 982 229.34 982 268V375.5Z"
            fill="#F7DF1E"
          />
        </g>
        <rect x="42" y="258" width="940" height="656" rx="70" fill="#F7DF1E" />
        <path
          d="M445.003 727.905L494.069 698.209C503.537 714.993 512.148 729.195 532.804 729.195C552.603 729.195 565.089 721.45 565.089 691.324V486.446H625.344V692.175C625.344 754.584 588.761 782.992 535.386 782.992C487.184 782.992 459.204 758.028 445 727.9L445.003 727.905ZM658.073 721.448L707.134 693.042C720.051 714.134 736.837 729.628 766.533 729.628C791.502 729.628 807.422 717.145 807.422 699.927C807.422 679.269 791.066 671.95 763.52 659.903L748.459 653.441C704.985 634.939 676.149 611.695 676.149 562.629C676.149 517.434 710.581 483 764.384 483C802.69 483 830.237 496.345 850.034 531.207L803.116 561.339C792.784 542.832 781.598 535.516 764.381 535.516C746.733 535.516 735.543 546.706 735.543 561.339C735.543 579.415 746.733 586.736 772.557 597.927L787.62 604.382C838.84 626.335 867.677 648.714 867.677 699.068C867.677 753.305 825.067 783 767.823 783C711.871 783 675.716 756.315 658.07 721.45"
          fill="#423E21"
        />
        <g filter="url(#filter2_di)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M976.603 871C978.972 865.339 980.618 859.301 981.427 853H42.5732C43.3819 859.301 45.0282 865.339 47.397 871H976.603Z"
            fill="white"
            fill-opacity="0.01"
          />
          <path d="M982 816H42V834H982V816Z" fill="white" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter3_i)">
          <path
            d="M42 328C42 289.34 73.3401 258 112 258H912C950.66 258 982 289.34 982 328V844C982 882.66 950.66 914 912 914H112C73.3401 914 42 882.66 42 844V328Z"
            fill="white"
            fill-opacity="0.02"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="22"
            y="112"
            width="980"
            height="830"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_ii"
            x="42"
            y="24"
            width="940"
            height="351.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-150" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow"
              result="effect2_innerShadow"
            />
          </filter>
          <filter
            id="filter2_di"
            x="27"
            y="805"
            width="970"
            height="85"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
          </filter>
          <filter
            id="filter3_i"
            x="42"
            y="258"
            width="940"
            height="656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    );

  if (icon == "folder-nodejs")
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M42 194V844C42 882.66 73.3401 914 112 914H912C950.66 914 982 882.66 982 844V268C982 229.34 950.66 198 912 198H462.663C443.089 198 424.049 191.619 408.429 179.824L358.571 142.176C342.951 130.381 323.911 124 304.337 124H112C73.3401 124 42 155.34 42 194Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_ii)">
          <path
            d="M982 375.5H42V194C42 155.34 73.3401 124 112 124H304.337C323.911 124 342.951 130.381 358.571 142.176L408.429 179.824C424.049 191.619 443.089 198 462.663 198H912C950.66 198 982 229.34 982 268V375.5Z"
            fill="#AADF71"
          />
        </g>
        <rect x="42" y="258" width="940" height="656" rx="70" fill="#AADF71" />
        <path
          d="M491.392 341.334C503.79 334.238 519.938 334.206 532.325 341.334C594.643 376.547 656.98 411.705 719.287 446.939C731.007 453.54 738.846 466.583 738.726 480.086V691.941C738.813 706.003 730.2 719.357 717.836 725.809C655.723 760.828 593.642 795.889 531.54 830.908C518.885 838.143 502.413 837.586 490.155 829.758C471.533 818.963 452.88 808.221 434.256 797.437C430.451 795.168 426.161 793.363 423.474 789.673C425.849 786.471 430.096 786.072 433.548 784.674C441.321 782.202 448.46 778.235 455.601 774.385C457.406 773.149 459.611 773.623 461.342 774.729C477.265 783.859 493.048 793.254 509.025 802.297C512.434 804.264 515.885 801.652 518.798 800.028C579.75 765.579 640.777 731.26 701.718 696.8C703.976 695.714 705.225 693.317 705.041 690.844C705.084 620.958 705.052 551.059 705.063 481.173C705.321 478.366 703.697 475.786 701.159 474.637C639.262 439.779 577.396 404.867 515.509 369.999C514.437 369.262 513.167 368.867 511.866 368.865C510.564 368.863 509.293 369.255 508.219 369.989C446.332 404.867 384.477 439.811 322.59 474.667C320.061 475.818 318.364 478.355 318.665 481.173C318.676 551.059 318.665 620.958 318.665 690.854C318.558 692.061 318.823 693.272 319.425 694.324C320.026 695.375 320.936 696.217 322.031 696.736C338.546 706.101 355.082 715.401 371.607 724.734C380.917 729.745 392.348 732.722 402.605 728.883C411.657 725.636 418.002 716.4 417.829 706.789C417.914 637.31 417.786 567.821 417.893 498.353C417.667 495.269 420.593 492.721 423.591 493.011C431.526 492.958 439.472 492.904 447.407 493.033C450.72 492.958 452.999 496.279 452.589 499.386C452.557 569.305 452.675 639.225 452.536 709.143C452.557 727.777 444.902 748.053 427.666 757.17C406.432 768.17 380.187 765.837 359.21 755.29C341.049 746.226 323.719 735.529 305.881 725.818C293.485 719.402 284.914 705.995 285.002 691.943V480.086C284.872 466.303 293.022 453.024 305.106 446.519C367.209 411.472 429.3 376.398 491.392 341.334Z"
          fill="#7AAF40"
        />
        <path
          d="M545.569 488.087C572.655 486.344 601.651 487.054 626.024 500.397C644.895 510.622 655.357 532.082 655.69 553.047C655.163 555.875 652.207 557.435 649.507 557.241C641.649 557.23 633.788 557.348 625.93 557.188C622.596 557.316 620.659 554.242 620.24 551.295C617.982 541.264 612.512 531.329 603.07 526.491C588.577 519.234 571.772 519.599 555.967 519.751C544.43 520.363 532.023 521.362 522.249 528.147C514.744 533.286 512.465 543.661 515.143 552.016C517.668 558.016 524.594 559.951 530.26 561.736C562.902 570.273 597.491 569.423 629.509 580.658C642.765 585.238 655.733 594.142 660.27 608.021C666.205 626.623 663.604 648.858 650.369 663.791C639.636 676.08 624.005 682.769 608.414 686.402C587.674 691.026 566.15 691.144 545.087 689.091C525.281 686.833 504.671 681.629 489.381 668.134C476.307 656.782 469.921 639.094 470.555 622.022C470.706 619.139 473.577 617.128 476.339 617.365C484.252 617.301 492.166 617.279 500.08 617.376C503.241 617.149 505.584 619.881 505.746 622.86C507.206 632.418 510.798 642.449 519.132 648.115C535.216 658.492 555.397 657.781 573.814 658.071C589.072 657.395 606.199 657.19 618.65 647.105C625.219 641.354 627.166 631.73 625.39 623.452C623.467 616.462 616.155 613.205 609.876 611.075C577.653 600.882 542.677 604.581 510.766 593.054C497.811 588.476 485.283 579.819 480.306 566.51C473.361 547.673 476.543 524.373 491.165 509.944C505.422 495.591 526.002 490.064 545.569 488.085V488.087Z"
          fill="#7AAF40"
        />
        <g filter="url(#filter2_di)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M976.603 871C978.972 865.339 980.618 859.301 981.427 853H42.5732C43.3819 859.301 45.0282 865.339 47.397 871H976.603Z"
            fill="white"
            fill-opacity="0.01"
          />
          <path d="M982 816H42V834H982V816Z" fill="white" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter3_i)">
          <path
            d="M42 328C42 289.34 73.3401 258 112 258H912C950.66 258 982 289.34 982 328V844C982 882.66 950.66 914 912 914H112C73.3401 914 42 882.66 42 844V328Z"
            fill="white"
            fill-opacity="0.02"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="22"
            y="112"
            width="980"
            height="830"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_ii"
            x="42"
            y="24"
            width="940"
            height="351.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-150" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow"
              result="effect2_innerShadow"
            />
          </filter>
          <filter
            id="filter2_di"
            x="27"
            y="805"
            width="970"
            height="85"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
          </filter>
          <filter
            id="filter3_i"
            x="42"
            y="258"
            width="940"
            height="656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    );

  if (icon == "shutdown")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="48px"
        height="48px"
        className={className}
      >
        <path d="M15 4v12h2V4h-2zm-3 .688C7.346 6.338 4 10.788 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.213-3.346-9.662-8-11.313v2.157C23.526 8.39 26 11.91 26 16c0 5.514-4.486 10-10 10S6 21.514 6 16c0-4.09 2.474-7.61 6-9.156V4.687z" />
      </svg>
    );

  if (icon == "reload")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="-10 -10 60 60"
        className={className}
      >
        <path d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"></path>
      </svg>
    );

  if (icon == "search")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
      >
        <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
      </svg>
    );

  if (icon == "windows")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className={className}
      >
        <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z"></path>
      </svg>
    );

  if (icon == "folder-html")
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M42 194V844C42 882.66 73.3401 914 112 914H912C950.66 914 982 882.66 982 844V268C982 229.34 950.66 198 912 198H462.663C443.089 198 424.049 191.619 408.429 179.824L358.571 142.176C342.951 130.381 323.911 124 304.337 124H112C73.3401 124 42 155.34 42 194Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_ii)">
          <path
            d="M982 375.5H42V194C42 155.34 73.3401 124 112 124H304.337C323.911 124 342.951 130.381 358.571 142.176L408.429 179.824C424.049 191.619 443.089 198 462.663 198H912C950.66 198 982 229.34 982 268V375.5Z"
            fill="#E19A7C"
          />
        </g>
        <rect x="42" y="258" width="940" height="656" rx="70" fill="#E19A7C" />
        <path
          d="M332.122 786.018L292 336H732.874L692.709 785.947L512.167 836L332.122 786.018Z"
          fill="#E44D26"
        />
        <path
          d="M512.438 797.741L658.323 757.294L692.649 372.796H512.438V797.741Z"
          fill="#EF733E"
        />
        <path
          d="M512.437 539.702H439.405L434.36 483.184H512.437V427.99H374.039L375.362 442.797L388.926 594.893H512.437V539.702ZM512.437 683.042L512.195 683.108L450.727 666.509L446.797 622.492H391.393L399.127 709.153L512.185 740.538L512.437 740.467V683.042Z"
          fill="#EBEBEB"
        />
        <path
          d="M512.247 539.702V594.893H580.212L573.804 666.475L512.247 683.088V740.509L625.395 709.153L626.223 699.825L639.195 554.523L640.541 539.702H625.67H512.247ZM512.247 427.99V483.183H645.564L646.67 470.777L649.185 442.797L650.505 427.99H512.247Z"
          fill="white"
        />
        <g filter="url(#filter2_di)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M976.603 871C978.972 865.339 980.618 859.301 981.427 853H42.5732C43.3819 859.301 45.0282 865.339 47.397 871H976.603Z"
            fill="white"
            fill-opacity="0.01"
          />
          <path d="M982 816H42V834H982V816Z" fill="white" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter3_i)">
          <path
            d="M42 328C42 289.34 73.3401 258 112 258H912C950.66 258 982 289.34 982 328V844C982 882.66 950.66 914 912 914H112C73.3401 914 42 882.66 42 844V328Z"
            fill="white"
            fill-opacity="0.02"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="22"
            y="112"
            width="980"
            height="830"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_ii"
            x="42"
            y="24"
            width="940"
            height="351.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-150" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow"
              result="effect2_innerShadow"
            />
          </filter>
          <filter
            id="filter2_di"
            x="27"
            y="805"
            width="970"
            height="85"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
          </filter>
          <filter
            id="filter3_i"
            x="42"
            y="258"
            width="940"
            height="656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    );

  if (icon == "folder-react")
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M42 194V844C42 882.66 73.3401 914 112 914H912C950.66 914 982 882.66 982 844V268C982 229.34 950.66 198 912 198H462.663C443.089 198 424.049 191.619 408.429 179.824L358.571 142.176C342.951 130.381 323.911 124 304.337 124H112C73.3401 124 42 155.34 42 194Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter1_ii)">
          <path
            d="M982 375.5H42V194C42 155.34 73.3401 124 112 124H304.337C323.911 124 342.951 130.381 358.571 142.176L408.429 179.824C424.049 191.619 443.089 198 462.663 198H912C950.66 198 982 229.34 982 268V375.5Z"
            fill="#98D6E8"
          />
        </g>
        <rect x="42" y="258" width="940" height="656" rx="70" fill="#98D6E8" />
        <path
          d="M792.456 586.057C792.456 548.863 745.878 513.615 674.465 491.756C690.945 418.971 683.621 361.063 651.348 342.523C643.909 338.174 635.212 336.114 625.713 336.114V361.635C630.977 361.635 635.212 362.665 638.759 364.611C654.323 373.537 661.076 407.527 655.811 451.244C654.552 462.001 652.492 473.331 649.975 484.89C627.544 479.397 603.053 475.162 577.304 472.416C561.854 451.244 545.832 432.017 529.695 415.194C567.004 380.518 602.023 361.521 625.827 361.521V336C594.356 336 553.156 358.431 511.499 397.341C469.842 358.66 428.643 336.458 397.171 336.458V361.978C420.86 361.978 455.994 380.862 493.303 415.309C477.281 432.132 461.259 451.244 446.038 472.416C420.174 475.162 395.683 479.397 373.252 485.004C370.62 473.56 368.675 462.459 367.301 451.816C361.922 408.099 368.56 374.109 384.01 365.068C387.443 363.008 391.906 362.093 397.171 362.093V336.572C387.558 336.572 378.86 338.632 371.307 342.981C339.148 361.521 331.938 419.314 348.533 491.871C277.349 513.844 231 548.978 231 586.057C231 623.251 277.578 658.499 348.99 680.358C332.511 753.143 339.835 811.051 372.108 829.591C379.547 833.94 388.244 836 397.857 836C429.329 836 470.529 813.569 512.186 774.659C553.843 813.34 595.042 835.542 626.514 835.542C636.127 835.542 644.825 833.482 652.378 829.133C684.536 810.594 691.746 752.8 675.152 680.243C746.107 658.385 792.456 623.137 792.456 586.057ZM643.451 509.724C639.217 524.487 633.953 539.708 628.002 554.929C623.309 545.773 618.388 536.618 613.01 527.463C607.745 518.307 602.138 509.381 596.53 500.683C612.781 503.086 628.459 506.062 643.451 509.724ZM591.037 631.605C582.11 647.055 572.955 661.704 563.456 675.322C546.404 676.81 529.123 677.611 511.728 677.611C494.447 677.611 477.166 676.81 460.229 675.437C450.73 661.818 441.46 647.284 432.534 631.949C423.836 616.957 415.939 601.736 408.729 586.401C415.825 571.065 423.836 555.73 432.419 540.738C441.346 525.288 450.501 510.639 460 497.021C477.052 495.533 494.333 494.732 511.728 494.732C529.009 494.732 546.29 495.533 563.227 496.906C572.726 510.525 581.996 525.059 590.922 540.395C599.62 555.387 607.516 570.607 614.726 585.943C607.516 601.278 599.62 616.613 591.037 631.605ZM628.002 616.728C634.182 632.063 639.446 647.398 643.795 662.276C628.803 665.938 613.01 669.028 596.644 671.431C602.252 662.619 607.86 653.578 613.124 644.309C618.389 635.153 623.309 625.883 628.002 616.728ZM511.957 738.838C501.314 727.852 490.67 715.606 480.142 702.216C490.442 702.674 500.97 703.018 511.613 703.018C522.371 703.018 533.014 702.789 543.429 702.216C533.129 715.606 522.486 727.852 511.957 738.838ZM426.811 671.431C410.561 669.028 394.882 666.053 379.89 662.39C384.124 647.627 389.389 632.406 395.34 617.186C400.032 626.341 404.953 635.496 410.332 644.652C415.71 653.807 421.204 662.734 426.811 671.431ZM511.385 433.276C522.028 444.263 532.671 456.508 543.2 469.898C532.9 469.44 522.371 469.097 511.728 469.097C500.97 469.097 490.327 469.326 479.913 469.898C490.213 456.508 500.856 444.263 511.385 433.276ZM426.697 500.683C421.089 509.495 415.482 518.536 410.217 527.806C404.953 536.961 400.032 546.117 395.34 555.272C389.16 539.937 383.895 524.602 379.547 509.724C394.539 506.176 410.332 503.086 426.697 500.683ZM323.126 643.965C282.614 626.684 256.406 604.025 256.406 586.057C256.406 568.09 282.614 545.316 323.126 528.149C332.968 523.915 343.726 520.138 354.827 516.591C361.35 539.021 369.933 562.368 380.577 586.286C370.048 610.09 361.579 633.322 355.17 655.638C343.84 652.091 333.083 648.2 323.126 643.965ZM384.697 807.504C369.132 798.577 362.38 764.588 367.645 720.871C368.903 710.113 370.963 698.783 373.481 687.225C395.912 692.718 420.403 696.952 446.152 699.699C461.602 720.871 477.624 740.097 493.76 756.92C456.452 791.596 421.433 810.594 397.629 810.594C392.479 810.479 388.13 809.449 384.697 807.504ZM656.155 720.298C661.533 764.016 654.896 798.005 639.446 807.046C636.013 809.106 631.549 810.022 626.285 810.022C602.595 810.022 567.462 791.138 530.153 756.691C546.175 739.868 562.197 720.756 577.418 699.584C603.282 696.838 627.773 692.603 650.204 686.996C652.836 698.554 654.896 709.655 656.155 720.298ZM700.215 643.965C690.373 648.2 679.615 651.976 668.514 655.524C661.991 633.093 653.408 609.747 642.765 585.828C653.293 562.024 661.762 538.792 668.171 516.476C679.501 520.024 690.258 523.915 700.329 528.149C740.842 545.43 767.049 568.09 767.049 586.057C766.935 604.025 740.728 626.799 700.215 643.965Z"
          fill="#4DA8C0"
        />
        <path
          d="M511.613 638.358C540.498 638.358 563.914 614.943 563.914 586.058C563.914 557.173 540.498 533.758 511.613 533.758C482.729 533.758 459.313 557.173 459.313 586.058C459.313 614.943 482.729 638.358 511.613 638.358Z"
          fill="#4DA8C0"
        />
        <g filter="url(#filter2_di)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M976.603 871C978.972 865.339 980.618 859.301 981.427 853H42.5732C43.3819 859.301 45.0282 865.339 47.397 871H976.603Z"
            fill="white"
            fill-opacity="0.01"
          />
          <path d="M982 816H42V834H982V816Z" fill="white" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter3_i)">
          <path
            d="M42 328C42 289.34 73.3401 258 112 258H912C950.66 258 982 289.34 982 328V844C982 882.66 950.66 914 912 914H112C73.3401 914 42 882.66 42 844V328Z"
            fill="white"
            fill-opacity="0.02"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="22"
            y="112"
            width="980"
            height="830"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_ii"
            x="42"
            y="24"
            width="940"
            height="351.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-150" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow"
              result="effect2_innerShadow"
            />
          </filter>
          <filter
            id="filter2_di"
            x="27"
            y="805"
            width="970"
            height="85"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
          </filter>
          <filter
            id="filter3_i"
            x="42"
            y="258"
            width="940"
            height="656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    );

  if (icon == "file-pdf")
    return (
      <img
        src={filePDF}
        alt="file-pdf"
        className={className}
        draggable={false}
      />
    );

  if (icon == "github")
    return (
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="48px"
        height="48px"
        viewBox="0 0 438.549 438.549"
        enable-background="new 0 0 438.549 438.549;"
        xml:space="preserve"
        className={className}
      >
        <g>
          <path
            d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    );

  if (icon == "linkedin")
    return (
      <svg
        enable-background="new 0 0 154.86 154.86"
        id="Layer_1"
        overflow="visible"
        version="1.1"
        viewBox="0 0 154.86 154.86"
        width="48px"
        height="48px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="icon">
          <circle cx="77.431" cy="77.43" fill="#0173B2" r="77.43" />
          <path
            d="M49.975,34.46c-5.85,0-9.686,3.836-9.686,8.881c0,4.932,3.706,8.799,9.438,8.799h0.083   c5.96,0,9.679-3.867,9.679-8.799C59.379,38.296,55.818,34.46,49.975,34.46L49.975,34.46z M100.369,58.063   c-9.095,0-13.095,4.973-15.363,8.479V66.7h-0.151c0.027-0.045,0.123-0.113,0.151-0.158v-7.28H67.889c0.227,4.822,0,51.356,0,51.356   h17.117v-28.72c0-1.533,0.109-3.059,0.563-4.155c1.237-3.069,4.001-6.242,8.723-6.242c6.181,0,8.724,4.692,8.724,11.601v27.517   h17.034V81.184C120.05,65.397,111.608,58.063,100.369,58.063z M41.327,59.262v51.356h17.124V59.262H41.327z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    );

  if (icon == "x")
    return (
      <svg
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="white"
        className={className}
      >
        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
      </svg>
    );

  if (icon == "square")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#FFF"
        viewBox="0 0 16 16"
        className={className}
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      </svg>
    );

  if (icon == "line")
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
          fill="#FFF"
        />
      </svg>
    );

  if (icon == "whatsapp")
    return (
      <svg
        enable-background="new 0 0 157.216 157.216"
        id="Layer_1"
        overflow="visible"
        version="1.1"
        viewBox="0 0 157.216 157.216"
        width="48px"
        height="48px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="icon_2_">
          <circle cx="78.607" cy="78.608" fill="#6EBF3A" r="78.608" />
          <path
            d="M114.66,43.313c-8.814-8.817-20.531-13.674-33.01-13.678c-25.716,0-46.646,20.922-46.659,46.639   c0,8.225,2.149,16.243,6.225,23.313L34.6,123.76l24.732-6.49c6.818,3.72,14.488,5.681,22.304,5.681h0.014   c25.71,0,46.646-20.922,46.659-46.642C128.31,63.844,123.467,52.127,114.66,43.313L114.66,43.313z M81.65,115.078h-0.014   c-6.958-0.007-13.783-1.877-19.736-5.408l-1.424-0.845l-14.669,3.853l3.915-14.307l-0.928-1.465   c-3.88-6.17-5.932-13.309-5.925-20.633c0.007-21.375,17.405-38.767,38.794-38.767c10.356,0.007,20.099,4.044,27.42,11.372   c7.32,7.328,11.354,17.066,11.347,27.426C120.424,97.688,103.026,115.078,81.65,115.078L81.65,115.078z M102.922,86.04   c-1.166-0.579-6.896-3.398-7.963-3.789s-1.85-0.587-2.624,0.579c-0.774,1.165-3.008,3.789-3.691,4.571   c-0.685,0.781-1.361,0.879-2.526,0.293c-1.166-0.587-4.927-1.814-9.38-5.785c-3.461-3.092-5.806-6.909-6.476-8.075   c-0.684-1.169-0.077-1.797,0.502-2.38c0.531-0.52,1.172-1.361,1.752-2.041c0.579-0.681,0.774-1.166,1.166-1.944   c0.391-0.778,0.195-1.458-0.098-2.041c-0.293-0.586-2.624-6.323-3.594-8.654c-0.942-2.275-1.905-1.968-2.624-2.003   c-0.677-0.031-1.458-0.038-2.233-0.038c-0.774,0-2.044,0.29-3.105,1.458c-1.075,1.166-4.083,3.985-4.083,9.721   s4.18,11.277,4.76,12.056c0.579,0.778,8.221,12.544,19.91,17.597c2.785,1.2,4.955,1.919,6.651,2.456   c2.791,0.887,5.338,0.761,7.349,0.461c2.232-0.335,6.895-2.819,7.864-5.541c0.971-2.722,0.971-5.053,0.677-5.541   C104.861,86.912,104.094,86.619,102.922,86.04L102.922,86.04z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    );

  if (icon == "gmail")
    return (
      <svg
        height="48px"
        width="48px"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="_x31_12-gmail_x2C__email_x2C__mail">
          <g>
            <g>
              <g>
                <rect
                  height="358.87"
                  fill="#F1F5F7"
                  width="357.904"
                  x="77.045"
                  y="76.565"
                />
                <path
                  d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z M256.002,293.738"
                  fill="#DCE6EA"
                />
                <path
                  d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134      c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014      l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565      L449.861,76.565z M449.861,76.565"
                  fill="#F84437"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Layer_1" />
      </svg>
    );

  if (icon == "discord")
    return (
      <svg
        enable-background="new 0 0 157.728 157.731"
        id="Layer_1"
        overflow="visible"
        version="1.1"
        viewBox="0 0 157.728 157.731"
        width="48px"
        height="48px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="icon_2_">
          <path
            d="M78.864,0c43.556,0,78.863,35.308,78.863,78.864c0,43.552-35.308,78.868-78.863,78.868   C35.308,157.731,0,122.416,0,78.864C0,35.308,35.308,0,78.864,0z"
            fill="#404eed"
          />
          <path
            d="M113.101,53.34c0,0-9.76-7.635-21.284-8.514l-1.043,2.076c10.425,2.552,15.2,6.207,20.199,10.695   c-8.612-4.394-17.112-8.514-31.927-8.514c-14.815,0-23.322,4.12-31.926,8.514c4.985-4.488,10.677-8.545,20.192-10.695l-1.036-2.076   c-12.099,1.145-21.284,8.514-21.284,8.514S34.09,69.143,32.221,100.166c10.985,12.672,27.669,12.771,27.669,12.771l3.487-4.649   c-5.923-2.059-12.61-5.741-18.386-12.378c6.889,5.209,17.293,10.642,34.055,10.642c16.762,0,27.158-5.426,34.055-10.642   c-5.783,6.637-12.47,10.319-18.386,12.378l3.487,4.649c0,0,16.677-0.099,27.669-12.771C123.995,69.143,113.101,53.34,113.101,53.34   z M65.211,91.651c-4.117,0-7.449-3.809-7.449-8.514c0-4.701,3.333-8.513,7.449-8.513c4.117,0,7.45,3.812,7.45,8.513   C72.661,87.843,69.328,91.651,65.211,91.651z M92.881,91.651c-4.117,0-7.45-3.809-7.45-8.514c0-4.701,3.333-8.513,7.45-8.513   c4.116,0,7.449,3.812,7.449,8.513C100.33,87.843,96.99,91.651,92.881,91.651z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    );

  if (icon == "skype")
    return (
      <svg
        enable-background="new 0 0 155.95 155.95"
        id="Layer_1"
        overflow="visible"
        version="1.1"
        viewBox="0 0 155.95 155.95"
        width="48px"
        height="48px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="icon">
          <path
            d="M77.975,155.95c43.068,0,77.976-34.914,77.976-77.979C155.95,34.911,121.043,0,77.975,0   C34.907,0,0,34.911,0,77.972C0,121.036,34.907,155.95,77.975,155.95"
            fill="#3BAEDA"
          />
          <path
            d="M117.326,86.967c0.608-2.755,0.92-5.614,0.92-8.549c0-21.994-17.823-39.825-39.821-39.825   c-2.325,0-4.596,0.201-6.811,0.582c-3.558-2.243-7.773-3.544-12.293-3.544c-12.75,0-23.091,10.341-23.091,23.098   c0,4.264,1.163,8.251,3.17,11.681c-0.526,2.589-0.803,5.268-0.803,8.009c0,21.998,17.831,39.828,39.829,39.828   c2.492,0,4.929-0.229,7.289-0.671c3.26,1.751,6.97,2.741,10.916,2.741c12.764,0,23.104-10.342,23.104-23.092   C119.734,93.542,118.862,90.054,117.326,86.967z M98.845,97.446c-1.835,2.616-4.555,4.679-8.085,6.146   c-3.496,1.454-7.684,2.188-12.445,2.188c-5.725,0-10.521-1.011-14.259-2.99c-2.679-1.439-4.887-3.405-6.562-5.821   c-1.689-2.437-2.547-4.853-2.547-7.192c0-1.46,0.561-2.727,1.661-3.765c1.094-1.025,2.492-1.544,4.153-1.544   c1.371,0,2.554,0.408,3.516,1.211c0.914,0.789,1.696,1.938,2.333,3.42c0.706,1.619,1.474,2.983,2.284,4.056   c0.782,1.039,1.903,1.911,3.343,2.589c1.439,0.679,3.392,1.024,5.787,1.024c3.288,0,5.987-0.699,8.016-2.09   c1.986-1.35,2.948-2.977,2.948-4.971c0-1.563-0.498-2.803-1.536-3.779c-1.08-1.01-2.513-1.799-4.25-2.339   c-1.813-0.561-4.264-1.177-7.31-1.813c-4.132-0.883-7.642-1.932-10.438-3.119c-2.852-1.215-5.15-2.904-6.839-5.008   c-1.703-2.143-2.575-4.825-2.575-7.984c0-3.004,0.907-5.721,2.7-8.057c1.786-2.322,4.388-4.132,7.738-5.365   c3.302-1.222,7.227-1.841,11.685-1.841c3.558,0,6.68,0.412,9.289,1.222c2.63,0.813,4.838,1.92,6.575,3.277   c1.752,1.371,3.06,2.831,3.877,4.354c0.83,1.533,1.246,3.063,1.246,4.541c0,1.426-0.554,2.717-1.634,3.845   c-1.094,1.132-2.472,1.709-4.098,1.709c-1.468,0-2.631-0.363-3.42-1.066c-0.747-0.665-1.522-1.692-2.381-3.17   c-0.997-1.883-2.201-3.375-3.571-4.42c-1.344-1.024-3.586-1.537-6.659-1.537c-2.852,0-5.178,0.571-6.895,1.707   c-1.661,1.083-2.471,2.333-2.471,3.817c0,0.907,0.256,1.665,0.796,2.315c0.567,0.695,1.371,1.298,2.374,1.803   c1.045,0.53,2.125,0.945,3.205,1.243c1.107,0.308,2.963,0.765,5.51,1.353c3.226,0.692,6.188,1.468,8.805,2.305   c2.658,0.852,4.942,1.893,6.811,3.111c1.911,1.243,3.42,2.834,4.493,4.742c1.072,1.91,1.619,4.271,1.619,7.019   C101.641,91.84,100.699,94.844,98.845,97.446z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    );

  if (icon == "reddit")
    return (
      <svg
        enable-background="new 0 0 154.667 154.671"
        id="Layer_1"
        overflow="visible"
        version="1.1"
        viewBox="0 0 154.667 154.671"
        height="48px"
        width="48px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="icon_2_">
          <path
            d="M77.333,0c42.712,0,77.334,34.623,77.334,77.334c0,42.715-34.622,77.337-77.334,77.337   C34.623,154.671,0,120.049,0,77.334C0,34.623,34.623,0,77.333,0z"
            fill="#FC5E49"
          />
          <path
            d="M126.335,77.299c-0.22-5.916-5.191-10.537-11.124-10.334c-2.631,0.089-5.137,1.167-7.032,2.977   c-8.363-5.7-18.189-8.821-28.291-9.041l4.766-22.917l15.725,3.303c0.439,4.038,4.059,6.959,8.09,6.52   c4.037-0.436,6.963-4.051,6.523-8.089c-0.439-4.035-4.052-6.956-8.09-6.521c-2.32,0.237-4.401,1.59-5.548,3.599l-18.005-3.599   c-1.229-0.274-2.451,0.495-2.727,1.734c0,0.021,0,0.021,0,0.038l-5.425,25.493c-10.224,0.165-20.181,3.307-28.655,9.041   c-4.305-4.055-11.097-3.853-15.155,0.477c-4.059,4.309-3.853,11.107,0.474,15.158c0.838,0.783,1.813,1.456,2.884,1.937   c-0.069,1.071-0.069,2.156,0,3.228c0,16.453,19.179,29.843,42.828,29.843c23.649,0,42.828-13.369,42.828-29.843   c0.069-1.071,0.069-2.156,0-3.228C124.083,85.228,126.404,81.43,126.335,77.299z M52.86,84.657c0-4.052,3.31-7.358,7.361-7.358   c4.058,0,7.361,3.306,7.361,7.358c0,4.059-3.303,7.361-7.361,7.361C56.15,91.984,52.86,88.716,52.86,84.657z M95.544,104.859   c-5.226,3.928-11.618,5.933-18.155,5.658c-6.538,0.274-12.924-1.73-18.156-5.658c-0.687-0.838-0.563-2.102,0.275-2.795   c0.734-0.604,1.771-0.604,2.527,0c4.415,3.234,9.806,4.876,15.285,4.621c5.479,0.289,10.877-1.277,15.354-4.477   c0.811-0.783,2.115-0.77,2.904,0.041c0.79,0.797,0.763,2.115-0.034,2.897l0,0V104.859L95.544,104.859z M94.226,92.279   c-4.052,0-7.361-3.31-7.361-7.361c0-4.058,3.31-7.361,7.361-7.361s7.361,3.303,7.361,7.361c0.165,4.052-2.994,7.472-7.046,7.636   c-0.13,0-0.24,0-0.37,0L94.226,92.279z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    );

  if (icon == "image")
    return (
      <svg
        height="48px"
        width="48px"
        id="svg4063"
        version="1.1"
        viewBox="0 0 32 32.000001"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:svg="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs id="defs4065" />
        <g id="layer1" transform="translate(0,-1020.3621)">
          <g id="g7615">
            <path
              d="m 15.99992,1023.3619 6.00004,6.5002 -6.00004,6.5 z"
              id="path5172"
              opacity={1}
              fill="#dd4f43"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.0999999}
              strokeDasharray="none"
            />
            <path
              d="m 15.99989,1036.362 6.0001,-6.5 0,6.5001 z"
              id="path5174"
              opacity={1}
              fill="#b01d5e"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 29.00021,1036.3621 -6.5002,6 -6.5,-6 z"
              id="path5176"
              opacity={1}
              fill="#4687f4"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 16.00011,1036.3621 6.5,6.0001 -6.5001,0 z"
              id="path5178"
              opacity={1}
              fill="#396cd7"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 15.99999,1049.3623 -6.00004,-6.5002 6.00004,-6.5 z"
              id="path5180"
              opacity={1}
              fill="#92e03f"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 16.00002,1036.3622 -6.0001,6.5 0,-6.5001 z"
              id="path5182"
              opacity={1}
              fill="#1ca261"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 2.99979,1036.3621 6.5002,-6 6.5,6 z"
              id="path5184"
              opacity={1}
              fill="#ffc61b"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
            <path
              d="m 15.99989,1036.3621 -6.5,-6.0001 6.5001,0 z"
              id="path5186"
              opacity={1}
              fill="#f5ba15"
              fillOpacity={1}
              stroke="none"
              strokeWidth={0.99999988}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={4.099999}
              strokeDasharray="none"
            />
          </g>
        </g>
      </svg>
    );

  if (icon == "bloc")
    return (
      <img
        src={bloc}
        alt="bloc-icon"
        height="48px"
        style={{ padding: "0 .1rem" }}
        className={className}
        draggable={false}
      />
    );
}
