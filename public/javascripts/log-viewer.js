const connection = new WebSocket("ws://localhost:3000");
const logWindow = cc;

const onOpen = () => {
  connection.onopen(() => {
    connection.send("Hello from the client!");
  });
};

connection.onopen = () => {
  connection.send("Hello from the client!");
};

connection.onmessage = (event) => {
  logWindow.innerHTML = event.data;
};
