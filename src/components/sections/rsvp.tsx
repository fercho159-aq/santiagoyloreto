"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { submitRsvp } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initialState = {
  message: "",
  errors: {},
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full text-lg" size="lg" disabled={pending}>
      {pending ? "Enviando..." : "Confirmar Asistencia"}
    </Button>
  )
}

export default function RsvpSection() {
  const [state, formAction] = useActionState(submitRsvp, initialState)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.errors && Object.keys(state.errors).length === 0) {
      toast({
        title: "¡Confirmación Recibida!",
        description: state.message,
      })
      formRef.current?.reset();
    } else if (state.message && state.errors && Object.keys(state.errors).length > 0) {
      toast({
        title: "Error en el formulario",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto bg-background shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl md:text-5xl text-primary">Confirma tu Asistencia</CardTitle>
            <CardDescription className="text-lg">
              Por favor, haznos saber si puedes acompañarnos antes del 15 de Septiembre, 2025.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-lg">Nombre</Label>
                  <Input id="firstName" name="firstName" placeholder="Tu nombre" required />
                  {state.errors?.firstName && <p className="text-sm text-destructive">{state.errors.firstName.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-lg">Apellido</Label>
                  <Input id="lastName" name="lastName" placeholder="Tu apellido" required />
                   {state.errors?.lastName && <p className="text-sm text-destructive">{state.errors.lastName.join(", ")}</p>}
                </div>
              </div>
              <div className="space-y-3">
                 <Label className="text-lg">¿Asistirás?</Label>
                <RadioGroup name="attending" defaultValue="yes" className="flex items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-base">Sí, con gusto asistiré</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-base">No podré acompañarlos</Label>
                  </div>
                </RadioGroup>
                {state.errors?.attending && <p className="text-sm text-destructive">{state.errors.attending.join(", ")}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
