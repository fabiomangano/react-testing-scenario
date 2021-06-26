import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const Hello = ({ user }) => (
  <div>{user ? <h1>Hello, {user}</h1> : <span>Hello, stranger</span>}</div>
);

let container;

describe("Hello", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render the name of current user or guest user", () => {
    act(() => {
      render(<Hello user="Fabio Mangano" />, container);
    });

    const authenticatedUser = container.querySelector("h1");
    expect(authenticatedUser.textContent).toBe("Hello, Fabio Mangano");

    act(() => {
      render(<Hello />, container);
    });

    const guestUser = container.querySelector("span");
    expect(guestUser.textContent).toBe("Hello, stranger");
  });
});
