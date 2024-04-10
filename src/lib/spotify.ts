export const SPOTIFY_CLIENT_ID: string = "18d8c49fad3c416d8ef4b92ec2593b28";
export const SPOTIFY_CLIENT_SECRET: string = "95ed0b0b445443e6a89dd589d8ad1f4a";
export const BASE_URL: string = "https://api.spotify.com/v1";

export const REDIRECT_URI: string = "/callback";

export const SPOTIFY_URL_REFRESH_TOKEN: string =
  "https://accounts.spotify.com/api/token";
export const SPOTIFY_URL_NOW_PLAYING: string = `${BASE_URL}/me/player/currently-playing?additional_types=track,episode`;

export const SPOTIFY_URL_GENERATE_TOKEN: string =
  "https://accounts.spotify.com/api/token";
export const SPOTIFY_URL_GET_USER: string = `${BASE_URL}/me`;

function getAuthorization() {
  const credentials = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;
  return Buffer.from(credentials).toString("base64");
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

async function generateToken(authCode: string): Promise<TokenResponse> {
  const data = {
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    code: authCode,
  };

  const headers = {
    Authorization: `Basic ${getAuthorization()}`,
  };

  const res = await fetch(SPOTIFY_URL_GENERATE_TOKEN, {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(data),
  });

  return await res.json();
}

interface RefreshTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

async function refreshToken(
  refreshToken: string,
): Promise<RefreshTokenResponse> {
  const data = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  const headers = {
    Authorization: `Basic ${getAuthorization()}`,
  };

  const res = await fetch(SPOTIFY_URL_REFRESH_TOKEN, {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(data),
  });

  return await res.json();
}

interface NowPlayingResponse {
  item: {
    name: string;
    artists: { name: string }[];
    album: { name: string };
  };
  is_playing: boolean;
}

async function getNowPlaying(
  accessToken: string,
): Promise<NowPlayingResponse | {}> {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(SPOTIFY_URL_NOW_PLAYING, {
    method: "GET",
    headers: headers,
  });

  if (response.status === 204) {
    return {};
  }

  return await response.json();
}
