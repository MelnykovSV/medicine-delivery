export default function useLocalStorage() {
  const get: <T>(key: string) => T = (key) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  };
  const set: <T>(key: string, value: T) => void = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove: (key: string) => void = (key) => {
    localStorage.removeItem(key);
  };

  return [get, set, remove] as [
    <T>(key: string) => T,
    <T>(key: string, value: T) => void,
    (key: string) => void
  ];
}
