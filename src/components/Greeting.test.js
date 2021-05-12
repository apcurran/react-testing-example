import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

describe("Greeting component", () => {
    test("renders Hello World as text", () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
        const helloWorldElement = screen.getByText("Hello World");
    
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders 'It's good' if the button was NOT clicked", () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
        const pElement = screen.getByText("It's good");
    
        expect(pElement).toBeInTheDocument();
    });

    // test("renders Changed if the button WAS clicked", () => {
    //     // Arrange
    //     render(<Greeting />);
    
    //     // Act
    
    //     // Assert
    //     const helloWorldElement = screen.getByText("Hello World");
    
    //     expect(helloWorldElement).toBeInTheDocument();
    // });
});
