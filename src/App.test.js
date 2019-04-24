import React from "react";
import App from "./App";
import { render, fireEvent, wait } from "react-testing-library";
import "jest-dom/extend-expect";

it("should not work properly", async () => {
  const wrapper = render(<App visible={false} />);
  fireEvent.click(wrapper.getByText("hide"));
  await wait(undefined, { timeout: 2000 });
  expect(wrapper.queryByText("hide")).not.toBeInTheDocument();
});
