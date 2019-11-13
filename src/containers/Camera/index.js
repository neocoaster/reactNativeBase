import React, { Fragment } from 'react';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import styles from './styles';

class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureTaken: false,
    };
  }

  takePicture = async () => {
    const { callback, options } = this.props;

    let res;

    if (this.camera) {
      const data = await this.camera.takePictureAsync(options);

      res = data.base64;
    } else {
      res = 'No camera found';
    }

    this.setState({
      pictureTaken: true,
    });

    callback(res);
  };

  erasePicture = () => {
    this.camera.resumePreview();

    this.setState({
      pictureTaken: false,
    });
  };

  render() {
    const { pictureTaken } = this.state;

    return (
      <Fragment>
        <RNCamera
          aspect={RNCamera.Constants.Type.back}
          captureAudio={false}
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
        />

        <Button
          label={pictureTaken ? 'Take again' : 'Take picture'}
          onPress={pictureTaken ? this.erasePicture : this.takePicture}
        />
      </Fragment>
    );
  }
}

Camera.displayName = 'Camera';

Camera.propTypes = {
  callback: PropTypes.func,
  options: PropTypes.object, // Everything RNCamera accepts
};

Camera.defaultProps = {
  callback: () => {},
  options: {
    base64: true,
    doNotSave: true,
    pauseAfterCapture: true,
  },
};

export default Camera;
