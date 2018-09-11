import App from '../components/App'
import Header from '../components/Header'
import RecipientFilter from '../components/RecipientFilter'
import SendNotification from '../components/SendNotification'

export default () => (
  <App>
    <Header />
    <SendNotification />
    <RecipientFilter />
  </App>
)
