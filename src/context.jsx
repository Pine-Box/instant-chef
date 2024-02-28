import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({Children}) => {
    return <App.AppContext.Provider value = {{name:'dan', role:'student'}}>
        {children}
    </App.AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};