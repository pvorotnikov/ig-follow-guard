import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { MainMenu } from './'

class Page extends React.PureComponent {

  render() {
    return (
      <div>
        { this.props.showHeader && <MainMenu /> }
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column computer={10} mobile={14} tablet={14}>
              { this.props.children }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


Page.propTypes = {
  title: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool,
  loading: PropTypes.bool,
}

Page.defaultProps = {
  loading: false,
  showHeader: true,
  title: "Page title",
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    loggedIn: Boolean(auth.user),
  }
}

const connectedPage = connect(mapStateToProps)(Page)
export { connectedPage as Page }
