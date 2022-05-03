import React from "react";
import { SvgIconProps } from "@/interfaces/IIcon";
import { COLORS } from '@/constants/colors';

export const LinkSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5441 10.456C12.7249 9.63723 11.6142 9.17728 10.4561 9.17728C9.2979 9.17728 8.18716 9.63723 7.36805 10.456L4.27905 13.544C3.45993 14.3631 2.99976 15.4741 2.99976 16.6325C2.99976 17.7909 3.45993 18.9019 4.27905 19.721C5.09818 20.5401 6.20914 21.0003 7.36755 21.0003C8.52597 21.0003 9.63693 20.5401 10.4561 19.721L12.0001 18.177" stroke={color || COLORS.COLOR_COD_GRAY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4561 13.544C11.2752 14.3628 12.3859 14.8227 13.5441 14.8227C14.7022 14.8227 15.8129 14.3628 16.6321 13.544L19.7211 10.456C20.5402 9.63687 21.0004 8.52591 21.0004 7.36749C21.0004 6.20908 20.5402 5.09811 19.7211 4.27899C18.9019 3.45987 17.791 2.99969 16.6326 2.99969C15.4741 2.99969 14.3632 3.45987 13.5441 4.27899L12.0001 5.82299" stroke={color || COLORS.COLOR_COD_GRAY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
