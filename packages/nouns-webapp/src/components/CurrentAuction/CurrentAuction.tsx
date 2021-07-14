import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useAuction } from '../../wrappers/nounsAuction';
import config from '../../config';
import StandaloneNoun from '../StandaloneNoun';
import AuctionActivity from './AuctionActivity';

const CurrentAuction = () => {
  const auction = useAuction(config.auctionProxyAddress);

  return (
    <Row noGutters={true}>
      <Col lg={{ span: 5, offset: 1 }}>
        {auction && <StandaloneNoun nounId={auction && auction.nounId} />}
      </Col>
      <Col lg={{ span: 4, offset: 1 }}>
        <AuctionActivity auction={auction && auction} />
      </Col>
    </Row>
  );
};

export default CurrentAuction;
