import * as React from "react";
import { render } from "react-testing-library";
import { InputForm } from "./InputForm";

it("renders NavBar without crashing", () => {

  const { getByTestId } = render(<InputForm />);
  expect(getByTestId("inputform")).toMatchSnapshot();

});
