import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { MainMenu } from '.'

type Props = DispatchProp & {
  loggedIn: boolean,
  title?: string,
  showHeader?: boolean,
  loading?: boolean,
}

class Page extends React.PureComponent<Props> {

  static defaultProps = {
    title: 'Page title',
    showHeader: true,
    loading: false,
  }

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

function mapStateToProps(state: any) {
  const { auth } = state
  return {
    loggedIn: Boolean(auth.user),
  }
}

const connectedPage = connect(mapStateToProps)(Page)
export { connectedPage as Page }
