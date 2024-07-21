import css from './Button.module.css';

const Button = ({ type, children, variant }) => {
// const classNames = ['button', variant];

  return (
      <button
      type={type} className={css[variant]}>{children}</button>
  )
}

export default Button