import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, ItemGroup, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

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
      parcels: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getFormError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }
  return (
    <div className="container">
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
              ></input>
              <small>{getFormError('fullName', form.errors.fullName)}</small>
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
              ></input>
              <small>{getFormError('email', form.errors.email)}</small>
            </ItemGroup>
            <ItemGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              ></input>
              <small>{getFormError('cpf', form.errors.cpf)}</small>
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
              ></input>
              <small>
                {getFormError('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </ItemGroup>
            <ItemGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              ></input>
              <small>
                {getFormError('confirmDeliveryEmail', form.errors.fullName)}
              </small>
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
            >
              <img src={boleto} alt="" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
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
                      ></input>
                      <small>
                        {getFormError('cardOwner', form.errors.cardOwner)}
                      </small>
                    </ItemGroup>
                    <ItemGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        type="text"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError('cpfCardOwner', form.errors.cpfCardOwner)}
                      </small>
                    </ItemGroup>
                  </Row>
                  <Row marginTop="24px">
                    <ItemGroup>
                      <label htmlFor="cardDisplayOwner">Nome no cartão</label>
                      <input
                        id="cardDisplayOwner"
                        type="text"
                        name="cardDisplayOwner"
                        value={form.values.cardDisplayOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError(
                          'cardDisplayOwner',
                          form.errors.cardDisplayOwner
                        )}
                      </small>
                    </ItemGroup>
                    <ItemGroup>
                      <label htmlFor="cardNumber">Número no cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError('cardNumber', form.errors.cardNumber)}
                      </small>
                    </ItemGroup>
                    <ItemGroup maxWidth="123px">
                      <label htmlFor="cardMonth">Mês de vencimento</label>
                      <input
                        id="cardMonth"
                        type="text"
                        name="cardMonth"
                        value={form.values.cardMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError('cardMonth', form.errors.cardMonth)}
                      </small>
                    </ItemGroup>
                    <ItemGroup maxWidth="123px">
                      <label htmlFor="cardYear">Ano de vencimento</label>
                      <input
                        id="cardYear"
                        type="text"
                        name="cardYear"
                        value={form.values.cardYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError('cardYear', form.errors.cardYear)}
                      </small>
                    </ItemGroup>
                    <ItemGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      ></input>
                      <small>
                        {getFormError('cardCode', form.errors.cardCode)}
                      </small>
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
                      >
                        <small>
                          {getFormError('parcels', form.errors.parcels)}
                        </small>
                        <option>1x de R$200</option>
                        <option>1x de R$200</option>
                        <option>1x de R$200</option>
                      </select>
                    </ItemGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  dolore consequuntur quam est expedita eos, alias nostrum
                  magnam ipsa hic nesciunt beatae molestias, omnis minus
                  accusantium vero delectus labore excepturi.
                </p>
              )}
            </div>
          </>
        </>
      </Card>

      <Button
        variant="primary"
        type="button"
        title="Clique aqui para finalizar a compra"
      >
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
