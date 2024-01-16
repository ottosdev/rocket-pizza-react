import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'

export function OrdersTableRow() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[64px]"></TableHead>
          <TableHead className="w-[140px]">Identificados</TableHead>
          <TableHead className="w-[180px]">Realizado</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="w-[140px]">Total de pedido</TableHead>
          <TableHead className="w-[164px]"></TableHead>
          <TableHead className="w-[132px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableCell>
          <Button variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">1</TableCell>
        <TableCell>Há 15 minutos</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell className="text-medium">Otto</TableCell>
        <TableCell className="text-medium">R$ 149,98</TableCell>
        <TableCell className="text-medium">
          <Button variant="ghost" size="xs">
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="outline" size="xs">
            <ArrowRight className="mr-2 h-3 w-3" />
            Arpovar
          </Button>
        </TableCell>
      </TableBody>
    </Table>
  )
}
