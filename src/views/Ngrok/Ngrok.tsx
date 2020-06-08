import React from 'react'
import { Props } from './Ngrok.type'
import { Container, Footer } from './Ngrok.styled'
import NgrokForm from 'src/components/NgrokForm'

const Ngrok : React.FC<Props> = ({compiler, framework}) => {
  return (
    <Container>
      <h1>Droneface</h1>
      <NgrokForm compiler={compiler} framework={framework} />
      <Footer>
        <span>Powered by {compiler} and {framework}</span>
      </Footer>
    </Container>
  )
}

export default Ngrok;