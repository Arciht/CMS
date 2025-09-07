export const Icons = {
  BlogCustomIcon: (props) => {
    return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 32 32"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
          stroke: "currentcolor",
        }}
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M16 6H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V16a1 1 0 0 0-2 0v12H4V8h12a1 1 0 0 0 0-2M7 25h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m0-4h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2M29.707 7.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0l-10 10a1 1 0 0 0-.274.511l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.274zM7 17h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m0-4h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2" />
      </svg>
    );
  },
  GoogleLogo: (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        {...props}
      >
        <path
          d="M8.9 16c0 .6.1 1.2.2 1.8L11 16l-1.8-1.8q-.3.9-.3 1.8"
          style={{
            fill: "none",
          }}
        />
        <path
          d="M16 23.1c-3.3 0-6-2.2-6.8-5.2l-6.7 6.7C5.3 29 10.3 32 16 32c3.1 0 6-.9 8.5-2.5l-6.7-6.7q-.9.3-1.8.3"
          style={{
            fill: "#34a853",
          }}
        />
        <path
          d="M32 13.8c-.1-.5-.5-.8-1-.8H16c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h5.3c-.9 1.4-2.2 2.3-3.5 2.8l6.7 6.7C29 26.7 32 21.7 32 16v-.7q.15-.6 0-1.5"
          style={{
            fill: "#4285f4",
          }}
        />
        <path
          d="M8.9 16c0-.6.1-1.2.2-1.8L2.5 7.5C.9 10 0 12.9 0 16s.9 6 2.5 8.5l6.7-6.7q-.3-.9-.3-1.8"
          style={{
            fill: "#fbbc05",
          }}
        />
        <path
          d="M28.5 6c-1.1-1.4-2.5-2.6-4-3.6C22 .9 19.1 0 16 0 10.3 0 5.3 3 2.5 7.5l6.7 6.7C10 11.2 12.8 9 16 9q.9 0 1.8.3c.9.3 1.7.8 2.6 1.5.3.3.7.3 1.1.1l6.7-3.3c.3-.1.5-.4.5-.7.1-.3 0-.6-.2-.9"
          style={{
            fill: "#ea4335",
          }}
        />
      </svg>
    );
  },
};
