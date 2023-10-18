import styles from "./Button.module.scss";

const Button = ({
  key = 0,
  text = "text",
  onclick = () => {},
  disabled = false,
  fontSize = " 0.8rem",
  width = {},
}: any) => {
  let stylesDisabled: any = {};

  if (disabled) {
    stylesDisabled = {
      styles: {
        fontSize,
        color: "rgb(238, 238, 213)",
        backgroundColor: "rgb(176, 189, 201)",
        border: "solid .01rem rgb(147, 168, 192)",
        boxShadow: " 0 0.01rem 0.05rem 0.001rem transparent ",
        width,
      },
    };
  } else {
    stylesDisabled = {
      styles: {
        fontSize,
        border: "solid 0.01rem rgb(150, 150, 150)",
        color: "rgb(156, 146, 98)",
        backgroundColor: "rgb(247, 233, 115)",
        boxShadow: " 0 0.05rem 0.05rem 0.001rem rgb(153, 141, 103)",
        width,
      },
    };
  }

  return (
    <div key={key} className={styles.container}>
      <button
        style={stylesDisabled.styles}
        disabled={disabled}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
