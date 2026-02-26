// prevents TS errors
declare var self: Worker;

self.onmessage = (event: MessageEvent) => {
  console.log(event.data.end - event.data.start);
  let toret = []
  for (let i = event.data.start; i <= event.data.end; i++) {
    toret.push(i);
  }
  postMessage(toret);
};