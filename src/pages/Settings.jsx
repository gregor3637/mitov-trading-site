import React from 'react'
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData,
} from 'react-router-dom'
import { getInvestments,  updateUser } from '../api'

export async function loader({ request }) {
    const investments = await getInvestments()
    console.log("🚀5%%🚀  ~ loader ~ investments:", investments)
    return true;
}
  

export async function action({ request }) {
    const formData = await request.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const age = formData.get('age')
    const pathname =
        new URL(request.url).searchParams.get('redirectTo') || '/'

    try {
        // // code is connected with `utils.requireAuth`
        // const data = await loginUser({ email, password });
        // localStorage.setItem("loggedin", true);
        // return redirect(pathname);

        const data = await updateUser({ firstName, lastName, age, email: "foo@foo.fo" })
        console.log('🚀 ~ action ~ data:', data)
        console.log('🚀 ~ action ~ pathname:', pathname)
        let response = redirect(pathname)
        response.body = true // It's silly, but it works
        return response
    } catch (err) {
        console.log("🚀 ~ action ~ err.message:")
        return err.message
    }
}

const Settings = () => {
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1>Update your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form method="post" className="settings-form" replace>
                <input name="firstName" type="text" placeholder="First Name" />
                <input name="lastName" type="text" placeholder="Last Name" />
                <input name="age" type="number" placeholder="Age" />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting'
                        ? 'Submitting...'
                        : 'Update'}
                </button>
            </Form>
        </div>
    )
}

export default Settings
