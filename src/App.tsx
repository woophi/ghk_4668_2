import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import novatekLogo from './assets/novatek.png';
import { BuyScreen } from './buy-screen/BuyScreen';
import { PRICES, REDIRECT_LINK } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

const flowCompleted = LS.getItem(LSKeys.ShowThx, false);

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(false);
  const [showBuyScreen, setShowBuyScreen] = useState(false);
  const [lots, setLots] = useState(1);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    console.debug('submit');
    setLoading(true);

    sendDataToGA({
      id: LS.getItem(LSKeys.UserId, 0) as number,
      lot: lots,
      sum: lots * PRICES.ticker * (1 + PRICES.comission),
    }).then(() => {
      // LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };
  const goNext = () => {
    window.gtag('event', 'next_4668_var1');
    if (flowCompleted) {
      window.location.replace(REDIRECT_LINK);
    } else {
      setShowBuyScreen(true);
    }
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  if (showBuyScreen) {
    return <BuyScreen setLots={setLots} lots={lots} loading={loading} submit={submit} />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.imgRow}>
          <img src={novatekLogo} alt="Novatek" width={48} height={48} />
          <div>
            <Typography.Text view="primary-medium" defaultMargins={false} tag="p">
              Новатэк
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary" defaultMargins={false} tag="p">
              Идея от 17 марта 2025
            </Typography.Text>
          </div>
        </div>
        <Typography.Title style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="medium">
          Что мы прогнозируем
        </Typography.Title>

        <div className={appSt.difTextRow}>
          <Typography.Title tag="h2" view="xlarge" font="system" weight="medium">
            +22,6%
          </Typography.Title>
          <Typography.Text style={{ marginBottom: '4px' }} view="primary-small">
            Через 9 месяцев
          </Typography.Text>
        </div>

        <div className={appSt.spbs}>
          <div className={appSt.spbRow}>
            <Typography.Text view="primary-medium" weight="medium">
              Цена сейчас
            </Typography.Text>

            <Typography.Text color="positive" view="primary-medium" weight="medium">
              {PRICES.ticker.toLocaleString('ru')} ₽
            </Typography.Text>
          </div>
          <div className={appSt.spbRow}>
            <Typography.Text view="primary-small" color="secondary">
              Купить не выше
            </Typography.Text>

            <Typography.Text view="primary-small">{PRICES.buy.toLocaleString('ru')} ₽</Typography.Text>
          </div>
          <div className={appSt.spbRow}>
            <Typography.Text view="primary-small" color="secondary">
              Продать не ниже
            </Typography.Text>

            <Typography.Text view="primary-small">{PRICES.sell.toLocaleString('ru')} ₽</Typography.Text>
          </div>
        </div>

        <Typography.Title style={{ marginTop: '.5rem' }} tag="h3" view="small" font="system" weight="medium">
          Почему мы так решили
        </Typography.Title>
        <Typography.Text view="primary-medium">
          НОВАТЭК реализует масштабные проекты в сфере нефтегаза и планирует кратно увеличить производство. Котировки могут
          вырасти почти на треть.
        </Typography.Text>

        <Typography.Title style={{ marginTop: '.5rem' }} tag="h3" view="small" font="system" weight="medium">
          Почему акции могут вырасти
        </Typography.Title>
        <Typography.Title tag="h4" view="xsmall" font="system" weight="medium">
          Сильное финансовое положение
        </Typography.Title>

        <Typography.Text view="primary-medium">
          НОВАТЭК входит в тройку крупнейших в мире компаний по объему доказанных запасов природного газа. Компания активно
          инвестирует в новые месторождения, что может привести к увеличению объемов производства и экспорта.
        </Typography.Text>
        <Typography.Text view="primary-medium">
          Реализация долгосрочных проектов. Акции компании находились под давлением в 2024 году из-за невозможности запуска
          на полную мощность нового проекта «Арктик СПГ 2». При этом компания благоприятна для долгосрочных инвестиций
          благодаря формированию собственного флота газовозов для продажи СПГ с текущих месторождений и запуску продаж по
          северному морскому пути. Запуск «Арктик СПГ 2» может стать мощным драйвером роста котировок компании. При
          налаживании отгрузок с «Арктик СПГ 2» НОВАТЭК может перейти к реализации новых крупных проектов «Мурманский СПГ» и
          «Обский СПГ»
        </Typography.Text>
        <Typography.Text view="primary-medium">
          Недооцененность компании на фондовом рынке. У НОВАТЭКаесть потенциал для значительного увеличения добычи и продажи
          газа в 2025 году, что положительно скажется на финансовых показателях. Акции торгуются с дисконтом около 30% к
          историческим уровням по показателям P/E и EV/EBITDA. НОВАТЭК – редкий пример компании роста в нефтегазовой отрасли.
        </Typography.Text>
        <Typography.Title style={{ marginTop: '.5rem' }} tag="h4" view="xsmall" font="system" weight="medium">
          Не забываем о рисках.
        </Typography.Title>

        <List tag="ul" marker="•">
          <List.Item>
            <Typography.Text view="primary-medium">
              Санкционное давление США на «Арктик СПГ 2» и перспективные проекты.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Ужесточение денежно-кредитных условий.</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Снижение цен на газ из-за глобальной рецессии.</Typography.Text>
          </List.Item>
        </List>

        <Typography.Text view="primary-medium">
          Долгосрочная идея – возможность получить прибыль за счёт сделки с акциями на основе фундаментального анализа
          экспертов А-клуба. Долгосрочные идеи подходят для инвестиций на срок до 12 месяцев. Прогноз аналитиков может
          измениться, следите на обновлениями.
        </Typography.Text>

        <Typography.Title style={{ marginTop: '.5rem' }} tag="h4" view="xsmall" font="system" weight="medium">
          Григорий Морозов, начальник отдела инвестиционного анализа А-Клуб
        </Typography.Title>

        <Typography.Text view="primary-small" color="secondary">
          Информация на этой странице не является индивидуальной инвестиционной рекомендацией, и финансовые инструменты либо
          операции упомянутые в ней, могут не соответствовать Вашему инвестиционному профилю и инвестиционным целям
          (ожиданиям). Определение соответствия финансового инструмента либо операции Вашим интересам, инвестиционным целям,
          инвестиционному горизонту и уровню допустимого риска является вашей задачей.
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={goNext}>
          Перейти к покупке
        </ButtonMobile>
      </div>
    </>
  );
};
