import Slider from "../../atomic/Slider";

export default function SliderGroup(): JSX.Element {
  return (
    <>
      <Slider defaultValue={30} />
      <Slider defaultValue={50} />
      <Slider defaultValue={80} />
    </>
  );
}
