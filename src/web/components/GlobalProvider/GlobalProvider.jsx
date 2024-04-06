import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [numberOfMistoQuente, setNumberOfMistoQuente] = useState(0);
    const [numberOfXTudo, setNumberOfXTudo] = useState(0);
    const [numberOfSandMortadela, setNumberOfSandMortadela] = useState(0);
    const [numberOfXSalada, setNumberOfXSalada] = useState(0);
    const [numberOfBauru, setNumberOfBauru] = useState(0);
    const [numberOfSandPernil, setNumberOfSandPernil] = useState(0);
    const [numberOfAmericano, setNumberOfAmericano] = useState(0);
    const [numberOfFrangoQueijo, setNumberOfFrangoQueijo] = useState(0);
    const [numberOfXBacon, setNumberOfXBacon] = useState(0);
    const [numberOfXCatupiry, setNumberOfXCatupiry] = useState(0);
    const [numberOfSandAtum, setNumberOfSandAtum] = useState(0);
    const [numberOfSandSalame, setNumberOfSandSalame] = useState(0);
    const [numberOfMarmitex, setNumberOfMarmitex] = useState(0);
    const [isOrderButtonActive, setisOrderButtonActive ] = useState(false);
    const [isNavActive, setisNavActive ] = useState(true);

    return (
        <GlobalContext.Provider value={{ numberOfMistoQuente, setNumberOfMistoQuente, numberOfXTudo, setNumberOfXTudo, numberOfSandMortadela, setNumberOfSandMortadela, numberOfXSalada, setNumberOfXSalada, numberOfBauru, setNumberOfBauru, numberOfSandPernil, setNumberOfSandPernil, numberOfAmericano, setNumberOfAmericano, numberOfFrangoQueijo, setNumberOfFrangoQueijo, numberOfXBacon, setNumberOfXBacon, numberOfXCatupiry, setNumberOfXCatupiry, numberOfSandAtum, setNumberOfSandAtum, numberOfSandSalame, setNumberOfSandSalame, numberOfMarmitex, setNumberOfMarmitex, isOrderButtonActive, setisOrderButtonActive, isNavActive, setisNavActive }}>
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
