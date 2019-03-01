import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page } from '../../_components'
import { Image, } from 'semantic-ui-react'

type Props = DispatchProp & {
  user: any
}

class HomePage extends React.PureComponent<Props> {

  render() {
    return (
      <Page title='Dashboard'>
        <Image avatar src={this.props.user.profile_picture} />
        Welcome, { this.props.user.full_name }
      </Page>
    )
  }
}

function mapStateToProps(state: any) {
  const { auth } = state
  return {
    user: auth.user
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
