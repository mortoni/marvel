import React from 'react';
import { App } from './App';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import Enzyme, { render, shallow } from 'enzyme';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Testing App component', () => {
    const props = {
        closeModal: () => {},
        search: {
            chars: []
        },
        modal: {
            isOpen: false
        },
        openModal: () => {},
        searchTerm: () => {},
        updateChars: () => {},
        cleanChars: () => {},
    };

    it('renders correctly', () => {
        const wrapper = shallow(<App {...props}/>);
        expect(wrapper).toBeDefined();
    });

    it('renders as expected', () => {
        const wrapper = shallow(<App {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
