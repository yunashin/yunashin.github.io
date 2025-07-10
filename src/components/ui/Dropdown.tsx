import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { BOX_SHADOW_COLOR, TEXT_COLOR } from "../../constants/styleConstants";

const Dropdown = ({
  className = '',
  isMultiSelect = false,
  options,
  isOpen,
  setIsOpen,
  selectedOptions,
  setSelectedOptions,
  optionFooter = null,
  placeholder = 'Select an option',
  useLink = false,
  styles = {}
}: {
  className?: string,
  isMultiSelect?: boolean,
  options: string[],
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  selectedOptions: string[],
  setSelectedOptions: (options: string[]) => void,
  optionFooter?: {
    buttonText: string,
    onClick: () => void
  } | null,
  placeholder?: string,
  useLink?: boolean,
  styles?: React.CSSProperties,
}) => {
  const [isOptionFooterHovered, setIsOptionFooterHovered] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>, option: string) => {
    event.stopPropagation();
    if (isMultiSelect) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions([option]);
      }
    }
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const topOfButton = buttonRef.current?.getBoundingClientRect().top || 0;
  const leftOfButton = buttonRef.current?.getBoundingClientRect().left || 0;
  const widthOfButton = buttonRef.current?.getBoundingClientRect().width || 0;
  const buttonClientHeight = buttonRef.current?.clientHeight || 0;
  const buttonClientWidth = buttonRef.current?.clientWidth || 0;
  const validSelectedOptions = selectedOptions.filter((option) => options.includes(option));
  const selectedOptionsCount = validSelectedOptions.length;
  const maybeBoxShadow = !useLink && isOpen ? { boxShadow: `0 0 10px 0 ${BOX_SHADOW_COLOR}` } : {};

  useOnClickOutside(optionsRef, () => setIsOpen(false));

  return (
    <div className={`flex-box-horizontal ${className}`}>
      <div className="margin-right-sm" style={styles}>
        <button
          className={`${useLink ? 'dropdown-button-link' : 'dropdown-button'}`}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          onMouseUp={(event) => {
            event.stopPropagation();
            setIsOpen(!isOpen);
          }}
          style={{ top: isOpen ? '0' : 'auto', ...maybeBoxShadow }}
          ref={buttonRef}
        >
          {isMultiSelect ?
            <div className="flex-box-horizontal wrap">
              <div className="flex-box-horizontal" style={{ width: '90%', justifyContent: 'flex-start' }}>
                <span className={`${selectedOptionsCount > 0 ? 'margin-right-sm' : 'margin-right'}`}>{placeholder}</span>
                {selectedOptionsCount > 0 && <span>{`(${selectedOptionsCount})`}</span>}
              </div>
              <div className="flex-box-horizontal" style={{ width: '10%' }}>
                {isMultiSelect && <span>{isOpen ? '▴' : '▾'}</span>}
              </div>
            </div> : selectedOptions}
        </button>
        {isOpen && (
          <div className="dropdown-options" style={{ top: `${topOfButton + buttonClientHeight + 6}px`, left: `${leftOfButton + buttonClientWidth - widthOfButton}px` }} ref={optionsRef}>
            {options.map((option) => {
              const isSelected = validSelectedOptions.includes(option);
              return (
                <div key={option}>
                  <div
                    className={`dropdown-option ${isSelected ? 'bold' : ''} ${hoveredOption === option ? 'hovered-option' : ''}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleOptionClick(event, option);
                    }}
                    onMouseEnter={(event) => {
                      event.stopPropagation();
                      setHoveredOption(option);
                    }}
                    onMouseLeave={(event) => {
                      event.stopPropagation();
                      setHoveredOption(null);
                    }}>
                    <input type="checkbox" checked={isSelected} onChange={(event) => event.stopPropagation()} />
                    {option}
                  </div>
                </div>
              )
            })}
            {optionFooter && (
              <div
                className={`dropdown-option-footer ${isOptionFooterHovered ? 'hovered-option-footer' : ''}`}
                onClick={() => {
                  optionFooter.onClick();
                }}
                onMouseEnter={() => setIsOptionFooterHovered(true)}
                onMouseLeave={() => setIsOptionFooterHovered(false)}
              >
                <button
                  className="select-all-footer-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    optionFooter.onClick();
                  }}
                  style={{ color: isOptionFooterHovered ? `${TEXT_COLOR} !important` : 'inherit' }}
                >
                  {optionFooter.buttonText}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <button
        className="clear-dropdown-button link-button"
        onClick={() => setSelectedOptions(selectedOptions.filter((option) => !options.includes(option)))}
      >
        <img className="clear-dropdown-button-img" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons-9/x-824crdsx1fvc1a99uh0jn.png/x-071c9m1bqy9w3hucaxrc6v4.png?_a=DATAdtAAZAA0" alt="clear" loading="lazy" />
      </button>
    </div>
  );
};

export default Dropdown;