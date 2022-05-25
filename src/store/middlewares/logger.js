export default function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.group(action.type);
        console.log('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
      console.groupEnd();
      return result
    }
  }
}