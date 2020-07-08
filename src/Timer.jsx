import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './Slomux'
import { startTimer, stopTimer, incTime } from './Slomux/reducer'
import Interval from './Interval'

let interval = null

const Timer = ({
    delay,
    currentTime,
    disabledBtn,
    startTimer,
    stopTimer,
    incTime,
}) => {
    const handleStartTimer = () => {
        startTimer()
        interval = setInterval(incTime, delay * 1000)
    }

    const handleStopTimer = () => {
        clearInterval(interval)
        stopTimer()
    }

    return (
        <div>
            <Interval />
            <div>
                Секундомер: {currentTime} сек.
			</div>
            <div>
                <button
                    type="button"
                    disabled={disabledBtn.start}
                    onClick={handleStartTimer}
                >
                    Старт
				</button>
                <button
                    type="button"
                    disabled={disabledBtn.stop}
                    onClick={handleStopTimer}
                >
                    Стоп
				</button>
            </div>
        </div>
    )
}

Timer.propTypes = {
    delay: PropTypes.number.isRequired,

    disabledBtn: PropTypes.shape({
        start: PropTypes.bool.isRequired,
        stop: PropTypes.bool.isRequired,
    }).isRequired,

    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    incTime: PropTypes.func.isRequired,
}

export default connect(
    ({ delay, currentTime, disabledBtn }) => ({ delay, currentTime, disabledBtn }),
    (dispatch) => ({
        startTimer: () => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer()),
        incTime: () => dispatch(incTime()),
    })
)(Timer)