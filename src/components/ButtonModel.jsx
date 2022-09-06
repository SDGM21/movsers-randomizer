const ButtoModel = ({ buttonName, handleClick }) => {
  return (
    <button
      className="bg-black p-2 w-full hover:bg-white hover:text-black transition"
      handleClick={handleClick}
      name={buttonName}
    >
      {buttonName}
    </button>
  );
};

export default ButtoModel;
