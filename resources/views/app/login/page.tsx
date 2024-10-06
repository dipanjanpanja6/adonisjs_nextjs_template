"use client"
import { useLoginMutation } from "@/lib/store/services/user"
import { LoadingButton } from "@mui/lab"
import { Container, TextField } from "@mui/material"
import { useState } from "react"

export default function page() {
  const [state, setState] = useState({})
  const [login, { isLoading }] = useLoginMutation()
  const handleLogin = (e: any) => {
    e.preventDefault()
  }
  return (
    <Container>
      <TextField />
      <TextField />
      <LoadingButton loading={isLoading}>Login</LoadingButton>
    </Container>
  )
}
