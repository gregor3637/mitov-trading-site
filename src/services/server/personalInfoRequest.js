export default async function (request) {
    const formData = await request.formData()
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const age = formData.get('age')

    return { firstName, lastName, age }
}
