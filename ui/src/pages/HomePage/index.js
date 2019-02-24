import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Page } from '../../_components'
import { Image, } from 'semantic-ui-react'

class HomePage extends React.PureComponent {

  render() {
    return (
      <Page title='Dashboard'>
        <Image avatar src={this.props.user.profile_picture} />
        Welcome, { this.props.user.full_name }
      </Page>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    user: auth.user
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
