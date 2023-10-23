import { useRef } from 'react';

export function Router() {
  return <div></div>;
}

interface History {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [S: string]: any;
}

export function createBrowserHistory() {
  
}

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  let historyRef = useRef<History>();
  if (historyRef.current === null) {
    historyRef.current = createBrowserHistory();
  }
  let history = historyRef.current;
}
