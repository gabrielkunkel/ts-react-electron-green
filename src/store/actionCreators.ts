import * as actionTypes from "./actionTypes";
import { IMessage, MessageAction, DispatchType } from "../models/messages";

export function addMessage(message: IMessage) {
    const action: MessageAction = {
      type: actionTypes.ADD_MESSAGE,
      message,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function removeMessage(message: IMessage) {
    const action: MessageAction = {
      type: actionTypes.REMOVE_MESSAGE, 
      message,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(message: MessageAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(message)
      }, 500)
    }
  }