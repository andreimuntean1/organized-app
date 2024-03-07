import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconGroups = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-groups" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_23662"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_23662)">
          <path
            d="M10.55 19.8582C11.2936 18.4505 12.2583 17.4973 13.4442 16.9986C14.6301 16.4998 15.6487 16.2505 16.5 16.2505C16.8641 16.2505 17.215 16.279 17.5529 16.3361C17.8907 16.3931 18.2218 16.4684 18.5461 16.562C18.9654 15.9607 19.3125 15.2694 19.5875 14.488C19.8625 13.7066 20 12.8774 20 12.0005C20 9.76713 19.225 7.87546 17.675 6.32546C16.125 4.77546 14.2333 4.00046 12 4.00046C9.76664 4.00046 7.87498 4.77546 6.32498 6.32546C4.77498 7.87546 3.99998 9.76713 3.99998 12.0005C3.99998 12.8082 4.11183 13.5745 4.33555 14.2995C4.55927 15.0245 4.87562 15.6915 5.2846 16.3005C5.94228 15.9479 6.61376 15.6848 7.29903 15.5111C7.98428 15.3373 8.68908 15.2505 9.41343 15.2505C9.88906 15.2505 10.3487 15.2899 10.7923 15.3687C11.2359 15.4476 11.6416 15.5428 12.0096 15.6543C11.7224 15.8158 11.4544 15.9947 11.2057 16.1908C10.957 16.387 10.7179 16.5998 10.4885 16.8293C10.3269 16.796 10.1529 16.7745 9.96633 16.7649C9.77978 16.7552 9.59548 16.7504 9.41343 16.7504C8.86066 16.7504 8.31221 16.8152 7.76808 16.9447C7.22394 17.0742 6.71021 17.2684 6.22688 17.5274C6.80509 18.144 7.46343 18.6492 8.2019 19.0428C8.94037 19.4364 9.72307 19.7082 10.55 19.8582ZM12.0016 21.5004C10.6877 21.5004 9.45268 21.2511 8.29655 20.7524C7.1404 20.2538 6.13472 19.577 5.2795 18.7222C4.42427 17.8673 3.74721 16.8621 3.24833 15.7065C2.74944 14.5508 2.5 13.3161 2.5 12.0021C2.5 10.6882 2.74933 9.45317 3.248 8.29704C3.74667 7.14089 4.42342 6.13521 5.27825 5.27999C6.1331 4.42476 7.13834 3.7477 8.29398 3.24881C9.44959 2.74993 10.6844 2.50049 11.9983 2.50049C13.3122 2.50049 14.5473 2.74982 15.7034 3.24849C16.8596 3.74716 17.8652 4.42391 18.7205 5.27874C19.5757 6.13359 20.2527 7.13883 20.7516 8.29446C21.2505 9.45008 21.5 10.6849 21.5 11.9988C21.5 13.3127 21.2506 14.5478 20.752 15.7039C20.2533 16.86 19.5765 17.8657 18.7217 18.7209C17.8669 19.5762 16.8616 20.2532 15.706 20.7521C14.5504 21.251 13.3156 21.5004 12.0016 21.5004ZM9.49998 13.2504C8.59741 13.2504 7.83011 12.9344 7.19808 12.3024C6.56603 11.6703 6.25 10.903 6.25 10.0005C6.25 9.0979 6.56603 8.3306 7.19808 7.69856C7.83011 7.06651 8.59741 6.75049 9.49998 6.75049C10.4025 6.75049 11.1698 7.06651 11.8019 7.69856C12.4339 8.3306 12.75 9.0979 12.75 10.0005C12.75 10.903 12.4339 11.6703 11.8019 12.3024C11.1698 12.9344 10.4025 13.2504 9.49998 13.2504ZM9.49998 11.7505C9.98074 11.7505 10.3926 11.579 10.7356 11.2361C11.0785 10.8931 11.25 10.4812 11.25 10.0005C11.25 9.5197 11.0785 9.10783 10.7356 8.76486C10.3926 8.42191 9.98074 8.25044 9.49998 8.25044C9.01921 8.25044 8.60734 8.42191 8.26438 8.76486C7.92143 9.10783 7.74995 9.5197 7.74995 10.0005C7.74995 10.4812 7.92143 10.8931 8.26438 11.2361C8.60734 11.579 9.01921 11.7505 9.49998 11.7505ZM16.5 14.4428C15.8161 14.4428 15.2381 14.2067 14.766 13.7345C14.2938 13.2623 14.0577 12.6843 14.0577 12.0005C14.0577 11.3166 14.2938 10.7386 14.766 10.2664C15.2381 9.79426 15.8161 9.55816 16.5 9.55816C17.1838 9.55816 17.7618 9.79426 18.234 10.2664C18.7062 10.7386 18.9423 11.3166 18.9423 12.0005C18.9423 12.6843 18.7062 13.2623 18.234 13.7345C17.7618 14.2067 17.1838 14.4428 16.5 14.4428Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconGroups;
