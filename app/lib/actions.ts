'use server'

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: "Please select a customer."
    }),
    amount: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater then $0.'}),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.'
    }),
    date: z.string()
})

const CreateInvoice = FormSchema.omit({ id: true, date: true })
const UpdateInvoice = FormSchema.omit({ id: true, date: true })

export type State = {
    errors?: {
        customerId?: string[],
        amount?: string[],
        status?: string[],
    }
    message?: string | null
}

export async function createInvoice(prevState: State, formData: FormData) {
    // console.log('Object.fromEntries: ', Object.fromEntries(formData.entries())) // Uma boa forma de obter o objeto formData sem precisar percorre-lo ou pegar campo por campo
    
    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    console.log(validatedFields)

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.'
        }
    }

    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data
    const amountInCents = amount * 100
    const date = new Date().toISOString().split('T')[0]

    // console.log('customerId: ', customerId)
    // console.log('amount: ', amount)
    // console.log('amountInCents: ', amountInCents)
    // console.log('status: ', status)
    // console.log('date: ', date)

    // Insert data into the database
    try {
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to create Invoice.'
        }
    }

    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')
}

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
    const ValidateFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    if (!ValidateFields.success) {
        return {
            errors: ValidateFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Update Invoice."
        }
    }

    const { customerId, amount, status } = ValidateFields.data
    const amountInCents = amount * 100

    try {
        await sql`
            UPDATE invoices 
            SET customer_id =  ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `
    } catch (error) {
        return {
            message: 'Database Error: Failed to update Invoice.'
        }
    }

    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')
}

export async function deleteInvoice(id: string) {
    throw new Error('Filed to delete Invoice')
    
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`
        revalidatePath('/dashboard/invoices')
        return { message: 'Deleted Invoice.' }
    } catch (err) {
        return { message: 'Database Error: Failed to delete Invoice.' }
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn('credentials', formData)
    } catch (error) {
        if(error instanceof AuthError) {
            switch(error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials'
                default:
                    return 'Something went wrong.'
            }
        }
        throw error
    }
}