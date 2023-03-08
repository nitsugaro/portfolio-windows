import s from "./ImageType.module.css";

export default function ImageType({ src, name }) {
  return (
    <div className={s["image-container"]}>
      <img src={src} alt={name} className={s.image} />
    </div>
  );
}
