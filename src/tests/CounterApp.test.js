import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('prueba en <CounterApp />', () => {

    test('debe mostrar el mensaje', () => {

        const wrapper = shallow( <CounterApp />);
        expect(wrapper).toMatchSnapshot()

    });

    test('debe mostrar 100', () => {

        const wrapper = shallow( <CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim()

        expect( counterText ).toBe('100')


    });
});