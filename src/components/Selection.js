import React, { useState } from 'react'

const Selection = (props) => {
  const [selectedStyle, updateSelectionStyle] = useState("")
  const styles = {
    backgroundColor: selectedStyle,
  }
  
  return (
    <div>
      <div className='fix-box' style={styles} onClick={() => props.applyColor((backObj) => updateSelectionStyle(backObj.background))}></div>
    </div>
  )
}

export default Selection