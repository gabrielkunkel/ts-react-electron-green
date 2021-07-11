import { useCallback } from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { IMessage } from "../../models/messages"

type Props = {
  message: IMessage
  removeMessage: (message: IMessage) => void
}

export const Message: React.FC<Props> = ({ message, removeMessage }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteMessage = useCallback(
    (message: IMessage) => dispatch(removeMessage(message)),
    [dispatch, removeMessage]
  )

  return (
    <div className="Message">
      <div>
        <p>{message.text}</p>
      </div>
      <button onClick={() => deleteMessage(message)}>Delete</button>
    </div>
  )
}