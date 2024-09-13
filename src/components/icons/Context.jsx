export const ContextIcon = ({ style, className, onClick }) => {
  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 512.00 512.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      {...style}
      className={`${className ? className : ""}`}
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>app-menu</title>{" "}
        <g id="Page-1" stroke-width="0.00512" fill="none" fill-rule="evenodd">
          {" "}
          <g
            id="app-main-menu"
            fill="#000000"
            transform="translate(42.666667, 106.666667)"
          >
            {" "}
            <path
              d="M3.55271368e-14,4.26325641e-14 L426.666667,4.26325641e-14 L426.666667,42.6666667 L3.55271368e-14,42.6666667 L3.55271368e-14,4.26325641e-14 Z M3.55271368e-14,128 L426.666667,128 L426.666667,170.666667 L3.55271368e-14,170.666667 L3.55271368e-14,128 Z M3.55271368e-14,256 L426.666667,256 L426.666667,298.666667 L3.55271368e-14,298.666667 L3.55271368e-14,256 Z"
              id="Combined-Shape"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
