import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [quantities, setQuantities] = useState({});
    const handleIncrement = (id, qtd) => {
        setQuantities({ ...quantities, [id]: (quantities[id] || 0) + qtd})
    }
    const handleDecrement = (id) => {
        if(quantities[id] > 0) {
            setQuantities({ ...quantities, [id]: quantities[id] - 1})
        }
    }

    const [isOrderButtonActive, setisOrderButtonActive ] = useState(false);
    const [isPayButtonClicked, setIsPayButtonClicked ] = useState(false);
    const [isNavActive, setisNavActive ] = useState(true);
    const [thereIsOrder, setThereIsOrder] = useState(false);

    return (
        <GlobalContext.Provider value={{ quantities, handleIncrement, setQuantities, handleDecrement, isOrderButtonActive, setisOrderButtonActive, isPayButtonClicked, setIsPayButtonClicked, isNavActive, setisNavActive, thereIsOrder, setThereIsOrder}}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}

GlobalProvider.propTypes = {
    children: PropTypes.node
};
