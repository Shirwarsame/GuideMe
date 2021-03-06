import React from "react";
import { BuildingIdentification } from "../../../components/BuildingIdentification";
import renderer from "react-test-renderer";

describe("Building Identification component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<BuildingIdentification />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("number of markers", () => {
        const tree = renderer.create(<BuildingIdentification />).toJSON();
        expect(tree.children.length).toBe(11);
    });
});
