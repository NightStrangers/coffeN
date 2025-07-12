import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleFavorite } from '../store/favoritesSlice';

export const useFavorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  const handleFavorite = (title: string) => {
    dispatch(toggleFavorite(title));
  };

  return { favorites, handleFavorite };
};