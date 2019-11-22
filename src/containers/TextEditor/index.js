import React, { Component } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CNRichTextEditor, { CNToolbar, getDefaultStyles, convertToObject } from 'react-native-cn-richtext-editor';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from 'react-native-popup-menu';

import styles from './styles';

const { SlideInMenu } = renderers;

const IS_IOS = Platform.OS === 'ios';
const defaultStyles = getDefaultStyles();

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.customStyles = {
      ...defaultStyles,
      body: { fontSize: 12 },
      heading: { fontSize: 16 },
      title: { fontSize: 20 },
      ol: { fontSize: 12 },
      ul: { fontSize: 12 },
      bold: { fontSize: 12, fontWeight: 'bold', color: '' },
    };

    this.state = {
      selectedTag: 'body',
      selectedColor: 'default',
      selectedHighlight: 'default',
      colors: ['red', 'green', 'blue'],
      highlights: ['yellow_hl', 'pink_hl', 'orange_hl', 'green_hl', 'purple_hl', 'blue_hl'],
      selectedStyles: [],

      value: convertToObject('<div><p><span>This is </span><span style="font-weight: bold;">bold</span><span> and </span><span style="font-style: italic;">italic </span><span>text</span></p></div>', this.customStyles),
    };

    this.editor = null;
  }

    onStyleKeyPress = (toolType) => {
      if (toolType == 'image') {
        return;
      } else {
        this.editor.applyToolbar(toolType);
      }
    }

    onSelectedTagChanged = (tag) => {
      this.setState({
        selectedTag: tag,
      });
    }

    onSelectedStyleChanged = (styles) => {
      const colors = this.state.colors;
      const highlights = this.state.highlights;
      const sel = styles.filter(x=> colors.indexOf(x) >= 0);
      const hl = styles.filter(x=> highlights.indexOf(x) >= 0);

      this.setState({
        selectedStyles: styles,
        selectedColor: (sel.length > 0) ? sel[sel.length - 1] : 'default',
        selectedHighlight: (hl.length > 0) ? hl[hl.length - 1] : 'default',
      });
    }

    onValueChanged = (value) => {
      this.setState({
        value,
      });
    }

    onColorSelectorClicked = (value) => {
      if (value === 'default') {
        this.editor.applyToolbar(this.state.selectedColor);
      } else {
        this.editor.applyToolbar(value);
      }

      this.setState({
        selectedColor: value,
      });
    }

    onHighlightSelectorClicked = (value) => {
      if (value === 'default') {
        this.editor.applyToolbar(this.state.selectedHighlight);
      } else {
        this.editor.applyToolbar(value);
      }

      this.setState({
        selectedHighlight: value,
      });
    }

    renderColorMenuOptions = () => {
      let lst = [];

      if (defaultStyles[this.state.selectedColor]) {
        lst = this.state.colors.filter(x => x !== this.state.selectedColor);
        lst.push('default');
        lst.push(this.state.selectedColor);
      } else {
        lst = this.state.colors.filter( () => true);
        lst.push('default');
      }

      return (
        lst.map((item) => {
          const color = defaultStyles[item] ? defaultStyles[item].color : 'black';

          return (
            <MenuOption value={item} key={item}>
              <MaterialCommunityIcons name="format-color-text" color={color} size={28} />
            </MenuOption>
          );
        })

      );
    }

    renderHighlightMenuOptions = () => {
      let lst = [];

      if (defaultStyles[this.state.selectedHighlight]) {
        lst = this.state.highlights.filter(x => x !== this.state.selectedHighlight);
        lst.push('default');
        lst.push(this.state.selectedHighlight);
      } else {
        lst = this.state.highlights.filter( () => true);
        lst.push('default');
      }



      return (
        lst.map((item) => {
          const bgColor = defaultStyles[item] ? defaultStyles[item].backgroundColor : 'black';

          return (
            <MenuOption value={item} key={item}>
              <MaterialCommunityIcons name="marker" color={bgColor} size={26} />
            </MenuOption>
          );
        })
      );
    }

    renderColorSelector() {
      let selectedColor = '#737373';
      if (defaultStyles[this.state.selectedColor]) {
        selectedColor = defaultStyles[this.state.selectedColor].color;
      }

      return (
        <Menu renderer={SlideInMenu} onSelect={this.onColorSelectorClicked}>
          <MenuTrigger>
            <MaterialCommunityIcons
              name="format-color-text"
              color={selectedColor}
              size={28}
              style={{ top:2 }}
            />
          </MenuTrigger>
          <MenuOptions customStyles={styles.optionsStyles}>
            {this.renderColorMenuOptions()}
          </MenuOptions>
        </Menu>
      );
    }

    renderHighlight() {
      let selectedColor = '#737373';
      if (defaultStyles[this.state.selectedHighlight]) {
        selectedColor = defaultStyles[this.state.selectedHighlight].backgroundColor;
      }

      return (
        <Menu renderer={SlideInMenu} onSelect={this.onHighlightSelectorClicked}>
          <MenuTrigger>
            <MaterialCommunityIcons name="marker" color={selectedColor} size={24} />
          </MenuTrigger>
          <MenuOptions customStyles={styles.highlightOptionsStyles}>
            {this.renderHighlightMenuOptions()}
          </MenuOptions>
        </Menu>
      );
    }

    render() {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={IS_IOS ? 0 : 0}
          style={styles.styles.root}
        >
          <MenuProvider style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
              <View testID="ViewTextEditor" style={styles.styles.main}>
                <CNRichTextEditor
                  ref={input => this.editor = input}
                  onSelectedTagChanged={this.onSelectedTagChanged}
                  onSelectedStyleChanged={this.onSelectedStyleChanged}
                  value={this.state.value}
                  style={styles.styles.editor}
                  styleList={this.customStyles}
                  foreColor='dimgray' // optional (will override default fore-color)
                  onValueChanged={this.onValueChanged}
                  onRemoveImage={() => {}}
                />
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.styles.toolbarContainer}>
              <CNToolbar
                style={{ height: 35 }}
                iconSetContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
                size={28}
                iconSet={[
                  {
                    type: 'tool',
                    iconArray: [{
                      toolTypeText: 'bold',
                      buttonTypes: 'style',
                      iconComponent: <MaterialCommunityIcons name="format-bold" />,
                    },
                    {
                      toolTypeText: 'italic',
                      buttonTypes: 'style',
                      iconComponent: <MaterialCommunityIcons name="format-italic" />,
                    },
                    {
                      toolTypeText: 'underline',
                      buttonTypes: 'style',
                      iconComponent: <MaterialCommunityIcons name="format-underline" />,
                    },
                    {
                      toolTypeText: 'lineThrough',
                      buttonTypes: 'style',
                      iconComponent: <MaterialCommunityIcons name="format-strikethrough-variant" />,
                    },
                    ],
                  },
                  {
                    type: 'seperator',
                  },
                  {
                    type: 'tool',
                    iconArray: [
                      {
                        toolTypeText: 'body',
                        buttonTypes: 'tag',
                        iconComponent: (
                          <MaterialCommunityIcons name="format-text" />
                        ) },
                      {
                        toolTypeText: 'title',
                        buttonTypes: 'tag',
                        iconComponent: (
                          <MaterialCommunityIcons name="format-header-1" />
                        ) },
                      {
                        toolTypeText: 'heading',
                        buttonTypes: 'tag',
                        iconComponent: (
                          <MaterialCommunityIcons name="format-header-3" />
                        ) },
                      {
                        toolTypeText: 'ul',
                        buttonTypes: 'tag',
                        iconComponent: (
                          <MaterialCommunityIcons name="format-list-bulleted" />
                        ) },
                      {
                        toolTypeText: 'ol',
                        buttonTypes: 'tag',
                        iconComponent: (
                          <MaterialCommunityIcons name="format-list-numbered" />
                        ) },
                    ],
                  },
                  {
                    type: 'seperator',
                  },
                  {
                    type: 'tool',
                    iconArray: [
                      {
                        toolTypeText: 'color',
                        iconComponent: this.renderColorSelector(),
                      },
                      {
                        toolTypeText: 'highlight',
                        iconComponent: this.renderHighlight(),
                      }],
                  },
                ]}
                selectedTag={this.state.selectedTag}
                selectedStyles={this.state.selectedStyles}
                onStyleKeyPress={this.onStyleKeyPress}
                backgroundColor="aliceblue" // optional (will override default backgroundColor)
                color="gray" // optional (will override default color)
                selectedColor='white' // optional (will override default selectedColor)
                selectedBackgroundColor='deepskyblue' // optional (will override default selectedBackgroundColor)
              />
            </View>
          </MenuProvider>
        </KeyboardAvoidingView>
      );
    }
}

export default TextEditor;
