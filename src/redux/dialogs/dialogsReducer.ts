import { dialogsAPI } from "../../api/api.js";

const SEND_MESSAGE = "dialogs/SEND-MESSAGE";
const GET_ALL_DIALOGS = "dialogs/GET_ALL_DIALOGS";
const GET_MESSAGES = "dialogs/GET_MESSAGES";

export type initialStateType = typeof initialState;
export type dialogType = {
  id: number;
  name: string;
};
export type messageType = {
  id: number;
  message: string;
};

export type getAllDialogsType = {
  type: typeof GET_ALL_DIALOGS;
  dialogs: Array<dialogType>;
};
export type getMessagesType = {
  type: typeof GET_MESSAGES;
  messages: Array<messageType>;
};
export type addSendedMessageType = {
  type: typeof SEND_MESSAGE;
  message: string;
};

let initialState = {
  messages: [
    {
      id: 1,
      message: "Hello",
    },
  ] as Array<messageType>,
  dialogs: [
    {
      id: 1,
      name: "Dima",
    },
  ] as Array<dialogType>,
  newMessageBody: "" as string,
};

export const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case GET_ALL_DIALOGS:
      return {
        ...state,
        dialogs: action.dialogs,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export const getAllDialogs = (
  dialogs: Array<dialogType>
): getAllDialogsType => ({
  type: GET_ALL_DIALOGS,
  dialogs,
});

export const getMessages = (messages: Array<messageType>): getMessagesType => ({
  type: GET_MESSAGES,
  messages,
});

export const addSendedMessage = (message: string): addSendedMessageType => ({
  type: SEND_MESSAGE,
  message,
});

export const getAllDialogsThunk = () => async (dispatch: any) => {
  let data = await dialogsAPI.getAllDialogs();
  dispatch(getAllDialogs(data));
};

export const startChatThunk = (userId: any) => async (dispatch: any) => {
  let data = await dialogsAPI.startChat(userId);
  if (data.resultCode === 0) {
    dispatch(getAllDialogsThunk());
  }
};

export const getMessagesThunk = (userId: any) => async (dispatch: any) => {
  let data = await dialogsAPI.getMessages(userId);

  if (!data.errors) {
    dispatch(getMessages(data.items));
  }
};

export const sendMessageThunk =
  (message: any, userId: any) => async (dispatch: any) => {
    let data = await dialogsAPI.sendMessage(message, userId);
    if (data.resultCode === 0) {
      dispatch(addSendedMessage(data.data.message));
    }
  };
