// pravq urok
// modificiram za da pribavq `collapse` efekta
// modificiram za tailwind
// useClickOutside for mobile




const [searchParams] = useSearchParams()
const updateStatus = searchParams.get('update') || ''

//in action 
import {
    redirect,
    useSearchParams,
} from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const age = formData.get('age')
    const pathname = new URL(request.url).searchParams.get('redirectTo') || 'pathToRedirect'

    try {
        const data = await updateUser({
            firstName,
            lastName,
            age,
            email: 'foo@foo.fo',
        })
        let response = redirect(pathname)
        response.body = true // It's silly, but it works
        return response

    } catch (err) {
        return { message: 'Unsuccessful update', error: err.message }
    }
}