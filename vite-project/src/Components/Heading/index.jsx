import * as Style from './styles'


export const Heading = ({ children }) => {
return (
  <Style.Title>
  <div>{children}</div>
  <input type="button" value="Input" />
  </Style.Title>
  );
}
