import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as appActions from '../../redux/actions/appActions';

import styles from './styles';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.text}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Camera')}>
          <Text style={styles.text}>Go to Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  variable: PropTypes.string.isRequired,
};

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
