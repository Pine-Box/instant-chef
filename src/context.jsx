import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({Children}) => {
    return <App.AppContext.Provider value = 'hello'>
        {children}
    </App.AppContext.Provider>
}

export {AppContext, AppProvider};