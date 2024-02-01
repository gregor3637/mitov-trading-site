export async function updateUser(creds) {
    console.log("🚀 ~ updateUser ~ creds: 1 ", creds)

    const res = await fetch('/api/update-user', {
        method: 'post',
        body: JSON.stringify(creds),
    })

    console.log("🚀 ~ updateUser ~ creds: 2 ", res)
    
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
  const res = await fetch("/api/investments");
  if (!res.ok) {
    throw {
      message: "failed to fetch Investments",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.investments;
}

