import {useContext} from 'react';
import PropertyContext from '../context/PropertyContext';

// Create a custom hook to access the context
export const useProperties = () => {
    const properties = useContext(PropertyContext);
    if (!properties) {
        throw new Error('useProperties must be used within a PropertyProvider');
    }
    return properties;
};
