import { createContext, useContext, type PropsWithChildren, useEffect, useState } from 'react'
import { getProjects, type ProjectItem } from '../data/DataProjects'

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
    const [data, setData] = useState<ProjectItem[] | null>(null);

    useEffect(() => {
        getProjects().then(setData).catch(console.error);
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>)
}

export default DataContext