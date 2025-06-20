const Button = (props) => {
  return (
    <button
      className="rounded-2xl p-3 text-2xl bg-blue-500 text-white m-2 font-bold"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
export default Button;
