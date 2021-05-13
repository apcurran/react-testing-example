import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders posts if request succeeds", async () => {
        render(<Async />);

        // findAllByRole returns a promise, which can be awaited in an async function
        const listItemElems = await screen.findAllByRole("listitem");

        expect(listItemElems).not.toHaveLength(0);
    });
});