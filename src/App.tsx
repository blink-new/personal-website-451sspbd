
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const clerkSignInUrl = import.meta.env.VITE_CLERK_SIGN_IN_URL
const clerkSignUpUrl = import.meta.env.VITE_CLERK_SIGN_UP_URL
const clerkAfterSignInUrl = import.meta.env.VITE_CLERK_AFTER_SIGN_IN_URL
const clerkAfterSignUpUrl = import.meta.env.VITE_CLERK_AFTER_SIGN_UP_URL

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key")
}

function App() {
  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      navigate={(to) => window.location.href = to}
      signInUrl={clerkSignInUrl}
      signUpUrl={clerkSignUpUrl}
      afterSignInUrl={clerkAfterSignInUrl}
      afterSignUpUrl={clerkAfterSignUpUrl}
    >
      <BrowserRouter>
        {/* Your app content */}
      </BrowserRouter>
    </ClerkProvider>
  )
}

export default App