export async function getUser(creds) {
    const res = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify(creds),
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            errorMessage: data.message,
            statusText: res.statusText,
            status: res.status,
        }
    }

    return data
}

export async function updateUser(creds) {
    const res = await fetch('/api/update-user', {
        method: 'patch',
        body: JSON.stringify(creds),
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            errorMessage: data.message,
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
            message: 'Failed to fetch Investments',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const data = await res.json()
    return data.investments
}

export async function addInvestment(creds) {
    const res = await fetch('/api/new-investment', {
        method: 'post',
        body: JSON.stringify(creds),
    })

    if (!res.ok) {
        throw {
            message: 'Failed to create Investment',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const data = await res.json()
    return data
}

export async function closeInvestment(creds) {
    const res = await fetch('/api/close-investments', {
        method: 'patch',
        body: JSON.stringify(creds),
    })

    if (!res.ok) {
        throw {
            message: 'Failed to close Investment',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const data = await res.json()
    return data
}
