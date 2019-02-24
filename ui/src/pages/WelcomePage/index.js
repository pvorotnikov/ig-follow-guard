import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Header, Button, Icon, Segment } from 'semantic-ui-react'
import { Page } from '../../_components'
import { authActions } from '../../_actions'


class WelcomePage extends React.PureComponent {

  _handleSignIn() {
    this.props.dispatch(authActions.signIn(this.props.history))
  }

  render() {
  	const styles = reactCSS({
	    default: {
	      welcome: {
	      	marginTop: 50,
	        height: 300,
	      },
	    }
	  })

    return (
      <Page title='' showHeader={false}>
      	<Segment loading={this.props.loading} textAlign='center' placeholder style={styles.welcome}>
          <Header icon>
            <Icon name='shield' color='blue' />
            Follow Guard
          </Header>
      		<Button onClick={() => this._handleSignIn()} color='instagram'>
            <Icon name='instagram' /> Sign in with Instagram
          </Button>
      	</Segment>

      </Page>
    )
  }
}

WelcomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    loading: auth.loading
  }
}

const connectedWelcomePage = connect(mapStateToProps)(withRouter(WelcomePage))
export { connectedWelcomePage as WelcomePage }
