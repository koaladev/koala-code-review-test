import React, { FC, ReactNode, useState } from 'react';

function CheckboxIcon({ viewBox = '0 0 24 24', ...props }) {
  return (
    <svg viewBox={viewBox} {...props}>
      <path d="M0 0H24V24H0V0ZM1 1V23H23V1H1Z" />
      <rect x="1" y="1" width="22" height="22" fill="transparent" />
    </svg>
  );
}
function CheckmarkIcon({ viewBox = '0 0 24 24', ...props }) {
  return (
    <svg viewBox={viewBox} {...props}>
      <path d="M19.273 6.32l-9.757 9.401-4.7-4.558a1.033 1.033 0 00-1.496 0 1.033 1.033 0 000 1.496L8.306 17.5c.356.357.783.499 1.21.499.428 0 .855-.142 1.211-.498l9.97-9.686a1.033 1.033 0 000-1.496c-.356-.427-1.068-.427-1.424 0z" />
    </svg>
  );
}

export interface CheckboxProps {
  children?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  name?: string;
  value?: string;
  required?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  className?: string;
  isInvalid?: boolean;
  isInvalidContent?: string | ReactNode;
  isInvalidClassName?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox: FC<CheckboxProps> = ({
  children,
  label,
  name,
  value = 'true',
  required,
  disabled = false,
  defaultChecked = false,
  ariaLabel,
  isInvalid,
  isInvalidContent,
  onChange,
  onBlur,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) onChange(e);
  };

  const INVALID = 'text-error';
  const ICON_SIZE_CLASSNAME = 'w-6 h-6 fill-current';

  return (
    <div>
      <label
        className={`inline-flex max-w-full justify-center items-start group cursor-pointer ${
          disabled ? 'cursor-not-allowed opacity-30' : ''
        }`}
      >
        <input
          type="checkbox"
          className="sr-only"
          name={name}
          required={required}
          value={value}
          disabled={disabled}
          defaultChecked={isChecked}
          aria-checked={isChecked}
          aria-label={ariaLabel}
          onChange={onChangeHandler}
          onBlur={onBlur}
        />
        <span
          className={`relative inline-flex focused-sibling:outline-trueblue bg-white ${
            !disabled ? 'group-hover:bg-lightgrey' : ''
          }`}
        >
          <CheckboxIcon
            className={`${ICON_SIZE_CLASSNAME} ${isInvalid ? INVALID : ''}`}
            color="charcoal"
          />
          {isChecked && (
            <CheckmarkIcon
              className={`${ICON_SIZE_CLASSNAME} text-blue-700   checkmark-icon absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4`}
            />
          )}
        </span>
        <div className="ml-2">
          {label && (
            <span className="font-weight-body text-sm my-2 mt-0 whitespace-pre-wrap">
              {label}
            </span>
          )}
          {children}
        </div>
      </label>

      {/* ERROR OR INVALID */}
      {(isInvalid && isInvalidContent) || ''}
    </div>
  );
};

export default Checkbox;
