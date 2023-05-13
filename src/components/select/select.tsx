import React, {
  useState,
  useMemo,
  type SetStateAction,
  type Dispatch,
} from 'react';
import { Container } from './styles';
import { ChevronDown } from 'ts-react-feather-icons';
import { type Option } from 'types/select.types';

interface IProps {
  options: Option[];
  placeholder: string;
  onSelect: Dispatch<SetStateAction<Option | null>>;
  value: Option | null;
}

const Select: React.FC<IProps> = ({
  options,
  placeholder,
  value,
  onSelect,
}) => {
  const [dropdownShouldBeOpen, setDropdownShouldBeOpen] = useState(false);
  const [buttonFocused, setButtonFocused] = useState(false);
  const [optionsHover, setOptionsHover] = useState(false);

  const showOptions = useMemo(
    () => (dropdownShouldBeOpen && buttonFocused) || optionsHover,
    [dropdownShouldBeOpen, buttonFocused, optionsHover],
  );

  return (
    <Container>
      <button
        className="btn-toogle-dropdown"
        onClick={() => {
          setDropdownShouldBeOpen((prev) => !prev);
        }}
        onFocus={() => {
          setButtonFocused(true);
        }}
        onBlur={() => {
          setDropdownShouldBeOpen(false);
          setButtonFocused(false);
        }}
      >
        {value === null ? (
          <p className="placeholder">{placeholder}</p>
        ) : (
          <p>{value.label}</p>
        )}
        <span
          className={showOptions ? 'chevron-down upside-down' : 'chevron-down'}
        >
          <ChevronDown />
        </span>
      </button>
      {showOptions && (
        <div
          className="options"
          onMouseOver={() => {
            setOptionsHover(true);
          }}
          onMouseOut={() => {
            setOptionsHover(false);
          }}
        >
          {options.map((option) => (
            <button
              className="option"
              key={`option-${option.id}`}
              onClick={() => {
                onSelect(option);
                setOptionsHover(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Select;
