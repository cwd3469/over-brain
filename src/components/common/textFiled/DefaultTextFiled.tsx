import styled from '@emotion/styled';

type Props = {
  fieldSize?: 'lg' | 'mb' | 'sm';
};

export type DefaultTextFiledProps = React.InputHTMLAttributes<HTMLInputElement> & Props;

const DefaultTextFiled = styled.input<Props>`
  //layout
  display: flex;
  padding: 12px 16px;
  width: 100%;
  //font
  font-size: 14px;
  line-height: 18px;
  //style
  border-radius: var(--Radius_MD, 6px);
  border: 1px solid var(--CoolGray-CoolGray300, #b4bfc8);
  background-color: var(--TrueGray-White, #fff);
  &::placeholder {
    color: var(--CoolGray-CoolGray400, #9aa9b7);
  }
  &:focus-visible {
    outline: 1px solid var(--CoolGray-CoolGray600, #677683);
  }
  &:disabled {
    color: var(--TrueGray-Gray500, #b3b3b3);
    border: 1px solid var(--TrueGray-Gray200, #e1e1e1);
    background-color: var(--TrueGray-Gray025, #fbfbfb);
  }
  ${(props) =>
    props.fieldSize === 'mb'
      ? 'padding: 10px 16px'
      : props.fieldSize === 'sm'
      ? 'padding: 8px; font-size: 12px; line-height: 14px'
      : ''}
`;

export default DefaultTextFiled;
