'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../features/themeSlice';

export default function ThemeToggle() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    dispatch(setTheme(savedTheme));
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, [dispatch]);

  return null;
}
