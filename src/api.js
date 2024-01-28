export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
//   if (true) {
    throw {
      message: "failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.vans;
}
