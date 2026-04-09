# 🏠 Booking App

Приложение для бронирования квартир на просмотр.

## 🚀 Технологии

- **Backend:** Spring Boot 3.2.5, Java 21, PostgreSQL, Hibernate
- **Frontend:** React 18, Redux Toolkit, TypeScript, Vite
- **Контейнеризация:** Docker, Docker Compose

## 📦 Установка и запуск

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/Danil-1992/booking-app.git
cd booking-app

# 2. Соберите JAR, после чего запустите Docker
mvn clean package -DskipTests
docker compose up -d --build

# 3. Добавьте тестовые квартиры (обязательно!)
docker exec -it booking_postgres psql -U postgres -d booking_db -c "
INSERT INTO apartments (number, house_address) VALUES
('45', 'ул. Ленина, д. 10'),
('12', 'ул. Пушкина, д. 5'),
('78', 'пр. Мира, д. 23');
"

# 4. Откройте приложение
# Frontend: http://localhost
# Backend API: http://localhost:8080

# 5. Возможные проблемы
# Порт 8080 занят — измени порт в docker-compose.yml на 8081:8080
# Порт 80 занят — измени порт в docker-compose.yml на 8081:80
# Пустые квартиры — выполните шаг 3
