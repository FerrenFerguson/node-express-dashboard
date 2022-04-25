const connection = new WebSocket("ws://localhost:3000");
const logWindow = cc;

const onOpen = () => {
  connection.onopen(() => {
    connection.send("Hello from the client!");
  });
};

const onMessage = (event) => {
  connection.onmessage(() => {
    innerHTML.logWindow(event.data);
  });
};
