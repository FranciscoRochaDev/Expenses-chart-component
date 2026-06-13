import data from '../data/data.json'
import type { ChartExpense } from '../types';

export default function Chart() {
    const expenses: ChartExpense[] = data as ChartExpense[];
    const maxAmount = Math.max(...expenses.map(e => e.amount));

    return (
        <div className="flex items-end justify-between h-44 md:h-52 mt-12 mb-6">
            {expenses.map((e) => (
                <div key={e.day} className="flex flex-col items-center w-[12%] h-full">
                    
                    {/* Contenedor de la barra para manejar el porcentaje de altura */}
                    <div className="relative w-full flex-1 flex flex-col justify-end group">
                        {/* Tooltip con el monto */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brown-950 text-white text-[10px] md:text-xs p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-bold z-10 whitespace-nowrap">
                            ${e.amount}
                        </div>

                        {/* Barra de la gráfica */}
                        <div
                            className={`w-full rounded-[4px] cursor-pointer transition-colors duration-300
                                ${e.amount === maxAmount ? 'bg-blue-300 hover:bg-blue-200' : 'bg-red-500 hover:bg-red-300'}
                            `}
                            style={{ height: `${(e.amount / maxAmount) * 100}%` }}
                        ></div>
                    </div>

                    {/* Etiqueta del día */}
                    <span className="text-brown-400 text-xs md:text-sm font-dm-sans mt-3 lowercase">{e.day}</span>
                </div>
            ))}
        </div>
    )
}
