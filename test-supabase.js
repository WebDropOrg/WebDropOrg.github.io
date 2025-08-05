import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://gujpaxqnzsnsspbdfnox.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1anBheHFuenNuc3NwYmRmbm94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDY5MzcsImV4cCI6MjA2OTk4MjkzN30.sAxjCK4BZNm4P6DdmqKsAnZFgx1O2ShfzPH8pSenGFM'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('Testing Supabase connection...')
  console.log('URL:', supabaseUrl)
  console.log('Key (first 20 chars):', supabaseKey.substring(0, 20) + '...')

  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true })

    if (error) {
      console.error('Connection test failed:', error)
      return false
    }

    console.log('Connection successful! Table exists.')
    return true
  } catch (error) {
    console.error('Connection error:', error)
    return false
  }
}

async function testInsert() {
  console.log('Testing insert...')
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    website: 'https://test.com',
    message: 'This is a test message'
  }

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select()

    if (error) {
      console.error('Insert test failed:', error)
      return false
    }

    console.log('Insert successful:', data)
    return true
  } catch (error) {
    console.error('Insert error:', error)
    return false
  }
}

// Run tests
testConnection().then(success => {
  if (success) {
    testInsert()
  }
})
