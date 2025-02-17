import React from 'react';

const TextInput = ({ 
  label, 
  value, 
  onChange, 
  error, 
  placeholder = "Entrez votre texte",
  name = "text"
}) => {
  return (
    <div className="form-control w-full max-w-xl">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default TextInput;