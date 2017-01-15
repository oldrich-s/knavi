export function nextTick(): Promise<number> {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

export function isScrollable(element: HTMLElement, style: any): boolean {
  if (element.scrollHeight - element.clientHeight > 10
      && ["auto", "scroll"].includes(style.overflowY)) return true;
  if (element.scrollWidth - element.clientWidth > 10
      && ["auto", "scroll"].includes(style.overflowX)) return true;
  return false;
}