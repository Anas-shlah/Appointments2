import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {formatTimer} from '../../utils/helperFunctions';

var initialFunctionPeriodicallySeconds = 0;

function Timer(props) {
  const {
    descending,
    maxSeconds,
    deadlineFunction,
    FunctionPeriodically,
    FunctionPeriodicallySeconds,
  } = props;
  const [seconds, setSeconds] = useState(descending ? maxSeconds : 0);

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(prevSeconds =>
        descending ? prevSeconds - 1 : prevSeconds + 1,
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    const deadlineVal = descending ? 0 : maxSeconds;

    if (FunctionPeriodicallySeconds > 0) {
      if (initialFunctionPeriodicallySeconds == FunctionPeriodicallySeconds) {
        FunctionPeriodically();
        initialFunctionPeriodicallySeconds = 0;
      } else {
        initialFunctionPeriodicallySeconds++;
      }
    }

    if (seconds === deadlineVal) {
      clearInterval(interval);
      deadlineFunction();
    }
  }, [seconds]);

  return <Text>{formatTimer(seconds)}</Text>;
}
export default Timer;
