import React , {useState} from 'react';
import TodoList from './components/TodoList';

function App() {
  const [showDefault, setShowDefault] = useState(true)
   const [showDisableAdd, setShowDisableAdd] = useState(false)
   const [showDisableDelete, setShowDisableDelete] = useState(false)
   const [showDisableBoth, setShowDisableBoth] = useState(false)

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Main Application Todo List Demonstrating Storybook</h2>
            <div className="mb-4">
                <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${showDefault ? 'bg-green-400' : ''}`}
                    onClick={() => {
                      setShowDefault(true);
                       setShowDisableAdd(false)
                        setShowDisableDelete(false)
                        setShowDisableBoth(false)
                      }}
                  >
                    Default
                </button>
                 <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${showDisableAdd ? 'bg-green-400' : ''}`}
                    onClick={() => {
                      setShowDefault(false);
                       setShowDisableAdd(true)
                        setShowDisableDelete(false)
                        setShowDisableBoth(false)
                      }}
                  >
                    Disable Add
                </button>
                  <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${showDisableDelete ? 'bg-green-400' : ''}`}
                    onClick={() => {
                      setShowDefault(false);
                       setShowDisableAdd(false)
                        setShowDisableDelete(true)
                        setShowDisableBoth(false)
                      }}
                  >
                    Disable Delete
                </button>
                 <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${showDisableBoth ? 'bg-green-400' : ''}`}
                    onClick={() => {
                      setShowDefault(false);
                       setShowDisableAdd(false)
                        setShowDisableDelete(false)
                        setShowDisableBoth(true)
                      }}
                  >
                    Disable Both
                </button>

            </div>
            {showDefault && <TodoList canAdd={true} canDelete={true} />}
            {showDisableAdd && <TodoList canAdd={false} canDelete={true} />}
            {showDisableDelete && <TodoList canAdd={true} canDelete={false} />}
            {showDisableBoth && <TodoList canAdd={false} canDelete={false} />}
        </div>
    );
}

export default App;