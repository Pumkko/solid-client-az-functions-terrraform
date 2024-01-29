import { Match, Switch, createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createQuery } from '@tanstack/solid-query';

function App() {
  const [count, setCount] = createSignal(0);

  const query = createQuery(() => ({
    queryKey: ["helloWorld"],
    queryFn: () => {
      return fetch("/api/HelloWorld").then(r => r.json())
    }
  }))

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Switch>
          <Match when={query.isPending}>Loading Query...</Match>
          <Match when={query.error}>
            {'An error has occurred: ' + (query.error as Error).message}
          </Match>
          <Match when={query.data !== undefined}>
        <div>
          <h1>{query.data.key}</h1>
          <p>{query.data.payload}</p>
        </div>
      </Match>
        </Switch>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
