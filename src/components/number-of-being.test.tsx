import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberOfBeings, NumberOfBeingsProps } from "./number-of-being";

describe("<NumberOfBeings/>", () => {
  it(`Given the required props, 
  when the component is rendered, 
  label and input field should be presented `, () => {
    // ARRANGE
    const requiredProps: NumberOfBeingsProps = {
      numberOfBeings: "",
      onChangeNumberOfBeings: () => {},
    };
    const labelText = "Number of beings";
    // ACT
    render(<NumberOfBeings {...requiredProps} />);
    // ASSERT
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });
});
