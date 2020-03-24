import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 30px;

  div.input-block {
    margin-top: 20px;
  }

  input {
    width: 100%;
    height: 32px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;

  }

  button[type=submit] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #292929;
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    transition: background 0.5s;
  }

  button[type=submit]:hover {
    background: #292929e8;
  }

`;

export default StyledForm;
