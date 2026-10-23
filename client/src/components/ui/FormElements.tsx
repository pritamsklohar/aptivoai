import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-ink block">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 rounded-xl bg-white border text-ink text-sm transition-all focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 ${
          error ? 'border-red-500' : 'border-border'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-ink block">
        {label}
      </label>
      <textarea
        id={inputId}
        className={`w-full px-4 py-3 rounded-xl bg-white border text-ink text-sm transition-all focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 leading-relaxed ${
          error ? 'border-red-500' : 'border-border'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, error, className = '', id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-ink block">
        {label}
      </label>
      <select
        id={inputId}
        className={`w-full px-4 py-3 rounded-xl bg-white border text-ink text-sm transition-all focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 cursor-pointer ${
          error ? 'border-red-500' : 'border-border'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onNavigatePrivacy: () => void;
}

export const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({
  checked,
  onChange,
  onNavigatePrivacy,
}) => {
  return (
    <div className="flex items-start gap-3 pt-1">
      <input
        type="checkbox"
        id="privacy-consent-box"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4 rounded text-accent-blue focus:ring-accent-blue cursor-pointer"
      />
      <label htmlFor="privacy-consent-box" className="text-xs text-muted leading-relaxed cursor-pointer select-none">
        I agree to the{' '}
        <button
          type="button"
          onClick={onNavigatePrivacy}
          className="text-accent-blue underline font-medium hover:text-accent-blue/80"
        >
          Privacy Policy
        </button>{' '}
        and consent to Aptivo AI contacting me regarding this inquiry.
      </label>
    </div>
  );
};
