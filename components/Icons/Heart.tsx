import React from "react";
import { SvgIconProps } from "@/interfaces/IIcon";
import { COLORS } from '@/constants/colors';

export const HeartSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.625 3.75C18.45 3.75 16.3625 4.7625 15 6.3625C13.6375 4.7625 11.55 3.75 9.375 3.75C5.525 3.75 2.5 6.775 2.5 10.625C2.5 15.35 6.75 19.2 13.1875 25.05L15 26.6875L16.8125 25.0375C23.25 19.2 27.5 15.35 27.5 10.625C27.5 6.775 24.475 3.75 20.625 3.75ZM15.125 23.1875L15 23.3125L14.875 23.1875C8.925 17.8 5 14.2375 5 10.625C5 8.125 6.875 6.25 9.375 6.25C11.3 6.25 13.175 7.4875 13.8375 9.2H16.175C16.825 7.4875 18.7 6.25 20.625 6.25C23.125 6.25 25 8.125 25 10.625C25 14.2375 21.075 17.8 15.125 23.1875Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)
