import styles from './ActionButton.module.css';

// Интерфейс для пропсов кнопки с опциональным isRaising
interface ActionButtonProps {
  image: string;
  alt: string;
  isRaising?: boolean;
  onClick: () => void;
}

export const ActionButton = ({image, alt, isRaising, onClick}: ActionButtonProps) => {
  return (
    <button 
      className={isRaising ? styles.israise : ''}
      onClick={onClick}>
      <img className="images" src={image} alt={alt}/>
    </button>
  )
}
