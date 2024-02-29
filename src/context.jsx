import React, {useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({Children}) => {
    useEffect (() => {
        console.log('fetch data here')
    }, [])
    return <App.AppContext.Provider value = {{name:'dan', role:'student'}}>
        {children}
    </App.AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};