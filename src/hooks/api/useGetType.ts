import useAsync from '../useAsync';

import * as pokedexApi from '../../services/getType';

export default function useGetType() {
  const {
    data: type,
    loading: typeLoading,
    error: typeError,
    act: getType,
  } = useAsync(pokedexApi.getType, false);

  return {
    type,
    typeLoading,
    typeError,
    getType,
  };
}