import React, { useId } from 'react';

export function FormInput({ label, icon, value, onChange, placeholder, type = 'text' }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-800">
        {icon}
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-form-border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-form-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
      />
    </div>
  );
}

export function FormTextarea({ label, value, onChange, placeholder }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-800">{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full rounded-xl border border-form-border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-form-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
      />
    </div>
  );
}

export function FormSelect({ label, value, onChange, options, placeholder }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-800">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-form-border bg-white px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}