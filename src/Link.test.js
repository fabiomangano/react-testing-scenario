// TestRenderer
import TestRenderer from "react-test-renderer";

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  );
}

function SubComponent({ foo }) {
  return <p className="sub">Sub</p>;
}

describe("Link", () => {
  it("should contain prop bar", () => {
    const testRenderer = TestRenderer.create(<MyComponent />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(SubComponent).props.foo).toBe("bar");
    expect(testInstance.findByProps({ className: "sub" }).children).toEqual([
      "Sub",
    ]);
  });
});
