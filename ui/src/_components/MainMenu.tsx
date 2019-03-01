import React from 'react'
import reactCSS from 'reactcss'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, DispatchProp } from 'react-redux'
import { Menu, Icon, } from 'semantic-ui-react'
import { authActions } from '../_actions'

type Props = RouteComponentProps & DispatchProp & {

}

class MainMenu extends React.PureComponent<Props> {

  _handleSignOut() {
    this.props.dispatch(authActions.signOut(this.props.history))
  }

  render() {
    const { pathname } = this.props.history.location

    const styles = reactCSS({
      default: {
        menu: {
          marginBottom: 30,
          backgroundColor: 'rgb(75, 119, 154)',
          padding: 7,
        }
      }
    })

    return (
      <Menu inverted pointing secondary stackable style={styles.menu}>
        <Menu.Item name='home' active={pathname === "/"} as={Link} to='/'>
          <Icon name='line graph' /> Dashboard
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={this._handleSignOut.bind(this)}>
            <Icon name='sign-out' /> Sign Out
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state: any) {
  return {}
}

const withRouterMainMenu = connect(mapStateToProps)(withRouter(MainMenu))
export { withRouterMainMenu as MainMenu }
