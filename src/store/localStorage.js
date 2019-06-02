const LOCAL_STORAGE_KEY = 'chatState';

export const loadState = () => {
  try {
    let serializedChatState = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (serializedChatState === null) {
      return undefined;
    }

    return JSON.parse(serializedChatState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedChatState = JSON.stringify(state);
    localStorage.setItem("chatState", serializedChatState);
  } catch (error) {}
};
