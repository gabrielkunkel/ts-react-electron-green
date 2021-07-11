import * as actionTypes from "./actionTypes";
import { IMessage, MessageState, MessageAction } from "../models/messages";
import { Guid } from "guid-typescript";

const initialState: MessageState = {
  messages: [
    {
      id: Guid.parse("d5a470d4-9e7b-4aa9-be3a-43f740ae9f25"),
      destinationUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
      originUser: Guid.parse("922c82aa-6cac-4f98-af2f-713314ad7929"),
      metadata: {
          CreationDate: new Date('01/05/2021T12:32:12'),
          LastModifiedDate: new Date('01/05/2021T12:32:12')
      },
      text: "Jerry was thoughtful. He told me I wasn't that weird for liking the taste of hemroid cream."
    },
    {
        id: Guid.parse("660a95a1-63ee-428f-916d-2002626cf253"),
        destinationUser: Guid.parse("922c82aa-6cac-4f98-af2f-713314ad7929"),
        originUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
        metadata: {
            CreationDate: new Date('01/05/2021T12:35:18'),
            LastModifiedDate: new Date('01/05/2021T12:35:18')
        },
        text: "That's nice... I love the taste of hemoroid cream."
      }
  ]
}

const reducer = (
    state: MessageState = initialState,
    action: MessageAction
  ): MessageState => {
    switch (action.type) {
        
      case actionTypes.ADD_MESSAGE:
        const newMessage: IMessage = {
          id: Guid.create(),
          // todo: get from ui or api
          destinationUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
          originUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
          metadata: {
              CreationDate: new Date(),
              LastModifiedDate: new Date(),
          },
          text: action.message.text
        }

        return {
          ...state,
          messages: [...state.messages, newMessage]
        }

      case actionTypes.REMOVE_MESSAGE:
        const updatedMessages: IMessage[] = state.messages.filter(
          message => message.id !== action.message.id
        )

        return {
          ...state,
          messages: updatedMessages,
        }
    }
    return state
  }
  
  export default reducer