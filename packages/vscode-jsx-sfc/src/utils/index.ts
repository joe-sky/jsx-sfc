export function sleep(interval: number) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}
