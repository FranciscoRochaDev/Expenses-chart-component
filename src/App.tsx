import Header from "./components/Header"


function App() {

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-5">
        <Header
            infoBalance="My balance"
            balance="$921.48"
            logo="logo.svg"
        />
    </div>
  )
}

export default App
