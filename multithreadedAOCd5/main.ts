const worker = new Worker("./worker.ts");

worker.postMessage({"start" : 138819382319231, "end" : 139261836115272});
worker.onmessage = (event: MessageEvent) => {
  console.log(event.data);
}