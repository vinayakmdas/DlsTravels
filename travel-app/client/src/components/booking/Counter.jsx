export default function Counter({ label, icon, value, onIncrement, onDecrement }) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-800">
        {icon}
        {label}
      </label>
      <div className="flex items-center justify-between rounded-xl border border-form-border bg-white px-4 py-2.5">
        <button
          type="button"
          onClick={onDecrement}
          className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-500 hover:bg-gray-100"
          aria-label={`Decrease ${label}`}
        >
          –
        </button>
        <span className="text-base font-semibold text-gray-900">{value}</span>
        <button
          type="button"
          onClick={onIncrement}
          className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-500 hover:bg-gray-100"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}