import React from 'react'
import { Link } from 'gatsby'
import { Container, Image, Grid, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Aboutaccordion from '../components/Aboutbody/Aboutaccordion'
import Aboutaccordion2 from '../components/Aboutbody/Aboutaccordion2'
import Aboutaccordion3 from '../components/Aboutbody/Aboutaccordion3'
import DynamicAccordion from '../components/Aboutbody/DynamicAccordion'
import gif from '../images/gif/giftest.gif'
import gifii from '../images/gif/giftestii.gif'
import psychadeliccat from '../images/gif/psychadeliccat.gif'

const title1 = 'Favorite Cities'
const title2 = 'Some Subject'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    {/* <Aboutaccordion2 />
    <Aboutaccordion3 /> */}
    <Link to="/about-this-site/">About This Page...</Link>
    <Grid stackable padded={false}>
      <Grid.Row centered columns={3} verticalAlign={'middle'}>
        <Grid.Column width={6}>
          <Container>
            <Aboutaccordion />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          {/* <Container> */}
          <Image
            src={psychadeliccat}
            style={{ width: 250, margin: '0 auto' }}
          />
          {/* </Container> */}
        </Grid.Column>
        <Grid.Column width={6}>
          <Container>
            <DynamicAccordion
              title="Favorite Cities"
              content={
                <ol>
                  <li>New York City</li>
                  <li>Seoul</li>
                </ol>
              }
            />
            <DynamicAccordion
              title="Favorite Coding Schools"
              content={
                <ol>
                  <li>Code Immersives</li>
                </ol>
              }
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider
      style={{
        backgroundColor: '#00008b',
        width: '90%',
        margin: '5% auto',
        height: 10,
      }}
      section
    />
    {/* <Container
      fluid
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Image src={gifii} style={{ width: 250 }} />
      <Image src={gifii} style={{ width: 250 }} />
      <Image src={gifii} style={{ width: 250 }} />
      <Image src={gifii} style={{ width: 250 }} />
    </Container> */}
    {/* <Container
      fluid
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Aboutaccordion />
      <Container>
        <Image src={gif} style={{ width: 250, margin: '0 auto' }} />
      </Container>
      <Container>
        <DynamicAccordion
          title="Favorite Cities"
          content={
            <ol>
              <li>New York City</li>
              <li>Seoul</li>
            </ol>
          }
        />
        <DynamicAccordion
          title="Favorite Coding Schools"
          content={
            <ol>
              <li>Code Immersives</li>
            </ol>
          }
        />
      </Container>
    </Container> */}
  </Layout>
)

export default AboutPage
