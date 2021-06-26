// jest
// react, react-dom, react-dom/test-utils

import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Counter from "./Counter";

let container;

describe("Counter", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("can render and update count", () => {
    act(() => {
      ReactDOM.render(<Counter />, container);
    });
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Hai cliccato 0 volte");

    const button = container.querySelector("button");
    Simulate.click(button);
    // act(() => {
    //   button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // });

    expect(p.textContent).toBe("Hai cliccato 1 volte");
  });
});
