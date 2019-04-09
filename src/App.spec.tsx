import * as React from "react";
import { render } from "react-testing-library";
import App from "./App";

it("renders App without crashing", () => {

  const { getByTestId } = render(<App />);
  expect(getByTestId("app")).toMatchSnapshot();

});
