import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconVisitors = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-visitors" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2513_2635"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2513_2635)">
          <path
            d="M1.79834 19.3082V17.0851C1.79834 16.5697 1.93136 16.1098 2.19739 15.7053C2.46341 15.3009 2.81867 14.9862 3.26319 14.7612C4.21354 14.2964 5.16916 13.938 6.13004 13.6861C7.09094 13.4342 8.14703 13.3082 9.29832 13.3082C10.4496 13.3082 11.5057 13.4342 12.4666 13.6861C13.4275 13.938 14.3831 14.2964 15.3334 14.7612C15.778 14.9862 16.1332 15.3009 16.3992 15.7053C16.6653 16.1098 16.7983 16.5697 16.7983 17.0851V19.3082H1.79834ZM18.7983 19.3082V16.962C18.7983 16.3056 18.6375 15.6801 18.3161 15.0853C17.9947 14.4906 17.5387 13.9803 16.9483 13.5544C17.6188 13.6544 18.2553 13.8092 18.8579 14.0188C19.4604 14.2284 20.0354 14.4762 20.5829 14.7621C21.0995 15.0377 21.4986 15.3626 21.78 15.7367C22.0614 16.1108 22.2021 16.5192 22.2021 16.962V19.3082H18.7983ZM9.29832 11.6928C8.33583 11.6928 7.51188 11.3501 6.82646 10.6647C6.14105 9.97928 5.79834 9.15533 5.79834 8.19285C5.79834 7.23035 6.14105 6.4064 6.82646 5.721C7.51188 5.03558 8.33583 4.69287 9.29832 4.69287C10.2608 4.69287 11.0847 5.03558 11.7702 5.721C12.4556 6.4064 12.7983 7.23035 12.7983 8.19285C12.7983 9.15533 12.4556 9.97928 11.7702 10.6647C11.0847 11.3501 10.2608 11.6928 9.29832 11.6928ZM17.9328 8.19285C17.9328 9.15533 17.5901 9.97928 16.9047 10.6647C16.2193 11.3501 15.3953 11.6928 14.4329 11.6928C14.32 11.6928 14.1765 11.68 14.0021 11.6543C13.8278 11.6287 13.6842 11.6005 13.5714 11.5697C13.9657 11.0956 14.2688 10.5697 14.4806 9.99182C14.6924 9.41399 14.7983 8.81393 14.7983 8.19165C14.7983 7.56938 14.6903 6.97171 14.4742 6.39862C14.2582 5.82556 13.9573 5.298 13.5714 4.81595C13.7149 4.76466 13.8585 4.73133 14.0021 4.71595C14.1457 4.70056 14.2893 4.69287 14.4329 4.69287C15.3953 4.69287 16.2193 5.03558 16.9047 5.721C17.5901 6.4064 17.9328 7.23035 17.9328 8.19285ZM3.29831 17.8082H15.2983V17.0851C15.2983 16.8762 15.2461 16.6903 15.1416 16.5274C15.0371 16.3646 14.8714 16.2223 14.6445 16.1005C13.8214 15.6761 12.9739 15.3547 12.1022 15.1361C11.2304 14.9175 10.2957 14.8082 9.29832 14.8082C8.30088 14.8082 7.36626 14.9175 6.49446 15.1361C5.62268 15.3547 4.77525 15.6761 3.95216 16.1005C3.72525 16.2223 3.55954 16.3646 3.45504 16.5274C3.35056 16.6903 3.29831 16.8762 3.29831 17.0851V17.8082ZM9.29832 10.1928C9.84832 10.1928 10.3191 9.99701 10.7108 9.60535C11.1025 9.21368 11.2983 8.74285 11.2983 8.19285C11.2983 7.64285 11.1025 7.17201 10.7108 6.78035C10.3191 6.38868 9.84832 6.19285 9.29832 6.19285C8.74832 6.19285 8.27748 6.38868 7.88582 6.78035C7.49415 7.17201 7.29832 7.64285 7.29832 8.19285C7.29832 8.74285 7.49415 9.21368 7.88582 9.60535C8.27748 9.99701 8.74832 10.1928 9.29832 10.1928Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconVisitors;
