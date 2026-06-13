import Chart from "./Chart";


export default function CardSpending() {

    return (
        <div className="bg-white rounded-lg py-6 px-4 md:py-8 md:px-10 flex flex-col gap-6">
            <h1 className="font-dm-sans text-2xl md:text-3xl text-left font-bold text-brown-950">Spending - Last 7 days</h1>
            
            <Chart />

            <div className="border-t-2 border-red-100 pt-6 md:pt-8 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <span className="text-brown-400 text-sm md:text-base">Total this month</span>
                    <span className="text-brown-950 text-3xl md:text-5xl font-bold font-dm-sans">$478.33</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-brown-950 font-bold text-sm md:text-base">+2.4%</span>
                    <span className="text-brown-400 text-sm md:text-base">from last month</span>
                </div>
            </div>
        </div>
    )

}
