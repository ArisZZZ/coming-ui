import * as React from "react";

const SvgZhishi = ({ title, titleId, ...props }) => (
  <svg
    className="zhishi_svg__icon"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#333"
      d="M864.492 303.872a98.009 98.009 0 0 0-99.269-96.492H611.25A98.009 98.009 0 0 0 512 303.872v407.63a20.165 20.165 0 0 1-9.708 17.232 20.126 20.126 0 0 1-19.693.63l-69.277-36.077a102.164 102.164 0 0 0-47.262-11.598H258.777a16.305 16.305 0 0 1-17.507-14.71V303.792a16.325 16.325 0 0 1 17.507-14.71H363.52a19.397 19.397 0 0 1 10.713 3.23l21.996 14.592a40.9 40.9 0 0 0 56.655-11.481 40.881 40.881 0 0 0-11.461-56.655l-22.095-14.631a100.903 100.903 0 0 0-55.966-16.798H258.777a98.009 98.009 0 0 0-99.25 96.493v363.185a98.009 98.009 0 0 0 99.25 96.492h107.362a20.066 20.066 0 0 1 9.275 2.284l89.364 47.006a101.435 101.435 0 0 0 47.261 11.658 101.297 101.297 0 0 0 47.262-11.658l89.521-47.065a19.909 19.909 0 0 1 9.216-2.225h107.264a98.009 98.009 0 0 0 99.27-96.492z"
    />
    <path
      fill="#333"
      d="M341.327 383.35a40.862 40.862 0 0 0-40.881 40.862 40.862 40.862 0 0 0 40.88 40.861h60.732a40.881 40.881 0 0 0 40.881-40.861 40.881 40.881 0 0 0-40.881-40.862z"
    />
  </svg>
);

export default SvgZhishi;