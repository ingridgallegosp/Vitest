import { render, fireEvent } from '@testing-library/vue'
import MyComponent from '../components/MyComponent.vue'

describe('MyComponent', () => {
    it('muestra el contador inicial como 0', () => {
        const { getByText } = render(MyComponent)
        getByText('Contar: 0') // Verifica que el texto "Contar: 0" está en el documento
    })

    it('incrementa el contador cuando se hace clic en el botón', async () => {
        const { getByText } = render(MyComponent)
        const button = getByText('Contar: 0')

        await fireEvent.click(button) // Simula un clic en el botón

        getByText('Contar: 1') // Verifica que el contador se incrementó
    })
})

