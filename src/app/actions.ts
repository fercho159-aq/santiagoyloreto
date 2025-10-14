"use server"

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n-config'

export async function submitRsvp(prevState: any, formData: FormData) {
  const lang = formData.get('lang') as Locale || 'es';
  const dict = await getDictionary(lang);
  const rsvpDict = dict.rsvp;
  const actionDict = dict.actions;

  const schema = z.object({
    firstName: z.string({ invalid_type_error: "Invalid first name." }).min(1, actionDict.firstNameRequired),
    lastName: z.string({ invalid_type_error: "Invalid last name." }).min(1, actionDict.lastNameRequired),
    attending: z.enum(['yes', 'no'], { errorMap: () => ({ message: actionDict.attendingRequired }) }),
  })

  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    attending: formData.get('attending'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: rsvpDict.validationError,
    }
  }

  console.log('RSVP Received:', validatedFields.data)

  revalidatePath(`/${lang}/`);
  
  const successMessage = validatedFields.data.attending === 'yes'
    ? rsvpDict.successMessageAttending.replace('{firstName}', validatedFields.data.firstName)
    : rsvpDict.successMessageNotAttending.replace('{firstName}', validatedFields.data.firstName);

  return { message: successMessage, errors: {} }
}
