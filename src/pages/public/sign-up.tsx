import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function Signup() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()
  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos um link de auth para seu email.', {
      action: {
        label: 'Login',
        onClick: () => {
          navigate('/sign-in')
        },
      },
    })
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild>
          <Link to="/sign-in" className="absolute right-8 top-8">
            Fazer Login
          </Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro a comece suas vendas.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-4">
              <Label htmlFor="resturanteName">Nome do estabelecimento</Label>
              <Input
                id="resturanteName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-4">
              <Label htmlFor="phone">Seu E-mail</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos Termos de serviço e
              politica de privacidade.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

/**/
