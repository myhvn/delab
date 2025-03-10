import React from "react";
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';

import { BlockStyleControls } from './EditorToolbar';
import { InlineStyleControls } from './EditorToolbar';

import EditorPlugins from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';

const imagePlugin = createImagePlugin();

// let text = `{"blocks":[{"key":"3010q","text":"header\n","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7agjc","text":"123123123","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1gtrc","text":"123123","type":"blockquote","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"arfb7","text":"bold/italic","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":11,"style":"BOLD"},{"offset":5,"length":6,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}`.replace(/\n/, "\\n");;


class DraftEditor extends React.Component {
  editorState = EditorState.createEmpty()

  state = {
    rawData: null,
    htmlData: null
  }

  changeHandler = (editorState) => {
    this.editorState = editorState;
    this.setState({
      rawData: convertToRaw(this.editorState.getCurrentContent()),
      htmlData: stateToHTML(this.editorState.getCurrentContent())
    })

    this.props.dataDescriptionEditor({
      rawData: this.state.rawData,
      htmlData: this.state.htmlData
    })
  }

  componentDidMount = () => {
    const { primaryData } = this.props
    if (primaryData) {
      let data = convertFromRaw(JSON.parse(primaryData.replace(/\n/, "\\n")));
      this.editorState = EditorState.createWithContent(data);
    }
  }

  addHandler = () => {
    const imageSTet = imagePlugin.addImage(
      this.editorState,
      'https://open.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/publish-save-draft_resized.png'
    )
    this.changeHandler(imageSTet)
  }

  toggleBlockType = (blockType) => {
    this.changeHandler(
      RichUtils.toggleBlockType(
        this.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle = (inlineStyle) => {
    this.changeHandler(
      RichUtils.toggleInlineStyle(
        this.editorState,
        inlineStyle
      )
    );
  }

  render = () => {
    return (
      <div className="editor-wrap">
        <div className="RichEditor-controls">
          <BlockStyleControls
            editorState={this.editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={this.editorState}
            onToggle={this.toggleInlineStyle}
          />
          {/* <button type="button" onClick={this.addHandler}>
            Image
          </button> */}
        </div>
        <EditorPlugins
          editorState={this.editorState}
          onChange={this.changeHandler}
          plugins={[imagePlugin]}
        />
      </div>
    )
  }


}

export default DraftEditor;