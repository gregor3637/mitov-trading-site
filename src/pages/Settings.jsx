import React from 'react'
import {
    useLoaderData,
    useNavigation,
    Form,
    useActionData,
} from 'react-router-dom'
import { updateUser } from '../api'

export async function loader() {
    return true
}

export async function action({ request }) {
    const formData = await request.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const age = formData.get('age')

    try {
        const data = await updateUser({
            firstName,
            lastName,
            age,
            email: 'foo@foo.fo',
        })

        return { message: 'Successful update', status: 'ok' }
    } catch (err) {
        return { message: 'Unsuccessful update', error: err.message }
    }
}

const Settings = () => {
    const actionData = useActionData() || { actionMessage: '' }
    const loadedMessage = useLoaderData()
    const navigation = useNavigation()

    let buttonLabel = 'Update'
    if (navigation.state === 'submitting') {
        buttonLabel = 'Submitting...'
    }
    if (actionData.status === 'ok') {
        buttonLabel = 'Success'
    }

    return (
        <div className="bg-[--sidebar-color] px-10 pb-10 text-[--text-color]">
            <h1 className="py-10">
                <span className="text-5xl font-extrabold text-[--text-color]">
                    Ivestments
                </span>
                <div className="flex flex-col items-center justify-center  pt-10 font-semibold">
                    <h1 className="text-4xl">Update your account</h1>
                    {loadedMessage && <h3 className="red">{loadedMessage}</h3>}
                    {actionData.actionError && (
                        <h3 className="red">{actionData.actionError}</h3>
                    )}
                </div>
            </h1>

            <div className="h-screen">
                <Form
                    method="post"
                    className="flex flex-col items-center gap-10"
                    replace
                >
                    <div className="mx-auto flex max-w-max flex-col items-center justify-center gap-5  px-10 *:rounded-lg *:p-4">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            name="age"
                            type="number"
                            placeholder="Age"
                            className="remove-arrow appearance-none"
                        />
                    </div>
                    <button
                        className="max-w-max rounded-lg bg-[--button-bg] px-4 py-2 text-4xl font-semibold hover:bg-[--button-bg-hover] "
                        disabled={navigation.state === 'submitting'}
                    >
                        {buttonLabel}
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Settings
