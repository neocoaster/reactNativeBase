import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from 'react-native-cn-richtext-editor';

const defaultStyles = getDefaultStyles();

class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag : 'body',
      selectedStyles : [],
      value: [getInitialObject()],
    };

    this.editor = null;
  }
  componentDidMount() {
    console.log("In Text Editor");
  }

  onStyleKeyPress = (toolType) => {
    this.editor.applyToolbar(toolType);
  }

    onSelectedTagChanged = (tag) => {
      this.setState({
        selectedTag: tag,
      });
    }

    onSelectedStyleChanged = (styles) => {
      this.setState({
        selectedStyles: styles,
      });
    }

    onValueChanged = (value) => {
      this.setState({
        value,
      });
    }


    render() {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={0}
          style={{
            flex: 1,
            paddingTop: 20,
            backgroundColor:'#eee',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.main}>
              <CNRichTextEditor
                ref={input => this.editor = input}
                onSelectedTagChanged={this.onSelectedTagChanged}
                onSelectedStyleChanged={this.onSelectedStyleChanged}
                value={this.state.value}
                style={{ backgroundColor : '#fff', fontSize: 5 }}
                styleList={{ ...defaultStyles, body: { fontSize: 12 }, heading : { fontSize: 16 }, title : { fontSize: 20 } }}
                onValueChanged={this.onValueChanged}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={{ minHeight: 35 }}>

            <CNToolbar
              style={{
                height: 50,
                backgroundColor: 'red',
                marginBotton: 20,
              }}
              iconSetContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              size={30}
              iconSet={[
                {
                  type: 'tool',
                  iconArray: [{
                    toolTypeText: 'italic',
                    buttonTypes: 'style',
                    iconComponent:(
                      <Text style={styles.toolbarButton}>
                        italic
                      </Text>
                    ) }],
                },
                {
                  type: 'tool',
                  iconArray: [
                    {
                      toolTypeText: 'title',
                      buttonTypes: 'tag',
                      iconComponent: (
                        <Text style={styles.toolbarButton}>
                          title
                        </Text>
                      ) }],
                },
                {
                  type: 'tool',
                  iconArray: [{
                    toolTypeText: 'bold',
                    buttonTypes: 'style',
                    iconComponent:(
                      <Text style={styles.toolbarButton}>
                        BLD
                      </Text>
                    ) }],
                },
                {
                  type: 'tool',
                  iconArray: [
                    {
                      toolTypeText: 'underline',
                      buttonTypes: 'tag',
                      iconComponent: (
                        <Text style={styles.toolbarButton}>
                          und
                        </Text>
                      ) }],
                },
                {
                  type: 'tool',
                  iconArray: [
                    {
                      toolTypeText: 'ul',
                      buttonTypes: 'tag',
                      iconComponent: (
                        <Text style={styles.toolbarButton}>
                          ul
                        </Text>
                      ) }],
                },
                {
                  type: 'tool',
                  iconArray: [
                    {
                      toolTypeText: 'ol',
                      buttonTypes: 'tag',
                      iconComponent: (
                        <Text style={styles.toolbarButton}>
                        ol
                        </Text>
                      ) }],
                },
              ]}
              selectedTag={this.state.selectedTag}
              selectedStyles={this.state.selectedStyles}
              onStyleKeyPress={this.onStyleKeyPress}
            />
          </View>
        </KeyboardAvoidingView>
      );
    }

}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 1,
    alignItems: 'stretch',
  },
  toolbarButton: {
    fontSize: 13,
    width: 28,
    height: 28,
    textAlign: 'center',
  },
  italicButton: {
    fontStyle: 'italic',
  },
  boldButton: {
    fontWeight: 'bold',
  },
  underlineButton: {
    textDecorationLine: 'underline',
  },
  lineThroughButton: {
    textDecorationLine: 'line-through',
  },
});


export default TextEditor;