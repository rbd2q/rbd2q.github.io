import { useMemo } from "react";

import { Button } from "../../../shared/button/ui";
import styles from './offer-item.module.css'

export const OfferItem = ({ title, description, imageUrl }) => {
  const backgroundStyle = useMemo(() => {
    if (imageUrl) {
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }

    return {
      backgroundImage: `url(images/space-1.webp)`,
    };
  }, [imageUrl]);

  const handleLearnMore = () => {
    //
  }

  return (
    <div className={styles.offerItem} style={backgroundStyle}>
      <div className={styles.offerItemOverlay}/>
      <div className={styles.offerItemInfo}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDescription}>{description}</p>
        <Button text="Learn more" variant="secondary" onClick={handleLearnMore}/>
      </div>
    </div>
  )
}
