import React, {FC, useReducer, useState} from 'react';
import Home from "./components/home";
import DonationModal from "./components/newDonationModal";
import {appReducer, initialState} from "./store/appStore";


const App:FC = () => {
    // @ts-ignore
    const[state, dispatch] = useReducer(appReducer, initialState);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
    <div className="App">
        <DonationModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            locations={state.locations}
            themes={state.themes}
            donationItems={state.donationItems}
            dispatch={dispatch}
        />
        <Home
            donationItems={state.donationItems}
            statuses={state.statuses}
            showModal={showModal}
            dispatch={dispatch}
        />
    </div>
  );
}

export default App;
