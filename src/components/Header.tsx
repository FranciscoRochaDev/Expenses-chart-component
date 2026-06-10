
interface HeaderProps {
    infoBalance: string,
    balance: string,
    logo: string,
}

export default function Header({ infoBalance, balance, logo }: HeaderProps) {

    return (
        <header className="w-full max-w-2xl rounded-lg bg-red-500 p-4 flex flex-row items-center
            md:py-6 md:px-8 md:rounded-2xl">
            <div className="flex flex-col">
                <p className="font-dm-sans font-normal text-sm text-white text-left">{infoBalance}</p>
                <p className="font-dm-sans font-bold text-2xl text-white text-left">{balance}</p>
            </div>
            <img
                src={`/images/${logo}`}
                alt={logo}
                className="ml-auto"
            />
        </header>
    )

}
