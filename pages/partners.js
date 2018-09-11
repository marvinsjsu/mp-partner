import Link from 'next/link'

import Layout from '../components/MainLayout.js'
import SendNotification from '../components/SendNotification.js'

export default () => (
  <Layout>
  	<SendNotification />
    <p>This is the Partner page</p>
  </Layout>
)