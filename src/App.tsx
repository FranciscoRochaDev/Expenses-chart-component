import CardSpending from "./components/CardSpending"
import Header from "./components/Header"


function App() {

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen gap-4 md:gap-6 p-5">
        <Header
            infoBalance="My balance"
            balance="$921.48"
            logo="logo.svg"
        />
        <main className="w-full max-w-2xl">
            <CardSpending />
        </main>
    </div>
  )
}

export default App
