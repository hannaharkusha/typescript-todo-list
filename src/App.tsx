import React, { createContext, useContext, useState } from 'react';
import Navbar from "./components/navbar";

// Define the shape of the context data
interface DataContextProps {
  customGroups: string[];
  addCustomGroup: (group: string) => void;
}

// Create the context with initial value
const initialDataContext: DataContextProps = {
  customGroups: ['Group 1', 'Group 2'],
  addCustomGroup: (group: string) => {}, // Placeholder function
};

// Create the context
export const DataContext = createContext<DataContextProps>(initialDataContext);

const App: React.FC = () => {
  const [customGroups, setCustomGroups] = useState<string[]>(initialDataContext.customGroups);

  const addCustomGroup = (group: string) => {
    setCustomGroups([...customGroups, group]);
  };

  return (
      <div className="app flex">
        <DataContext.Provider value={{ customGroups, addCustomGroup }}>
          <Navbar name="John" surname="Doe" email="john.doe@example.com" />
        </DataContext.Provider>
      </div>
  );
};

export default App;
