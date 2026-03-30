import React, { Children, createContext, useContext, useState, type PropsWithChildren } from 'react'
import { projectsData, type ProjectItem } from '../data/DataProjects'

type IDataContext = {
    data: ProjectItem[] | null;

}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('usedata precisa estar em DataContextProvider');
    return context;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const data = projectsData.map(item => item);
    const [loading, setLoading] = useState(false);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>)
}

export default DataContext