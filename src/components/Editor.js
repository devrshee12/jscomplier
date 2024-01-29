import React from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"

import { Controlled as ControlledEditor} from 'react-codemirror2';

const Editor = (props) => {
    const {onChange, value, language } = props;

    const handleChange = (editor, data, value) => {

        onChange(value)

    }
  return (

    <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
        
      />
  )
}

export default Editor