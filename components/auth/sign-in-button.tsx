'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface SignInButtonProps extends ButtonProps {}

export function SignInButton(props: SignInButtonProps) {
  const router = useRouter()

  function onClick() {
    router.push('/auth/sign-in')
  }

  return <Button onClick={onClick} {...props} />
}
