import { Amount } from '@alfalab/core-components/amount';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { IconButton } from '@alfalab/core-components/icon-button';
import { SuperEllipse } from '@alfalab/core-components/icon-view/super-ellipse';
import { NumberInput } from '@alfalab/core-components/number-input';
import { Typography } from '@alfalab/core-components/typography';
import { ArrowRightMIcon } from '@alfalab/icons-glyph/ArrowRightMIcon';
import { InformationCircleLineSIcon } from '@alfalab/icons-glyph/InformationCircleLineSIcon';
import { useState } from 'react';
import novatekLogo from '../assets/novatek.png';
import rubIcon from '../assets/rub.png';
import { PRICES } from '../data';
import { bsSt } from './style.css';

type Props = {
  lots: number;
  setLots: (v: number) => void;
  submit: () => void;
  loading: boolean;
};

export const BuyScreen = ({ lots, setLots, loading, submit }: Props) => {
  const [showBs, setShowBs] = useState(false);

  return (
    <>
      <div className={bsSt.container}>
        <Typography.Title style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="medium">
          Покупка
        </Typography.Title>

        <div className={bsSt.imgRow}>
          <img src={novatekLogo} alt="Novatek" width={48} height={48} />
          <div style={{ width: '100%' }}>
            <div className={bsSt.imgRowText}>
              <Typography.Text view="primary-medium" defaultMargins={false} tag="p">
                Новатэк
              </Typography.Text>
              <Typography.Text view="primary-medium" defaultMargins={false} tag="p">
                {PRICES.ticker} ₽
              </Typography.Text>
            </div>
            <div className={bsSt.imgRowText}>
              <Typography.Text view="primary-small" color="secondary" defaultMargins={false} tag="p">
                NVTK
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary" defaultMargins={false} tag="p">
                За акцию
              </Typography.Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
            Счёт списания
          </Typography.Text>

          <div className={bsSt.banner}>
            <img src={rubIcon} width={48} height={48} alt="rubIcon" />

            <Typography.Text view="primary-small" weight="medium">
              Текущий счёт
            </Typography.Text>
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <NumberInput
            value={lots}
            onChange={(_, { value }) => setLots(value ?? 1)}
            step={1}
            min={1}
            max={999}
            block
            label="Лоты"
            labelView="outer"
            size={48}
            hint="1 лот = 1 акция"
            pattern="[0-9]*"
          />
        </div>
      </div>
      <div className={bsSt.bottomBtn}>
        <Typography.Text view="primary-small" color="secondary">
          Итого
        </Typography.Text>

        <div className={bsSt.bottomItems}>
          <div>
            <Typography.Title tag="h2" view="medium" font="system" weight="medium">
              <Amount
                minority={1}
                value={lots * PRICES.ticker * (1 + PRICES.comission)}
                bold="major"
                rightAddons="&nbsp;₽"
              />
            </Typography.Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Typography.Text view="primary-small" color="secondary">
                Комисия ≈{' '}
                <Amount minority={1} value={lots * PRICES.ticker * PRICES.comission} bold="none" rightAddons="&nbsp;₽" />
              </Typography.Text>
              <IconButton
                onClick={() => setShowBs(true)}
                size={'xxs'}
                icon={<InformationCircleLineSIcon color="#898991" />}
              />
            </div>
          </div>
          <div onClick={loading ? undefined : submit}>
            <SuperEllipse backgroundColor="#0F0F0F" size={48}>
              <ArrowRightMIcon color="#FFFFFF" />
            </SuperEllipse>
          </div>
        </div>
      </div>

      <BottomSheet
        title={
          <Typography.Title tag="h2" view="small" font="system" weight="semibold">
            Покупка акций и комиссия
          </Typography.Title>
        }
        open={showBs}
        onClose={() => setShowBs(false)}
        titleAlign="left"
        stickyHeader
        hasCloser
        contentClassName={bsSt.btmContent}
      >
        <div className={bsSt.container}>
          <Typography.Title style={{ marginTop: '1rem' }} tag="h5" view="xsmall" font="system" weight="medium">
            Покупка
          </Typography.Title>
          <Typography.Text view="primary-medium">
            Акции на бирже торгуются в лотах. Лот — это комплект ценных бумаг, который можно купить за раз. Рядом с полем для
            ввода суммы есть подсказка о том, сколько акций в одном лоте.
          </Typography.Text>
          <Typography.Text view="primary-medium">
            Вы можете оставить заявку на покупку акций. Для этого выберите количество лотов или сумму, которую хотите
            потратить — брокер расчитает доступное количество лотов и купит ценную бумагу по рыночной цене. Это самый быстрый
            способ совершить сделку.
          </Typography.Text>

          <Typography.Title style={{ marginTop: '1rem' }} tag="h5" view="xsmall" font="system" weight="medium">
            Цена
          </Typography.Title>

          <Typography.Text view="primary-medium">
            Цена облигации зависит от спроса и предложения. В момент покупки она может измениться в пределах 5%
          </Typography.Text>
          <Typography.Text view="primary-medium">
            Вы покупаете по рыночной цене. Выберите количество лотов или сумму, которую хотите потратить — мы рассчитаем
            доступное количество лотов и купим ценную бумагу по рыночной цене. Это удобно, если сделку нужно совершить
            быстро.
          </Typography.Text>

          <Typography.Title style={{ marginTop: '1rem' }} tag="h5" view="xsmall" font="system" weight="medium">
            Комиссия
          </Typography.Title>

          <Typography.Text view="primary-medium">
            Комиссия зависит от вашего тарифа. Подробнее узнать о тарифах вы можете в разделе Инвестиции. Проверить или
            сменить ваш тариф можно в приложении Альфа-Инвестиции: Ещё → Личный кабинет → Тарифы
          </Typography.Text>
        </div>
      </BottomSheet>
    </>
  );
};
