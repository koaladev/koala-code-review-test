const QuantitySelector = ({ quantity, onAdd, onSubtract, disabled }: any) => {
  return (
    <div className="max-w-full">
      <p className="text-inherit font-weight-body text-lg my-2 whitespace-pre-wrap" />
      <div className="flex items-center justify-between max-w-full w-[120px]">
        <button
          type="button"
          className="rounded-full focus:outline-none focus-visible:outline-trueblue-4x flex items-center justify-center w-8 h-8 box-content p-1 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Remove 1 item"
          onClick={onSubtract}
          disabled={disabled}
        >
          <svg
            viewBox="0 0 40 40"
            aria-label="MinusCircle"
            className="w-8 h-8 fill-trueblue rounded-full bg-white hover:bg-lightgrey group-hover:bg-lightgrey"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={12} y="19.3335" width="15.3333" height={2} rx={1} />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zM0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
            />
          </svg>
        </button>
        <span
          className="text-md text-midnightsky font-weight-body text-md m-0 my-2 whitespace-pre-wrap"
          data-testid="quantity"
        >
          {quantity}
        </span>
        <button
          type="button"
          className="rounded-full focus:outline-none focus-visible:outline-trueblue-4x flex items-center justify-center w-8 h-8 box-content p-1 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Add 1 item"
          onClick={onAdd}
          disabled={disabled}
        >
          <svg
            viewBox="0 0 40 40"
            aria-label="PlusCircle"
            className="w-8 h-8 fill-trueblue rounded-full bg-white hover:bg-lightgrey group-hover:bg-lightgrey"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 20.333a1 1 0 011-1h13.333a1 1 0 110 2H13a1 1 0 01-1-1z" />
            <path d="M19.667 28a1 1 0 01-1-1V13.667a1 1 0 112 0V27a1 1 0 01-1 1z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18zm0 2c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
