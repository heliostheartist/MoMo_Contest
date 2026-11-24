import { createServer } from "node:http";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", service: "momo-contest-api" }));
});

server.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
