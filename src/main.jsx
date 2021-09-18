import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { store } from './store'
import i18n from './utils/i18n'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      , document.getElementById('root')
    </Provider>
  </I18nextProvider>
)
