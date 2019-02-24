import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Page, } from '../../_components'

class HomePage extends React.PureComponent {

  render() {
    return (
      <Page title='Dashboard'>
        Welcome { this.props.displayName }
      </Page>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  displayName: PropTypes.string,
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    displayName: auth.user ? auth.user.displayName : null
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
