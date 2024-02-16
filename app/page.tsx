import { SignInButton } from '@/components/auth/sign-in-button'

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">🔒Auth</h1>
        <p>Um serviço simples de autenticação</p>
        <SignInButton>Entrar</SignInButton>
      </div>
    </main>
  )
}
