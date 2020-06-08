import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0.5rem 1rem;
  align-items: center;
`

export const Input = styled.input`
  display: block;
  background: inherit;
  color: #ffffff;
  border: none;
  padding: 0.3rem 0.1rem;
  font-size: 1.18rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;
`

export const Message = styled.span`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0.5rem 0.3rem;
  font-size:0.85rem;
`