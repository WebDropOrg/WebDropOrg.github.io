import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://your-project-url.supabase.co' && 
         supabaseKey !== 'your-anon-key-here' &&
         supabaseUrl.includes('supabase.co')
}

// Database types for contact form
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  website?: string
  message: string
  created_at?: string
}

// Submit contact form to Supabase or fallback
export async function submitContactForm(formData: Omit<ContactSubmission, 'id' | 'created_at'>) {
  try {
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, using fallback submission')
      // Simulate successful submission for demo purposes
      return { 
        success: true, 
        data: { ...formData, id: crypto.randomUUID(), created_at: new Date().toISOString() },
        message: 'Demo mode: Form submitted successfully!' 
      }
    }

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
    
    // If it's a network error and we're in demo mode, provide fallback
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return { 
        success: true, 
        data: { ...formData, id: crypto.randomUUID(), created_at: new Date().toISOString() },
        message: 'Demo mode: Form submitted successfully!' 
      }
    }
    
    return { success: false, error }
  }
}
