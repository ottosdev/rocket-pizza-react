import { Helmet } from 'react-helmet-async'

import { OrderTableFilters } from '@/pages/private/orders/order-table-filters.tsx'
import { OrdersTableRow } from '@/pages/private/orders/orders-table-row.tsx'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <OrdersTableRow />
        </div>
      </div>
    </>
  )
}
