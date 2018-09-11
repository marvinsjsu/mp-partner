import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function RecipientFilter({selectPush}) {
  function applyFilters (event) {
    event.preventDefault()

    const form = event.target

    const formData = new window.FormData(form)
    selectPush(
      formData.get('logged_in_user'),
      formData.get('zip'),
      formData.get('title'),
      formData.get('rep'),
      false,
      // platform - maybe ios/android?
      formData.get('state'),
      formData.get('radius'),
      // users, - need to figure out what user is and how to pass
      formData.get('provider'), // platform?
      formData.get('message'),
      formData.get('api_key'),

      // formData.get('topic'),
      // formData.get('event_id'),
      // formData.get('address'),
      // formData.get('action_id'),
    )

    form.reset()
  }

  return (
    <div className='main-content'>
      <div className='form-container'>
        <form onSubmit={applyFilters}>
          <h1>Filters</h1>

          <input type='hidden' name='logged_in_user' value='' />
          <input type='hidden' name='api_key' value='' />
          <input type='hidden' name='title' value='retrieve recipients' />
          <input type='hidden' name='message' value='retrieve recipients' />


          <input placeholder='state' name='state' type='text' required/>
          <input placeholder='zip code' name='zip' type='text' required/>
          <input placeholder='radius' name='radius' type='text' required/>
          <input placeholder='topic subscribed' name='topic' type='text' required/>
          <input placeholder='rep' name='rep' type='text' required/>
          <input placeholder='provider' name='provider' type='text' required/>
          <input placeholder='event id' name='event_id' type='text' required/>
          <input placeholder='address' name='address' type='text' required/>
          <input placeholder='action id' name='action_id' type='text' required/>
          <button type='submit'>Apply Filter</button>
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
            .main-content {
              flex: 1,
              flex-direction: 'row',
              justify-content: 'flex-start',
            }
          `}</style>
        </form>
      </div>
      <div>
        <h2>Recipients</h2>
        <ul>
          <li>User 1</li>
        </ul>
        <style jsx>{`
          ul {
            list-style: none,
            margin: 0,
          }
        `}</style>
      </div>
    </div>
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
      response_status,
      users
    }
  }
`

export default graphql(selectPush, {
  props: ({ mutate }) => ({
    selectPush: (logged_in_user, zip, title, rep, send, platform, state, radius, user, provider, message, api_key) =>
      mutate({
        variables: { logged_in_user, zip, title, rep, send, platform, state, radius, user, provider, message, api_key },

      })
  })
})(RecipientFilter)
