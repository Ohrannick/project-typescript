import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

localStorage.setItem ('username', '+Wade Warren+');
localStorage.setItem ('avatarUrl', '/img/avatar.png');
localStorage.setItem ('count', '5');

const getUserData = (value: unknown) => {
  if (value == null){
    return value + ''
  }
  return localStorage.getItem(`${value}`)
}

const getFavoritesAmount = (value: unknown) => {
  if (value == null){
    return parseInt(value + '0')
  }
  return parseInt(localStorage.getItem(`${value}`))
}

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(
    getUserData('username'),
    getUserData('avatarUrl'),
    getFavoritesAmount('count')
  );
  renderSearchFormBlock(new Date());
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял...',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
