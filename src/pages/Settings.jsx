import React from 'react'
import {
    useLoaderData,
    useNavigation,
    Form,
    useActionData,
} from 'react-router-dom'
import { getUser, updateUser } from '../api'
import PageButton from '../components/PageButton'

export async function loader() {
    const data = await getUser({ email: 'foo@foo.fo', id: '444' })
    return data
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
    const loadedData = useLoaderData()
    const navigation = useNavigation()

    let buttonLabel = 'Update'
    if (navigation.state === 'submitting') {
        buttonLabel = 'Submitting...'
    }
    if (actionData.status === 'ok') {
        buttonLabel = 'Success'
    }

    // const isDisabled =

    return (
        <div className="bg-[--sidebar-color] px-10 pb-10 text-[--text-color]">
            <h1 className="flex flex-col py-10 lg:block">
                <span className="text-center text-5xl font-extrabold text-[--text-color] xl:text-start ">
                    Settings
                </span>
                {loadedData.user && (
                    <div className="flex flex-col items-center justify-center text-xl pt-4">
                        <div className='w-max '>
                            <div><span className='pr-4'>First name:</span>{loadedData.user.firstName}</div>
                            <div><span className='pr-4'>Last name:</span>{loadedData.user.lastName}</div>
                            <div className='flex justify-between'><span>Age:</span>{loadedData.user.age}</div>
                        </div>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center  pt-10 font-semibold">
                    <h1 className="text-center text-4xl">
                        Update your account
                    </h1>
                </div>
            </h1>

            <div className="sm:h-screen">
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
                    <PageButton
                        label={buttonLabel}
                        disabled={navigation.state === 'submitting'}
                    />
                </Form>
            </div>
        </div>
    )
}

export default Settings
