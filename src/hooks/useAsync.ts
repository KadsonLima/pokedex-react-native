import { useState, useEffect } from 'react';

type AsyncHandler<T> = (...args: any[]) => Promise<T>;

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: any;
  act: (...args: any[]) => Promise<T>;
}

export default function useAsync<T>(handler: AsyncHandler<T>, immediate = true): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<any>(null);

  const act = async (...args: any[]): Promise<T> => {
    setLoading(true);
    setError(null);

    try {
      const result = await handler(...args);
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
