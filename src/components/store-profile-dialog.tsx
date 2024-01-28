import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-manager-restaurant.ts'
import { updateProfile } from '@/api/update-profile.ts'
import { Button } from '@/components/ui/button.tsx'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileDialog = z.infer<typeof storeProfileSchema>
export function StoreProfileDialog() {
  const queryClient = useQueryClient()
  const [isDialogOpen, setIsDialogOpen] = useState(true)
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileDialog>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function updateManagedRestaurentCache(data: StoreProfileDialog) {
    const cached = queryClient.getQueryData(['managed-restaurant'])
    if (cached) {
      queryClient.setQueryData(['managed-restaurant'], {
        ...cached,
        name: data.name,
        description: data.description,
      })
    }

    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
      const data = {
        name,
        description,
      }
      updateManagedRestaurentCache(data)
    },
    // onMutate({ name, description }) {
    //   const { cached } = updateManagedRestaurentCache({ name, description })
    //
    //   return {
    //     previousProfile: cached,
    //   }
    // },
    // onError(_, __, context) {
    //   if (context?.previousProfile) {
    //     updateManagedRestaurentCache(context.previousProfile)
    //   }
    // },
  })

  if (!isDialogOpen) return null
  async function handleUpdateProfile(data: StoreProfileDialog) {
    try {
      await updateProfileFn({ name: data.name, description: data.description })
      toast.success('Perfil atualizado com sucesso')
      setIsDialogOpen(false)
    } catch {
      toast.error('Falha ao atualizar perfil')
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações de seu estabelecimento visíseveis ao seu
          cliente.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter className="mt-3">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
