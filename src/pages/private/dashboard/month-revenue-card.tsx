import { DollarSign } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total{' '}
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,00</span>
        <p className="text-xs text-muted-foreground">
          <span className="dark: text-emerald-400 text-emerald-500">+2%</span>
          em relação ao mes passado
        </p>
      </CardContent>
    </Card>
  )
}
