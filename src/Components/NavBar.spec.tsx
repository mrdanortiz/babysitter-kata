import * as React from "react";
import { render } from "react-testing-library";
import { NavBar } from "./NavBar";

it("renders NavBar without crashing", () => {

    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("navbar")).toMatchSnapshot();

});
