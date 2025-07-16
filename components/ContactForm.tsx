'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { createInquiry } from '@/lib/actions'
import styles from './ContactForm.module.css'

const initialState = {
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type='submit' className='button-primary' disabled={pending}>
            {pending ? 'Submitting...' : 'Submit Inquiry'}
        </button>
    )
}

export function ContactForm() {
    const [state, formAction] = useActionState(createInquiry, initialState)

    return (
        <form action={formAction} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' name='phone' />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor='message'>Project Details</label>
                <textarea id='message' name='message' rows={5} required></textarea>
            </div>
            <SubmitButton />
            {state?.message && <p className={styles.formMessage}>{state.message}</p>}
        </form>
    )
}
