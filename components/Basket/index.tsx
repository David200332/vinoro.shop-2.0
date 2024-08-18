import React, { useMemo } from 'react';
import styles from './Basket.module.scss';
import BasketProduct from '@/components/BasketProduct';
import Button from '../Button';
import Link from 'next/link';
import TotalPrice from '../TotalPrice';
import { RootState } from '@/store/index';
import { useSelector } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';

interface BasketProps {
    closeBasketHandler: () => void;
}

const Basket: React.FC<BasketProps> = ({ closeBasketHandler }) => {

    const { basketProducts, totalPrice } = useSelector((state: RootState) => state.basketReducer);

    const minPrice = Number(process.env.NEXT_PUBLIC_MIN_ORDER_PRICE) || 800

    const { t } = useTranslation();

    const basketProductsValues = useMemo(() => Object.values(basketProducts), [basketProducts]);

    const closeHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        closeBasketHandler();
    }

    const isOrderPrevented = Boolean(totalPrice < minPrice);

    return (
        <div className={styles.basket}>
            <div className={styles.basketTop}>
                <h3 className={styles.basektTitle}>{t(`common:shoppingCart`)}</h3>
                <button className={styles.basketClose} onClick={closeHandler}></button>
            </div>
            <ul className={styles.basketList}>
                {!basketProductsValues.length ?
                    <p>{t(`common:noProductsInBasket`)}</p> :
                    basketProductsValues.map(item => (
                        <BasketProduct product={item} key={item.id} />
                    ))}
            </ul>
            {!!basketProductsValues.length && (
                 <div className={styles.confirmOrder}>
                    <TotalPrice totalPrice={totalPrice} />
                    <div style={{ display: "flex", justifyItems: "center", flexDirection: "column" }}>
                        <div style={{ marginBottom: "12px"}}>
                            <Link href="/order/" passHref replace>
                                <a className={styles.buttonWrapper} style={{ textDecoration: "none" }}>
                                    <Button label={t(`common:next`)} styles={{ width: '100%' }} click={() => null} type={isOrderPrevented ? "disabled" : "default"} />
                                </a>
                            </Link>
                        </div>
                        <p style={{ visibility: isOrderPrevented ? "visible" : "hidden" }} className={styles.minPriceText}>{t(`common:minPriceOrder`)}{minPrice} ₴</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Basket;


