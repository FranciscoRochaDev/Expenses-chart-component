
export type Days = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface ChartExpense {
    day: Days,
    amount: number,
}

