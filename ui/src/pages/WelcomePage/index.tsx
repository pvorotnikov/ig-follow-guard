import React from 'react'
import reactCSS from 'reactcss'
import { connect, DispatchProp } from 'react-redux'
import { withRouter, RouteProps, RouteComponentProps } from 'react-router-dom'
import { Header, Button, Icon, Segment, Message } from 'semantic-ui-react'
import { Page } from '../../_components'
import { authActions } from '../../_actions'

type Props = DispatchProp & RouteComponentProps & {
  loading: boolean
}

class WelcomePage extends React.PureComponent<Props> {

  state = {
    error: null,
    success: null,
  }

  componentDidMount() {
    const searchParams: URLSearchParams = new URLSearchParams(this.props.history.location.search)
    const error = searchParams.has('error') ? 'An error occurred.' : null
    const success = searchParams.has('success') ? 'You have logged in. You will be redirected in a second.' : null
    this.setState({ error, success })

    if (success) {
      const token = searchParams.get('success') || ''
      this.props.dispatch(authActions.signIn(token, this.props.history))
    }
  }

  _handleSignIn() {
    let currentPathName = this.props.history.location.pathname
    let hash = window.location.hash
    let currentOrigin = window.location.href.replace(hash, '')
    let encodedHref = btoa(`${currentOrigin}#${currentPathName}`)
    window.location.href = `${process.env.REACT_APP_BASE_URL}/signin?state=${encodedHref}`
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
        { this.state.error && <Message align='center' negative>{this.state.error}</Message> }
        { this.state.success && <Message align='center' positive>{this.state.success}</Message> }
      </Page>
    )
  }
}

function mapStateToProps(state: any) {
  const { auth } = state
  return {
    loading: auth.loading
  }
}

const connectedWelcomePage = connect(mapStateToProps)(withRouter(WelcomePage))
export { connectedWelcomePage as WelcomePage }
