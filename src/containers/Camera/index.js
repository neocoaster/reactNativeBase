import React, { Fragment } from 'react';
import { RNCamera } from 'react-native-camera';
import { Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import PropTypes from 'prop-types';
import { PERMISSIONS } from 'react-native-permissions';

import { checkPermissions } from '../../utils/index';

import CameraButtons from '../../components/CameraButtons';
import Gallery from '../../components/Gallery';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';

class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureTaken: false,
      photo: '',
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

    checkPermissions(permission, navigation);

    if (Platform.OS === 'android') {
      checkPermissions(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, navigation);
    }
  }

  takePicture = async () => {
    const { callback, options } = this.props;

    let res;

    if (this.camera) {
      const data = await this.camera.takePictureAsync(options);

      res = data.uri;
    } else {
      res = 'No camera found';
    }

    this.setState({
      pictureTaken: true,
      photo: res,
    });

    callback(res);
  };

  erasePicture = () => {
    this.camera.resumePreview();

    this.setState({
      pictureTaken: false,
    });
  };

  saveToCameraRoll = () => {
    const { photo } = this.state;

    CameraRoll.saveToCameraRoll(photo, 'photo');

    this.camera.resumePreview();
    this.setState({
      pictureTaken: false,
    });
  };

  openGallery = () => {
    const galleryOptions = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(galleryOptions, () => {
      // Response is an object with the following fields:
      // ["height", "fileSize", "data", "path", "uri", "timestamp", "longitude", "width", "type", "fileName", "isVertical", "originalRotation", "latitude"]
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
          type={RNCamera.Constants.Type.back}
          style={styles.preview}
        />

        {!pictureTaken && <Gallery onPress={this.openGallery} />}

        <CameraButtons
          label={pictureTaken ? 'Take again' : 'Take picture'}
          onPress={pictureTaken ? this.erasePicture : this.takePicture}
          saveToCameraRoll={pictureTaken ? this.saveToCameraRoll : () => {}}
        />
      </Fragment>
    );
  }
}

Camera.displayName = 'Camera';

Camera.propTypes = {
  callback: PropTypes.func,
  options: PropTypes.object, // Everything RNCamera accepts
  navigation: PropTypes.object.isRequired,
};

Camera.defaultProps = {
  callback: () => {},
  options: {
    quality: 0.5,
    base64: true,
    pauseAfterCapture: true,
  },
};

export default Camera;
