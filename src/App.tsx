import React, { createContext, useContext, useState } from 'react';
import Navbar from "./components/navbar";
import List from "./components/list";

// Define the shape of the context data
interface DataContextProps {
  customGroups: string[];
  addCustomGroup: (group: string) => void;
  data: string [][];
}

// Create the context with initial value
const initialDataContext: DataContextProps = {
  customGroups: ['Group 1', 'Group 2'],
  addCustomGroup: (group: string) => {},
  data : [
      ["My day", "Have breakfast"],
      ["My day", "Go for a walk"],
      ["My day", "Read a book"],
      ["My day", "Watch a movie"],
      ["My day", "Go to bed early"],

      ["Important", "Finish work report"],
      ["Important", "Pay bills"],
      ["Important", "Schedule a doctor's appointment"],
      ["Important", "Prepare for meeting"],
      ["Important", "Renew car insurance"],

      ["Tasks", "Clean the house"],
      ["Tasks", "Grocery shopping"],
      ["Tasks", "Do laundry"],
      ["Tasks", "Call a friend"],
      ["Tasks", "Cook dinner"]
  ]
};

// Create the context
export const DataContext = createContext<DataContextProps>(initialDataContext);

const App: React.FC = () => {
  const [customGroups, setCustomGroups] = useState<string[]>(initialDataContext.customGroups);
  const [option, setOption] = useState <string>('');
  const [data, setData] = useState<string[][]>(initialDataContext.data)
  const addCustomGroup = (group: string) => {
    setCustomGroups([...customGroups, group]);
  };

  return (
      <div className="app flex">
        <DataContext.Provider value={{ customGroups, addCustomGroup, data }}>
          <Navbar name="John" surname="Doe" email="john.doe@example.com" setOption={setOption} />
            <List option = {option} />
        </DataContext.Provider>
      </div>
  );
};

export default App;
