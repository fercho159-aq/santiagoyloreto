"use server"

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const schema = z.object({
  firstName: z.string({ invalid_type_error: "Nombre inválido." }).min(1, 'El nombre es requerido.'),
  lastName: z.string({ invalid_type_error: "Apellido inválido." }).min(1, 'El apellido es requerido.'),
  attending: z.enum(['yes', 'no'], { errorMap: () => ({ message: 'Por favor selecciona una opción.' }) }),
})

type State = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        attending?: string[];
    };
    message?: string;
}

export async function submitRsvp(prevState: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    attending: formData.get('attending'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrige los errores e intenta de nuevo.',
    }
  }

  // In a real application, you would save this data to a database.
  // For example: await db.rsvps.create({ data: validatedFields.data });
  console.log('RSVP Received:', validatedFields.data)

  revalidatePath('/');
  
  const successMessage = validatedFields.data.attending === 'yes'
    ? `¡Gracias por confirmar, ${validatedFields.data.firstName}! No podemos esperar a celebrar contigo.`
    : `Lamentamos que no puedas acompañarnos, ${validatedFields.data.firstName}. Te extrañaremos.`;

  return { message: successMessage, errors: {} }
}
