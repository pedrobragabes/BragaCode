import { spawn } from "node:child_process";

const mode = process.platform === "win32" ? "dev" : "start";
const child = spawn(
  process.execPath,
  ["node_modules/vinext/dist/cli.js", mode, "--port", "4173", "--hostname", "127.0.0.1"],
  {
    env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
    stdio: ["ignore", "inherit", "inherit"],
    windowsHide: true,
  },
);

let stopping = false;
function stop() {
  if (stopping) return;
  stopping = true;
  child.kill("SIGTERM");
}

process.once("SIGINT", stop);
process.once("SIGTERM", stop);
process.once("exit", stop);

const deadline = Date.now() + 60_000;
while (Date.now() < deadline) {
  try {
    const response = await fetch("http://127.0.0.1:4173/");
    if (response.ok) {
      console.log("LHCI_SERVER_READY");
      break;
    }
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 250));
}

if (Date.now() >= deadline) {
  stop();
  throw new Error("quality_server_timeout");
}

await new Promise((resolve, reject) => {
  child.once("error", reject);
  child.once("exit", (code) => resolve(code));
});
