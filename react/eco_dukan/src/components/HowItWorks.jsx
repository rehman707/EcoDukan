// components/HowItWorks.js
import Image from 'next/image';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.howItWorksContainer}>
      <h2 className={styles.heading}>How it works</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <Image src="/schedule.png" alt="Schedule a pickup" width={150} height={150} />
          <h3>Schedule a pickup</h3>
        </div>
        <div className={styles.step}>
          <Image src="/pickup.png" alt="Pickup at your address" width={150} height={150} />
          <h3>Pickup at your address</h3>
        </div>
        <div className={styles.step}>
          <Image src="/payment.png" alt="Receive payment" width={150} height={150} />
          <h3>Receive payment</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
