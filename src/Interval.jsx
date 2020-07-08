import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './Slomux'
import { incDelay, decDelay } from './Slomux/reducer'

const Interval = ({
    delay,
    disabledBtn,
    incDelay,
    decDelay,
}) => {
    return (
        <div>
            <span>Интервал обновления секундомера: {delay} сек.</span>
            <span>
                <button
                    disabled={disabledBtn.decDelay}
                    onClick={decDelay}
                >
                    -
				</button>
                <button
                    disabled={disabledBtn.incDelay}
                    onClick={incDelay}
                >
                    +
				</button>
            </span>
        </div>
    )
}

Interval.propTypes = {
    delay: PropTypes.number.isRequired,

    disabledBtn: PropTypes.shape({
        incDelay: PropTypes.bool.isRequired,
        decDelay: PropTypes.bool.isRequired,
    }).isRequired,

    incDelay: PropTypes.func.isRequired,
    decDelay: PropTypes.func.isRequired,
}

export default connect(
    ({ delay, disabledBtn }) => ({ delay, disabledBtn }),
    (dispatch) => ({
        incDelay: () => dispatch(incDelay()),
        decDelay: () => dispatch(decDelay()),
    })
)(Interval)