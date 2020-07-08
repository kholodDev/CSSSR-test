import React from 'react'
import { ProviderCtx } from './Provider'

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
    class WrappedComponent extends React.Component {
        static contextType = ProviderCtx

        componentDidMount() {
            this.context.store.subscribe(this.handleChange)
        }

        handleChange = () => {
            this.forceUpdate()
        }

        render() {
            return (
                <Component
                    {...this.props}
                    {...mapStateToProps(this.context.store.getState())}
                    {...mapDispatchToProps(this.context.store.dispatch)}
                />
            )
        }
    }

    return WrappedComponent
}