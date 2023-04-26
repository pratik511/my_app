// export const BASE_URL = "https://63ef204b271439b7fe6898d5.mockapi.io/"

const LOCAL_API = "http://localhost:8080/api/"
const LIVE_API = "https://2dcd-2405-201-200d-1b7d-dc5e-4e08-643f-21ac.ngrok-free.app/api/"

const hostname = window.location.hostname;

export const BASE_URL = hostname === "localhost" ? LIVE_API : LIVE_API
