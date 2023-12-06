// index.js
import { fetchBreeds } from './cat-api.js';


document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');

  // Отримання та заповнення порід котів при завантаженні сторінки
  fetchBreeds()
    .then(breeds => {
      // Сховати лоадер і показати варіанти порід
      loader.style.display = 'none';
      breedSelect.style.display = 'block';

      // Заповнення варіантів порід
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.appendChild(option);
      });

      // Слухати зміни вибраної породи
      breedSelect.addEventListener('change', () => {
        const selectedBreedId = breedSelect.value;
        // Викликати функцію для отримання та відображення інформації про кота на основі вибраної породи
        fetchCatInfo(selectedBreedId);
      });
    })
    .catch(error => {
      // Відобразити повідомлення про помилку
      loader.style.display = 'none';
      error.style.display = 'block';
    });
});

// Функція для отримання та відображення інформації про кота
function fetchCatInfo(breedId) {
  const catInfo = document.querySelector('.cat-info');
  
  // Реалізувати логіку для отримання інформації про кота за обраним breedId
  // Ви можете використовувати функцію fetchBreeds з cat-api.js як приклад

  // Приклад тексту-заповнювача
  const infoText = `Відображення інформації для породи з ID ${breedId}`;
  catInfo.textContent = infoText;
}
