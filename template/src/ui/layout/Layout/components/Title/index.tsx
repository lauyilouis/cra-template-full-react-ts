// MUI
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Typography)`
  font-size: 26px;
  margin: 10px 0px;
`;

export default function Title(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
}
