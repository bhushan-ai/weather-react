const Button = (props) => {
  return (
    <button
      className="rounded-2xl py-3 m-1 px-3 text-2xl bg-blue-500 text-white font-bold cursor-pointer "
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
export default Button;
