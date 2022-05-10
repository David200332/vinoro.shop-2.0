import React from 'react';
import { SvgIconProps } from "@/interfaces/icon";
import { COLORS } from '@/constants/colors';

export const StepperCart: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0177 15.8887C18.3604 15.8887 17.7299 16.1498 17.265 16.6146C16.8002 17.0795 16.5391 17.71 16.5391 18.3673C16.5391 19.0247 16.8002 19.6551 17.265 20.12C17.7299 20.5848 18.3604 20.8458 19.0177 20.8458C19.6751 20.8458 20.3056 20.5847 20.7705 20.12C21.2352 19.6551 21.4963 19.0247 21.4963 18.3673C21.4963 17.71 21.2352 17.0795 20.7705 16.6146C20.3056 16.1498 19.6751 15.8887 19.0177 15.8887V15.8887Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M8.57541 5.2481C8.43412 4.64334 8.09269 4.10402 7.60649 3.71756C7.12011 3.33126 6.51744 3.12062 5.8964 3.12012H4.59445C4.39449 3.11925 4.20133 3.19312 4.05308 3.3276C3.90481 3.4619 3.81208 3.64684 3.79339 3.84612C3.78658 4.04958 3.86272 4.2471 4.00436 4.39344C4.14599 4.53979 4.34089 4.6224 4.54452 4.62222H5.89641C6.18038 4.62537 6.45526 4.72317 6.67742 4.8999C6.89956 5.07681 7.05639 5.32271 7.12328 5.59865L7.47378 7.10093V7.22615C7.46994 7.38927 7.52303 7.54854 7.62398 7.67672L8.97586 13.3851C9.11033 13.9345 9.42505 14.4232 9.86985 14.7726C10.3147 15.1221 10.8639 15.3122 11.4296 15.3129H18.4148C19.1408 15.3072 19.8444 15.0608 20.4153 14.6121C20.9862 14.1636 21.3921 13.5384 21.5695 12.8342L23.1217 6.47492H8.87589L8.57541 5.2481Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M11.2833 15.8887C10.6258 15.8887 9.99535 16.1498 9.53066 16.6146C9.06578 17.0795 8.80469 17.71 8.80469 18.3673C8.80469 19.0247 9.06577 19.6551 9.53066 20.12C9.9954 20.5848 10.6258 20.8458 11.2833 20.8458C11.9407 20.8458 12.5712 20.5847 13.0359 20.12C13.5007 19.6551 13.7618 19.0247 13.7618 18.3673C13.7618 17.71 13.5007 17.0795 13.0359 16.6146C12.5711 16.1498 11.9407 15.8887 11.2833 15.8887V15.8887Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M3.64614 8.90311H5.72418C5.92327 8.90311 6.11433 8.824 6.25527 8.68307C6.39603 8.54213 6.47515 8.35125 6.47515 8.15198C6.48231 7.95061 6.40546 7.75554 6.26296 7.61302C6.12062 7.47068 5.92537 7.39385 5.72418 7.40083H3.64614C3.44478 7.39384 3.2497 7.47068 3.10718 7.61302C2.96485 7.75553 2.88783 7.9506 2.89499 8.15198C2.89499 8.35124 2.9741 8.54213 3.11504 8.68307C3.2558 8.824 3.44686 8.90311 3.64613 8.90311H3.64614Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M7.22543 11.4069C7.23259 11.2055 7.15575 11.0105 7.01324 10.8679C6.8709 10.7256 6.67565 10.6486 6.47428 10.6557H1.64221C1.44085 10.6486 1.24577 10.7256 1.10325 10.8679C0.960919 11.0104 0.884079 11.2055 0.891063 11.4069C0.891063 11.606 0.970174 11.7971 1.11111 11.938C1.25187 12.0788 1.44293 12.158 1.6422 12.158H6.47427C6.67354 12.158 6.8646 12.0788 7.00554 11.938C7.1463 11.7971 7.22541 11.606 7.22541 11.4069H7.22543Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M7.47598 13.9106H4.14612C3.94475 13.9035 3.74968 13.9803 3.60716 14.1228C3.46483 14.2651 3.38799 14.4604 3.39497 14.6617C3.39497 14.8608 3.47408 15.0519 3.61502 15.1928C3.75578 15.3336 3.94684 15.4127 4.14611 15.4127H7.47597C7.67506 15.4127 7.86612 15.3336 8.00706 15.1928C8.14799 15.0519 8.22711 14.8608 8.22711 14.6617C8.2341 14.4604 8.15725 14.2651 8.01492 14.1228C7.87241 13.9803 7.67716 13.9035 7.47596 13.9106H7.47598Z" fill={color || COLORS.COLOR_COD_GRAY}/>
    </svg>
)

