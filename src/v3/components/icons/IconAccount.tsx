import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAccount = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-account" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2520_27095"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2520_27095)">
          <path
            d="M6.02308 17.2928C6.87308 16.662 7.79903 16.1639 8.80095 15.7986C9.80287 15.4332 10.8692 15.2505 12 15.2505C13.1307 15.2505 14.1971 15.4332 15.199 15.7986C16.2009 16.1639 17.1269 16.662 17.9769 17.2928C18.5987 16.6095 19.0913 15.8184 19.4548 14.9197C19.8182 14.021 20 13.0479 20 12.0005C20 9.7838 19.2208 7.8963 17.6625 6.33796C16.1041 4.77963 14.2166 4.00046 12 4.00046C9.78331 4.00046 7.89581 4.77963 6.33748 6.33796C4.77914 7.8963 3.99998 9.7838 3.99998 12.0005C3.99998 13.0479 4.18171 14.021 4.54518 14.9197C4.90864 15.8184 5.40128 16.6095 6.02308 17.2928ZM12.0003 12.7504C11.0873 12.7504 10.3173 12.4371 9.69038 11.8104C9.06346 11.1836 8.75 10.4138 8.75 9.50077C8.75 8.58775 9.06336 7.81778 9.69008 7.19087C10.3168 6.56395 11.0867 6.25049 11.9997 6.25049C12.9127 6.25049 13.6827 6.56385 14.3096 7.19056C14.9365 7.8173 15.25 8.58716 15.25 9.50016C15.25 10.4132 14.9366 11.1831 14.3099 11.8101C13.6831 12.437 12.9133 12.7504 12.0003 12.7504ZM12 21.5004C10.6807 21.5004 9.44325 21.2524 8.2875 20.7562C7.13173 20.26 6.12628 19.5844 5.27115 18.7293C4.41603 17.8742 3.7404 16.8687 3.24425 15.7129C2.74808 14.5572 2.5 13.3197 2.5 12.0005C2.5 10.6812 2.74808 9.44374 3.24425 8.28799C3.7404 7.13222 4.41603 6.12677 5.27115 5.27164C6.12628 4.41652 7.13173 3.74089 8.2875 3.24474C9.44325 2.74857 10.6807 2.50049 12 2.50049C13.3192 2.50049 14.5567 2.74857 15.7125 3.24474C16.8682 3.74089 17.8737 4.41652 18.7288 5.27164C19.5839 6.12677 20.2596 7.13222 20.7557 8.28799C21.2519 9.44374 21.5 10.6812 21.5 12.0005C21.5 13.3197 21.2519 14.5572 20.7557 15.7129C20.2596 16.8687 19.5839 17.8742 18.7288 18.7293C17.8737 19.5844 16.8682 20.26 15.7125 20.7562C14.5567 21.2524 13.3192 21.5004 12 21.5004ZM12 20.0005C12.9025 20.0005 13.7727 19.8553 14.6105 19.5649C15.4484 19.2745 16.1923 18.8684 16.8423 18.3466C16.1923 17.844 15.458 17.4524 14.6394 17.1716C13.8208 16.8908 12.941 16.7504 12 16.7504C11.0589 16.7504 10.1775 16.8892 9.35573 17.1668C8.53393 17.4444 7.80123 17.8376 7.15765 18.3466C7.80765 18.8684 8.55157 19.2745 9.3894 19.5649C10.2272 19.8553 11.0974 20.0005 12 20.0005ZM12 11.2505C12.4974 11.2505 12.9134 11.0832 13.2481 10.7486C13.5827 10.4139 13.75 9.9979 13.75 9.50046C13.75 9.00303 13.5827 8.587 13.2481 8.25236C12.9134 7.91775 12.4974 7.75044 12 7.75044C11.5025 7.75044 11.0865 7.91775 10.7519 8.25236C10.4173 8.587 10.25 9.00303 10.25 9.50046C10.25 9.9979 10.4173 10.4139 10.7519 10.7486C11.0865 11.0832 11.5025 11.2505 12 11.2505Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAccount;
