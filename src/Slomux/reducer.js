const ACTIONS = {
    START: 'START',
    STOP: 'STOP',
    INC_DELAY: 'INC_DELAY',
    DEC_DELAY: 'DEC_DELAY',
    INC_TIME: 'INC_TIME',
}

export const startTimer = () => ({ type: ACTIONS.START })
export const stopTimer = () => ({ type: ACTIONS.STOP })
export const incDelay = () => ({ type: ACTIONS.INC_DELAY })
export const decDelay = () => ({ type: ACTIONS.DEC_DELAY })
export const incTime = () => ({ type: ACTIONS.INC_TIME })

const initialState = {
    delay: 0,
    currentTime: 0,
    disabledBtn: {
        start: true,
        stop: true,
        incDelay: false,
        decDelay: true,
    }
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIONS.START: {
            return {
                ...state,
                disabledBtn: {
                    start: true,
                    stop: false,
                    incDelay: true,
                    decDelay: true,
                }
            }
        }

        case ACTIONS.STOP: {
            return {
                ...state,
                currentTime: 0,
                disabledBtn: {
                    start: false,
                    stop: true,
                    incDelay: false,
                    decDelay: state.delay === 0,
                }
            }
        }

        case ACTIONS.INC_DELAY: {
            const delay = state.delay + 1

            return {
                ...state,
                delay,
                disabledBtn: {
                    ...state.disabledBtn,
                    start: delay === 0,
                    incDelay: delay === 0,
                    decDelay: delay === 0,
                }
            }
        }

        case ACTIONS.DEC_DELAY: {
            const delay = state.delay > 0 ? state.delay - 1 : state.delay

            return {
                ...state,
                delay,
                disabledBtn: {
                    ...state.disabledBtn,
                    start: delay === 0,
                    decDelay: delay === 0,
                }
            }
        }

        case ACTIONS.INC_TIME: {
            return {
                ...state,
                currentTime: state.currentTime + state.delay
            }
        }

        default: {
            return state
        }
    }
}