import React from "react";
import { CurrentLocation } from '../../components/CurrentLocation';
import renderer from 'react-test-renderer';

describe("CurrentLocation component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<CurrentLocation />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});