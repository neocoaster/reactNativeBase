import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as appActions from '../../redux/actions/appActions';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

Home.propTypes = {
  variable: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  variable: state.appReducer.toJS().variable,
});

const mapDispatchToProps = dispatch => {
  const {setVariable} = bindActionCreators(appActions, dispatch);

  return {
    setVariable,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
