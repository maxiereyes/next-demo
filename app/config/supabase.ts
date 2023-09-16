import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_API ?? ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_ID ?? ''
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
