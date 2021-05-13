import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders posts if request succeeds", async () => {
        // Override browser's Fetch API with mock func from Jest
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{ id: "p1", title: "First Post" }];
            }
        });

        render(<Async />);

        // findAllByRole returns a promise, which can be awaited in an async function
        const listItemElems = await screen.findAllByRole("listitem");

        expect(listItemElems).not.toHaveLength(0);
    });
});