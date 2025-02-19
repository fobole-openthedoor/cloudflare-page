export function getCurrentDomain() {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // 匹配最后两段，如 example.com
    const matches = hostname.match(/[^.]+\.[^.]+$/);
    return matches ? matches[0] : hostname;
  }
  return '';
} 