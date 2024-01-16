import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'

const signInForm = z.object({
  email: z.string().email(),
})
type SignInForm = z.infer<typeof signInForm>

export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()
  async function handleSignin(data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos um link de auth para seu email.', {
      action: {
        label: 'Reenviar',
        onClick: () => {
          handleSignin(data)
        },
      },
    })
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild>
          <Link to="/sign-up" className="absolute right-8 top-8">
            Novo Estabelecimento
          </Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhar suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignin)}>
            <div className="space-y-4">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
/**/
