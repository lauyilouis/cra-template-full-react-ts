import MUISlider, { SliderProps as MUISliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(MUISlider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export default function Slider(props: MUISliderProps): JSX.Element {
  return <StyledSlider {...props} />;
}

export type SliderProps = MUISliderProps;
