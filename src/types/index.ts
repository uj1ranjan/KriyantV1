export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface SettingsState {
  theme: 'light' | 'dark';
  botName: string;
  welcomeMessage: string;
  primaryColor: string;
}

export interface Lead {
  id: string;
  email: string;
  timestamp: string;
  source: string;
}
