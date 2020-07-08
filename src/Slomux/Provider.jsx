import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const ProviderCtx = createContext({})

export const Provider = ({ children, store }) => {
    return (
        <ProviderCtx.Provider value={{ store }}>
            {children}
        </ProviderCtx.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.shape({
        getState: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        subscribe: PropTypes.func.isRequired,
    }),
}