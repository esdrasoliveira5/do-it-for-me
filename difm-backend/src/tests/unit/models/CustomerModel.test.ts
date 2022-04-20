import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

const costumer = new CostumerModel();

chai.use(chaiHttp);
const { expect } = chai;

describe('3 - Test CostumerModel', () => {
  describe('3.1 - method create', () => {
    describe('if success', () => {
      const payload = {
        name: 'Roberto',
        lastName: 'Oliveira',
        email: 'roberto@email.com',
        contact: '11987654321',
        password: '123456789',
        type: 'customer',
        hires: [],
        address: {
          street: 'avenida',
          number: '100A',
          district: 'Bairro',
          zipcode: '45687-899',
          city: 'cidade',
          state: 'estado'
        }
      }
      before(async () => {
        sinon
          .stub(costumer.model, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the user created in the db', async () => {
        const response = await costumer.create({
          name: 'Roberto',
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: '123456789',
          type: 'customer',
          hires: [],
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          },
        })
        expect(response).to.be.deep.equal(payload);
      });
    });
  });
});