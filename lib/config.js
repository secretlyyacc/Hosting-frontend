export const MY_API = typeof window !== 'undefined'
  ? (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:3001/api'
      : 'http://147.182.217.178:3001/api')
  : 'http://147.182.217.178:3001/api'; // fallback for SSR
