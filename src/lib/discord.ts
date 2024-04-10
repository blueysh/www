export const USER_ID = "594576995090956313";
export const LANYARD_URL = `https://api.lanyard.rest/v1/users/${USER_ID}`;

export async function getLanyard() {
  return await (
    await fetch(LANYARD_URL, {
      method: "GET",
    })
  ).json();
}
