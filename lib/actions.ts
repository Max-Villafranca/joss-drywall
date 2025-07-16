'use server'

import { db } from './db'
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'

type FormState = {
    message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

export async function createInquiry(prevState: FormState, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    if (!name || name.length < 2) {
        return { message: 'Name must be at least 2 characters.' }
    }
    if (!email || !validateEmail(email)) {
        return { message: 'Please enter a valid email address.' }
    }
    if (!message || message.length < 10) {
        return { message: 'Project details must be at least 10 characters.' }
    }

    try {
        const stmt = db.prepare('INSERT INTO inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)')
        stmt.run(name, email, phone || null, message)
    } catch (error) {
        console.error('Database Error:', error)
        return { message: 'Database error: Failed to save inquiry.' }
    }

    try {
        const emailHtml = `
      <div>
        <h1>New Website Inquiry</h1>
        <p>You have received a new message from the JOSS DRYWALL contact form.</p>
        <hr />
        <h2>Contact Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
        </ul>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `

        await resend.emails.send({
            from: 'inquiry@forms.max-villafranca.dev',
            to: 'jossdriwall@gmail.com',
            subject: `New Inquiry from ${name}`,
            html: emailHtml,
        })
    } catch (error) {
        console.error('Email Error:', error)
    }

    revalidatePath('/contact')
    return { message: 'Thank you for your inquiry! We will be in touch soon.' }
}
