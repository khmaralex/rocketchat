import thunk from 'redux-thunk';

const logger = ({ getState }) => {
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());

    return returnValue;
  }
};

const clientBotMiddleware = ({dispatch, getState}) => {
  // return next => action => {
  //   const returnValue = next(action);
  //   return returnValue;
  // }
};

const middlewares = [thunk,logger];
export default middlewares;



