import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ContactList from "./components/listContact/ContactList";
import AddContact from "./components/formComponent/AddContact";
import ViewContactDetails from "./components/listContact/ViewContactDetails";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const doToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className="bg-black">
      <Navbar toggle={toggle} doToggle={doToggle} />
      <ContactList />

      <div className="container p-5">
        <AddContact toggle={toggle} doToggle={doToggle} />
        <ViewContactDetails />
      </div>
    </div>
  );
};

export default App;
