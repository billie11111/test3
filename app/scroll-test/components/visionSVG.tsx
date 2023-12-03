'use client'
import { motion } from "framer-motion"
import { pathVariants, svgVariants } from "../animation"

export default function VisionSVG() {
  return (
    <motion.svg
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      viewBox="0 0 979 1177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        variants={pathVariants}
        strokeWidth="2"
        d="M237.237 1170.86C237.237 1173.8 239.625 1176.19 242.57 1176.19C245.516 1176.19 247.904 1173.8 247.904 1170.86C247.904 1167.91 245.516 1165.52 242.57 1165.52C239.625 1165.52 237.237 1167.91 237.237 1170.86ZM244 4.85803L243.69 5.80882L244 4.85803ZM717.925 175.54C704.705 184.831 694.568 190.408 687.279 193.092C683.632 194.436 680.755 195.033 678.594 195.04C676.433 195.047 675.12 194.47 674.381 193.617C673.638 192.76 673.285 191.403 673.535 189.434C673.784 187.469 674.622 185.026 676.078 182.184C678.985 176.507 684.258 169.435 691.718 161.742C721.559 130.968 785.81 90.858 870.5 90.858V88.858C785.19 88.858 720.441 129.248 690.282 160.349C682.742 168.125 677.327 175.358 674.298 181.272C672.784 184.226 671.841 186.901 671.551 189.182C671.262 191.458 671.612 193.476 672.869 194.927C674.13 196.383 676.114 197.049 678.601 197.04C681.088 197.032 684.212 196.353 687.971 194.969C695.495 192.198 705.795 186.51 719.075 177.176L717.925 175.54ZM243.69 5.80882C344.234 38.5732 489.512 62.8591 596.144 88.2059C649.545 100.9 693.169 113.839 716.825 128.197C728.693 135.401 735.207 142.767 735.792 150.363C736.374 157.917 731.12 166.266 717.925 175.54L719.075 177.176C732.38 167.825 738.455 158.893 737.786 150.209C737.121 141.567 729.807 133.737 717.863 126.488C693.893 111.939 649.955 98.9415 596.606 86.2601C489.738 60.857 344.766 36.6429 244.31 3.90724L243.69 5.80882ZM870.5 90.858C912.842 90.858 942.29 102.409 959.167 122.011C976.03 141.595 980.537 169.446 972.501 202.497C956.416 268.649 890.168 355.094 774.001 435.536L775.14 437.18C891.473 356.623 958.19 269.817 974.444 202.969C982.578 169.52 978.099 140.933 960.683 120.706C943.281 100.495 913.159 88.858 870.5 88.858V90.858ZM774.001 435.536C745.047 455.586 704.185 473.785 656.13 491.322C608.087 508.855 552.926 525.7 495.406 543.065C380.406 577.782 255.964 614.574 160.493 663.029C65.089 711.45 -1.84232 771.75 -0.991996 853.673C-0.567202 894.599 16.7852 940.756 55.6924 993.323C94.6002 1045.89 155.108 1104.93 241.961 1171.65L243.18 1170.07C156.408 1103.41 96.0563 1044.5 57.3 992.133C18.5432 939.769 1.42684 894.015 1.0079 853.652C0.170739 772.998 66.0519 713.204 161.398 664.812C256.676 616.455 380.922 579.715 495.984 544.979C553.496 527.617 608.71 510.756 656.816 493.201C704.909 475.65 745.968 457.38 775.14 437.18L774.001 435.536ZM229.288 0.943833C234.007 2.59567 238.807 4.21756 243.69 5.80882L244.31 3.90724C239.44 2.32038 234.653 0.703122 229.949 -0.943833L229.288 0.943833Z" fill="#7DC387" />
    </motion.svg>
  )
}