import "./Input.scss";

const Input = ({
  subText = { state: false, text: "" },
  disabled = false,
  text,
  name,
  onChange,
  value,
  width = "9rem",
  Only = "all",
  type = "text",
}: any) => {
  const expression = {
    number: /^[0-9\s]*$/,
    text: /^[a-zA-Z\s]*$/,
  };

  let stylesDisabled: any = {};

  if (disabled) {
    stylesDisabled = {
      label: {
        backgroundColor: "rgb(176, 189, 201)",
        color: "rgb(238, 238, 213)",
      },
      input: {
        color: "white",
        backgroundColor: "rgb(201, 205, 224)",
        boxShadow: "0 0rem 0.01rem 0.001rem rgb(61, 55, 36)",
        padding: " 0.8rem .6rem 0.2rem 0.6rem",
      },
    };
  } else {
    stylesDisabled = {
      label: {
        backgroundColor: "rgb(105, 133, 158)",
        color: " yellow",
      },
      input: {
        color: "rgb(109, 109, 143)",
        backgroundColor: "rgb(248, 252, 255)",
        boxShadow: "0 0.01rem 0.05rem 0.001rem rgb(61, 55, 36)",
        padding: " 0.8rem .6rem 0.2rem 0.6rem",
      },
    };
  }

  return (
    <div style={{ width }} className="containerInput">
      <label style={stylesDisabled.label} htmlFor={text}>
        {text}
      </label>
      <input
        disabled={disabled}
        type={type}
        name={name}
        style={stylesDisabled.input}
        value={value}
        onChange={(e) => {
          let stateValue = false;
          switch (Only) {
            case "all":
              stateValue = true;
              break;
            case "text":
              if (expression.text.test(e.currentTarget.value)) {
                stateValue = true;
              }
              break;
            case "number":
              if (expression.number.test(e.currentTarget.value)) {
                stateValue = true;
              }
              break;
            default:
              break;
          }
          if (stateValue) {
            onChange(e, stateValue);
          }
        }}
      ></input>
      {subText.state && (
        <h4 style={{ maxWidth: ` calc(${width} - .5rem)` }}>{subText.text}</h4>
      )}
    </div>
  );
};

export default Input;
