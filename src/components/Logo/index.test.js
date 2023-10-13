import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Logo from ".";

describe("Logo component", () => {
    describe("When a logo is created", () => {
        it("the icon contain this path hash value 65c7b4bf9f8220e747acc2b1ac09de47", () => {
            render(<Logo />)
            expect(md5(screen.getByTestId("logo").getAttribute('d'))).toEqual('65c7b4bf9f8220e747acc2b1ac09de47')
        });
    });
})