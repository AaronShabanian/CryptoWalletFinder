import 'tailwindcss/tailwind.css'
import { supabase } from '../utils/supabaseClient'
import { Auth } from '@supabase/ui'

function MyApp({ Component, pageProps }) {
  return (
	  <Auth.UserContextProvider supabaseClient={supabase}>
	    <Component {...pageProps} />
	  </Auth.UserContextProvider>
  )
}

export default MyApp