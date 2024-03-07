import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAddPin = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-add-pin" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2979486"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2979486)">
          <path
            d="M12.0002 21.51C9.48355 19.3293 7.59637 17.2998 6.33867 15.4216C5.08099 13.5434 4.45215 11.8191 4.45215 10.2485C4.45215 7.94087 5.19862 6.07261 6.69157 4.64376C8.18451 3.21491 9.95405 2.50049 12.0002 2.50049H12.404C12.5386 2.50049 12.6733 2.51075 12.8079 2.53126V4.04661C12.6733 4.0261 12.542 4.01167 12.4141 4.00334C12.2862 3.99501 12.1483 3.99084 12.0002 3.99084C10.2848 3.99084 8.84796 4.57802 7.68962 5.75239C6.53129 6.92676 5.95212 8.42547 5.95212 10.2485C5.95212 11.4575 6.47103 12.8662 7.50885 14.4745C8.54668 16.0829 10.0438 17.7627 12.0002 19.5139C13.9438 17.7755 15.4329 16.1101 16.4675 14.5178C17.5021 12.9255 18.029 11.5248 18.0483 10.3159V10.1928H19.5482V10.3159C19.529 11.8799 18.8922 13.5947 17.6377 15.4601C16.3832 17.3254 14.504 19.3421 12.0002 21.51ZM12.0019 11.8658C12.4995 11.8658 12.9249 11.6887 13.2781 11.3343C13.6313 10.98 13.8079 10.554 13.8079 10.0565C13.8079 9.55888 13.6307 9.13349 13.2764 8.78029C12.922 8.42709 12.4961 8.25049 11.9985 8.25049C11.5009 8.25049 11.0755 8.42766 10.7223 8.78199C10.3691 9.13632 10.1925 9.56228 10.1925 10.0599C10.1925 10.5574 10.3697 10.9828 10.724 11.336C11.0784 11.6892 11.5043 11.8658 12.0019 11.8658ZM18.0002 8.00046H19.5002V5.00046H22.5002V3.50049H19.5002V0.500488H18.0002V3.50049H15.0002V5.00046H18.0002V8.00046Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAddPin;
