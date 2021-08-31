    import React from 'react'
    import PrimeraApp from '../PirmeraApp'
    import { shallow } from 'enzyme'
    import toJson from 'enzyme-to-json';

    describe('prueba en <PirmeraApp />', () => {

        test('debe mostrar el mensaje', () => {

            /*const saludo = 'hola soy goku';
            const { getByText } = render(<PrimeraApp saludo={saludo} />);

            expect(getByText(saludo)).toBeInTheDocument(); */
            const saludo = 'hola soy goku';
            const wrapper = shallow(<PrimeraApp saludo={saludo} />);
            expect(wrapper).toMatchSnapshot()

        })
    })