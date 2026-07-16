import { spawn } from "node:child_process";

const command = process.platform === "win32" ? "healthcheck" : "autorun";

if (process.platform === "win32") {
  console.log(
    "No Windows, validando a configuração do Lighthouse CI. A auditoria completa roda no CI Linux e na URL pública.",
  );
}

const child = spawn(
  process.execPath,
  ["node_modules/@lhci/cli/src/cli.js", command],
  { stdio: "inherit", windowsHide: true },
);

const exitCode = await new Promise((resolve, reject) => {
  child.once("error", reject);
  child.once("exit", resolve);
});

process.exitCode = exitCode ?? 1;
