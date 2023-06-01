import { screen } from "@testing-library/react";
import { render } from "../../../jest.setup.js";
import "@testing-library/jest-dom";
import Layout from "@/src/components/layouts/Layout.js";

test("renders Navbar and children", () => {
  render(
    <Layout>
      <div>Test children</div>
    </Layout>
  );

  // TEST: navbar is rendered
  expect(screen.getByRole("navigation")).toBeInTheDocument();

  // TEST: children are rendered
  expect(screen.getByText("Test children")).toBeInTheDocument();
});