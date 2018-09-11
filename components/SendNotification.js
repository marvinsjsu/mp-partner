import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function SendNotification({selectPush}) {
  function handleSubmit (event) {
    event.preventDefault()

    const form = event.target

    const formData = new window.FormData(form)
    selectPush(formData.get('title'), formData.get('message'))

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Notification</h1>
      <input placeholder='title' name='title' type='text' required />
      <input placeholder='message' name='message' type='text' required />
      <button type='submit'>Send</button>
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </form>
  )
}

const selectPush = gql`
  mutation select_push(
    $logged_in_user: String!, $zip: String!, $title: String!,
    $rep: String!, $send: Boolean!, $platform: String!,
    $state: String!, $radius: Float!, $user: String!,
    $provider: String!, $message: String!, $api_key: String!
  ) {
    select_push(
      logged_in_user: $logged_in_user, zip: $zip, title: $title,
      rep: $rep, send: $send, platform: $platform, state: $state,
      radius: $radius, user: $user, provider: $provider,
      message: $message, api_key: $api_key
    ) {
      response_status {
        status
        error
        error_code
        notifications
        elapsed
      }
      user {
        id
        type
        title
        admin
        api_key
        email
        first_login
        invite_code
        last_login
        picture
        picture_large
        provider
        provider_id
        username
        zip
      }
    }
  }
`

export default graphql(selectPush, {
  props: ({ mutate }) => ({
    selectPush: (logged_in_user, zip, title, rep, send, platform, state, radius, user, provider, message, api_key) =>
      mutate({
        variables: {
          logged_in_user: logged_in_user,
          zip: zip,
          title: title,
          rep: rep,
          send: send,
          platform: platform,
          state: state,
          radius: radius,
          user: user,
          provider: provider,
          message: message,
          api_key: api_key
        },

      })
  })
})(SendNotification)
