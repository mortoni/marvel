import React from 'react';
import Character from './Character';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import Enzyme, { render, shallow } from 'enzyme';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Testing App component', () => {
    const props = {
        thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
        },
        name: 'Wolver-dok',
        onOpenModal: () => {}
    };

    it('renders correctly', () => {
        const wrapper = shallow(<Character {...props}/>);
        expect(wrapper).toBeDefined();
    });

    it('renders as expected', () => {
        const wrapper = shallow(<Character {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
