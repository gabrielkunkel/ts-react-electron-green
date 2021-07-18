import { Guid } from "guid-typescript"
import * as React from "react"
import { IMessage } from "../../models/messages"

type Props = {
  saveMessage: (message: IMessage | any) => void
}

export const AddMessage: React.FC<Props> = ({ saveMessage }) => {
  const [message, setMessage] = React.useState<IMessage | {}>(
    {
      id: Guid.create(),
      // todo: get from ui or api
      destinationUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
      originUser: Guid.parse("21d0e6f7-2998-4128-b2ed-6244b4452a5d"),
      metadata: {
        CreationDate: new Date(),
        LastModifiedDate: new Date(),
      },
      text: ""
    }
  )

  const handleMessageData = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(Object.assign(message, { text: e.currentTarget.value }))
  }

  const addNewMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    saveMessage(message)
  }

  return (
    <form onSubmit={addNewMessage} className="add-message">
      <input
        type="text"
        id="new-message-text"
        placeholder="My Message"
        onChange={handleMessageData}
      />
      <button disabled={message === undefined}>
        Add Message
      </button>
    </form>
  )
}