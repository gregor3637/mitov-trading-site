export async function getVans() {
  const res = await fetch("/api/vans");
  console.log("🚀 ~ getVans ~ res:", res)
  if (!res.ok) {
    throw {
      message: "failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  console.log("🚀 ~ getVan ~ data:", data);
  return data.vans;
}

export async function getVan(id) {
  const res = await fetch("/api/vans");
  const data = await res.json();
  const van = data.vans.find((x) => x.id === id.toString());

  if (!van) {
    throw {
      message: "No such van id",
      statusText: res.statusText,
      status: res.status,
    };
  }

  return van;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

export async function getHostVans() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  const van = data.vans.filter((x) => x.hostId === "123");

  if (!van) {
    throw {
      message: "No such hostvans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  return van;
}


export async function updateUser(creds) {
  console.log("🚀 ~ updateUser ~ creds: 1 ", creds);

  const res = await fetch("/api/update-user", {
    method: "post",
    body: JSON.stringify(creds),
  });

  console.log("🚀 ~ updateUser ~ creds: 2 ", res);

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
