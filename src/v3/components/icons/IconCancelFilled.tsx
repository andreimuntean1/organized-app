import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCancelFilled = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-cancel-filled" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40690"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40690)">
          <path
            d="M8.39998 16.6543L12 13.0543L15.6 16.6543L16.6538 15.6005L13.0538 12.0005L16.6538 8.40046L15.6 7.34664L12 10.9466L8.39998 7.34664L7.34615 8.40046L10.9461 12.0005L7.34615 15.6005L8.39998 16.6543ZM12.0016 21.5004C10.6877 21.5004 9.45268 21.2511 8.29655 20.7524C7.1404 20.2538 6.13472 19.577 5.2795 18.7222C4.42427 17.8673 3.74721 16.8621 3.24833 15.7065C2.74944 14.5508 2.5 13.3161 2.5 12.0021C2.5 10.6882 2.74933 9.45317 3.248 8.29704C3.74667 7.14089 4.42342 6.13521 5.27825 5.27999C6.1331 4.42476 7.13834 3.7477 8.29398 3.24881C9.44959 2.74993 10.6844 2.50049 11.9983 2.50049C13.3122 2.50049 14.5473 2.74982 15.7034 3.24849C16.8596 3.74716 17.8652 4.42391 18.7205 5.27874C19.5757 6.13359 20.2527 7.13883 20.7516 8.29446C21.2505 9.45008 21.5 10.6849 21.5 11.9988C21.5 13.3127 21.2506 14.5478 20.752 15.7039C20.2533 16.86 19.5765 17.8657 18.7217 18.7209C17.8669 19.5762 16.8616 20.2532 15.706 20.7521C14.5504 21.251 13.3156 21.5004 12.0016 21.5004Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCancelFilled;
