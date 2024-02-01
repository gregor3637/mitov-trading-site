export async function updateUser(creds) {
    const res = await fetch('/api/update-user', {
        method: 'post',
        body: JSON.stringify(creds),
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        }
    }

    return data
}

export async function getInvestments() {
    const res = await fetch('/api/investments')
    if (!res.ok) {
        throw {
            message: 'failed to fetch Investments',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const data = await res.json()
    return data.investments
}

export async function setNewInvestment(creds) {
    const res = await fetch('/api/new-investment', {
        method: 'post',
        body: JSON.stringify(creds),
    })

    if (!res.ok) {
        throw {
            message: 'failed to create  Investment',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const data = await res.json()
    return data
}
