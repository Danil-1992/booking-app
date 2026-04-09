# 🏠 Booking App
# Приложение для бронирования квартир на просмотр
# Пользователь выбирает квартиру, указывает имя и телефон, бронирует на 1 час.
# Можно отменить бронирование или дождаться автоматического истечения времени.

# ## Технологии
# - **Backend:** Spring Boot 3.2.5, Java 21, PostgreSQL, Hibernate
# - **Frontend:** React 18, Redux Toolkit, TypeScript, Vite
# - **Контейнеризация:** Docker, Docker Compose

# ## Требования
# - Docker Desktop (последняя версия)
# - 4 GB RAM (рекомендуется)
# - Свободные порты: 80, 8080, 5432

# ## Установка и запуск

# ### 1. Клонируй репозиторий
git clone https://github.com/ТВОЙ_АККАУНТ/booking-app.git
cd booking-app

# ### 2. Запусти Docker Compose
docker compose up -d --build

# ### 3. Запусти тестовые квартиры (обязательно)
docker exec -it booking_postgres psql -U postgres -d booking_db -c "
INSERT INTO apartments (number, house_address) VALUES
('45', 'ул. Ленина, д. 10'),
('12', 'ул. Пушкина, д. 5'),
('78', 'пр. Мира, д. 23');
"

# ### 4. Запусти приложение
# Frontend: http://localhost
# Backend API: http://localhost:8080

# ### Возможные проблемы
# - Порт 8080 уже занят — останови локальный Spring Boot или измени порт в docker-compose.yml на 8081:8080.
# - Порт 80 уже занят — измени порт в docker-compose.yml на 8081:80.
# - Пустые квартиры — выполни шаг 3 (добавление тестовых квартир).
