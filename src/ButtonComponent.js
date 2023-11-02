function ButtonComponent({ label, onClick, value }) {
  return (
    <button onClick={onClick} className="neumorphic" value={value}>
      {label}
    </button>
  );
}

export default ButtonComponent;