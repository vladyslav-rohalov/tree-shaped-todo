import styled from '@emotion/styled';

interface IButtonProps {
  width?: string;
  offset?: string;
  withBefore?: boolean;
  withAfter?: boolean;
}

export const Button = styled.button<IButtonProps>`
  position: relative;
  width: 100px;
  height: 40px;
  border: 1px dashed grey;
  cursor: move;
  padding: 4px;
  background-color: #fff;

  ${props =>
    props.withBefore &&
    `
      &:before {
        content: '';
        position: absolute;
        bottom: -13px;
        left: 50%;
        height: 12px;
        width: 100%;
        border-left: 1px solid grey;
      }
    `}

  ${props =>
    props.withAfter &&
    `
      &:after {
        content: '';
        position: absolute;
        bottom: -13px;
        right: ${props.offset};
        width: ${props.width};
        border-top: 1px solid grey;
      }
    `}
`;

interface IDivProps {
  withBefore?: boolean;
  margin?: string;
}

export const Div = styled.div<IDivProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: ${props => props.margin};
  margin-top: 12px;
  ${props =>
    props.withBefore &&
    `
      &:before {
        content: '';
        position: absolute;
        top: -12px;
        left: calc((100% - 72px) / 2);
        height: 12px;
        border-left: 1px solid grey; 
      }
    `}
`;
