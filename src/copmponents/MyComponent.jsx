import config from '../bot/config.js';
//import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider';
import MessageParser from '../bot/MessageParser';
const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MyComponent;