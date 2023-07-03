function Button({ styles }) {
  return (
    <button
      type='button'
      className={`py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
