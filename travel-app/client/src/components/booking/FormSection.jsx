export default function FormSection({ number, title, children }) {
  return (
    <div className="border-t border-form-border pt-8 first:border-t-0 first:pt-0">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-step-gradient text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}