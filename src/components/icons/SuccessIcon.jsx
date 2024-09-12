export const SuccessIcon = ({ style, onClick, className }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      xml:space="preserve"
      onClick={onClick}
      {...style}
      className={`${className ? className : ""}`}
    >
      <circle
        // style="fill:#25AE88;"
        cx="25"
        cy="25"
        r="25"
        style={{ fill: "#25AE88" }}
      />
      <polyline
        // style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        points="
   38,15 22,33 12,25 "
      />
    </svg>
  );
};
