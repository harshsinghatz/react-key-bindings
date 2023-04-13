# ⌨️ React Key Bindings
An light weight library for having key bindings in a clean way

## Install
```
npm install @harshsinghatz/react-key-bindings
```

## Usage
```ts
import { keyboardKeys, useKeybindings } from '@harshsinghatz/react-key-bindings';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useKeybindings([
    { cmd: [keyboardKeys.KeyA, keyboardKeys.BracketLeft], callback: openModal },
    { cmd: [keyboardKeys.KeyC, keyboardKeys.BracketLeft], callback: closeModal },
  ])

  return (
    <div className="App">
      Modal State: {isModalOpen ? "modal open" : "modal close"}
    </div>
  )
}

export default App

```
You can define all the keybindings combinations with the corresponding callaback associated with it inside useKeybindings hook. 
You can use keyboardKeys to assign the keys for the keybinding combination refer the example above.
