import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Найди квартиру своей мечты</h1>
          <p>Более 1000 вариантов в новостройках и вторичном рынке</p>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.container}>
          <h2>Выберите тип жилья</h2>
          <div className={styles.categoriesGrid}>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>🏢</div>
              <h3>Новостройки</h3>
              <p>Квартиры в современных ЖК от застройщика</p>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>🏘️</div>
              <h3>Вторичный рынок</h3>
              <p>Проверенные варианты с историей</p>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>🏠</div>
              <h3>Апартаменты</h3>
              <p>Готовый бизнес или инвестиции</p>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>🏡</div>
              <h3>Элитное жилье</h3>
              <p>Премиум-класс с панорамным видом</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={styles.container}>
          <h2>Почему выбирают нас?</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantage}>
              <div className={styles.advantageIcon}>✓</div>
              <h3>Проверенные объекты</h3>
              <p>Юридическая проверка каждой квартиры</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantageIcon}>✓</div>
              <h3>Ипотека под 5%</h3>
              <p>Поможем с одобрением ипотеки</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantageIcon}>✓</div>
              <h3>Свои юристы</h3>
              <p>Полное сопровождение сделки</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantageIcon}>✓</div>
              <h3>Бесплатный осмотр</h3>
              <p>Покажем квартиру в удобное время</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.offers}>
        <div className={styles.container}>
          <h2>Специальные предложения</h2>
          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <div className={styles.offerBadge}>-20%</div>
              <h3>Квартиры у метро</h3>
              <p>Скидка на все объекты в радиусе 500м от метро</p>
              <button>Подробнее →</button>
            </div>
            <div className={styles.offerCard}>
              <div className={styles.offerBadge}>Ипотека</div>
              <h3>Семейная ипотека</h3>
              <p>Ставка от 4.5% при покупке квартиры</p>
              <button>Подробнее →</button>
            </div>
            <div className={styles.offerCard}>
              <div className={styles.offerBadge}>Trade-in</div>
              <h3>Обмен квартиры</h3>
              <p>Продайте старую квартиру при покупке новой</p>
              <button>Подробнее →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Квартир продано</div>
            </div>
            <div>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Новостроек</div>
            </div>
            <div>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Довольных клиентов</div>
            </div>
            <div>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.consultation}>
        <div className={styles.container}>
          <h2>Нужна консультация?</h2>
          <p>
            Оставьте заявку и наш эксперт поможет подобрать идеальный вариант
          </p>
          <button className={styles.consultationButton}>
            Получить консультацию
          </button>
        </div>
      </section>
    </div>
  );
}
