import React from 'react';
import CharacterCount from './CharacterCount';
import TextInput from './TextInput';

import "./CharacterCounter.css"

const CharacterCounter = () => {
  return (
    <div className="character-counter">
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CharacterCounter;
