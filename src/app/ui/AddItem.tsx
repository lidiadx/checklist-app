function AddItem() {
  return (
    <button className="bg-[#F0842B] hover:bg-[#FF8C2E]/90 text-white rounded-full px-8 py-2 font-bold text-lg text-center inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Add
    </button>
  );
}

export default AddItem;
