export const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "8rem",
      minWidth: "6rem",
      borderRadius: "12px",
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      backgroundColor: "#EBEBEB",
      cursor: "pointer",
      border: "2px solid #D9D9D9",
      ":hover": {
        backgroundColor: "#D9D9D9",
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "#000",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
        width: "100%",
        background: "#EEEEEE",
        ":hover": {
          background: "#D9D9D9",
          cursor: "pointer",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "#F1F1F1",
        maxWidth: "14rem",
        border: "2px solid #D9D9D9",
        borderRadius: "5px",
      };
    },
  
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#141414",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
      };
    },
  };
  