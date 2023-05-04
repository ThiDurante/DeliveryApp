'use client'
import { useRouter } from 'next/navigation'

export default function Logout () {
  const { push } = useRouter()
  localStorage.removeItem('userdata')
  push('/login')
}