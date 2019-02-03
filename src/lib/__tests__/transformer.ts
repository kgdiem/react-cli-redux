import * as Transformer from '../transformer'

describe('Transformer', () => {

    describe('createComponent', () => {
        it('creates a properly formatted react component', () => {
            const component = Transformer.createComponent('test')

            expect(component)
                .toEqual("import React, { Component } from 'react'\nimport "+ 
                "PropTypes from 'prop-types'\n\nclass test extends Component {\n  render()"+
                " {\n    <span></span>\n  }\n}\n\ntest.propTypes = {\n\n}\n\nexport default test")
        })
    })

    describe('createFunctionalComponent', () => {
        it('creates a properly formatted functional react component', () => {
            const component = Transformer.createFunctionalComponent('test')
                
            expect(component)
                .toEqual("import React from 'react'\nimport " +
                "PropTypes from 'prop-types'\n\nconst test = (props) => (\n  " +
                "<span></span>\n)\n\ntest.propTypes = {\n\n}\n\nexport default test")
        })
    })

    describe('createRenderTest', () => {
        it('creates a properly formatted render test', () => {
            const component = Transformer.createRenderTest('test')

            expect(component)
                .toEqual("import { shallow } from 'enzyme'\n\ndescribe('test', "+
                "() => {\n  it('renders without crashing', () => {\n"+
                "    shallow(<test/>)\n  })\n})")
        })
    })
})