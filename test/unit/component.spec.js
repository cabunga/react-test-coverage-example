import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Component from '../../src/component';

describe('Component', () => {
    let renderedElement;

    function renderComponent() {
        const componentElement = <Component />;

        renderedElement = shallow(componentElement);
    }

    it('should have a root DOM element', () => {
        renderComponent();

        expect(renderedElement).to.have.tagName('div');
        expect(renderedElement).to.have.text('Hello, world!');
    });
});
