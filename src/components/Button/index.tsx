import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  onClick?: () => void
  to?: string
  children: string
  variant?: 'primary' | 'secundary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  onClick,
  to,
  children,
  variant,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
