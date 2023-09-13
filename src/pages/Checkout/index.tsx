import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, ItemGroup, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { formatPrice, getTotalPrice } from '../../utils'

type Installments = {
  quantity: number
  amount: number
  formattedPrice: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installments[]>([])
  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardNumber: '',
      cardDisplayOwner: '',
      cardMonth: '',
      cardYear: '',
      cardCode: '',
      parcels: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'o campo precisa ter 14 caracteres')
        .max(15, 'o campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails são diferente')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      parcels: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          name: values.fullName,
          email: values.email
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.parcels,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayOwner,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const inputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculeInstallments = () => {
      const installmentsArray: Installments[] = []

      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedPrice: formatPrice(totalPrice / i)
        })
      }

      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculeInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito obrigado!">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            inventore ipsum reiciendis assumenda laboriosam incidunt eos
            voluptatibus reprehenderit sunt provident nobis facilis, labore,
            quas laborum, consequatur fuga quis quidem voluptate?
            <br />
            Pedido nº: {data.orderId}
            <br />
            Forma de pagamento:{' '}
            {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
          </p>
        </Card>
      ) : (
        <form>
          <Card title="Dados da cobrança">
            <>
              <Row>
                <ItemGroup>
                  <label htmlFor="fullName">Nome</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('fullName') ? 'error' : ''}
                  ></input>
                </ItemGroup>
                <ItemGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('email') ? 'error' : ''}
                  ></input>
                </ItemGroup>
                <ItemGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('cpf') ? 'error' : ''}
                    mask="999.999.999-00"
                  ></InputMask>
                </ItemGroup>
              </Row>
              <h3 style={{ marginTop: '24px' }}>
                Dados de entrega - conteúdo digital
              </h3>
              <Row>
                <ItemGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('deliveryEmail') ? 'error' : ''}
                  ></input>
                </ItemGroup>
                <ItemGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      inputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  ></input>
                </ItemGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <>
                <TabButton
                  isActive={!payWithCard}
                  onClick={() => setPayWithCard(false)}
                  type="button"
                >
                  <img src={boleto} alt="" />
                  Boleto bancário
                </TabButton>
                <TabButton
                  isActive={payWithCard}
                  onClick={() => setPayWithCard(true)}
                  type="button"
                >
                  <img src={cartao} alt="" />
                  Cartão de crédito
                </TabButton>
                <div style={{ marginTop: '24px' }}>
                  {payWithCard ? (
                    <>
                      <Row>
                        <ItemGroup>
                          <label htmlFor="cardOwner">
                            Nome do titular do cartão
                          </label>
                          <input
                            id="cardOwner"
                            type="text"
                            name="cardOwner"
                            value={form.values.cardOwner}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              inputHasError('cardOwner') ? 'error' : ''
                            }
                          ></input>
                        </ItemGroup>
                        <ItemGroup>
                          <label htmlFor="cpfCardOwner">
                            CPF do titular do cartão
                          </label>
                          <InputMask
                            id="cpfCardOwner"
                            type="text"
                            name="cpfCardOwner"
                            value={form.values.cpfCardOwner}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              inputHasError('cpfCardOwner') ? 'error' : ''
                            }
                            mask="999.999.999-99"
                          />
                        </ItemGroup>
                      </Row>
                      <Row marginTop="24px">
                        <ItemGroup>
                          <label htmlFor="cardDisplayOwner">
                            Nome no cartão
                          </label>
                          <input
                            id="cardDisplayOwner"
                            type="text"
                            name="cardDisplayOwner"
                            value={form.values.cardDisplayOwner}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              inputHasError('cardDisplayOwner') ? 'error' : ''
                            }
                          />
                        </ItemGroup>
                        <ItemGroup>
                          <label htmlFor="cardNumber">Número no cartão</label>
                          <InputMask
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              inputHasError('cardNumber') ? 'error' : ''
                            }
                            mask="9999 9999 9999 9999"
                          />
                        </ItemGroup>
                        <ItemGroup maxWidth="123px">
                          <label htmlFor="cardMonth">Mês de vencimento</label>
                          <InputMask
                            id="cardMonth"
                            type="text"
                            name="cardMonth"
                            value={form.values.cardMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              inputHasError('cardMonth') ? 'error' : ''
                            }
                            mask="99"
                          />
                        </ItemGroup>
                        <ItemGroup maxWidth="123px">
                          <label htmlFor="cardYear">Ano de vencimento</label>
                          <InputMask
                            id="cardYear"
                            type="text"
                            name="cardYear"
                            value={form.values.cardYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={inputHasError('cardYear') ? 'error' : ''}
                            mask="99"
                          />
                        </ItemGroup>
                        <ItemGroup maxWidth="48px">
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            id="cardCode"
                            type="text"
                            name="cardCode"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={inputHasError('cardCode') ? 'error' : ''}
                            mask="999"
                          />
                        </ItemGroup>
                      </Row>
                      <Row marginTop="24px">
                        <ItemGroup maxWidth="150px">
                          <label htmlFor="parcels">Parcelamento</label>
                          <select
                            id="parcels"
                            name="parcels"
                            value={form.values.parcels}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={inputHasError('parcels') ? 'error' : ''}
                          >
                            {installments.map((installment) => (
                              <option
                                value={installment.quantity}
                                key={installment.quantity}
                              >
                                {installment.quantity}x de{' '}
                                {installment.formattedPrice}
                              </option>
                            ))}
                          </select>
                        </ItemGroup>
                      </Row>
                    </>
                  ) : (
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab dolore consequuntur quam est expedita eos, alias
                      nostrum magnam ipsa hic nesciunt beatae molestias, omnis
                      minus accusantium vero delectus labore excepturi.
                    </p>
                  )}
                </div>
              </>
            </>
          </Card>

          <Button
            variant="primary"
            type="submit"
            title="Clique aqui para finalizar a compra"
            onClick={form.handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