export const StepperUser: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00414 21.3475C2.05485 20.9691 2.09386 20.5869 2.16017 20.2124C2.67115 17.4625 4.10657 15.3131 6.38443 13.6943C7.96029 15.1883 9.81697 15.9762 11.9856 15.9723C14.1466 15.9723 15.9995 15.1922 17.5907 13.6865C17.9067 13.9362 18.2382 14.1741 18.5425 14.4432C20.4616 16.1478 21.5928 18.2738 21.9009 20.8287C21.9205 21.0003 21.9478 21.1758 21.9712 21.3474V21.9715H2C2.0039 21.7648 2.0039 21.5542 2.0039 21.3474L2.00414 21.3475Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M12.4593 2C12.8533 2.07801 13.255 2.12872 13.6373 2.23794C15.9777 2.88936 17.7096 4.96058 17.9514 7.38301C18.2869 10.7414 15.8217 13.6903 12.4476 13.9671C9.40901 14.2206 6.61244 12.0558 6.09747 9.04846C5.54359 5.83435 7.55241 2.83886 10.7393 2.13273C10.9968 2.07422 11.262 2.04302 11.5234 2.00011H12.4595L12.4593 2Z" fill={color || COLORS.COLOR_COD_GRAY}/>
    </svg>
)

export const StepperMoney: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1873 13.9961C22.3038 14.1401 22.3437 14.3314 22.2947 14.5099L20.4188 21.7483C20.3856 21.8765 20.3029 21.9862 20.1887 22.0533C20.0746 22.1206 19.9386 22.1395 19.8104 22.1062L18.4756 21.7589L17.5092 21.5083C15.8501 21.0796 14.3568 20.1654 13.2206 18.8829C13.0751 19.1599 12.8297 19.371 12.534 19.4737C12.2384 19.5762 11.9148 19.5624 11.6291 19.4351C11.3433 19.3078 11.1167 19.0765 10.9952 18.7882C10.8039 19.0725 10.5028 19.2643 10.1643 19.3178C9.82576 19.3712 9.48021 19.2815 9.21057 19.07C8.94093 18.8585 8.77129 18.5444 8.74253 18.2029C8.47891 18.4088 8.1429 18.4986 7.81172 18.4519C7.48055 18.405 7.18273 18.2254 6.98666 17.9546C6.79046 17.6836 6.71292 17.3447 6.77181 17.0154L7.22665 15.2616C7.29347 15.0184 7.54137 14.872 7.78665 14.9311L10.6121 15.6658L8.5782 13.4573C8.35982 13.2269 8.2253 12.9296 8.19622 12.6135C8.16729 12.2973 8.24542 11.9805 8.41828 11.7141C8.57747 11.4767 8.80612 11.2944 9.07298 11.1918C9.33968 11.0893 9.63162 11.0717 9.9089 11.1415C10.075 11.1823 10.232 11.2537 10.3721 11.3519L14.5829 14.4047C14.7725 14.542 15.0001 14.6172 15.2342 14.6199C15.4683 14.6225 15.6975 14.5524 15.8902 14.4195C16.1223 14.254 16.2868 14.0102 16.3534 13.7331L17.4715 9.43395C17.5756 9.44981 17.6788 9.47081 17.7809 9.4971C18.4205 9.66423 18.9891 10.0335 19.4021 10.5498L22.1873 13.9961ZM6.9104 13.2467C6.67954 12.4598 6.81069 11.6111 7.2683 10.9307C7.59169 10.4599 8.05181 10.0997 8.58651 9.89911C9.12124 9.69835 9.7047 9.66677 10.2579 9.80849C10.5922 9.89499 10.9072 10.0435 11.1865 10.2464L15.0477 13.036L16.1552 8.77034L3.17951 5.40163L1.70576 11.0674V11.0676C1.65187 11.2736 1.68227 11.4926 1.79006 11.6762C1.898 11.8599 2.07438 11.9931 2.28043 12.0465L6.9104 13.2467ZM4.92498 1.87754C4.71893 1.82379 4.49995 1.85419 4.31636 1.96198C4.13264 2.06978 3.99944 2.24616 3.94598 2.45235L3.55855 3.94504L16.5361 7.31376L16.9235 5.81475C16.9773 5.60856 16.947 5.38957 16.8391 5.20603C16.7313 5.02245 16.5549 4.8891 16.3488 4.83564L4.92498 1.87754Z" fill={color || COLORS.COLOR_COD_GRAY}/>
    </svg>
)

export const StepperCheckMark: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 11.3566L2.22408 9.3015C4.82517 10.5603 6.47508 11.5169 9.39792 13.6012C14.8937 7.3645 18.5261 4.20008 25.2763 0L26 1.664C20.4328 6.52167 16.3562 11.9329 10.4856 22.4618C6.864 18.1978 4.44708 15.4787 0 11.3566Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)