import React from 'react';
import { Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../../redux/actions/appActions';

import styles from './styles';

class Details extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          testID="button-details"
          title="Go to HomeScreen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  variable: state.appReducer.toJS().variable,
});

const mapDispatchToProps = dispatch => {
  const { setVariable } = bindActionCreators(appActions, dispatch);

  return {
    setVariable,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
