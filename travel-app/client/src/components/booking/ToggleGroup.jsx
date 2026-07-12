export default function ToggleGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 rounded-xl border px-5 py-3 text-sm font-medium transition-colors ${
              isSelected
                ? 'border-form-selectedBorder bg-form-selectedBg text-brand-primaryDark'
                : 'border-form-border bg-white text-gray-700 hover:border-form-selectedBorder/60'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  isSelected ? 'border-brand-primary' : 'border-gray-300'
                }`}
              >
                {isSelected && <span className="h-2 w-2 rounded-full bg-brand-primary" />}
              </span>
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}