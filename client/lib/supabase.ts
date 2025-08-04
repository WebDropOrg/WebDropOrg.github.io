import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseKey = 'your-anon-key-here'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types for contact form
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  website?: string
  message: string
  created_at?: string
}

// Submit contact form to Supabase
export async function submitContactForm(formData: Omit<ContactSubmission, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error }
  }
}
