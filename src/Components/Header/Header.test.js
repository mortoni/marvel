import React from 'react';
import Header from './Header';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import Enzyme, { render, shallow } from 'enzyme';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Testing Header component', () => {
    const props = {
        handleInputChange: () => {},
        isSearching: false
    };

    it('renders correctly', () => {
        const wrapper = shallow(<Header { ...props }/>);
        expect(wrapper).toBeDefined();
    });

    it('renders as expected', () => {
        const wrapper = shallow(<Header { ...props }/>);
        expect(wrapper).toMatchSnapshot();
    });
});
