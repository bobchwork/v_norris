import React from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func,
};

const defaultProps = {
  name: '',
  type: '',
  inputValue: '',
  placeholder: '',
  onFocus: () => {
  },
  onFocusOut: () => {
  },
  onChange: () => {
  },
};

const InputField = (props) => {
  const {
    type,
    placeholder,
    name,
    inputValue,
    onChange,
    onFocus,
    onFocusOut,
  } = props;

  return (
    <div className="input-field">
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onFocus={(ev) => onFocus(ev)}
        onBlur={(ev) => onFocusOut(ev)}
      />
    </div>
  );
};

InputField.propTypes = proptypes;
InputField.defaultProps = defaultProps;

export default InputField;
