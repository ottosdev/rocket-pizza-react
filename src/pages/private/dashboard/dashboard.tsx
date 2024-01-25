import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from '@/pages/private/dashboard/day-orders-amount.tsx'
import { MonthCanceledOrdersAmountCard } from '@/pages/private/dashboard/month-canceled-orders-amount.tsx'
import { MonthOrdersAmountCard } from '@/pages/private/dashboard/month-orders-amount.tsx'
import { MonthRevenueCard } from '@/pages/private/dashboard/month-revenue-card.tsx'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-normal">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
