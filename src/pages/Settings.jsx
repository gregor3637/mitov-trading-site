import React from 'react'
import { useLoaderData, useNavigation, useActionData } from 'react-router-dom'
import { getUser, updateUser } from '../services/server/api'
import PersonalForm from '../components/ui/UpdateInfoForm/UpdateInfoForm'
import personalInfoRequest from '../services/server/personalInfoRequest'

export async function loader() {
    const data = await getUser({ email: 'foo@foo.fo', id: '444' })
    return data
}

export async function action({ request }) {
    const { firstName, lastName, age } = personalInfoRequest(request)

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

    return (
        <div className="bg-[--sidebar-color] px-10 pb-10 text-[--text-color]">
            <h1 className="flex flex-col py-10 lg:block">
                <span className="text-center text-5xl font-extrabold text-[--text-color] xl:text-start ">
                    Settings
                </span>
                <div className="flex flex-col items-center justify-center  pt-10 font-semibold">
                    <h1 className="text-center text-4xl">
                        Update your account
                    </h1>
                </div>
            </h1>
            <PersonalForm
                userData={loadedData.user}
                submitButtonLabel={buttonLabel}
                isSubmitting={navigation.state === 'submitting'}
            />
        </div>
    )
}

export default Settings
